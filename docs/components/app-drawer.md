# Dropdown App

**The dropdown app is a menu containing all the applications installed on the user's account. The dropdown app is different from the home screen because it contains every installed app and cannot be customized.**

## Overview

Dropdown application has a default slot which the developer can use to customize the current button or to any other components. Dropdown app can only contain all user's subscription.

@[example](app-drawer)

## Using with scope slot

Using app dropdown with `scope-slot` to use the available keys `item`. This will let the developer to further customize the dropdown.

@[example](app-drawer-scope-slot)

### Properties

| Slot | Description |
| --- | --- |
| `app` | Slot used for displaying custom list of each subscribed app. |

### Properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `subscription` | `Array` | [Object Schema](#object-schema) | List of all subscribed applications. |
| `subscriptionConfig` | `Function` | | Method to invoke when `Subscriptions` button was clicked. |
| `configuration` | `Function` | | Method to invoke when `Configuration` button was clicked. |
| `action` | `Function` | | Method to invoke when any of the subscribed app was clicked. |
| `feature.defaultFooter` | `Boolean` | `true` | Renders the default footer with configuration and subscription. |
| `custom-icon` | `Boolean` | `false` | Custom icon uses the tag `<img>` and will be use to render an image with your custom icon. By default we use `BaseIcon` |

### Object Schema

The current object schema requires `app_name`, `app_description`, `app-link`, `file` and `isNew` keys.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `app_link` | `Object` `String` |  | Redirects the user to the app path. |

```js
subscribedApps: [
  {
    app_name: 'Accounting',
    app_description: 'Manage your financial transactions.',
    app_link: '',
    file: {
      filename: 'accounting.png',
      type: 'image/png',
      fd: 'icon/account.png',
    },
    isNew: false,
  },
]
```

```js
subscribedApps: [
  {
    app_name: 'Accounting',
    app_description: 'Manage your financial transactions.',
    app_link: {
      path: '/your-link/
    },
    file: {
      filename: 'accounting.png',
      type: 'image/png',
      fd: 'icon/account.png',
    },
    isNew: false,
  },
]
```

## Importing individual components

You can import individual components into your project via the following named exports:

| Component     | Named Export | Import Path       |
| ------------- | ------------ | ----------------- |
| `<IpyAppsGlobalMenu>` | `IpyAppsGlobalMenu`  | `@infopiphany/ui` |

**Example:**

```js
import { IpyAppsGlobalMenu } from '@infopiphany/ui'
Vue.component('IpyAppsGlobalMenu', IpyAppsGlobalMenu)
```
