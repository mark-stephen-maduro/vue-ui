# Text Field

[[toc]]

## Introduction

A text field is an input field that users can type into. It has a range of options and supports several text formats including numbers.

> `IpyInput` uses `fontawesome` icon library. Refer to [FontAwesome Icons](https://www.fontawesome.com). You may also use other icon provider in case you need an icon that does not exist in the `fontawesome` icon library.

## Overview

The `<IpyInput />` defines a single-line text field. The default width of the text is the parent container width.

::: tip

Always wrap `<IpyInput>` with `<b-form-group>` and use it's `label` `description` `state` `invalid-feedback` and `valid-feedback` props for best UI/UX practices!

:::

@[example](input)

## Input variants

Set border color when focus using variants.

To control the border bottom color and icon color use `status` prop and pass a bootstrap variants `success`, `danger`, `warning`, `primary`

Default status is `primary`

@[example](input-variant)

## Icons

Customizng the text field with icons is much easier and less hassle than using other input and adding your own icon. In this text input, you just need to add your `fontawesome` icon name to the prop `icon-right` or `icon-left` either of the two will render an icon of your choice inside the `input`.

> You can also bind a loading state to tell the user that the input is loading. Use prop `loading-left` or `loading-right`. This will render an animated spinner either left or right depending on the prop you used. Default value is `false`

@[example](input-icons)

## Suggestions

To make life easier for your users, you could use the `suggestion` prop and pass an `array` of string. This comes with auto-complete tab function.

::: warning

`suggestion` prop only accepts a flat array.

:::

@[example](input-suggestion)

## Input classes

To further customize the `input`, you can pass your css class or classes to `container-class` prop to style the input container to your liking.

`border-class` CSS class (or classes) to apply to the `border-bottom` wrapper element.

`left-icon-class` and `right-icon-class` CSS class (or classes) to apply to the left and right icon wrapper element.

@[example](input-class)

## Customize using slots

In case you need to add your own component inside the input, you will need to use the slot. Slot named `left` and `right` positions its content left and right respectively.

::: tip

`icon-left` and `icon-right` takes the priority in placements of each element inside the input.

:::

@[example](input-slots)

## Importing individual component

You can import individual components into your project via the following named exports:

| Component | Named Export | Import Path |
| --------- | ------------ | ----------- |
| `<IpyInput>` | `IpyInput` | `@infopiphany/ui` |

**Example:**

```js
import { IpyInput } from '@infopiphany/ui';
Vue.component('IpyInput', IpyInput);
```

## Best Practices

Inputs should always be used together with `b-form-group`

- Acts as a wrapper to the input which enable us to add a label and description.
- Has built-in `state` `invalid-feedback` `valid-feedback` prop that can be use to indicate a validation message to the user.
