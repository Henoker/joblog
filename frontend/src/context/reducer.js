import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
} from './actions'

const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        return {
            ...state, 
            showAlert:true, 
            alertType:'danger', 
            alertText: 'Please Provide all values!'
        } 
    } 

    if (action.type === CLEAR_ALERT) {
        return {
            ...state, 
            showAlert:false, 
            alertType:'', 
            alertText: ''} 
    } 
    throw new Error(`No such action: ${action.type}`);
}

export default reducer



// const reducer = (state, action) => {
//     if (action.type === DISPLAY_ALERT) {
//         return {
//             ...state, 
//             showAlert: true, 
//             alertType: 'danger',
//             alertText:'Please Provide all values!'
//         }
//     }

//     if (action.type === CLEAR_ALERT) {
//         return {
//             ...state, 
//             showAlert: false, 
//             alertType: '',
//             alertText:''}
//     } 

//     if (action.type === REGISTER_USER_BEGIN) {
//         return {
//             ...state,
//             isLoading: true
//         }

//     }

//     if (action.type === REGISTER_USER_SUCCESS) {
//         return {
//             ...state,
//             isLoading: false,
//             token:action.payload.token,
//             user:action.payload.user,
//             userLocation: action.payload.location,
//             jobLocation: action.payload.location,
//             showAlert:true,
//             alertType: 'success',
//             alertText: 'User Created Successfully. Redirecting...',

//         }

//     }

//     if (action.type === REGISTER_USER_ERROR) {
//         return {
//             ...state,
//             isLoading: false,
//             showAlert:true,
//             alertType: 'danger',
//             alertText: action.payload.msg,

//         }

//     }

//     if (action.type === TOGGLE_SIDEBAR) {
//         return {
//             ...state,
//             showSidebar:!state.showSidebar,

//         }

//     }

//     throw new Error(`no such action : ${action.type}`);
// }

// export default reducer