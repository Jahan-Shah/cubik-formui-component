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
        <div class="email icon">
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
        <div class="password icon">
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
      </div>
      <div class="remeber__me">
        <div class="remeber__checkbox">
          <input id="remeberme" type="checkbox" />
          <label for="remeberme">Remember me</label>
        </div>
        <a href="#">Forget Password?</a>
        <!-- replace anchor tag with router element of you're using vue router -->
      </div>
    </div>
    <div class="form__footer">
      <div class="authentication">
        <button class="submit" type="submit">Sign in</button>
        <div class="form__control">
          <p>
            Don't have an account?
            <a href="#">Sign up</a>
            <!-- replace anchor tag with router element of you're using vue router -->
          </p>
        </div>
      </div>
      <div class="authentication or">
        <div class="line"></div>
        <p class="or__text">or</p>
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

form {
  width: 587px;
  background-color: white;
  padding: 32px;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* form header */

.form__header {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.header__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title__img {
  border: 1px solid black;
  padding: 14px;
  border-radius: 50%;
  display: grid;
}

/* form body */
.form__body {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

#email,
#password {
  width: 100%;
}

.input {
  display: flex;
  flex-direction: column;
}

.icon {
  position: relative;
}

.icon input {
  padding-left: 30px;
}

.icon::before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
}

.email::before {
  background-image: url("/email.svg");
}
.password::before {
  background-image: url("/password.svg");
}

.remeber__me {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* form footer */

.submit {
  margin-bottom: 12px;
}

.form__footer {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.authentication {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  display: block;
  width: 100%;
  background-color: transparent;
  border: 1px solid #ccc;
  padding: 1.125rem;
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
