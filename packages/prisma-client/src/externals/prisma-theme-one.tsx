import { IconDefinition } from './fontawesome'

/**
 * TODO: Replace the TH1Button by the one coming from the library 'prisma-theme-one'
 */
interface TH1ButtonProps {
    label: string
    icon?: IconDefinition
    outbound?: boolean
}

export const TH1Button = (props: TH1ButtonProps) => {
    return (
        <div>Plug your button here</div>
    )
}

/**
 * TODO: Replace the TH1Theme by the one coming from the library 'prisma-theme-one'
 */
export const TH1Theme = {}

/**
 * TODO: Set the customisations matching the enabled state of the TH1Button
 * See the Customisations/States section in the taask description
 */
export const TH1Customisations = {}