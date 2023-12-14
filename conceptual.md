### Conceptual Exercise

- **What is React? When and why would you use it?**  
Front end framework that allows us to build front end applications. React has reusable components that know how to render themselves and can be reused. React also has re-rendering when state changes which can make it easy to make single page applications.

- **What is Babel?**  
Babel is a popular tool that transpiles modern JavaScript syntax into browser-compatible JavaScript. It allows developers to write code using newer features like arrow functions and JSX, which may not be supported in all browsers. Babel converts this code into equivalent code that works in most browsers.

- **What is JSX?**  
By writing a function that returns some JSX. The function is called whenever you write that component inside of JSX tags.

- **How is a Component created in React?**  
Creating React components is a fast and easy process, no different than declaring other JavaScript variables. They can be either JavaScript functions or JavaScript classes.

- **What are some difference between state and props?**  
State is mutable whereas props are not. When state is changed a component is re-rendered. Another difference is that state is not passed down to child components. The only way to pass information down to children is through props

- **What does "downward data flow" refer to in React?**
Downward data flow is the idea that parent components pass data down to their children via props. In order to make data go the other way, we have to pass a
function down from the parent that the child can then call with some information.

- **What is a controlled component?**  
One that is controlled by react and that state is always controlled by react. For example, in an input field in a form when the input is text react should control the state of the input so that it can use it. There could be issues if react is not aware of the changes being made in the DOM when compared to it's virtual DOM

- **What is an uncontrolled component?**  
An uncontrolled component is one where react it not aware of the state change. It is very uncommon to need to use an uncontrolled component, but it can happen in the event of 3rd party libraries and inputs for uploading files.

- **What is the purpose of the `key` prop when rendering a list of components?**  
It allows react to very quickly identify which components are changed so that it knows which ones to re-render very quickly. Without this performance could take a hit since react would not be able to identify quickly which component is changed.

- **Why is using an array index a poor choice for a `key` prop when rendering a list of components?**  
The 2 things that a key should be is stable and unique. An index would be unique but it would not be stable since the array can mutate and indices can shift around.

- **Describe useEffect.  What use cases is it used for in React components?**  
The useEffect hook allows us to perform side effects in our function components. Side effects are essentially anything where we want an “imperative” action to happen. API calls, updating the DOM, subscribing to event listeners—these are all side effects that we might like a component to undergo at different times.  
The useEffect hook doesn’t return any values but instead takes two arguments. The first being required and the second optional.
	1. The first argument is the effect callback function we want the hook to run (i.e., the effect itself).    
	2. The second (optional) argumen t is a dependency array that contains dependencies that when changed trigger the effect to rerun.  
.
 
- **What does useRef do?  Does a change to a ref value cause a re-render of a component?**  
useRef returns a ref object with a single current property initially set to the initial value you provided.  
On the next renders, useRef will return the same object. You can change its current property to store information and read it later. This might remind you of state, but there is an important difference. Changing a ref does not trigger a re-render. This means refs are perfect for storing information that doesn’t affect the visual output of your component.

- **When would you use a ref? When wouldn't you use one?**  
There are a few good use cases for refs:
 - Managing focus, text selection, or media playback.
 - Triggering imperative animations.
 - Integrating with third-party DOM libraries.  
Avoid using refs for anything that can be done declaratively.  
.


- **What is a custom hook in React? When would you want to write one?**  
React custom hooks are reusable functions that a React JS developer can use to add special and unique functionality to the React applications. If there is a requirement to add a feature, the problem is solved by using custom React JS hooks.  
A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other hooks.

