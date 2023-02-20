# UseEffect Hook 🪝

1. [UseEffect Hook Info](#1)
2. [Side-effects](#2)
3. [useEffect() arguments](#3)
   - [Dependencies argument](#3.1)
4. [Component lifecycle](#4)
   - [Component did mount](#4.1)
   - [Component did update](#4.2)
5. [Side-effects Cleanup Function](#5)

## UseEffect Hook Info <a name="1"></a>

- The useEffect hook is perfect for handling side effects caused by mounting, un-mounting, changing state in function components
- It is used to manage the side effects
- Examples of side effects:
  - Data fetching
  - Setting up subscription
  - Manually changing DOM in react components
- Think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined together into one function
  - So previously we would have to duplicate the code in all those 3 lifecycle hooks
  - This is solved with useEffect
- You can add multiple useEffect hook functions to do different things in a single component

## Side-effects <a name="2"></a>

A functional React component uses props and/or state to calculate the output.
If the component makes calculations that don't target the output value, then these calculations are named side-effects.

`Examples` of side-effects are fetch requests, manipulating DOM directly, using timer functions like setTimeout()

Component rendering and the side-effect logic are independent. Performing side-effects directly in the body of the component is a mistake, because the body computes the component's output or calls hooks.

How often the component renders isn't something you can control — if React wants to render the component, you cannot stop it.

    function Greet({ name }) {
      const message = `Hello, ${name}!`;   // Calculates output

      // Bad!
      document.title = `Greetings to ${name}`;   // Side-effect!

      return <div>{message}</div>;       // Calculates output
    }

How to decouple rendering from the side-effect? Welcome useEffect() — the hook that runs side-effects independently of rendering.

    import { useEffect } from 'react';

    function Greet({ name }) {
      const message = `Hello, ${name}!`;   // Calculates output

      useEffect(() => {
        // Good!
        document.title = `Greetings to ${name}`;   // Side-effect!
      }, [name]);

      return <div>{message}</div>;         // Calculates output
    }

## useEffect() arguments <a name="3"></a>

useEffect() hook accepts `2` arguments:

    useEffect(callback[, dependencies]);

- callback is a function that contains the side-effect logic. `callback` is executed right after the DOM update.
- `dependencies` is an optional array of dependencies. `useEffect()` executes `callback` only if the dependencies have changed between renderings.

<em>Put your side-effect logic into the `callback` function, then use the `dependencies` argument to control when you want the side-effect to run. That's the sole purpose of `useEffect()`.</em>

`For example`, in the previous code snippet you saw the useEffect() in action:

    useEffect(() => {
      document.title = `Greetings to ${name}`;
    }, [name]);

The document title update is the side-effect because it doesn't directly calculate the component output. That's why the document title update is placed in a callback and supplied to `useEffect()`.

Also, you don't want the document title update to run every time `Greet` component renders. You only want it to happen when the `name` prop changes — that's the reason you supplied `name` as a dependency to `useEffect(callback, [name])`.

### Dependencies argument <a name="3.1"></a>

`dependencies` argument of `useEffect(callback, dependencies)` lets you control when the side-effect runs. If dependencies are:

A) **<u>Not provided:</u>** the side-effect runs after every rendering.

    import { useEffect } from 'react';

    function MyComponent() {
      useEffect(() => {
        // Runs after EVERY rendering
      });
    }

B) **<u>An empty array []:</u>** the side-effect runs once after the initial rendering.

    import { useEffect } from 'react';

    function MyComponent() {
      useEffect(() => {
        // Runs ONCE after initial rendering
      }, []);
    }

C) **<u>Has props or state values `[prop1, prop2, ..., state1, state2]`:</u>** the side-effect runs once after initial rendering and then only when any dependency value changes.

    import { useEffect, useState } from 'react';

    function MyComponent({ prop }) {
      const [state, setState] = useState('');

      useEffect(() => {
        // Runs ONCE after initial rendering
        // and after every rendering ONLY IF `prop` or `state` changes
      }, [prop, state]);
    }

Let's detail cases B) and C) since they're often used.

## Component lifecycle <a name="4"></a>

The dependencies argument of the `useEffect()` lets you catch certain component lifecycle events: when the component has been mounted or a specific prop or state value has changed.

### Component did mount <a name="4.1"></a>

Use an empty dependencies array to invoke a side-effect once after component mounting:

    import { useEffect } from 'react';

    function Greet({ name }) {
      const message = `Hello, ${name}!`;

      useEffect(() => {
        // Runs once, after mounting
        document.title = 'Greetings page';
      }, []);

      return <div>{message}</div>;
    }

`useEffect(..., [])` was supplied with an empty array as the dependencies argument. When configured in such a way, the `useEffect()` executes the callback just once, after initial rendering (mounting).

Even if the component re-renders with different `name` property, the side-effect runs just once after initial rendering:

    // First render
    <Greet name="Eric" /> // Side-effect RUNS

    // Second render, name prop changes
    <Greet name="Stan" /> // Side-effect DOES NOT RUN

    // Third render, name prop changes
    <Greet name="Butters"/> // Side-effect DOES NOT RUN

### Component did update <a name="4.2"></a>

Each time the side-effect uses props or state values, you must indicate these values as dependencies:

    import { useEffect } from 'react';

    function MyComponent({ prop }) {
      const [state, setState] = useState();
      useEffect(() => {
        // Side-effect uses `prop` and `state`
      }, [prop, state]);
      return <div>....</div>;
    }

`useEffect(callback, [prop, state])` invokes the `callback` once after mounting, and again after committing the changes to the DOM, if and only if any value in the dependencies array `[prop, state]` has changed.

By using the dependencies argument of `useEffect()`, you control when the side-effect is called, independently from the rendering cycles of the component. Again, that's the essence of _`useEffect()`_ hook.

Let's improve the Greet component by using name prop in the document title:

    import { useEffect } from 'react';

    function Greet({ name }) {
      const message = `Hello, ${name}!`;

      useEffect(() => {
        document.title = `Greetings to ${name}`;
      }, [name]);

      return <div>{message}</div>;
    }

`name` prop is mentioned in the dependencies argument of `useEffect(..., [name])`. `useEffect()` hook runs the side-effect after initial rendering, and on later renderings only if the `name` value changes.

    // First render
    <Greet name="Eric" /> // Side-effect RUNS

    // Second render, name prop changes
    <Greet name="Stan" /> // Side-effect RUNS

    // Third render, name prop doesn't change
    <Greet name="Stan" /> // Side-effect DOES NOT RUN

    // Fourth render, name prop changes
    <Greet name="Butters"/> // Side-effect RUNS

## UseEffect Cleanup Function <a name="5"></a>

Some side-effects need cleanup: close a socket, clear timers.

If the `callback` of `useEffect(callback, deps)` returns a function,
then `useEffect()` considers that function as an effect cleanup:

    useEffect(function callback() => {
      // Side-effect...
      return function cleanup() {
        // Side-effect cleanup...
      };
    }, dependencies);

Cleanup works the following way:

**`A)`** After initial rendering, `useEffect()` invokes the `callback` with the side-effect. `cleanup` function is not invoked.

**`B)`** On later renderings, before invoking the next side-effect `callback`, `useEffect()` invokes the `cleanup` function from the previous side-effect execution (to clean up everything after the previous side-effect), then invokes the current side-effect.

**`C)`** Finally, after unmounting the component, `useEffect()` invokes the `cleanup` function from the latest side-effect.

<img src="../../img/A Simple Explanation of React.useEffect().png" width="250px"/>

Let's see an example of when the side-effect cleanup is useful.

The following component `<RepeatMessage message="My Message" />` accepts a prop `message`. Then, every 2 seconds the `message` prop is logged to the console:

    import { useEffect } from 'react';

    function RepeatMessage({ message }) {
      useEffect(() => {
        setInterval(() => {
          console.log(message);
        }, 2000);
      }, [message]);

      return <div>I'm logging to console "{message}"</div>;
    }

Open the demo and type some messages. The console logs every 2 seconds the messages typed into the input. However, you need to log only the latest message.

That's the case to clean up the side-effect: cancel the previous timer when starting a new one. Let's return a cleanup function that stops the previous timer before starting a new one:

    import { useEffect } from 'react';

    function RepeatMessage({ message }) {
      useEffect(() => {
        const id = setInterval(() => {
          console.log(message);
        }, 2000);

        return () => {
          clearInterval(id);
        };
      }, [message]);

      return <div>I'm logging to console "{message}"</div>;
    }
