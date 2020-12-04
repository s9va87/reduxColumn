const initialState = {
    cards: [
        {id: 1, title: 'One'},
        {id: 2, title: 'Two'},
        {id: 3, title: 'One'},
    ],
    marks: [
        {id: 1, status: 'Todo'},
        {id: 2, status: 'Progress'},
        {id: 3, status: 'Update'},
    ]
}

const cards = (state=initialState, action)=>{
    switch(action.type){
        case 'GET_CARDS' :
            return {
                ...state,
                cards: action.payload
            }
            
            
        case'Delete_Name':
            const  newState = {...state}
            delete newState.userName
            return   newState

        case'Change_Name':


            return {...state, userName: 'Sacha'
            }
        default:
            return state
    }
}
export  default  cards;