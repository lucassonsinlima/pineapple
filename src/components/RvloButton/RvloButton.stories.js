import { storiesOf } from '@storybook/vue'
import RvloButton from './RvloButton'

storiesOf('RvloButton', module)
  .add('normal', () => ({
    components: { RvloButton },
    template:
      `
      <RvloButton :title="buttonTitle"
                    size="medium"
                    :aHref="'/employers/candidates'"/>
    `,
  }))
