# Dropdown

[[toc]]

## Introduction

:::tip

For more in-depth explanation refer to [Bootstrap dropdown](https://bootstrap-vue.org/docs/components/dropdown)

:::

Dropdowns are toggleable, contextual overlays for displaying lists of links and actions in a dropdown menu format.

> `IpyDropdown` uses `fontawesome` icon library. Refer to [FontAwesome Icons](https://www.fontawesome.com).

`<IpyDropdown>` components are toggleable, contextual overlays for displaying lists of links and more. They're toggled by clicking (or pressing space or enter when focused), not by hovering; this is an [intentional design decision](https://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/).

@[example](dropdown-basic)

## Button content

You can customize the text of the dropdown button by using either the `button-text` prop (shown in previous examples), or use the button-content slot instead of the text prop. The `button-content` slot allows you to use basic HTML and icons in the button content.

@[example](dropdown-button-text)

## Searchable dropdown

By default `searchable` prop is disabled. To enable searching in dropdown, just add `searchable` prop. This will render an input inside the dropdown menu and will enable the user to filter out the dropdown items.

@[example](dropdown-searchable)

## Multiple selection

Multiple selection for dropdown can be enabled when you pass `true` to the prop `multiple-select`. This will render a checkbox for each items and render selected items on the button.

@[example](dropdown-multiple)

### Properties

For complete properties refer to [Bootstrap dropdown](https://bootstrap-vue.org/docs/components/dropdown)

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `searchable` | `Boolean` | `false` | Renders an input inside the dropdown menu to enable searching. |

## Importing Individual Components

| Component       | Named Export | Import Path       |
| --------------- | ------------ | ----------------- |
| `<IpyDropdown>` | IpyDropdown  | `@infopiphany/ui` |

**Example**

```js
import { IpyDropdown } from '@infopiphany/ui'
Vue.component('IpyDropdown', IpyDropdown)
```

## Best practices

- In General, avoid `Dropdowns` when there are more than 10 or fewer than 5 options.
  - As much as possible avoid using dropdown when there are too many items. Don`t give headaches to our users!
  - If there are only 3 options to select better go with `radio buttons`
  - Automating or auto detect info base on inputs if possible to lessen the process, only if its possible. <ins>**_Innovate_**</ins>! We dont live in a rock anymore! Let`s not make our users lives hard by using wrong interfaces!

:::tip

**We create to lessen the process. Not to give our users unnecessary choices!**

:::

[Best practices for dropdown](https://baymard.com/blog/drop-down-usability)
