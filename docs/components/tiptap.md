# Text Editor

[[toc]]

## Installation

The WYSWYG editor is a separate package and can be installed by using `npm` or `yarn`.

```shell
# Using yarn
yarn add @infopiphany/tiptap

# Using npm
npm install @infopiphany/tiptap
```

## Usage

Starting verion 1.4.0 we have changed the way on how the component is packaged, all components and tiptap extensions are exported now from `@infopipahny/tiptap`, still you can use and import files under `@infopiphany/tiptap/src` namespace.

To use the `@infopiphany/tiptap`, install the `IpyEditorPlugin` using `Vue.use()`, this will register the tooltip directive.
Optionally, you can register `IpyEditor` as a global component.

```js
import { IpyEditor, default as IpyEditorPlugin } from '@infopiphany/tiptap' // version >= 1.4.0
Vue.use(IpyEditorPlugin)
Vue.component('IpyEditor', IpyEditor)
```

Import the stylesheet for tiptap and tooltip

```scss
// version >= 1.4.0
// Load IpyEditor style
@import '~@infopiphany/tiptap/src/scss/index.scss';
// Load styles for the IpyEditor's tooltip
@import '~@infopiphany/tiptap/dist/index.css';
```

## Introduction

In most areas of the system where text can be entered, you can control the appearance of your text using the rich-text-editor, sometimes called a `WYSIWYG (What You See Is What You Get)`.

> This text editor is built using tiptap's _renderless_ and extendable rich-text-editor for [Vue.js](https://github.com/vuejs/vue) For more in-depth information refer to [ueberdosis/tiptap](https://tiptap.dev/docs)

## Overview

A simple text editor consists of `Paragraph`, `Headings`, `Bold`, `Italic`, `Underline`, and `Strikethrough` extensions for simple and basic text editing.

<ClientOnly>

@[example](editor-basic)

</ClientOnly>

## Rich Text Editor

A complete list of available extension for our current editor.

<ClientOnly>

@[example](editor-extensions)

</ClientOnly>

## Value Format

If you need a JSON format of the editor's value, you can use the prop `export` and pass _json_ as the value. The default value of the prop `export` is _html_.

<ClientOnly>

@[example](editor-value-format)

</ClientOnly>

## Readonly

To disable editing inside the text editor simply add the `editable` prop.

> TODO: Improve design when editor is on readonly mode.

<ClientOnly>

@[example](editor-editable)

</ClientOnly>

## Footer

Our current editor has an optional footer, when enabled it comes along with a built in character counter and a file uploader.

<ClientOnly>

@[example](editor-footer)

</ClientOnly>

## Footer Slots

Footer has available 2 slot named `footer-left` and `footer-right`. If you want to replace the current footer contents, either use `footer-left` or `footer-right` accordingly.

`footer-left` comes with a built in function counter which counts the entered characters in the editor using regex. To use the said function you will need to import it from the utils.

> `function toWord` accepts a string and removes any html tags and converts every double spaces and more to 1 space. To use this helper function, import `format_value` from the utils folder of the package.

<ClientOnly>

@[example](editor-footer-counter)

</ClientOnly>

> On the right side of the footer comes with a built-in `attach-a-file` feature.

## Attachments

Attachments can be send to a server by using the `dispatch` prop. `dispatch` prop accepts a function and passes an arguments with your selected file.

> To apply your uploaded file link, you will need to return an object with a key/field name of { imageURL: 'Uploaded URL' }. This will register your uploaded file in our `image extension` and display it. The default value of `imageURL` key is the created blob.

<ClientOnly>

@[example](editor-attachment)

</ClientOnly>

## Theming

If you want to change the editor's look and feel, you can use the `content-class` prop. This adds your css class to the content of the editor.

Editor color scheme is also customizable, just add the `theme` prop and pass any one of our predefined color scheme `dark-neon` or `light`. You can also create your own color scheme by using the available mixin to inject your new color scheme.

</ClientOnly>

@[example](editor-theme)

</ClientOnly>

### Properties

For complete properties refer to [ueberdosis/tiptap](https://tiptap.dev/docs)

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `editor` | `Object` |  | Editor instance that contains the extensions, content and other options. refer to [ueberdosis/tiptap](https://tiptap.dev/docs) |
| `editable` | `Boolean` | `false` | When set to `true` the editor is read-only. |
| `theme` | `String` | `light` | CSS class to apply to the main wrapper `.editor` |
| `content-class` | `String` or `Array` |  | CSS class (or classes) to apply to the `.editor__content` wrapper element. |
| `footer` | `Boolean` | `false` | Hides and show the editor's footer |
| `dispatch` | `Function` |  | Callback `function` to send the selected attachment. |

## Editor Methods

For complete methods refer to [ueberdosis/tiptap](https://tiptap.dev/docs)

| Method | Arguments | Description |
| --- | --- | --- |
| `onFileChange` | `fieldName` `file` | Handles the callback function of prop `dispatch`. Creates a blob to display in the editor. |
| `setContent` | String | Sets the default value of the editor. |

## Utility

| Method | Arguments | Description |
| --- | --- | --- |
| `toWord` | `String` | Accepts a string and removes any html tags and converts every double spaces and more to 1 space. |

```js
import { toWord } from '@infopiphany/tiptap'
toWord(`<p>My paragraph</p>`)
```

**Output** <br> `My paragraph`

## Components

For complete components refer to [ueberdosis/tiptap](https://tiptap.dev/docs)

| Name                | Description                                     |
| ------------------- | ----------------------------------------------- |
| `<alignment />`     | Here a dropdown for alignment will be rendered. |
| `<blockquote />`    | Here a blockquote button will be rendered.      |
| `<bold />`          | Here a bold button will be rendered.            |
| `<bullet-list />`   | Here a bullet-list button will be rendered.     |
| `<code />`          | Here a code button will be rendered.            |
| `<colors />`        | Here a colors button will be rendered.          |
| `<export />`        | Here an export button will be rendered.         |
| `<font-size />`     | Here a font-size button will be rendered.       |
| `<font-type />`     | Here a font-type button will be rendered.       |
| `<heading />`       | Here a heading button will be rendered.         |
| `<history />`       | Here a history button will be rendered.         |
| `<image-view />`    | Here a image-view button will be rendered.      |
| `<indent />`        | Here an indent button will be rendered.         |
| `<italic />`        | Here a italic button will be rendered.          |
| `<link />`          | Here a link button will be rendered.            |
| `<ordered-list />`  | Here a ordered-list button will be rendered.    |
| `<outdent />`       | Here a outdent button will be rendered.         |
| `<remove-format />` | Here a remove-format button will be rendered.   |
| `<strike />`        | Here a strikethrough button will be rendered.   |
| `<superscript />`   | Here a superscript button will be rendered.     |
| `<table />`         | Here a table button will be rendered.           |
| `<underline />`     | Here a underline button will be rendered.       |

### Slots

| Name | Description |
| --- | --- |
| `footer-left` | Editor footer content. Also removes default `character count` |
| `footer-right` | Editor footer content for the right side of the footer. |


## Importing Individual Components

| Component       | Named Export | Import Path           |
| --------------- | ------------ | --------------------- |
| `<IpyEditor />` | IpyEditor    | `@infopiphany/tiptap` |

**Example**

```js
import { IpyEditor } from '@infopiphany/tiptap'
Vue.component('IpyEditor', IpyEditor)
```

## Keyboard Support

Some extensions has keyboard support and shortcuts, to fully use its potential you may need to read the official docs for each keyboard support in [ueberdosis/tiptap](https://tiptap.dev/docs)

## Best Practices

The rich text editor should be used to:

- Edit and Create a document that can be exported as PDF, Microsoft Word, Excel and Email.
- Entries and comments.
