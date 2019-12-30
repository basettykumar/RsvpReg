import actions from '../actionType'

export const InitialState = {
    address: "",
    error: null
}

const reducer = (state = InitialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case actions.createAddressTag.UPDATE_ADDRESS_SUCCESS:
            console.log(action,"SUCCESSACTION");
            
            return {
                ...state,
                address:action.payload
            }

        case actions.createAddressTag.UPDATE_ADDRESS_FAILURE:
            return {
                ...state
            }
        default:
            return state
    }
}

    export default reducer;