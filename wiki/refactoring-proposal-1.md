## Summary

<!--
Please briefly describe what part of the code base needs to be refactored.
-->

https://gitlab.com/gitlab-org/gitlab-ui/blob/master/src/scss/

Gitlab has it's `gitlab-ui.scss` that have the following contents:

```scss
@import 'bootstrap';

@import 'bootstrap-vue/src/index.scss'; // stylelint-disable-line

// Settings
@import 'functions';
@import 'variables';
@import 'variables_overrides';
@import 'mixins';
@import 'utility-mixins/index';

// Components
@import 'components';
```
Then a `bootstrap.scss` that contains the following:

```scss
@import 'variables';
@import 'variables_overrides';
@import 'bootstrap/scss/functions';
@import 'bootstrap/scss/variables';
@import 'bootstrap/scss/mixins';
@import 'bootstrap/scss/root';
@import 'bootstrap/scss/reboot';
```
First `variables`-> `overrides`-> and then functions etc.

Then a component stylesheet `components.css`

```scss
@import '../components/base/alert/alert';
@import '../components/base/avatar/avatar';
@import '../components/base/avatar_labeled/avatar_labeled';
@import '../components/base/avatar_link/avatar_link';
```

Another notable thing is that they have a `variable-overrides.scss` dedicated only for overriding Bootstrap 4 variables.
## Improvements

<!--
Explain the benefits of refactoring this code.
See also https://about.gitlab.com/handbook/values/index.html#say-why-not-just-what
-->

## Risks

<!--
Please list features that can break because of this refactoring and how you intend to solve that.
-->

## Involved components

<!--
List files or directories that will be changed by the refactoring.
-->

## Optional: Intended side effects

<!--
If the refactoring involves changes apart from the main improvements (such as a better UI), list them here.
It may be a good idea to create separate issues and link them here.
-->

/label ~backstage

