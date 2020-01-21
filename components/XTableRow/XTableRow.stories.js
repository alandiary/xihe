import { storiesOf } from '@storybook/vue'
import XTableRow from './XTableRow'

storiesOf('JTableRow', module)
    .add('normal', () => ({
        components: { XTableRow },
        template:
            `
              <XTableRow
                :values="values"
              />
            `,
        data: () => ({
            values: [
                'José Silva',
                'email@email.com',
                '北京市大兴区'
            ]
        })
    }))
