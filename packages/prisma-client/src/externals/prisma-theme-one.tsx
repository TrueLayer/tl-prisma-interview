import { IconDefinition } from './fontawesome'

/**
 * TODO: Remove the TH1Button and replace it by the one coming from the library 'prisma-theme-one'
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
 * TODO: Remove the TH1Theme and replace it by the one coming from the library 'prisma-theme-one'
 */
export const TH1Theme = {}

/**
 * TODO: Set the customisations matching the enabled state of the TH1Button
 * See the Customisations/States section in the taask description
 */
export const TH1Customisations = {}