<template>
  <RouterView v-slot="slotProps">
    <component :is="slotProps.Component"></component>
  </RouterView>
</template>

<style>
body {
  display: grid;
  place-items: center;
  background-color: #e7e7e7;
}
</style>
