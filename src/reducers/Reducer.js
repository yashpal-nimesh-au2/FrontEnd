function Reducer(state={id:"", Data:[]},action){
    console.log("Reducer");
    let list;
        switch(action.type){

            case "Action" :
                list = state.Data.concat({
                 id : action.value
                })
                return {
                    ...state,
                    Data: list 
                }
    
                    default : return state;
        }
    }
    export default Reducer;