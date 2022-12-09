# Using a return function with useEffect #

This page toggles a component. When the component is first rendered in the DOM, its useEffect() hook is called. The `effectFunction` called by useEffect _returns_ another function: `cleanUpFunction`. This `cleanUpFunction` will be called when the component is _removed_ from the DOM.

Open the Console to see the messages that are generated by the calls to `effectFunction` and `cleanUpFunction`.