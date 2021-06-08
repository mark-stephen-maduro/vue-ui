# Typography

**Typography can help create clear hierarchies, organize information, and guide users through a product or experience.**

## Typeface

Using system or native fonts helps performance by eliminating the need to download font files, and maintains the language support of the user’s system.

### Productive vs. Expressive type sets

Productive type is reserved for use in web-based product design, where the user needs to focus on tasks. The Productive styles are curated to create a series of clear user expectations about hierarchy. Expressive type, on the other hand, allows for a more dramatic, graphic use of type in editorial and marketing design — which many users would find distracting in product.

### Scale

The typographic scale is designed to keep the number of separate styles to the minimum that works for the users.

<br>

<GuideTypographyScale />

### Style

Typography creates purposeful texture, guiding users to read and understand the hierarchy of information. The right typographic treatment and the controlled usage of type styles helps manage the display of content, keeping it useful, simple, and effective.

### Weights

Font weight is an important typographic variable that can add emphasis and differentiate content hierarchy. Font weight and size pairings must be carefully balanced. A bold weight will always have more emphasis than a lighter weight font of the same size. However, a lighter weight font can rank hierarchically higher than a bold font if the lighter weight type size is significantly larger than the bold one.

**Infopiphany UI** uses `ipy-font-weight-semibold` for `labels` and `form-group` labels.

<ClientOnly>
  <GuideTypographyWeight />
</ClientOnly>

### Italic

Each weight has an italic style, which should only be used when you need to emphasize certain words in a sentence (titles of works, technical terms, names of devices, and captions).

<GuideTypographyItalic />

### Type color

Type color should be carefully considered, with legibility and accessibility as paramount concerns. Keep type color neutral in running text. Use primary blue for primary actions.

For emphasizing actions, use `primary` colors for main action and `secondary` color for secondary actions. In this approach the primary action `Add Engine` will have the highest emphasize on other action.

<CommonActionAdd />
