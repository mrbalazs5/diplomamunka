<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="menu">
      <RouterLink to="/">Generator</RouterLink>
      <RouterLink to="/training">Training</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style lang="scss">
@import "@/assets/base.scss";

header {
  display: flex;
  justify-content: center;
  background-color: $menu-bg-color;
  box-shadow: 0px 1px 10px 5px #101010;
}

.menu {
  font-size: 18px;

  a {
    display: inline-block;
    padding: 10px;
    font-weight: bold;
    transition: 0.5s;
    border-bottom: 2px solid transparent;

    &:hover {
      border-color: $base-text-color;
    }
  }
}
</style>
