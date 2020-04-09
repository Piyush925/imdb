import {SHOW_MOVIES} from '../actions/index'

const initialState={
        movies:["ABC","AB","AB","ABCD2","ABCD3",
       "ABC4","AB5","ABCD6","ABCD27","ABCD38",
       "ABC3","AB3","ABCD3","ABCD3","ABCD34",
       "ABC4","AB4","ABCD4","ABCD24","ABCD34",
       "ABC5","AB5","ABCD5","ABCD5","ABCD5",
       "ABC5","AB5","ABCD5","ABCD25","ABCD35",
       "ABC6","AB7","ABCD6","ABCD7","ABCD37",
       "ABC8","AB8","ABCD8","ABCD28","ABCD38"],
       success:false,
       isAdmin:false,
       search:''
       
    
}


const showmovies=(state=initialState,action)=>{
    switch (action.type) {
        case SHOW_MOVIES:
          
            return {...state};
            case "Success": {
 
                return {
                    ...state,
                    success: action.payload
                }
            }    
            case "ADMIN": {
 
                return {
                    ...state,
                    isAdmin: action.payload
                }
            } 
            case "SEARCH": {
 
                return {
                    ...state,
                    search: action.payload
                }
            } 
           
        default:
            return state;
    }
}

export default showmovies;

