<template>
  <div>
    <h1>Using some imported components</h1>
    <SharedButton />
    <RvloButton :title="buttonTitle"
                    size="medium"
                    :aHref="'/employers/candidates'"/>
  </div>
</template>

<script >
import AppButton from "@lhuscaslima/reusable-components/AppButton/AppButton.vue"
import RvloButton from '../RvloButton/RvloButton.vue'

export default {
  name: 'AppButton',
  components: {
    'SharedButton': AppButton,
    RvloButton
  },
  data () {
    return {
      buttonTitle: 'Rvlo Button Title'
    }
  }
}
</script>

<style lang="scss">
@import '../assets/themes/theme';
@import '../assets/themes/tokens';

</style>
