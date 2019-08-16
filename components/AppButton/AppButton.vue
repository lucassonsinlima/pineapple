<template>
  <div>
    <button class="btn btn--yellow">pineapple button</button>
  </div>
</template>

<script>
export default {
  name: 'AppButton'
}
</script>

<style scoped lang="scss">

.btn {
  height: 30px;
  padding: 5px;
  border: 1px solid white;

  &--yellow {
    background: yellow;
  }
}

</style>