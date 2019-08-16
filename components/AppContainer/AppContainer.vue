<template>
  <div>
    <h1>Using some imported components</h1>
    <SharedButton />
  </div>
</template>

<script>
import AppButton from "@lhuscaslima/app-button/AppButton.vue"

export default {
  name: 'AppButton',
  components: {
    'SharedButton': AppButton
  }
}
</script>

<style scoped>

</style>