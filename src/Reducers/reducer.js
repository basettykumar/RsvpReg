import actions from '../actionType'

export const InitialState = {
    // name: "",
    error: null,
    formData:{
        
    }
}

const reducer = (state = InitialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case actions.createNameTag.UPDATENAME_DATA_SUCCESS:
            console.log(action,"SUCCESSACTION");
            
            return {
                ...state,
                formData:action.payload
            }

        case actions.createNameTag.UPDATENAME_DATA_FAILURE:
            return {
                ...state
            }
        
        default:
            return state
    }
}

    export default reducer;