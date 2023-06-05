<script setup>
import { ref } from "vue";
import Form from "./components/Form.vue";

const pass = "p@ssword123";
const isPassCor = ref(true);

const validatePass = (formPass) => {
  isPassCor.value = formPass === pass;
  return isPassCor.value;
};
</script>

<template>
  <Form
    @formSubmitted="validatePass"
    :isPassCorrect="isPassCor"
    ForgetPass="/"
  />
  <!-- <RouterView v-slot="slotProps">
    <Transition name="route" mode="out-in">
      <component ForgetPass="/forget" :is="slotProps.Component"></component>
    </Transition>
  </RouterView> -->
</template>

<style>
body {
  display: grid;
  place-items: center;
  background-color: #e7e7e7;
}
</style>
