<template>
  <main class="AboutPage">
    <h1 class="page-title">About the application</h1>
    <p>This application generates questions based on a given context.</p>
    <p>It uses a Large Language Model(LLM) called T5.</p>
    <p>It's capable to generate various types of questions based on all kinds of topics.</p>

    <br>

    <h3><u>How to use it:</u></h3>

    <ul>
      <li>Give the application a text context</li>
      <li>Wait for the application to generate the questions</li>
      <li>Copy the generated questions to your clipboard and feel free to use them</li>
    </ul>

    <br>

    <p>Available languages: English</p>

    <br>

    <p>Created By: Balázs Megyeri</p>
  </main>
</template>

<script lang="ts">
export default {
  name: "AboutPage",
};
</script>

<style scoped>
.AboutPage {
  width: 500px;
  margin: 0 auto;
  text-align: left;
}
</style>
