<script setup lang="ts">
import IconCopyToClipboard from "../icons/IconCopyToClipboard.vue";
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
import { defineComponent } from "vue";

const { toClipboard } = useClipboard();

export default defineComponent({
  name: "Question",
  props: {
    text: String,
  },
  methods: {
    copyToClipboard: async function () {
      try {
        if (!this.text) {
          return;
        }

        await toClipboard(this.text);
      } catch (e) {
        console.error("Failed to copy question", e);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.question {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
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
