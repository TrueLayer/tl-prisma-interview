import styled from 'styled-components'
import { Card as MUCard, CardContent, Typography } from "../../externals/material-ui"

const Card = styled(MUCard)`
  height: 100%;
`

const CardPreview = styled.div`
  display: flex;
  align-items: center;
  justify-items: stretch;
  justify-content: stretch;
  min-height: 100px;
  border-bottom: 1px solid #EFF3F6;
  padding: 10px;
`

interface StateProps {
    title: string
    description: string
    children: React.ReactNode
}

export const State = (props: StateProps) => {
    const { children, title, description } = props
    return (
        <Card>
          <CardPreview>{children}</CardPreview>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Card>
    )
}