type CommonState = { x: number, y: number }

const common = {
  state: {
    x: 0,
    y: 1
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state: CommonState, payload: number) {
      return {
        ...state,
        x: state.x + (payload || 1)
      }
    },
  },
  // tslint:disable-next-line
  effects: (dispatch: any) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload: number, _rootState: { [key: string]: CommonState }) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.common.increment(payload)
    },
  }),
}

export default common
