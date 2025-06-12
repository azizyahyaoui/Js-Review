
## 🔹 Video 1: [Pure and Impure Functions – JavaScript Concepts Simplified](https://youtu.be/4Ej0LwjCDZQ)

### 🔑 Main Idea:

This video explains the **definition** and **behavior** of **pure vs impure functions** in JavaScript with simple examples.

### ✅ Pure Function

> A **pure function** always:

* Returns the **same output** for the **same input**.
* Has **no side effects** (it doesn’t modify external state like global variables, DOM, files, etc.).

**Example:**

```js
function add(a, b) {
    return a + b;
}
```

* ✅ Always returns the same result for same inputs.
* ✅ Doesn't affect or rely on anything outside its scope.

---

### ❌ Impure Function

> An **impure function** either:

* Gives **different outputs** for the same input,
* Or **alters/depends** on external state (side effects).

**Examples of impurity:**

1. **Modifying external state:**

```js
let counter = 0;

function increaseCounter() {
    counter++; // ❌ changes external variable
}
```

2. **Non-deterministic behavior:**

```js
function getRandom() {
    return Math.random(); // ❌ different result each time
}
```

---

### 📌 Summary:

| Pure                     | Impure                 |
| ------------------------ | ---------------------- |
| Same input = same output | Output may vary        |
| No side effects          | Has side effects       |
| Easier to test and debug | Harder to test         |
| Predictable behavior     | Unpredictable behavior |

---

## 🔸 Video 2: [Side Effects and Pure Functions in JavaScript](https://youtu.be/ZXxahQS1PN8)

### 🔎 Focus:

This one builds on the first by going deeper into **side effects** and **why they matter** in functional programming.

### 📌 Side Effects (the core of impurity)

A function has **side effects** if it:

* Writes/reads from global variables.
* Logs to the console.
* Interacts with the DOM.
* Sends HTTP requests.
* Modifies input parameters (mutates them).

**Example of side effect:**

```js
function updateDOM() {
    document.querySelector("#title").textContent = "Hello"; // ❌ modifies DOM
}
```

### ❗ Why avoid side effects?

* Side effects make code **less predictable** and **harder to test**.
* Pure functions are **self-contained**, making them easier to debug and reuse.

---

### ✅ Converting impure → pure (when possible)

If an impure function only **reads** external state, try passing that state in as an argument.

**Impure:**

```js
let tax = 0.1;

function calculateTotal(price) {
    return price + price * tax;
}
```

**Pure:**

```js
function calculateTotal(price, taxRate) {
    return price + price * taxRate;
}
```

Now it's pure — no external dependency. 🔒

---

## 🧠 TL;DR (for DeathNote)

```txt
Pure Function:
  ✅ Same output for same input
  ✅ No side effects
  ✅ Easy to test

Impure Function:
  ❌ Relies on/changes outside state
  ❌ Causes side effects (DOM, random, console, etc.)
  ❌ Harder to test

Side Effects = Anything outside the function's scope is read or changed.
```
---

## That's great. Now, can you tell me when really should utilize Pure Func? It's obvious, but I want be sure 

Absolutely — it *feels* obvious, but knowing **when** to actually use pure functions (and why) is what separates a "good" dev from a *sharp*, clean coder. So let’s clarify it for real — no fluff, just truth:

---

## ✅ **When to Use Pure Functions (and Why)**

### 1. 🧪 **When you want predictable, testable behavior**

Pure functions are **super easy to test** — just give inputs, check output. No mocking, no setup, no hidden state.

> ✅ Use in: **unit tests**, **business logic**, **algorithms**

**Example:**

```js
function calculateDiscount(price, rate) {
    return price * (1 - rate);
}
```

---

### 2. 🧹 **When you need clean, reusable utilities**

Pure functions don’t carry baggage. You can plug them in anywhere.

> ✅ Use in: **utility libraries**, **data processing**, **transforms**

**Example:**

```js
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
```

---

### 3. 🔁 **In loops, maps, filters, and functional chains**

Higher-order functions like `.map()`, `.filter()`, and `.reduce()` **shine** with pure functions — they expect **no side effects**.

> ✅ Use in: **data transformation**, **functional pipelines**

**Example:**

```js
const prices = [10, 20, 30];
const withTax = prices.map(price => addTax(price, 0.1)); // pure FTW
```

---

### 4. 🧠 **When doing functional programming**

Libraries like **Ramda**, **Lodash/fp**, or even **React** (hooks) promote immutability and pure functions.

> ✅ Use in: **React (especially reducers)**, **state updates**, **clean pipelines**

**Example (Redux reducer - always pure):**

```js
function reducer(state, action) {
    if (action.type === 'INCREMENT') {
        return { ...state, count: state.count + 1 };
    }
    return state;
}
```

---

### 5. 🚨 **Avoid when...**

Sometimes pure isn’t the right tool. You can’t escape **impure** functions when you:

* Interact with the DOM
* Fetch from an API
* Log, randomize, or read from time
* Update global state or localStorage

> That’s okay! Just **contain side effects**. Wrap impure parts outside or isolate them.

---

## 🧠 TL;DR Summary

| Situation                      | Use Pure Function? | Why                          |
| ------------------------------ | ------------------ | ---------------------------- |
| Math, logic, calculations      | ✅ Yes              | Easy to test and debug       |
| Data transformation (map, etc) | ✅ Yes              | Functional programming style |
| React state updates            | ✅ Yes              | Predictable rendering        |
| Utility functions              | ✅ Yes              | Reusable and clean           |
| DOM/API interactions           | ❌ No (but isolate) | Needs side effects           |

---

Pure functions = **safe zones**.
Impure functions = **power tools** (use with care).


