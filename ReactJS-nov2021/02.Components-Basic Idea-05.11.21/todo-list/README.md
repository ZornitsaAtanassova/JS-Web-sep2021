# React Fragments, Functional Components, Class Components, Component Props and States, React Event Handlers, Conditional Rendering

This project demonstrate:
+ React Fragments
	+ Explicit declaration Syntax
	+ Short Syntax
	+ Empty tags Syntax
+ Class Components
+ Functional Components
	+ function declaration
	+ function expression
	+ arrow function 
+ Component Props
+ Component State
+ React Event Handlers (Synthetic Events)
+ Conditional Rendering
	+  if statement
	+  ternary operator `?:`
	+ logical operators `&& || ??`
+ Arrow function syntax for functional components definition and passing arguments to event handlers `() => {}`
+ JS expressions syntax `{...}`
+ Debuging in VS Code - `lunch.json`


## [Fragments](https://legacy.reactjs.org/docs/fragments.html)

Fragments enable the component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM. There are three syntaxes to use it:

Explicit declaration `React.Fragment` + `import React from 'react'`
Short Syntax `Fragment` + `import {Fragment} from 'react'`
Shorter Syntax -  it looks like empty tags `<></>` without import

## Props

Props get passed to the component like function params. We use props to pass data from a **Parent component** to a **Child component**. Props could pass:
+ Content - could be:
	+ plain text
	+ nested HTML
+ HTML attributes and their values
+ JS expressions in `{}`
	+ variable
	+ object
	+ array
	+ function
	+ expression
    + ...

##### Children property
The content between an opening tag and a closing tag is passed as a special prop: `props.children`

The [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) `?.` operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

## State

State allows you to create components that are dynamic and interactive.

##### `React.useState`

## Handling Events

There are two ways to passing arguments to event handlers, using Arrow function or using Bind.

## Conditional Rendering

Conditional rendering in React works the same way conditions work in JavaScript using if statement, ternary operator or logical operators.

##### Logical operators

| AND operator  | OR operator  | Nullish coalescing operator |
| :------------: |:---------------:| :-----:|
| T && __T__ =T | __T__ ll T = T |  |
| T && F = F | T ll F = T |  |
| F && T = F | F ll T = T |  |
| __F__ && F = F | F ll __F__= F |  |
|  | works with all falsy values: `false`, `null`, `undefined`, `' '`, `0`  | works only with ***`null`*** and ***`undefined`*** falsy values  |
