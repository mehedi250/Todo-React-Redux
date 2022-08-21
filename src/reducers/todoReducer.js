import { ADD_TODO } from "../constant"

const initialState = {
    list: []
}

const todoReduces = (state = initialState, action) =>{
    switch(action.type){
        case ADD_TODO:
            console.log(action.payload);
            const {id, data} = action.payload;
            return{
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        default:
            return state;

    }

}

export default todoReduces;