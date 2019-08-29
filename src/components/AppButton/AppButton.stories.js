import { storiesOf } from '@storybook/vue'
import AppButton from './AppButton'

storiesOf('AppButton', module)
  .add('normal', () => ({
    components: { AppButton },
    template:
    `
      <AppButton/>
    `,
  }))