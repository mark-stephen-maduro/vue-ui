# Button

**Use Infopiphany's custom `IpyButton` component for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.**

## Overview

Infopiphany's `<IpyButton>` component generates either a `<IpyButton>` element, `<a>` element, or `<router-link>` component with the styling of a button. Infopiphany's `<IpyButton>` extends bootstrap's `<b-btn>`, you can refer to their official docs. [Bootstrap Vue](https://bootstrap-vue.org/docs/components/button)

@[example](buttons)

## Loading state

In need of a button that can display a spinner? Use the `<IpyButton>` and pass a prop `busy` to show a loading state of a button and at the same time it will disable the button.

@[example](button-loading)

## Outline color variants

In need of a button, but not the hefty background colors they bring? Use the outline-* variants to remove all background images and colors on any `<b-button>`

`outline-primary`, `outline-secondary`, `outline-success`, `outline-danger`, `outline-warning`, `outline-info`, `outline-light` and `outline-dark`.

@[example](button-outline)

## Squared style

Prefer buttons with a more square corner style? Just set the prop squared to true.

@[example](button-square)

## Accessibility

When the href prop is set to '#', `<IpyButton>` will render a link (`<a>`) element with attribute role="button" set and appropriate keydown listeners (`Enter` and `Space`) so that the link acts like a native HTML `<button>` for screen reader and keyboard-only users. When disabled, the aria-disabled="true" attribute will be set on the `<a>` element.

When the href is set to any other value (or the to prop is used), role="button" will not be added, nor will the keyboard event listeners be enabled.

### Properties

Infopiphany's `<IpyButton>` extends bootstrap's `<b-btn>`, you can refer to their official docs for more detailed information. [Bootstrap Vue](https://bootstrap-vue.org/docs/components/button)

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `busy` | `Boolean` | `false` | Accepts a `boolean` to show the loading state. |

## Importing individual components

You can import individual components into your project via the following named exports:

| Component     | Named Export | Import Path       |
| ------------- | ------------ | ----------------- |
| `<IpyButton>` | `IpyButton`  | `@infopiphany/ui` |

**Example:**

```js
import { IpyButton } from '@infopiphany/ui'
Vue.component('IpyButton', IpyButton)
```
