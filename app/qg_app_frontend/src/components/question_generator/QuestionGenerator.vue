<script setup lang="ts">
  import IconCopyToClipboard from '../icons/IconCopyToClipboard.vue'
  import Tooltip from "@/components/tooltip/Tooltip.vue";
</script>

<template>
  <div class="question-generator">
    <div class="generator-input">
      <h2 class="sub-title">Give me some context</h2>

      <textarea v-model="context" name="context" class="context" v />

      <button class="submit-btn" @click="generateQuestions()">Generate</button>
    </div>
    <div class="generator-output">
      <div class="output-header">
        <h2 class="sub-title">Your questions</h2>

        <Tooltip v-if="isLoaded && questions.length > 0" class="copy-all-btn" text="Copy questions to clipboard">
          <IconCopyToClipboard @click="copyAllToClipboard()" />
        </Tooltip>
      </div>

      <img class="loader" v-if="!isLoaded" src="../../assets/loader.gif" alt="Loading">

      <div v-if="isLoaded && questions.length > 0" class="questions">
        <Question v-for="(question, k) in questions" :text="question" :key="k" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import axios from "axios";
  import Question from "@/components/question_generator/Question.vue";
  import useClipboard from "@/utils/useClipboard";

  const { toClipboard } = useClipboard();

  export default {
    name: "QuestionGenerator",
    components: { Question },
    data() {
      return {
        context: "",
        questions: [],
        isLoaded: true
      }
    },
    methods: {
      generateQuestions: function () {
        this.isLoaded = false;

        axios.post('http://localhost:8000/api/generate-questions',
          {
            context: this.context
          }
        )
          .then(response => {
            this.questions = response?.data ?? [];
          })
          .catch(e => {
            console.error("Failed to generate questions", e);
          })
          .finally(() => {
            this.isLoaded = true;
          });
      },
      copyAllToClipboard: async function () {
        try {
          const text = this.questions?.join("\n") ?? "";

          await toClipboard(text);
        } catch (e) {
          console.error("Failed to copy all questions", e);
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/variables";

  .question-generator {
    display: flex;

    & > div {
      width: 50%;
    }
  }

  .generator-input,
  .generator-output {
    padding: 10px 20px;
    background-color: $menu-bg-color;
    max-width: 400px;
    border-radius: 5px;
    height: 40vh;
    max-height: 600px;
    min-height: 300px;
    box-shadow: 0 12px 15px -5px #000000;
  }

  .generator-input {
    margin-left: auto;
    margin-right: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .sub-title {
    margin: 0 0 10px 0;
    text-align: center;
  }

  .context {
    width: 100%;
    resize: none;
    outline: none;
    border-radius: 5px;
    flex: 1;
    margin-bottom: 20px;
    padding: 10px;
    font-size: 16px;
    background-color: $base-text-color;
  }

  .submit-btn {
    max-width: 100px;
    font-size: 16px;
    border: none;
    padding: 10px 15px;
    transition: 0.5s;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #088522;
      color: white;
    }
  }

  .generator-output {
    margin-left: 10px;
    margin-right: auto;
    overflow-y: auto;
    overflow-x: hidden;

    .sub-title {
      margin: 0;
    }
  }

  .output-header {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    margin-bottom: 10px;
  }

  .copy-all-btn {
    display: inline-block;
    stroke: #088522;
    margin-left: 5px;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }

  .loader {
    display: block;
    width: 80px;
    margin: 0 auto;
  }
</style>
