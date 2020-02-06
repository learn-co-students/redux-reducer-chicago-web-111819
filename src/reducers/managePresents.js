export function managePresents(state = {numberOfPresents: 0}, action){

    switch (action.type) {
        case 'INCREASE':  
            let morePresents = Object.assign({}, state, {numberOfPresents: state.numberOfPresents + 1})
            return morePresents
            
            default:
                return state
            }            
}