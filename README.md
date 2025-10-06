# Assignment-04 – Problem Solving with JavaScript

This repository contains **five JavaScript problems** designed to practice logical thinking, data validation, loops, and condition-based problem solving. Each problem uses real-world-like examples to strengthen understanding of fundamental programming concepts.

---

## 📌 Problems Overview

### ✅ Problem 01: Fine Calculation

- **Input:** A positive number `fare`.
- **Task:**

  - If `fare` is a valid number and greater than 0, calculate the total fine as:

    ```
    total = fare + 20% of fare + 30
    ```

  - Otherwise, return `"Invalid"`.

- **Output:** Total fine value.

---

### ✅ Problem 02: Character Checker

- **Input:** A string `str`.
- **Task:**

  - Remove all spaces from the string.
  - Convert all letters to **uppercase**.
  - Return `"Invalid"` if the input is not a string.

- **Output:** A cleaned-up uppercase string.

---

### ✅ Problem 03: Best Team Finder

- **Input:** Two player/team objects containing `{ name, foul, cardY, cardR }`.
- **Task:**

  - Calculate the total penalty points = `foul + cardY + cardR` for both teams.
  - Return the team with the **lower total**.
  - If totals are equal → `"Tie"`.
  - If invalid input → `"Invalid"`.

- **Output:** Winning team’s name or `"Tie"`.

---

### ✅ Problem 04: Same Array Checker

- **Input:** Two arrays `arr1` and `arr2`.
- **Task:**

  - Check if both arrays are of the same length and have the same elements in the same order.
  - Return `"Invalid"` if inputs are not arrays.

- **Output:**

  - `true` → Arrays are identical.
  - `false` → Arrays differ.

---

### ✅ Problem 05: Result Maker

- **Input:** An array of numbers `marks`.
- **Task:**

  - Calculate the **average** of all marks (rounded to nearest integer).
  - Count how many students **passed** (`mark ≥ 40`) and how many **failed**.
  - If input is invalid, return `"Invalid"`.

- **Output:**

  ```js
  {
    finalScore: averageMark,
    pass: totalPassed,
    fail: totalFailed
  }
  ```

---

## 🛠️ Technologies Used

- **Language:** JavaScript (Vanilla)
- **Runtime:** Node.js / Browser Console

---

## ✨ Author

Developed by **Md. Rakibul Islam Rakib**
