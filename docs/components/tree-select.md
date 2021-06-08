# Tree Select

### Introduction

A multi-select component with nested options support for Vue.js

- Single & multiple select with nested options support
- Fuzzy matching
- Async searching
- Delayed loading (load data of deep level options only when needed)
- Keyboard support (navigate using Arrow Up & Arrow Down keys, select option using Enter key, etc.)
- Rich options & highly customizable
- Supports a wide range of browsers
- RTL support

:::tip

`options` array should always have key/field name of `id` and `label`. `children` key is optional for sub value.

for complete documentation refer to official site [Tree select documentation](https://vue-treeselect.js.org)

:::

### Single Selection

Basic usage for tree select is using it as a select options. This allows the user to select 1 item in the selection menu. By default `searchable` prop is set to true.

@[example](tree-select-basic)

### Animated border color

When the selection is in focus, there will be an animated `border-bottom`. This helps in UX side which takes the user's attention. To change the color base on your use case simply use `status` prop and pass any bootstrap variants `primary`, `success`, `danger`, and `warning`

@[example](tree-select-border)

### Badge color

To change the selected item color, you can simply use the `badge-color` prop. It also accepts the same color variants with `border-bottom` color. `primary`, `success`, `danger`, and `warning`

@[example](tree-select-badge)

### Properties

For complete properties refer to [Tree select documentation](https://vue-treeselect.js.org)

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `status` | `String` | `primary` | Changes the color of the animated border when the element is in focus |
| `badge-color` | `String` | `normal` | Changes the current color of the badge when `multiple` prop is set to true |

### Importing Individual Components

| Component         | Named Export  | Import Path       |
| ----------------- | ------------- | ----------------- |
| `<IpyTreeSelect>` | IpyTreeSelect | `@infopiphany/ui` |

**Example**

```js
import { IpyTreeSelect } from '@infopiphany/ui'
Vue.component('IpyTreeSelect', IpyTreeSelect)
```

### Best practices

- **When to use**
  - It is recommended that you only use `select` for forms. Mobile websites will often use a select menu for their main navigation to save space. However, there are problems with this approach that affect usability, accessibility and SEO.
- **Grouping**
  - If the options in your select menu have a hierarchy, you should split them into groups. This allows users to find the option they want quicker by scanning the group labels instead of every single option.
- **Labeling**
  - A generic label such as “Please Select” isn’t clear enough for accessibility users who use screen readers to fill out forms. Adding a label outside and inside the select menu allows all users to take action quicker without any confusion.
