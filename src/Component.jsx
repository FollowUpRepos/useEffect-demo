import { useEffect } from 'react'


const Component = () => {
  // cleanUpFunction will only be called after
  // the Component is no longer part of the DOM
  const cleanUpFunction = () => {
    console.log("Component was removed from the DOM")
  }

  const effectFunction = () => {
    console.log("Component was rendered")
    return cleanUpFunction
  }

  // effectFunction will only be called
  // when the Component is first rendered
  useEffect(effectFunction, [])

  return (
    <h1>
      COMPONENT
    </h1>
  );
}

export default Component;
