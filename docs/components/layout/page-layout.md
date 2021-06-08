# Page layout <Badge text="In-progress" type="warning"/>

Page layout component is also available for single row layout. The developer can customize each component positioning in this layout.

**One page layout comes with bunch of advantages**

- Use only one template, so all the stages of work in information architecture are reduced.
- For the same reason, the code created for the site is greatly reduced.
- In terms of metrics, it simplifies the management of site analysis, since it only involves analyzing a page or a large section.
- It works as a single landing, concentrating conversions better and reducing traffic leakage. As is logical to think, this is achieved by - defining a conversion point and optimizing the contact form. It does not make sense to make one page with two objectives for the page.
- It facilitates the SEM, since it is more focused on the conversion than on navigation. In addition, they are more effective in concentrating all the calls and interaction possibilities in one place.
- By having only one general design, you can spend more time optimizing details in the interactions and testing innovative designs.

### Importing individual components

You can import individual components into your project via the following named exports:

| Component | Named Export | Import Path |
| --------- | ------------ | ----------- |
| `<IpyPageLayout>` | `IpyPageLayout` | `@infopiphany/ui/layout` |

**Example:**

```js
import { IpyPageLayout } from '@infopiphany/ui/layout';
Vue.component('IpyPageLayout', IpyPageLayout);
```
