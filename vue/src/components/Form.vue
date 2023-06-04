<script setup></script>

<template>
  <form>
    <div class="form__header">
      <div class="header__top">
        <div class="header__title">
          <div class="title__img">
            <img type="image/svg+xml" src="/userSignIn.svg" alt="user icon" />
          </div>
          <h1 class="title__text">Sign in</h1>
        </div>
        <div class="header__cross">
          <img src="/cross.svg" alt="cross icon" />
        </div>
      </div>
      <p>Login to your account - enjoy exclusive<br />features & many more</p>
    </div>
    <div class="form__body">
      <div class="input">
        <label for="email">Email<sup>*</sup></label>
        <div class="email">
          <div class="icon icon__email"></div>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>
      <div class="input">
        <label for="password">Password<sup>*</sup></label>
        <div class="password showEye">
          <div class="icon icon__password"></div>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />
          <div class="icon icon__eye"></div>
        </div>
      </div>
      <div class="remeber__me">
        <div class="remeber__checkbox">
          <input id="remeberme" type="checkbox" />
          <label for="remeberme">Remember me</label>
        </div>
        <a href="#">Forget Password?</a>
        <!-- replace anchor tag with router element if you're using vue router -->
      </div>
    </div>
    <div class="form__footer">
      <div class="authentication">
        <button class="submit" type="submit">Sign in</button>
        <div class="form__control">
          <p>
            Don't have an account?
            <a href="#">Sign up</a>
            <!-- replace anchor tag with router element if you're using vue router -->
          </p>
        </div>
      </div>
      <div class="authentication or">
        <div class="line"></div>
        <p class="or__text">OR</p>
        <div class="line"></div>
      </div>
      <div class="authentication">
        <button class="auth__button">
          <img class="auth" src="/google.svg" alt="google icon" />Google
        </button>
        <button class="auth__button">
          <img class="auth" src="/twitter.svg" alt="twitter icon" />Twitter
        </button>
      </div>
    </div>
  </form>
</template>

<style scoped>
/* copy following root css to you style.css or main css file */

/* :root {
  --clr-primary: hsl(234, 100%, 54%);

  --clr-submit-text: white;

  --clr-accent: hsl(0, 0%, 91%);
  --clr-accent-100: hsl(0, 0%, 71%); 
  --clr-accent-120: hsl(0, 0%, 38%);

  --clr-accent-200: hsl(0, 100%, 50%);

  --clr-accent-300: hsl(29, 100%, 47%);

  --ff: "Inter", sans-serif;

  --fw-regular: 400;
  --fw-medium: 500;
} */

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap");

/* CSS reset ignore this */
/*
  1. Use a more-intuitive box-sizing model.
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html,
body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img,
picture,
video,
canvas,
svg {
  /* display: block; */
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input,
button,
textarea,
select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root,
#__next {
  isolation: isolate;
}
/* CSS reset end*/

h1 {
  font-size: 1.5rem;
}

p,
a,
button,
label {
  font-size: 1.25rem;
}

.header__top,
.header__title,
.remeber__me {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

form,
.input,
.form__footer,
.form__header,
.authentication,
.form__body {
  display: flex;
  flex-direction: column;
}

form {
  font-family: var(--ff);
  width: 587px;
  background-color: white;
  padding: 32px;
  border-radius: 1rem;

  gap: 2.5rem;
}

button,
#password,
#email {
  border: 1px solid var(--clr-accent);
  border-radius: 0.75rem;
}

a {
  text-decoration: none;
  color: var(--clr-primary);
  font-weight: var(--fw-medium);
}

sup {
  color: var(--clr-accent-200);
  font-size: 1rem;
}

/* form header */

.header__cross {
  padding: 0.875rem;
  cursor: pointer;
}

.header__title {
  gap: 1rem;
}

.form__header {
  gap: 24px;
}

.title__img {
  border: 1px solid var(--clr-accent);
  padding: 14px;
  border-radius: 50%;
  display: grid;
}

/* form body */

div > label {
  margin-bottom: 1rem;
}
.form__body {
  gap: 32px;
}

#email,
#password {
  width: 100%;
  padding: 1rem;
  padding-left: 2.8rem;
}

#remeberme {
  margin-right: 8px;
}

input[type="checkbox"] + label {
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 20px;
  height: 20px;
  border: 2px solid var(--clr-primary);
  border-radius: 0.25em;
  outline: none;

  translate: 0 10%;

  position: relative;
  cursor: pointer;
}

input[type="checkbox"]:checked {
  background-color: var(
    --clr-primary
  ); /* Set the background color when checked */
}

input[type="checkbox"]:checked::before {
  content: "\2713";
  font-size: 20px;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
}

.password,
.email {
  position: relative;
}

.icon {
  content: "";
  position: absolute;
  top: 54%;
  translate: 0 -50%;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
}

.icon__password {
  left: 1rem;
  background-image: url("/password.svg");
}
.icon__email {
  left: 1rem;
  background-image: url("/email.svg");
}

.icon__eye {
  right: 1rem;
  background-image: url("/hideEye.svg");
  cursor: pointer;
}

.showEye {
  background-image: url("/showEye.svg");
  background-repeat: no-repeat;
}

/* form footer */

.submit {
  margin-bottom: 12px;
  border: none;
  color: var(--clr-submit-text);
  background-color: var(--clr-accent-100);
}

.form__footer {
  gap: 24px;
}

.authentication {
  align-items: center;
}

button {
  display: block;
  width: 100%;
  background-color: transparent;
  border: 1px solid #ccc;
  padding: 1.125rem;

  cursor: pointer;
}

.auth {
  width: 28px;
  aspect-ratio: 1;
}

.auth__button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8125rem;
  gap: 12px;
}

.auth__button:not(:last-child) {
  margin-bottom: 12px;
}

.or {
  flex-direction: row;
}

.or__text {
  margin-left: 16px;
  margin-right: 16px;
}

.line {
  width: 100%;
  height: 1px;
  background-color: #ccc;
}
</style>
