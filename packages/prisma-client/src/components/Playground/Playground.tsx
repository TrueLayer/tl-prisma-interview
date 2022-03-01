import * as React from 'react'
import styled from 'styled-components'
import { Paper, Grid } from '../../externals/material-ui'
import { StatesContext } from '../../hooks/useStates'
import { PlaygroundCustomisations, PlaygroundStates } from "./components"

const Preview = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  border-left: 1px solid #EFF3F6;
  padding: 16px;
  box-sizing: border-box;
`

interface PlaygroundProps {
  customisations?: any
  defaultCustomisations: any
  children?: React.ReactNode
}

export const Playground = (props: PlaygroundProps) => {
    const { children, defaultCustomisations, customisations: customisationsProps = [] } = props

    const [state, setState] = React.useState('enabled')
    const [customisations, setCustomisations] = React.useState({})

    const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
      setState(value)
    }

    const handleCustomisationChange = (id: string, value: string) => {
      setCustomisations({ ...customisations, [id]: value })
    }

    const renderChild = () => {
      return React.Children.toArray(children).map((child: any, index: number) => {
        const customisedChild = React.cloneElement(child, {
          className: `sim-${state}`,
          ...customisations,
        })
        return (
        <Grid key={`item-${index + 1}`} item xs={12} sm={6} alignSelf='stretch'>
            {customisedChild}
        </Grid>
        )
      })
    }

    const renderPreview = () => {
      return (
        <Preview>
          <Grid container spacing={5} alignItems='stretch' alignContent='stretch'>
              {renderChild()}
          </Grid>
        </Preview>
      )
    }

    return (
      <StatesContext.Provider value={{ state, playground: true }}>
        <Paper sx={{ padding: '16px' }}>
          <Grid container>
            <Grid item sm={3}>
              <PlaygroundStates value={state}  onChange={handleStateChange} />
            </Grid>
            <Grid item sm={3}>
              <PlaygroundCustomisations 
                value={{ ...defaultCustomisations, ...customisations }}
                customisations={customisationsProps} 
                onChange={handleCustomisationChange} 
              />
            </Grid>
            <Grid item sm={6}>{renderPreview()}</Grid>
          </Grid>
        </Paper>
      </StatesContext.Provider>
    )
}