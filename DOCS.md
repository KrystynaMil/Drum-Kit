<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TOC -->

- [handlers](#handlers)
  - [play-sound.js](#srchandlersplay-soundjs)
- [listeners](#listeners)
  - [play-sound.js](#srclistenersplay-soundjs)
  - [remove-transition.js](#srclistenersremove-transitionjs)
- [logic](#logic)

<!-- END TOC -->

<!-- BEGIN DOCS -->

---

# Handlers

Handler function define user interactions. They will:

- read user input from events and from the DOM
- read and modify program data variables
- process user data with logic functions
- update the DOM to show changes to the user
- log any important information for developers

---

### [./src/handlers/play-sound.js](./src/handlers/play-sound.js?study)

<a name="playSound"></a>

## playSound(event)

play a music when the user press the nine keys , which are connected to audio files

| Param | Type               | Description                                          |
| ----- | ------------------ | ---------------------------------------------------- |
| event | <code>Event</code> | triggered whenever a user press one of the nine keys |

[TOP](#DOCS)

---

---

# Listeners

Event listeners are used to connect handler functions to user interactions with the DOM.

You can use the same handler in many different listeners, or add more than one listeners to the same DOM element.

---

### [./src/listeners/play-sound.js](./src/listeners/play-sound.js?study)

<a name="user input
calls the reverseHandler when a user pressed at a short period"></a>

## user input

calls the reverseHandler when a user pressed at a short period

---

### [./src/listeners/remove-transition.js](./src/listeners/remove-transition.js?study)

<a name="stop the transition 
calls handler that stop the transition"></a>

## stop the transition

calls handler that stop the transition

[TOP](#DOCS)

---

---

# Logic

Logic functions are pure functions. They take primitives, objects or arrays as arguments and they return primitives, objects or arrays. Handlers will use logic functions to transform user input.

Logic functions will _never_ ...

- read from the DOM
- write to the DOM
- use events
- use prompt/alert/confirm
- use variables that are not parameters
- use variables that are not declared locally

[TOP](#DOCS)

---

<!-- END DOCS -->
