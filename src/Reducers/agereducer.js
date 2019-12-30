import actions from '../actionType'

export const InitialState = {
    age: null,
    error: null
}

const reducer = (state = InitialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case actions.createAgeTag.UPDATE_AGE_SUCCESS:
            console.log(action,"SUCCESSACTION");
            
            return {
                ...state,
                age:action.payload
            }

        case actions.createAgeTag.UPDATE_AGE_FAILURE:
            return {
                ...state
            }
        default:
            return state
    }
}

    export default reducer;