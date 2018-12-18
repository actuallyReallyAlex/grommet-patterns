import { deepFreeze } from 'grommet/utils'
import { grommet } from 'grommet/themes'
import 'typeface-roboto'


export const theme = deepFreeze(grommet, {
  global: {
    font: {
      family: 'Roboto, Arial, sans-serif'
    }
  },
})
