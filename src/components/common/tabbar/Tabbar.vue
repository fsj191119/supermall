<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
</script>

<style scoped>
  #tab-bar {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    text-align: center;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    box-shadow: 0 -5px 2px rgba(100, 100, 100, 0.2);
  }

</style>
