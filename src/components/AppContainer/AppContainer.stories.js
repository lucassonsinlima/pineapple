import { storiesOf } from '@storybook/vue'
import AppContainer from './AppContainer'

storiesOf('AppContainer', module)
  .add('normal', () => ({
    components: { AppContainer },
    template:
    `
      <AppContainer/>
    `,
  }))