<template>
  <div class="tooltip">
    <slot />

    <div class="helper">
      <span class="tooltiptext">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tooltip",
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
  .tooltip {
    position: relative;
    display: flex;

    .helper {
      position: absolute;
    }

    .tooltiptext {
      visibility: hidden;
      transition: 0.5s;
      opacity: 0;
      background-color: #5e5e5e;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px 10px;
      margin-left: 27px;
      margin-top: 20px;
      font-size: 14px;
      position: fixed;
      z-index: 1;
      white-space: nowrap;
      pointer-events: none;
    }
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
</style>