# Form Wizard

**The form wizard is a user interface design pattern that enables untrained users to achieve a goal through a series of steps. The user enters data in each view and proceeds to the next step until completion**

A wizard or multi-step form has many benefits that them more attractive for digital marketers and businesses online compared to single-step forms.

First of all, let’s break down the objectives of why you should use a form on your web-page.

The major reason for using online forms is achieving conversions: The more people fill in the form, the better. The best way to achieve conversions is to build your form with the user-perspective in mind. If the form is easy to understand, clearly structured and fast-loading, then the user has less hesitation to complete it.

Wizard forms show questions in a very user-friendly format. The simple analogy I always use is to compare online forms to personal conversions. In a conversation, you will ask the other person one question at a time, rather than talking about 10 or more different things at once.

Similarly, in a multi-step form, the user will see one question or grouped questions on one screen instead of getting overwhelmed with a full-page consisting of lots of questions.

To summarise, multi-step or wizard forms are more user-friendly, easier to understand and they also create predictability. By showing the user in which form-step they currently are and how much of the form they have yet to complete you create a better experience.

## Overview

<br>

@[example](form-wizard)

### Form Indicators

If you need to show the indicators without the `form-wizard` you may use `ipy-indicator` component to render only the indicators. You may control its behavior using `form-wizard` available functions.

@[example](form-wizard-indicator)

**Available properties for `form wizard`**

## Properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `String` | Awesome Wizard | Form wizard header |
| `renderless` | `Boolean` | `false` | Makes the form wizard renderless without any border and padding |
| `startIndex` | `Number` | 0 | Sets the start index of the wizard |

**Available properties for `form wizard content`**

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `animation` | `String` | `fadeInDown 0.6s` | Sets the transition animation for each form wizard content. Refer to [Animate.css](https://animate.style) |
| `beforeChange` | `Function` | none | Function to execute before tab switch. Return value must be `boolean`. Can be use to validate before going to next tab. |
| `afterChange` | `Function` | none | Function to execute after tab switch. |

**Available properties for `form wizard indicator`**

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `indicators` | `Array` |  | Renders a circular indicator with icon and title. |
| `indicatorSize` | `Number` | `50` | Sets the height of each indicator size. |
| `flexColumn` | `Boolean` | `false` | Aligns each indicator vertically. Default alignment is horizontally. |
| `activeIndex` | `Number` | `0` | Sets an `active` class to each active indicators. |

In case you need to render your own indicators, you may use the default slot with its available scope slot of `indicator` to access each data iteration from array of `indicators` property.

## Methods

| Method | Arguments | Description |
| --- | --- | --- |
| `nextTab` |  | Navigate to next tab |
| `prevTab` |  | Navigate to previous tab |
| `reset` |  | Resets the form wizard and navigates to first step |
| `activateAll` |  | Activates all `indicator` |

## Importing Individual Components

| Component                  | Named Export             | Import Path       |
| -------------------------- | ------------------------ | ----------------- |
| `<IpyFormWizard>`          | `IpyFormWizard`          | `@infopiphany/ui` |
| `<IpyFormWizardContent>`   | `IpyFormWizardContent`   | `@infopiphany/ui` |
| `<IpyFormWizardIndicator>` | `IpyFormWizardIndicator` | `@infopiphany/ui` |

**Example**

```js
import {
  IpyFormWizard,
  IpyFormWizardContent,
  IpyFormWizardIndicator,
} from '@infopiphany/ui'
Vue.component('IpyFormWizard', IpyFormWizard)
Vue.component('IpyFormWizardContent', IpyFormWizardContent)
Vue.component('IpyFormWizardIndicator', IpyFormWizardIndicator)
```
