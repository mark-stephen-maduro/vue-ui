# Empty states <Badge text="In-progress" type="warning"/>

**Empty states are moments in an app where there is no data to display to the user. They are most commonly seen the first time a user interacts with a product or page, but can be used when data has been deleted or is unavailable.**

## Overview

Empty states are a simple yet extremely powerful way to keep a user informed, supported, and on a productive path. They provide opportunities to communicate what the user would see if they had data, while providing constructive guidance about next steps.

With just enough contextual guidance, empty states ensure a smoothness of experience, especially when things aren’t working as expected.

Most people are familiar with the basic empty state page that explains what data would normally appear on a page. However, it’s not always a one size fits all.

This pattern explores the following approaches:

- Basic empty states for first use, user action confirmation, and error management
- In-depth supplements and alternatives for first use empty states, including in-line documentation, onboarding, and starter content

<div class="app-styles">
  <div class="d-flex justify-content-center align-items-center w-100">
    <div class="border shadow-sm mt-3">
      <div>
        <img src="/empty-state-search.png" height="290">
        <img src="/empty-state-data.png" height="290">
        <img src="/empty-state-create.png" height="290">
      </div>
    </div>
  </div>
</div>

Refer to [www.undraw.co](https://undraw.co/search) for more free illustration.

## Anatomy

Basic empty state with primary action button

<EmptyStateAnatomy />

- **Image (optional)**: A non-interactive image that relates to the situation (optional).
- **Title**: A short and concise explanation. Where possible, write this as a positive statement. In this example, “Start by adding data assets” feels more positive than “You don’t have any data assets.” Alternatively, you could say “You don’t have any data assets yet”.
- **Body**: Explain clearly the next action to populate the space. You may also explain why the space is empty and include the benefit of taking this step. There are three options for explaining the primary action:
  - Direct the user to a primary action button positioned underneath the copy
  - Include a primary action link in the copy
  - Direct the user to the UI element—see the example below. This has the benefit of teaching the user where elements are and how they will perform tasks in the future.
- **Primary action—button or link in copy (optional)**: The primary call to action referenced in the body copy above.
- **Secondary call to action (optional)**: If there is a secondary action, such as referencing documentation for further reading, include it as a link below the copy.

<EmptyStateInstruction />

Basic empty state with instruction to click UI element

## Designing with empty states

Empty states are often treated as an afterthought. When designed thoughtfully, they become an essential part of a smooth user experience, providing just enough information, in context, to allow users to continue working in a productive way.

During the design process, ask yourself these questions:

- What will the pages, tiles, data tables, and side panels look like without content?
- What are all of the steps a user can take to address the situation?
- Is there any useful content that might be available to show?
- How can I turn this situation into something that is engaging and helpful?

During the design phase, explore the full range of options with your team to ensure that the most appropriate and helpful content is created for each empty space.

### When to use

Empty states happen for a variety of reasons, and can require different treatments.

Strive for a balance between the situation and the content you’re providing. More content doesn’t necessarily mean it’s a better solution as there is a cognitive cost for having more content on the page. This is especially true when users first engage with your product, so save the more involved educational moments for primary features and more complex situations.

The following table suggests different approaches for empty states to match the needs of the user in different situations.

**Basic empty states**

| Type | Use cases | Goal of the emty state | When to use |
| --- | --- | --- | --- |
| No data empty states | First time use, no data yet | User understands what will be available on the page when data has been added or is available. They understand how to add data themselves. | For simpler situations, or for secondary features where bite-sized pieces of information are preferable. |
| User action empty states | Provides feedback based on some user action. For example: <ul><li>No result when search</li><li>Confirmation of completion of a process</li></ul> | User understands how to adjust search terms or filters to continue their search. User understands that they’ve successfully completed a process. | User understands how to adjust search terms or filters to continue their search. User understands that they’ve successfully completed a process. | User understands that they’ve successfully completed a process. When you need to provide feedback to the user based on an interaction. |
| Error management empty states | <ul><li>Permissions issue</li><li>Systems issue</li><li>Configuration required</li></ul> | User understands the problem and if there are corrective actions available, knows what action to take or has options to correct the issue. | When something is amiss or some level of intervention or troubleshooting is required, a higher level of detail and specificity will better support the user. |

### Where to use

Empty states always appear in the otherwise empty space, in the context of the data that’s missing. They can occur anywhere your app can display data, including but not limited to dashboards, data tables, tiles, full pages, and side panels.

The approach and layout you choose will depend on the situation, and what is the most appropriate based on the page layout and context.

### Visual guidelines for smaller empty spaces

For small tiles and side panels, follow these guidelines and use the layouts shown below.

**Alignment of elements**<br> Empty state elements should be left-aligned as a block. The one exception to this rule is an empty state in a small tile. In this case the image should be centered above the left-aligned text and primary action, as shown in the example below. This exception was made to prevent the empty state looking too much like content, where it could be skipped over. The centered image in a smaller space helps to draw attention to a state that may require user action.

**Image choice considerations**

- The image choice should relate to the situation.
- The size of the space for the empty state should also guide the size of image. If space is limited, use just text.

**Multiple empty states**<br> In situations where there could be multiple empty states showing at once, we recommend using a tertiary button for the call to action. This avoids scenarios with multiple primary action buttons in the UI.

### Visual guidelines for larger empty spaces

For larger spaces, you have some flexibility with laying out the larger empty states. Follow these guidelines, review the examples, and use your judgment as to what is best for the situation.

**Alignment of elements**<br>Empty state elements should be left-aligned as a block. Depending on the image you’re using, there are different arrangements available.

**Layout/positioning options**<br> You have two options for positioning the block in the larger empty states:

- Use a wider left margin
- Block center the left-aligned group in the empty space

**Image position options**<br> You have two options for positioning the image in the larger empty states:

- Above the empty state title—generally better for wider images
- To the left of the element block—generally better for taller images

**Image choice considerations**

- The image choice should relate to the situation.
- The size of the space for the empty state should also guide the size of image. If space is limited, use just text.

<div class="app-styles">
  <div class="d-flex justify-content-center align-items-center w-100">
    <div class="border shadow-sm mt-3">
      <div>
        <img src="/empty-state-image1.png" height="300">
        <div class="p-3">Layout options for empty states in large tiles—wide margin or centered block</div>
        <img src="/empty-state-image2.png" height="300">
        <div class="p-3">Layout options for empty states in tables—wide margin or centered block</div>
        <img src="/empty-state-image2.png" height="300">
        <div class="p-3">Layout options for full page empty states—wide margin and centered block</div>
      </div>
    </div>
  </div>
</div>

### Best practices

- **Empty states should replace the element that would ordinarily show**. For example, an empty state for a table would replace the table and the column headers and footer should not be present. This practice avoids having a screen reader read the entire table before getting to the message that there is no content in the table. Likewise, if you search for something and there are no results, any underlying content should be replaced by the empty state message.
- **Consider how many empty states may appear in a space**. If you have a dashboard with a number of widgets and there is a failure for multiple widgets to load, the repetition of the empty state may not have the same impact if you use illustrative icons. In this case, an empty state that uses just text may be preferable.

### No data empty states

These are the most recognizable first use empty states, explaining what will be in the space once it is populated with data, and providing guidance for the next step the user can take to populate the space.

<EmptyStateNoData />

**Do:**

- Use basic empty states for simpler situations, or secondary features, where bite-sized pieces of information are preferable.
- Be specific about what will be available in the space when data is there.
- Keep words to a minimum so they are fast to read and act upon.
- If there is an actionable next step, include a direct link in your message copy or a primary action button to make that action fast. Alternatively, guide them to what they need to click.

**Don’t:**

- Don’t cover multiple options in one empty state. If there are multiple things a user can do, pick the most important and keep the focus on that action.
- Don’t use product-specific terms that the user may not yet understand.
- Don’t include content that is about other areas of the app. Be contextual.
- As a general rule, don’t lead the user into a dead end. If there are useful next steps, include them.

### User action empty states

These empty states occur as a result of a user action. For example:

- A message showing there are no search results
- A success confirmation for completion of a process or set of tasks

Explain the reason for seeing the message and providing any follow up steps to guide the user. For example, if there are no search results suggest adjusting the search or filters. Links to documentation may also be appropriate as a secondary call to action.

<EmptyStateSearch />

There may be situations where next steps are not possible or supplementary text is not required, so use your judgment about what is useful to include. For example, if your user has configured alerts and nothing has been triggered, it’s not a case of alerts not being set up but that there is nothing that requires the user’s attention. In this case, supplementary text is not necessary.

> **TODO** Illustration

### In-line documentation

In-line documentation is an extension of the basic empty state for first time use. It can be most helpful when a primary feature is first introduced, providing more detail and highlighting any benefits. Including an image of the space populated with data may help trigger interest and usage. Following a progressive disclosure model, it could provide links out to more detailed documentation.

**Considerations for in-line documentation**

- If testing results show that users do not understand the feature or concept, more detail may encourage usage.
- This approach may require a higher level of maintenance than a basic empty state if using product images as images will need to be kept up to date. If your app is translated, there could be extra work in providing localized images.
- Keep the content limited to one feature. Do not talk about other areas of the app. If there are multiple things a user could do, pick the most important and keep the focus on that.

<EmptyStateInline />

### Starter content

Another strategy for addressing an otherwise empty space is to provide pre-built content that allows new users to get started with an app quickly and without any concern.

**Pre-built content for apps**<br> Starter content can provide the opportunity for users to dive in and learn about primary features and functions with sample data. Users can tinker, examining and deleting content without serious consequences. If it’s possible to include some personalization here, that adds to the positive experience.

<EmptyStateStarter/>

**Pre-configured kits and workflows**<br> Other options for starter content are pre-configured kits and workflows. Pre-configured kits containing code and API credentials can offer a fast path to getting started.

Starter content can also take the form of pre-configured workflows, where the configuration of services is automated, saving users from the tedium of a long setup process.

**Considerations for starter content**

- Requires upfront planning with the full product team to determine workflow pre-configurations that would most benefit users.
- If your starter content can be deleted by your user, you will need a basic empty state as a back up.
