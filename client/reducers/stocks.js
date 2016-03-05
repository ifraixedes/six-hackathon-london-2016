
import { handleActions } from 'redux-actions'

const initialState = []

export default handleActions({
  'add stock' (state, action) {
    let vals = state.map(s => s.value)
    let total = vals.reduce((a, e) => a + e, 0)
    const val = generateValue(total)

    vals.push(val)
    total = vals.reduce((a, e) => a + e, 0)

    vals = state.map(s => {
      return {
        label: s.label,
        value: Math.round(s.value / total * 100)
      }
    })

    if (total === 0) {
      total = val
    }

    vals.push({
      label: action.payload.name,
      value: Math.round(val / total * 100)
    })

    return vals
  }
}, initialState)

function generateValue(total) {
  let val = 0;

  if (total <= 0) {
    return 1;
  }

  do {
    val = Math.random()
  } while (!val);

  return val * total
}
