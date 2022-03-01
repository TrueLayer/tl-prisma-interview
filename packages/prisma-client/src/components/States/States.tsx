import React from 'react'
import styled from 'styled-components'
import { StatesContext } from '../../externals/prisma-components'
import { Grid } from "../../externals/material-ui"
import { State } from "../State"

const GridItem = styled(Grid)`
    & > * {
        width: 100%
    }
`

interface StatesProps {
    states: any
    children: React.ReactNode
}

export const States = (props: StatesProps) => {
    const { states, children } = props

    const renderChild = () => {
        return React.Children.toArray(children).map((child, index) => (
            <GridItem key={`item-${index + 1}`} item xs={12} sm={6} alignSelf='stretch'>
                {child}
            </GridItem>
        ))
    }

    const renderState = (key: string) => {
        const state = states[key]
        return (
            <Grid key={key} item xs={12} md={5}>
                <StatesContext.Provider value={{ state: key }}>
                    <State 
                        title={state.title}
                        description={state.description}
                    >
                        <Grid container spacing={5} alignItems='stretch' alignContent='stretch'>
                            {renderChild()}
                        </Grid>
                    </State>
                </StatesContext.Provider>
            </Grid>
        )
    }

    return (
        <Grid container spacing={5} alignItems='stretch' alignContent='stretch'>
            {Object.keys(states).map(renderState)}
        </Grid>
    )
}