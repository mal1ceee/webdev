# CSS Basics Cheat Sheet

This guide introduces CSS, the language used to style and layout HTML elements on the web. Perfect for beginners and non-tech people who want to make their webpages look visually appealing!

## Table of Contents

1. [What is CSS?](#what-is-css)
2. [CSS Syntax](#css-syntax)
3. [Adding CSS to HTML](#adding-css-to-html)
4. [Selectors](#selectors)
5. [Common CSS Properties](#common-css-properties)
6. [Box Model](#box-model)
7. [Positioning](#positioning)
8. [CSS Flexbox](#css-flexbox)

---

## What is CSS?

CSS stands for **Cascading Style Sheets**. It’s used to style and layout HTML elements, including colors, fonts, spacing, and positioning.

---

## CSS Syntax

CSS rules are written in pairs of **selectors** (what you want to style) and **declarations** (how you want to style it).

```css
selector {
    property: value;
}
```

Example:

```css
p {
    color: blue;
    font-size: 16px;
}
```

---

## Adding CSS to HTML

There are three ways to add CSS to HTML:

1. **Inline CSS**: Add CSS directly in the HTML tag.
   ```html
   <p style="color: blue;">This is a blue paragraph.</p>
   ```

2. **Internal CSS**: Add CSS inside a `<style>` tag in the HTML `<head>`.
   ```html
   <head>
       <style>
           p {
               color: blue;
           }
       </style>
   </head>
   ```

3. **External CSS**: Link to an external CSS file.
   ```html
   <head>
       <link rel="stylesheet" href="styles.css">
   </head>
   ```

---

## Selectors

CSS selectors specify which HTML elements you want to style.

- **Type Selector**: Styles all elements of a type.
  ```css
  p {
      color: green;
  }
  ```

- **Class Selector**: Styles elements with a specific class (use `.`).
  ```css
  .highlight {
      background-color: yellow;
  }
  ```

- **ID Selector**: Styles an element with a specific ID (use `#`).
  ```css
  #header {
      font-size: 24px;
  }
  ```

---

## Common CSS Properties

- **Color**: Sets text color.
  ```css
  color: red;
  ```

- **Background Color**: Sets background color.
  ```css
  background-color: lightgray;
  ```

- **Font Size**: Adjusts text size.
  ```css
  font-size: 18px;
  ```

- **Padding**: Adds space inside an element’s border.
  ```css
  padding: 10px;
  ```

- **Margin**: Adds space outside an element’s border.
  ```css
  margin: 15px;
  ```

---

## Box Model

The box model is essential to understand CSS layout. Every element has a box, which consists of:

1. **Content**: The actual content, like text or an image.
2. **Padding**: Space between content and border.
3. **Border**: The edge around the padding.
4. **Margin**: Space outside the border.

Example:

```css
div {
    padding: 10px;
    border: 2px solid black;
    margin: 20px;
}
```

---

## Positioning

CSS allows positioning elements in different ways:

- **Static** (default): Normal flow of the document.
  ```css
  position: static;
  ```

- **Relative**: Positioned relative to its normal position.
  ```css
  position: relative;
  top: 10px;
  left: 20px;
  ```

- **Absolute**: Positioned relative to its nearest positioned ancestor.
  ```css
  position: absolute;
  top: 30px;
  left: 40px;
  ```

- **Fixed**: Positioned relative to the viewport (browser window).
  ```css
  position: fixed;
  bottom: 10px;
  right: 10px;
  ```

---

## CSS Flexbox

Flexbox is a layout model that makes it easier to design flexible, responsive layouts.

- **Container**: Use `display: flex;` to start using Flexbox.
  ```css
  .container {
      display: flex;
      justify-content: center;
      align-items: center;
  }
  ```

- **Common Flexbox Properties**:
  - **`justify-content`**: Aligns items horizontally.
  - **`align-items`**: Aligns items vertically.
  - **`flex-direction`**: Defines the direction of items (row, column).

Example:

```css
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
```

---

This cheat sheet covers the basics of CSS to get you started with styling simple web pages. Try experimenting with different properties to see how they affect your webpage!
