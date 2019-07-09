


function sanitizeReducers(reducersObject) {
  const reducerKeys = Object.keys(reducersObject)

  const finalReducers = reducerKeys.reduce((accumulator, current) => {
    const reducerWannaBe = reducersObject[current]

    if (typeof reducerWannaBe === 'function') accumulator[current] = reducerWannaBe
    else console.error(`combineReducers received key ${current} which is not a function`)

  }, {})

  return finalReducers
}

export default function combineReducers(reducersObject) {
  const reducerKeys = Object.keys(reducersObject)

  return (state = {}, action) => {
    if (!action.type) {
      console.warn('typeless action received, ignoring')
      return state
    }

    console.group("action ", action.type)
    console.log('prev state ', state)
    console.log('action ', action)
    reducerKeys.forEach(key => {
      state[key] = reducersObject[key](state, action)
    })
    console.log('next state ', state)
    console.groupEnd()

    return state
  }
}

