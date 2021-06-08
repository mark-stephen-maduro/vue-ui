# UI Documentation Guidelines

Documentation for this project is _developer-oriented_ and should convey the information necessary to reuse components seamlessly.

When creating a new component, add hints wherever helpful, document it briefly but completely, and don't leave any gaps so that other developers can reuse them as easily and quickly as possible.

### Referring to Infopiphany UI

When referring to the Infopiphany UI project or any projects under this repository in your documentation changes, use the human-friendly capitalized name: Infopiphany UI, Tiptap.

**Don't** use the project's slug (infopiphany-ui, `tiptap`).

When referring to Infopiphany UI's npm package, use the package's name with code formatting: `@infoiphany/ui`, `@infoiphany/tiptap`.

### Referring to a component

When mentioning a component in the documentation, use its PascalCase name with the `Ipy` prefix and code formatted.

Good:

- `IpyInput`
- `IpyTreeSelect`

Bad:

- `ipy-input`
- `TreeSelect`
- `<ipy-treeselect>`
