import actions from '../actionType'

export function updatedName (name){
console.log("XXXXXX");

 if (name === "") {
     return dispatch =>{
         return dispatch(UpdateFailure("passing empty string"))
     }
 } else {
     return dispatch => {
         return dispatch(UPdateSuccess(name))
     }
 }
}

export function updatedAge (age){
if (age===null) {
    return dispatch => {
        return dispatch(UpdatedageFailure("please enter age"))
    }
}else {
    return dispatch => {
        return dispatch(UPdateageSuccess(age))
    }
}
}


export function updateLocation (location){
    if (location==="") {
        return dispatch => {
            return dispatch(UpdateLocationFailure("please enter Location"))
        }
    }else {
        return dispatch => {
            return dispatch(UPdateLocationSuccess(location))
        }
    }
}

export function updateGuests (guests){
    if (guests===null) {
        return dispatch => {
            return dispatch(UpdateguestsFailure("please enter Location"))
        }
    }else {
        return dispatch => {
            return dispatch(UPdateguestsSuccess(guests))
        }
    }
}

export function updateAddress (address){
    if (address===null) {
        return dispatch => {
            return dispatch(UpdateaddressFailure("please enter address"))
        }
    }else {
        return dispatch => {
            return dispatch(UPdateaddressSuccess(address))
        }
    }
}

// export function appDat (data)
// {
//    if () 
// }





export function UPdateSuccess(response) {
        return {
            type: actions.createNameTag.UPDATENAME_DATA_SUCCESS,
            payload:response,
        };
    }

export function UpdateFailure(response) {
    return {
        type: actions.createNameTag.UPDATENAME_DATA_FAILURE,
        payload: response,
    };
}
export function UPdateageSuccess(response) {
    return {
        type: actions.createAgeTag.UPDATE_AGE_SUCCESS,
        payload:response,
    };
}

export function UpdateageFailure(response) {
    return {
        type: actions.createAgeTag.UPDATE_AGE_FAILURE,
        payload: response,
    };
}

export function UPdateLocationSuccess(response) {
    return {
        type: actions.createLocationTag.UPDATE_LOCATION_SUCCESS,
        payload:response,
    };
}

export function UpdateLocationFailure(response) {
    return {
        type: actions.createLocationTag.UPDATE_LOCATION_FAILURE,
        payload: response,
    };
}

export function UPdateguestsSuccess(response) {
    return {
        type: actions.createGuestsTag.UPDATE_GUESTS_SUCCESS,
        payload:response,
    };
}

export function UpdateguestsFailure(response) {
    return {
        type: actions.createGuestsTag.UPDATE_GUESTS_FAILURE,
        payload: response,
    };
}

export function UPdateaddressSuccess(response) {
    return {
        type: actions.createAddressTag.UPDATE_ADDRESS_SUCCESS,
        payload:response,
    };
}

export function UpdateaddressFailure(response) {
    return {
        type: actions.createAddressTag.UPDATE_ADDRESS_FAILURE,
        payload: response,
    };
}

