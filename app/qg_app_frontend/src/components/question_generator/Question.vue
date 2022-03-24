<script setup lang="ts">
  import IconCopyToClipboard from '../icons/IconCopyToClipboard.vue'
  import Tooltip from "@/components/tooltip/Tooltip.vue";
</script>

<template>
  <div class="question">
    <span class="content">
      {{ text }}
    </span>
    <Tooltip text="Copy to clipboard">
      <IconCopyToClipboard class="copy-btn" @click="copyToClipboard()" />
    </Tooltip>
  </div>
</template>

<script lang="ts">
  import useClipboard from "@/utils/useClipboard";

  const { toClipboard } = useClipboard();

  export default {
    name: "Question",
    props: {
      text: String
    },
    methods: {
      copyToClipboard: async function (loginData) {
        try {
          await toClipboard(this.text);
        } catch (e) {
          console.error("Failed to copy question", e);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .question {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    font-size: 18px;
  }

  .copy-btn {
    display: inline-block;
    margin-left: 10px;
    width: 20px;
    transition: 0.5s;
    stroke: #088522;
    cursor: pointer;

    &:hover {
      stroke: #ffffff;
    }
  }
</style>