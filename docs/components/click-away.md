# Click Away

Click Away is a wrapper that acts as a blur event or when a user has clicked outside of its scoped element. Click Away may be used in detecting clicks outside of its scoped elements or wrapped elements.

The advantage in using `clickaway` component is that you can capture the blur event in any elements or components you wrapped using `clickaway` wrapper since `blur` event is only working on input fields. Clickaway has the advantage over blur.

If you are creating your own component which displays an element and you need a way to close or hide that element when the element lost focus. You may use this component to easily detect outside click.

@[example](click-away)
