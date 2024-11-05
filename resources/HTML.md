# HTML Basics Cheat Sheet

This guide introduces the basics of HTML, the language used to structure content on the web. Perfect for beginners and non-tech people who want to learn how to build a simple webpage!

## Table of Contents

1. [What is HTML?](#what-is-html)
2. [HTML Structure](#html-structure)
3. [Basic HTML Tags](#basic-html-tags)
4. [Text Formatting Tags](#text-formatting-tags)
5. [Links and Images](#links-and-images)
6. [Lists](#lists)
7. [Tables](#tables)
8. [Forms](#forms)

---

## What is HTML?

HTML stands for **HyperText Markup Language**. It’s the standard language for creating webpages. HTML uses **tags** to structure content.

---

## HTML Structure

Every HTML page starts with a basic structure. Here’s what it looks like:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Webpage</title>
</head>
<body>
    <h1>Welcome to My Webpage</h1>
    <p>This is my first webpage using HTML!</p>
</body>
</html>
```

- **`<!DOCTYPE html>`**: Declares the document type as HTML5.
- **`<html>`**: The root element of the HTML page.
- **`<head>`**: Contains meta-information like the page title.
- **`<title>`**: Sets the page title (displayed on the browser tab).
- **`<body>`**: Contains all the visible content of the page.

---

## Basic HTML Tags

- **Headings**: Used to create titles or headers.
  ```html
  <h1>Main Title</h1>
  <h2>Subheading</h2>
  <h3>Sub-subheading</h3>
  ```
- **Paragraphs**: Used to write paragraphs of text.
  ```html
  <p>This is a paragraph of text.</p>
  ```
- **Div and Span**: Used to group elements.
  - `<div>` is a block-level element.
  - `<span>` is an inline element.

---

## Text Formatting Tags

- **Bold**: `<strong>Important text</strong>`
- **Italic**: `<em>Emphasized text</em>`
- **Underline**: `<u>Underlined text</u>`

Example:

```html
<p>This is <strong>bold</strong>, <em>italic</em>, and <u>underlined</u> text.</p>
```

---

## Links and Images

- **Links**: Create clickable links.
  ```html
  <a href="https://www.example.com">Visit Example</a>
  ```

- **Images**: Embed images in the webpage.
  ```html
  <img src="image.jpg" alt="Description of image" width="300" height="200">
  ```
  - **`src`**: The path to the image file.
  - **`alt`**: Text description of the image for accessibility.

---

## Lists

- **Ordered List**: Numbered list of items.
  ```html
  <ol>
      <li>First item</li>
      <li>Second item</li>
  </ol>
  ```

- **Unordered List**: Bulleted list of items.
  ```html
  <ul>
      <li>First item</li>
      <li>Second item</li>
  </ul>
  ```

---

## Tables

Tables help organize content into rows and columns.

```html
<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
</table>
```

- **`<th>`**: Table header cell.
- **`<td>`**: Table data cell.
- **`<tr>`**: Table row.

---

## Forms

Forms collect user input, like text, emails, and passwords.

```html
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
    <input type="submit" value="Submit">
</form>
```

- **`<input>`**: Creates input fields (text, email, etc.).
- **`<label>`**: Describes input fields, linked with `for` attribute.
- **`<form>`**: Wraps input elements for submission.

---

This cheat sheet covers the basics of HTML to get you started with structuring simple web pages. Experiment with these tags and try creating your own HTML file!
