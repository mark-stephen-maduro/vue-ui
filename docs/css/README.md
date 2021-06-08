# CSS

#### When should I create component classes?

We recommend a "utility-first" approach.

1. Start with utility classes.
1. If composing utility classes into a component class removes code duplication and encapsulates a clear responsibility, please do it.

This encourages an organic growth of component classes and prevents the creation of _one-off unreusable classes_. Also, the kind of classes that emerge from "utility-first" tend to be design-centered (e.g. `.button`, `.alert`, `.card`) rather than domain-centered (e.g. `.merchant-report-widget`, `.productItem-header`).

Examples of component classes that were created using "utility-first" include:

> TODO: provide a _real_ "utility-first" component. DO NOT provide fake examples.
>
> Format:
>
> `- [`component-filename`](perma-link-to-source-code)`

Inspiration:

- <https://tailwindcss.com/docs/utility-first>
- <https://tailwindcss.com/docs/extracting-components>

## Usage

### Overriding variables

Variables are imported as part of the base SCSS file.

To use a variable without including the full Infopiphany UI components’ styles, import the variable file and its functions directly:

```scss
@import '@infopiphany/ui/src/scss/functions';
@import '@infopiphany/ui/src/scss/variables';

.my-class {
  color: $gray-200;
}
```

## Utilities

### Utility classes CSS bundle

To include all utility classes without including the full Infopiphany UI components’ styles, import the base `utilities.scss` file and its dependencies:

> The `~` character on the import depends on your build tools.

```scss
@import '~@infopiphany/ui/src/scss/functions';
@import '~@infopiphany/ui/src/scss/variables';
@import '~@infopiphany/ui/src/scss/utility-mixins/index'; // This imports all mixins
@import '~@infopiphany/ui/src/scss/utilities';
```

Specific mixin:

```scss
@import '@infopiphany/ui/src/scss/functions';
@import '@infopiphany/ui/src/scss/variables';
@import '@infopiphany/ui/src/scss/utility-mixins/border';

.border {
  @include iphny-border-solid;
  @include iphny-border-gray-200;
  @include iphny-border-1;
  @include iphny-border-rounded-base;
}
```

See [utility-mixins/index.scss](/src/scss/utility-mixins/index.scss) for a complete list of utility mixins available.

## Font utilities

### Font sizes

`font-size-*` increments by 2 and ends with `font-size-80`. Below are the available text classes utilities.

- `font-size-10`
- `font-size-12`
- `font-size-14`
- `font-size-16`
- `font-size-18`
- `font-size-20`
- `font-size-22` <br>
...
- `font-size-80`

### Font weight

Available classes for font weight.

- `ipy-font-weight-lighter`
- `ipy-font-weight-light`
- `ipy-font-weight-normal`
- `ipy-font-weight-semibold`
- `ipy-font-weight-bold`
- `ipy-font-weight-bolder`

<FontWeight/>

### Line Height

Available classes for line height.

- `lh-100`
- `lh-110`
- `lh-120`
- `lh-130`
- `lh-140`
- `lh-150`
- `lh-160`
- `lh-170`
- `lh-180`

### Letter Spacing

Available classes for letter spacing.

- `ls-1`
- `ls-15`
- `ls-2`

## Cursor utilities

Available classes for cursors

- `ipy-cursor-pointer`
- `ipy-cursor-grab`
- `ipy-cursor-help`
- `ipy-cursor-not-allowed`
- `ipy-cursor-wait`

<Cursors />

## Scroll utilities

Available classes for scroll

- `ipy-scroll-x`
- `ipy-scroll-y`
