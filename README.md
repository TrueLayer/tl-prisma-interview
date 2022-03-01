# Challenge {#Challenge}

A Design System is the single source of truth which groups all the elements that allow teams to design, realise and develop a product.

In Prisma, our Design System, we want to define multiple themes and style all of our components according to them. These themes are defined to match our targets’ expectation (e.g `developer` theme for developer experience, `end-user` for user experience, etc)

These styled components are ready-to-use components which means they are not subject to modifications. They have been created in close relationship between Prisma and the other teams based on their targets’ need so users do not need to apply any style on top of it. By doing it this way, we are guaranteed that our users do not diverge from our brand and they can build products quicker.

Finally, some products have some exceptions and these styled components need to take them into account. That’s why, we have defined for some components a list of limited customisations in order to override what is needed.

The challenge we are facing in TrueLayer with Prisma is to respect the development principles (SOLID, DRY, KISS, etc) and be transparent in the planning of other team. For example, if a client requests a new feature and the corresponding team says they need 2 days, as a team Prisma we do not want to increase that initial cost. So we need to build a Design System where any request can be done within half a day. (the more complex will be done by anticipation of teams’ roadmap)

We would like you to face simplified version of this challenge. The idea is to create one component, the `Button`, and style it respecting two themes, `theme 1` and `theme 2`, and their customisations.

Finally, you will have to create a consumer of this styled component, the `client`, to show use cases and a playground.

<br />

❗❗❗ Take time to read the whole README especially the `Expectations` section below as it explains what we expect from you

<br /><br />

# Specification

## Themes {#Themes}

The project will have to contain 2 themes in order to style the Button component accordingly

| Category   | Sub category  | Theme 1     | Value      | Theme 1      | Value    |
| ---------- | ------------- | ----------  |----------- |-----------   | -------- |
| Colour     |               | azure       | #058ED8    | sun          | #F7AB1B  |
|            |               | cloud burst | #093554    | kashmir blue | #44689A  |
|            |               | white       | #FFFFFF    | white        | #FFFFFF  |
| Spacing    |               | sm          | 12px       | sm           | 8px      |
|            |               | md          | 16px       | md           | 16px     |
|            |               | lg          | 24px       | lg           | 20px     |
| Typography | Font family   | default     | Montserrat | default      | Pacifico |
|            | Font size     | xs          | 12px       | xs           | 12px     |
|            |               | md          | 14px       | md           | 14px     |
|            |               | lg          | 16px       | lg           | 16px     |
| Visuals    | Border radius | normal      | 0px        | normal       | 5px      |
|            | Opacity       | normal      | 1          | normal       | 1        |
|            |               | disabled    | 0.3        | disabled     | 0.3      |

<br /><br />

# Icon

## Property {#Properties}

The icon will use the free version of *fontawesome* and will have the following properties

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| icon     | Fontawesome icon to display (type IconDefinition) |

<br />

## Styles {#Styles}
The icon component will have no style at is a simple wrapper around fontawesome icon

<br />

## States {#States}
The icon component will have no state at is a no clickable icon

<br /><br />

# Button

## Property {#Properties}

The button will have the following properties

| Name     | Description                        |
| -------- | ---------------------------------- |
| label    | Label of the button                |
| icon     | Icon to display on the left side   |
| onClick  | Handler when the button is clicked |

ℹ️ For the icon property, use the created icon component

For the `Theme 1` only, the button will have the extra following properties

| Name     | Description                                             |
| -------- | ------------------------------------------------------- |
| outbound | True if the outbound icon is displayed, false otherwise |

The outbound icon used will be the [angle right](https://fontawesome.com/v5/icons/angle-right?s=solid)

<br />

## Styles {#Styles}

The button will have a global style for each theme agnostic from the states

Add the following tag in your index.html

```html
<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
<link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet'>
```

| Theme 1                 | Theme 2                 |
| ------------------------| ----------------------- |
| `fontFamily`: default   | `fontFamily`: default   |
| `fontSize`: md          | `fontSize`: md          |
| `padding`: sm md        | `padding`: sm md        |
| `cursor`: pointer       | `cursor`: pointer       |
| `border-radius`: normal | `border-radius`: normal |

When a button has an icon, apply the following style on the label
| Theme 1                    | Theme 2                    |
| ---------------------------| -------------------------- |
| `fontStyle`: italic        | `fontWeight`: bold         |
| `textTransform`: uppercase | `textTransform`: uppercase |

The gap between the icon and the label has to be `12px`

For the `Theme 1` only, when a button has an outbound icon, apply the following style on the label
| Theme 1                    |
| ---------------------------|
| `fontWeight`: bold         |
| `textTransform`: uppercase |

The gap between the label and the outbound icon has to be `14px`

For the `Theme 1` only, when a button has an icon and outbound icon, apply the following style on the label
| Theme 1                    |
| ---------------------------|
| `fontStyle`: italic        |
| `fontWeight`: bold         |
| `textTransform`: uppercase |

❗ Do not use any css selector as we want you to propose an alternative. If you have to use a css selector please justify it but it is not what we really want to see but happy to be convinced

<br />

## States {#States}

The button will have 4 states with a specific style for each theme

[enabled_theme-one]: https://paper-attachments.dropbox.com/s_9B88CA148BFA7516A81DCB4A636D5A2B0DC716BA2BE32DF25B4D3FD6A4A318BB_1646132752847_image.png
[enabled_theme-two]: https://paper-attachments.dropbox.com/s_9B88CA148BFA7516A81DCB4A636D5A2B0DC716BA2BE32DF25B4D3FD6A4A318BB_1646133198476_image.png
[hover_theme-one]: https://paper-attachments.dropbox.com/s_9B88CA148BFA7516A81DCB4A636D5A2B0DC716BA2BE32DF25B4D3FD6A4A318BB_1646132770023_image.png
[hover_theme-two]: https://paper-attachments.dropbox.com/s_9B88CA148BFA7516A81DCB4A636D5A2B0DC716BA2BE32DF25B4D3FD6A4A318BB_1646133213050_image.png
[focus_theme-one]: https://paper-attachments.dropbox.com/s_9B88CA148BFA7516A81DCB4A636D5A2B0DC716BA2BE32DF25B4D3FD6A4A318BB_1646132788222_image.png
[focus_theme-two]: https://paper-attachments.dropbox.com/s_9B88CA148BFA7516A81DCB4A636D5A2B0DC716BA2BE32DF25B4D3FD6A4A318BB_1646133230740_image.png
[disabled_theme-one]: https://paper-attachments.dropbox.com/s_9B88CA148BFA7516A81DCB4A636D5A2B0DC716BA2BE32DF25B4D3FD6A4A318BB_1646132799637_image.png
[disabled_theme-two]: https://paper-attachments.dropbox.com/s_9B88CA148BFA7516A81DCB4A636D5A2B0DC716BA2BE32DF25B4D3FD6A4A318BB_1646133251131_image.png

|          |     <div style="width:200px">Theme 1</div>                                   |                    |  <div style="width:200px">Theme 2</div>                                                                                                   |                    |
| -------- | ------------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------- | ------------------ |
| Enabled  | `color`: white<br>`bgColor`: azure<br>`border`: none<br>`opacity`: normal                        | ![enabled_theme-one]  | `color`: sun<br>`bgColor`: white<br>`border`: 1px solid sun<br>`opacity`: normal                        | ![enabled_theme-two]  |
| Hover    | `color`: white<br>`bgColor`: cloud burst<br>`border`: none<br>`opacity`: normal                  | ![hover_theme-one]    | `color`: white<br>`bgColor`: sun<br>`border`: 1px solid sun<br>`opacity`: normal                        | ![hover_theme-two]    |
| Focus    | `color`: white<br>`bgColor`: cloud burst<br>`border`: none<br>`opacity`: normal                  | ![focus_theme-one]    | `color`: white<br>`bgColor`: sun<br>`border`: 1px solid sun<br>`opacity`: normal                        | ![focus_theme-two]    |
| Disabled | `color`: white<br>`bgColor`: azure<br>`border`: none<br>`opacity`: disabled<br>`cursor`: default | ![disabled_theme-one] | `color`: sun<br>`bgColor`: white<br>`border`: 1px solid sun<br>`opacity`: disabled<br>`cursor`: default | ![disabled_theme-two] |

❗ For the disabled state, add the style to prevent the user to trigger any actions

<br />

## Customisations

The button will have some customisations specific to each theme that will override the default value of the theme

|              | Description                                                                       | Theme 1 | Description                                                                                                                                                                                               | Theme 2 |
| ------------ | --------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| color        | It will replace the `color` css property for the state `enabled` and `disabled`   | ✅       | It will replace the `color` and `border-color` css properties for the state `enabled` and `disabled`<br>It will replace the `bgColor` and `border-color` css properties for the state `hover` and `focus` | ✅       |
| bgColor      | It will replace the `bgColor` css property for the state `enabled` and `disabled` | ✅       |                                                                                                                                                                                                           |         |
| hoverBgColor | It will replace the `bgColor` css property for the state `hover`                  | ✅       |                                                                                                                                                                                                           |         |

<br /><br />

# Expectations

A Design System is a tool that developers use to build quickly more complex projects by respecting the TrueLayer brand. So, it can not have a negative impact for them such as:

- Releasing buggy components - we want to be confident in the quality of our components
- Slow release frequency - we want to release as often as possible for small things and follow a roadmap for the rest.
- Slow release time - we want the time between the end of the development and the projects’ dependencies upgrade as slow as possible
- etc

To avoid that, TrueLayer is building its Design System by producing **CLEAN** and **MAINTAINABLE** code.

> ❗ We want you to have the same high level of quality when doing your test project. **You are going to be EVALUATE on that**.
>
> For example, ask yourself
>
> - Can I add a new feature on the Button component?
> - Can I add a new variant of the Button components for a specific theme?
> - Can I add new customisation on the Button component for a specific theme?
> - Can I understand my solution by a simple look (no concentration needed just a smooth read)
> - Can I know in a few seconds where I have to go to fix a bug by analysing the keywords of an issue coming from a user?
> - Can my users have a clear understanding of the available components?
> - etc....
> 
> Of course, finishing the test is important as it shows us you can deliver a solution that conforms to the initial specifications.
> But we are going to focus more on your aptitude to produce code in line with the quality expected by a Design System.
>
> ❗ Do not forget that a good Design System is a system that everyone can have a good experience with, from the developers to the users going through no technical people such as copyrighter.
> So keep everyone in mind during your technical choices.

> ℹ️ The scaffold has been created to help you but you are free to update anything you want to show us your ability to produce clean and maintainable code.


<br /><br />

# Setup

To run the project, install it locally using yarn

```
yarn install
yarn build
yarn start
```

❗ You have to run `yarn build` first before running `yarn start`. You're more than welcome to modify the script if you feel it can be improved

# Appendinx

- [**Client**](./packages/prisma-client/README.md#Overview)
- [**Components**](./packages/prisma-components/README.md#Overview)
- [**theme-one**](./packages/prisma-theme-one/README.md#Overview)
- [**theme-two**](./packages/prisma-theme-two/README.md#Overview)
