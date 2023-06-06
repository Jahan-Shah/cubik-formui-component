<script setup>
import { ref, computed } from "vue";

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const isPassCorrect = ref(true);

const showPass = () => {
  showPassword.value = !showPassword.value;
};

const inputActive = computed(() => {
  return (
    email.value.includes("@") &&
    email.value.length > 0 &&
    password.value.length > 8
  );
});
</script>

<template>
  <form @submit.prevent="">
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
            class="email__input"
            type="email"
            placeholder="Enter your email"
            required
            v-model="email"
          />
        </div>
      </div>
      <div class="input">
        <label for="password">Password<sup>*</sup></label>
        <div class="password">
          <div class="icon icon__password"></div>
          <input
            id="password"
            class="password__input"
            :class="{ error: !isPassCorrect }"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Enter your password"
            required
            v-model="password"
          />
          <div
            class="icon icon__eye"
            :class="{ showEye: showPassword }"
            @click="showPass"
          ></div>
        </div>
        <p v-if="!isPassCorrect" class="invalidPass">
          <img class="danger" src="/danger.svg" alt="danger icon" />Invalid
          Password
        </p>
      </div>
      <div class="remeber__me">
        <div class="remeber__checkbox">
          <input id="remeberme" type="checkbox" required />
          <label for="remeberme">Remember me</label>
        </div>
        <a href="#">Forget Password?</a>
        <!-- replace anchor tag with router element if you're using vue router -->
      </div>
    </div>
    <div class="form__footer">
      <div class="authentication">
        <button :disabled="!inputActive" class="submit filled" type="submit">
          Sign in
        </button>
        <div class="form__control">
          <p>
            Don't have an account?
            <RouterLink to="/signup">Sign up</RouterLink>
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
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap");
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
.password__input,
.email__input {
  border: 1px solid var(--clr-neutral-100);
  border-radius: 0.75rem;
}
.password__input:is(:active, :focus),
.email__input:is(:active, :focus) {
  outline: none;
  border: 1px solid var(--clr-primary);
  box-shadow: 0 0 8px var(--clr-primary-150);
}

a {
  text-decoration: none;
  color: var(--clr-primary);
  font-weight: var(--fw-medium);
}

sup {
  color: var(--clr-neutral-200);
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
  border: 1px solid var(--clr-neutral-200);
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

.password__input,
.email__input {
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
  background-image: url("/showEye.svg");
  cursor: pointer;
}

.showEye {
  background-image: url("/hideEye.svg");
  background-repeat: no-repeat;
}

/* form footer */

.submit:disabled {
  background-color: var(--clr-neutral-200);
  cursor: not-allowed;
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

.invalidPass {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: var(--clr-accent-200);
  margin-top: 1rem;
}

.danger {
  translate: 0 3px;
  margin-right: 5px;
}

.error {
  background-color: var(--clr-accent-250);
  border-color: var(--clr-accent-200);
  box-shadow: 0 0 8px var(--clr-accent-225);
}

/* util classes */
.filled {
  margin-bottom: 12px;
  border: none;
  color: var(--clr-neutral);
  background-color: var(--clr-primary);
}
</style>
