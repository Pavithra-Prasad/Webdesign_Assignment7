# Webdesign_Assignment7
# Web Application: Login and Stopwatch

## Overview

This project consists of two parts: a **Login Page** and a **Stopwatch Web Application**. The application is designed using **HTML**, **CSS**, and **JavaScript** (with **jQuery** for the login page). The stopwatch functionality incorporates **async/await**, **Promises**, and **setInterval/clearInterval**.

### Part A: Login Page
The login page includes four fields: Email, Username, Password, and Confirm Password. It performs validation checks (null checks, special character checks, length checks) and only allows login if all fields are valid. Upon successful validation, the user is redirected to the stopwatch page.

### Part B: Stopwatch Web Application
The stopwatch page is a single-page application that displays a stopwatch with three buttons: Start, Stop, and Reset. The stopwatch displays time in "HH:MM:SS" format and allows users to select a date using a date picker. The date picker defaults to the current date.



## Features

### Part A: Login Page

- **Fields**:
  - Email (Only accepts Northeastern email addresses, e.g., `@northeastern.edu`)
  - Username (3-20 characters, no special characters)
  - Password (6-20 characters)
  - Confirm Password (Must match the password)

- **Validations**:
  - Null checks for all fields.
  - Special character checks for Username and Email.
  - Length checks for Username and Password.
  - Error messages are displayed below each field in red if validation fails.
  
- **Login Button**:
  - Initially disabled.
  - Enabled only when all validations pass.
  
- **Redirection**:
  - Upon successful login, the user is redirected to the Stopwatch page with their username displayed.

### Part B: Stopwatch Web Application

- **Stopwatch Label**:
  - Displays time in "HH:MM:SS" format.
  - Initially set to `00:00:00`.
  
- **Date Picker**:
  - Displays the current date by default.
  - Allows selecting past and future dates but is non-editable via direct text input.

- **Buttons**:
  - Start Button: Starts the timer.
  - Stop Button: Pauses the timer.
  - Reset Button: Resets the timer to `00:00:00`.

- **Functionality**:
  - Time starts running when Start is clicked.
  - Time pauses when Stop is clicked.
  - Time resets to `00:00:00` when Reset is clicked.

- **Async/Await & Promises**:
  - Async/await used for handling stopwatch operations (start, stop, reset).
  - Promise used in setting up the current date for the date picker with a delay.


