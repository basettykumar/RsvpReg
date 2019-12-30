import actions from '../actionType'

export const InitialState = {
    locality: "",
    error: null
}

const reducer = (state = InitialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case actions.createLocationTag.UPDATE_LOCATION_SUCCESS:
            console.log(action,"SUCCESSACTION");
            
            return {
                ...state,
                locality:action.payload
            }

        case actions.createLocationTag.UPDATE_LOCATION_FAILURE:
            return {
                ...state
            }
        default:
            return state
    }
}

    export default reducer;