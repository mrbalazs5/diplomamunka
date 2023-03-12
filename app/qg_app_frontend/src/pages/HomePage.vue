<template>
  <main class="HomePage">
    <h1 class="page-title">Question Generator</h1>
    <QuestionGenerator />
  </main>
</template>

<script lang="ts">
import QuestionGenerator from "@/components/question_generator/QuestionGenerator.vue";

export default {
  name: "HomePage",
  components: { QuestionGenerator },
};
</script>
