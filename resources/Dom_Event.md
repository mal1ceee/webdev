# DOM Events Cheat Sheet

This guide introduces common DOM events in JavaScript, with simple explanations and examples. Perfect for beginners and non-tech people who want to add interactivity to their web pages!

## Table of Contents

1. [Mouse Events](#mouse-events)
2. [Keyboard Events](#keyboard-events)
3. [Form Events](#form-events)
4. [Window Events](#window-events)
5. [Touch Events](#touch-events)

---

## Mouse Events

Mouse events let us interact with elements using clicks and hovers.

- **`click`**: Fires when an element is clicked.

  ```javascript
  document.getElementById("myButton").addEventListener("click", function() {
      alert("Button clicked!");
  });
  // When "myButton" is clicked, an alert shows "Button clicked!"
  ```

- **`dblclick`**: Fires on a double-click of an element.

  ```javascript
  document.getElementById("myDiv").addEventListener("dblclick", function() {
      document.getElementById("myDiv").textContent = "You double-clicked me!";
  });
  // Changes text to "You double-clicked me!" on double-click
  ```

- **`mouseover`**: Triggers when the mouse is over an element.

  ```javascript
  document.getElementById("myText").addEventListener("mouseover", function() {
      document.getElementById("myText").style.color = "blue";
  });
  // Changes text color to blue when mouse is over "myText"
  ```

- **`mouseout`**: Fires when the mouse pointer leaves an element.

  ```javascript
  document.getElementById("myText").addEventListener("mouseout", function() {
      document.getElementById("myText").style.color = "black";
  });
  // Changes text color back to black when mouse leaves "myText"
  ```

---

## Keyboard Events

Keyboard events let us capture keystrokes on the page.

- **`keydown`**: Fires when any key is pressed down.

  ```javascript
  document.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
          alert("Enter key pressed!");
      }
  });
  // Shows alert if the Enter key is pressed
  ```

- **`keyup`**: Fires when a key is released.

  ```javascript
  document.addEventListener("keyup", function() {
      console.log("Key released!");
  });
  // Logs message when any key is released
  ```

---

## Form Events

Form events help us interact with forms, like validating input or submitting data.

- **`submit`**: Fires when a form is submitted.

  ```javascript
  document.getElementById("myForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Stops form from submitting
      alert("Form submission prevented!");
  });
  // Prevents form submission and shows alert
  ```

- **`change`**: Fires when the value of an input, select, or textarea changes.

  ```javascript
  document.getElementById("mySelect").addEventListener("change", function() {
      alert("Selection changed!");
  });
  // Shows alert when selection is changed
  ```

- **`focus`**: Fires when an input or textarea gains focus.

  ```javascript
  document.getElementById("myInput").addEventListener("focus", function() {
      document.getElementById("myInput").style.backgroundColor = "yellow";
  });
  // Changes background color to yellow when input is focused
  ```

- **`blur`**: Fires when an input or textarea loses focus.

  ```javascript
  document.getElementById("myInput").addEventListener("blur", function() {
      document.getElementById("myInput").style.backgroundColor = "white";
  });
  // Changes background color to white when input loses focus
  ```

---

## Window Events

Window events let us react to changes in the browser window or document.

- **`load`**: Fires when the entire page has loaded.

  ```javascript
  window.addEventListener("load", function() {
      alert("Page is fully loaded!");
  });
  // Shows alert when page loads
  ```

- **`resize`**: Fires when the window is resized.

  ```javascript
  window.addEventListener("resize", function() {
      console.log("Window resized!");
  });
  // Logs message whenever the window is resized
  ```

- **`scroll`**: Fires when the user scrolls on the page.

  ```javascript
  window.addEventListener("scroll", function() {
      console.log("Page scrolled!");
  });
  // Logs message whenever the page is scrolled
  ```

---

## Touch Events

Touch events are useful for mobile devices, allowing us to interact with touch gestures.

- **`touchstart`**: Triggers when a finger touches the screen.

  ```javascript
  document.getElementById("myBox").addEventListener("touchstart", function() {
      alert("Screen touched!");
  });
  // Shows alert when screen is touched
  ```

- **`touchend`**: Fires when a finger is lifted off the screen.

  ```javascript
  document.getElementById("myBox").addEventListener("touchend", function() {
      alert("Touch ended!");
  });
  // Shows alert when touch ends
  ```

- **`touchmove`**: Triggers when a finger moves on the screen.

  ```javascript
  document.getElementById("myBox").addEventListener("touchmove", function() {
      console.log("Finger is moving on the screen");
  });
  // Logs message as finger moves across the screen
  ```
