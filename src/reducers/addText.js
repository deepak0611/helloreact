const textReducer = (state ='See result here...',action) =>{
    switch(action.type){
        case "addText":
            return action.payLoad;
        default:
            return state;    
    }
}

export default textReducer;