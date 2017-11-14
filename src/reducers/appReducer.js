const defaultState = {
    value: 0
}

function appReducer (state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1
            }
        case 'DECREMENT' :
            return {
                ...state, 
                value: state.value - 1
            }
        default:
            return state;
            
    }
}

export default appReducer