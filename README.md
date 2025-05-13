# VineDOM - Lightweight DOM Manipulation Library

## Overview

VineDOM is a minimal JavaScript library for creating and manipulating DOM elements with a chaining API. Inspired by [Tsoding](https://github.com/tsoding)'s functional programming style and DOM manipulation techniques, this project was created as a learning exercise to understand:

- DOM element creation and manipulation
- Function chaining patterns in JavaScript
- Lightweight alternatives to larger frameworks like React or jQuery

## Installation

No installation required! Just include the `vineDom` function in your JavaScript file:

```javascript
const vineDom = (tags, ...children) => {
    // ... implementation ...
}
```

## Usage

### Creating Elements

```javascript
const element = vineDom("div", "Hello World");
```

### Adding Children

```javascript
const element = vineDom("div", 
    vineDom("h1", "Header"),
    vineDom("p", "Paragraph text")
);
```

### Chaining Attributes

```javascript
const element = vineDom("div", "Content")
    .att("class", "container")
    .att("id", "main");
```

### Nested Example

```javascript
const app = vineDom("div",
    vineDom("h1", "Welcome").att("class", "title"),
    vineDom("p", "This is VineDOM").att("class", "subtitle")
).att("id", "app");

document.body.append(app);
```

## Learning Outcomes

While building VineDOM, I explored several key JavaScript concepts:

1. **DOM Manipulation**: Learned how to dynamically create and modify HTML elements without direct HTML writing.

2. **Function Chaining**: Implemented a fluent interface that allows method chaining (like jQuery) for more readable code.

3. **Rest Parameters**: Used JavaScript's rest parameters (`...children`) to handle variable numbers of child elements.

4. **Higher-Order Functions**: Created functions that return modified elements, enabling the chaining pattern.

5. **Closures**: Leveraged closures to maintain element context in the `.att()` method.

## Inspiration

This project was inspired by Tsoding's functional programming content on [YouTube](https://www.youtube.com/c/Tsoding) and his GitHub repositories at [https://github.com/tsoding](https://github.com/tsoding). The simplicity and elegance of functional approaches to DOM manipulation motivated me to create this minimal implementation.
