## Demo

By default, if the caret is not specified, it will use slashes.

```html
<InfopiphanyBreadcrumb :items="breadcrumbItems"> </InfopiphanyBreadcrumb>
```

With custom caret or separator.

```html
<InfopiphanyBreadcrumb :items="breadcrumbItems">
  <template slot="caret">
    <span>></span>
  </template>
</InfopiphanyBreadcrumb>
```

With icon as a separator

```html
<InfopiphanyBreadcrumb :items="breadcrumbItems">
  <template slot="caret">
    <BaseIcon name="angle-right" style="width:12px; height:12px;" />
  </template>
</InfopiphanyBreadcrumb>
```

## Component Reference

Importing as vue component

```js
import { InfopiphanyBreadcrumb } from '@infopiphany/infopiphany-ui';
Vue.component('InfopiphanyBreadcrumb', InfopiphanyBreadcrumb);
```
