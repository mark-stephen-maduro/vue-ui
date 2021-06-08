# Forms <Badge text="In-progress" type="warning"/>

**A form is a group of related input controls that allows users to provide data or configure options. Forms can be simple or complex, and may be presented as dedicated pages, side panels, or dialogs depending on the use case and the situation.**

## When to use

Forms are incredibly common in user interfaces and their design and usage continues to evolve as input methods get smarter and more and more people use mobile and tablet devices. You might design a form for a user to: <br>

- Sign up for / log into an account
- Register for a service
- Reconfigure settings, (e.g. enabling notifications)
- Take a survey
- Purchase a product
- Provide feedback

## Respect the user

Forms are meant to gather information and guide people with as little fuss as possible. To allow users to scan and complete the form quickly, forms should:<br>

- Respect the user’s GDPR (_General Data Protection Regulation_) and other privacy regulations by only asking for information that is absolutely necessary.
- Group related tasks under section titles to provide more context and make the interface easier to scan.
- Follow a logical, predictable order—e.g first name first, last name second.
- Allow users to stay with a single interaction method for as long as possible (i.e. do not make users shift from keyboard to mouse numerous times in a single form).
- When designing be mindful of password managers and browser capabilities that populate data for users.
- Progressively disclose additional inputs only as they become relevant; see the Designing for longer forms section below.

## Anatomy of a form

Forms are comprised of some or all of the following elements.<br>

- **Labels**: Input labels helps users understand what the corresponding inputs mean.
- **Text** inputs: Enable users to input free-form text.
- **Data** inputs: Information can be entered through a variety of non-free form input fields as well, (e.g. checkboxes, radio buttons, dropdowns and selects, file uploader, date pickers, toggles, etc.) Visit the individual component pages for in depth details of their specific states and visuals.
- **Help**: Provides in-context guidance like tooltips, placeholder text, or helper text, to assist the user in providing the right information.
- **Buttons**: Allows users to submit or exit a form.

<ClientOnly>
<Form/>
</ClientOnly>

## Building a form

<br>

### Labels

Concise labels for text and data inputs help users understand what information is being requested of them.

- Use sentence-style capitalization for all text elements, except for product names and proper nouns. Sentence-style means only the first word of each sentence is capitalized.
- Although they may be formatted differently, all input components need labels.
- Labels should clearly state the required input.
- Do not use colons after label names.
- Labels are not helper text; be succinct. Use one to three words only.

<ClientOnly>
<Labels />
</ClientOnly>

**Top-aligned labels**<br> Top-aligned labels are Infopiphany UI's default (vs. left-aligned labels) and the only label arrangement currently offered. Top-aligned labels provide a consistent left edge, a close proximity between label and input, and are good for scannability and quick form completion.

**Advantages:**<br>Top-alignment enables quick completion. The label length has room to extend or vary, (e.g. other languages). When users are entering familiar content and are less likely to make data entry errors, top-alignment is ideal. This arrangement is best when fewer form fields need to be presented.

**Optional vs. mandatory**

All fields in a form are assumed required, with optional fields being tagged as so in the label. An excess of optional fields should be avoided. If it’s necessary to have a large number of optional fields, we recommend devoting an entire section to optional fields to avoid excessive repetition.

<ClientOnly>
<Mandatory />
</ClientOnly>

### Text inputs

Free-form text inputs are the most commonly used components in forms.

<ClientOnly>
<FormTextInputs />
</ClientOnly>

**Best practices**

- The field widths should reflect the intended length of the content while still aligning to the responsive column or mini unit grid.
- Make sure users can enter their information at smaller screen sizes.
- Truncate when an input is too long to be fully displayed in the field.
- Pre-populate known values when possible, e.g. a default IP address.
- The first required input field in a form should receive focus on presentation to a user.

### Data inputs

These controls enable users to provide input on forms by selecting from a set of pre-determined options or a limited range of values.

**Selection controls**

Selection controls offer users a selection from pre-determined options. When designing, consider how many options you need to present as well as how many items the user may need to select. These considerations will determine which component to use. Common selection controls include: checkboxes, radio buttons, file uploaders, toggles, and select lists (combo box and multiselect).

<ClientOnly>
<FormInputs />
</ClientOnly>

**Deciding what to use**

| Control | Usage | Context |
| --- | --- | --- |
| **Checkbox** | To select or deselect one or more choices | Agree to terms and conditions, add optional items, select all that apply |
| **Radio button** | To select only one option from two or more choices | Pick type, shipping method, etc. |
| **Toggle** | To choose one of two or more binary options | Changing user settings; On/off; Show/hide |
| **File uploader** | To upload/attach a file or multiple files to a form | Attaching SSl certificates; adding config files to support tickets |
| **Combo box** | To select a single item ( with typeahead functionality from a longer list ) | Choosing a state, country, or language preference. |
| **Multiselect** | To select multiples items from a longer list | Add a product example for Multiselect |

**Radio buttons** - Pre-select a default option for the user; if the user selects a different option the default is deselected. For null options, provide a radio button with the label “None”.

**Radio buttons and checkboxes** - Radio buttons and checkbox item text falls to the right of their controls. When possible, arrange the checkbox and radio button groups vertically for better scannability.

**Toggles** - Always label toggles with the affected attribute due to accessibility constraints; color cannot be the only indicator. A standalone toggle or a checkbox can be used for a single option that a user can turn on or off. Toggles are very common controls in instantly updating forms, where submission is not required.

**Select lists** - When you have more than five options to present to the user, use a select list (combo box or multiselect), not a checkbox or a radio button.

**Bound entry controls**

Bound entry controls allow users to input numeric data, like dates and times (e.g. number input, date picker, and slider components). They restrict user input and rely equally on keyboard and mouse interactions. They only allow valid entries, so field validation isn’t needed.


**Deciding what to use**

| Control | Usage | Context |
| --- | --- | --- |
| Number | input | To increase or decrease incremental values Order quantities |
| Slider | To select one number from a numerical range | Percentages, volume, timelines, data visualization |
| Date picker | To input/select a single localized date or a date range from a calendar | Scheduling trips, meetings, and events |
| Time picker | To input time in hours/minutes | Scheduling meetings and travel times |

### Offering help

**Tooltips**

Tooltips can be very useful for providing additional explanation to users that may be unfamiliar with a particular form field. They can also offer rationale for what may seem like an unusual request. However, research suggests that users should not have to dig around for a tooltip to access information that’s essential for the completion of their task.

@[example](form-tooltip)

**Do:**

- Use tooltips with the outlined “i” (info) icon.
- Use tooltips for explanatory or added information.
- Tooltips are microcontent; keep them concise.

**Don’t:**

- Tooltips are not catchalls for content that doesn’t fit elsewhere; they must be used intentionally and very sparingly.
- Never house essential information in a tooltip.

**Helper text**

Helper text appears below the input label and assists the user to provide the right information. Helper text is always available, even when the field is focused, that’s why it’s the correct choice for need-to-know information. For context or background information that is “nice to have”, use placeholder text or a tooltip.

<ClientOnly>
<FormHelper />
</ClientOnly>

**Do:**

- Think of helper text as crucial information that is secondary to the input label.
- Keep helper text as short and specific as possible.
- Only use helper text when truly necessary to avoid overloading the user.

**Don’t:**

- Never use helper text in place of field labels.
- Helper text should not run longer than the input area.

When fields appear side-by-side and one input has helper text while the other one doesn’t; always top align the input fields, not the labels.

**Placeholder text**

Placeholder text provides hints or examples of what to enter (e.g. YYYY-MM-DD). Since placeholder text disappears once the user begins to input data, it should not contain crucial information. When the requested input may be unfamiliar to the user or formatting is in question, use placeholder text.

<ClientOnly>
<FormPlaceholder />
</ClientOnly>

**Do:**

- Keep hints as short as possible and never overrun the input field.
- Properly anonymize examples rather than using real values.

**Don’t:**

- Use placeholder text to communicate complex and lengthy requirements like password requirements. Instead, use an infotip.
- Provide placeholder text when it isn’t necessary.
- Ever use placeholder text as a replacement for field labels.

### Buttons

Use a primary button for the main action, a secondary button for secondary actions like Cancel or Discard.

**Button alignment**

Alignment refers to whether the buttons are aligned to the right or the left of the container or layout. Button alignment depends on the type of form that you are building. We’ll touch on alignment briefly here as it relates to the button component and offer more detailed information about form variations below.

**Naming actions**

Abstract terms like “Submit” give the user the impression that the form is generic. Although brevity is key in buttons, try to tell the user specifically what action your button will perform.

<ClientOnly>
<FormNamingAction />
</ClientOnly>

## Behavior

### Errors and validation

_Effective and immediate error messaging_ can help the user to understand the problem and how to fix it. First, inform the user what has happened, then provide guidance on next steps or possible resolutions. Always present error states on the form, and use inline errors whenever possible.

**Client-side validation**

We recommend validating the user’s data before form submission. This type of real-time, inline validation (a.k.a. client-side validation) should happen as soon as the field loses focus. This will help to easily identify the elements that need to be corrected.

The validation label below the field should be as informative as possible when describing the issue with the user’s data. For example, if password limitations require 16 characters, but the user inputs a password with only six characters, the text should read something like, “Password must be at least 16 characters.”

Common user errors include:

- Incorrectly formatting data
- Leaving a mandatory field blank
- Leaving a mandatory field incomplete

@[example](form-validation)

**Server-side validation**

Inline notifications come into play when server-side errors are involved, i.e. the user tries to submit a form in its entirety and the page is reloaded with the detected errors.

In these situations, use an inline notification as well as inline error messaging wherever possible to help users make the fix. Inline error messages should disappear when the form criteria is met.

@[example](form-server-validation)

### Enabling and disabling buttons

- For short forms that require server-side submission before returning errors, we recommend disabling primary action buttons until all of the form’s requirements are met.
- For longer forms, do not disable primary action buttons because the error messages and the primary action button may not be visible on the screen simultaneously.
- When a user submits a form, disable the primary action button to prevent duplicate submissions.
- If it’s going to take a while to process a form, communicate this to the user with feedback messages and progress indicators (e.g. spinners or progress bars).

### Accessibility

When constructing a form, first refer to the specific accessibility guidance for each component used. Every text input should have a descriptive and visible label, along with hard coded instructions for input format. A form must be wrapped in a `<form>` element.

Requirements for your form should be announced and declared before the user enters the form.

The most significant challenge facing visually impaired users is form ordering. Your form should be tab-navigable, and required fields should be clearly labeled as such.

Validation messages should be included to advise the user of data that is input incorrectly or a required field that is missing information.

Helper text (label) should be used to provide instructions to help users understand how to complete the form fields as well as indicate any required and optional input, data formats, and other relevant information.
