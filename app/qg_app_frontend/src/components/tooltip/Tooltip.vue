<template>
  <div class="tooltip">
    <slot />
    <span class="tooltiptext">{{ text }}</span>
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

    .tooltiptext {
      visibility: hidden;
      transition: 0.5s;
      opacity: 0;
      background-color: black;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px 10px;
      top: 100%;
      /*left: 50%;*/
      /*transform: translateX(50%);*/
      margin-left: -60px;
      font-size: 14px;
      position: absolute;
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