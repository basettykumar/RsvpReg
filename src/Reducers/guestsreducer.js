import actions from '../actionType'

export const InitialState = {
    guests: null,
    error: null
}

const reducer = (state = InitialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case actions.createGuestsTag.UPDATE_GUESTS_SUCCESS:
            console.log(action,"SUCCESSACTION");
            
            return {
                ...state,
                guests:action.payload
            }

        case actions.createGuestsTag.UPDATE_GUESTS_FAILURE:
            return {
                ...state
            }
        default:
            return state
    }
}

    export default reducer;