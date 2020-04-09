const initialState = {
    
     password: '',
     role: '',
     email: '',
     
     
     }
 
 const signinreducer = (state = initialState, action) => {
     switch (action.type) {
         
         case "PASSWORDCHANGE": {
             return {
                 ...state,
                 password: action.payload
             }
         }
         
         
         case "EMAIL": {
 
             return {
                 ...state,
                 email: action.payload
             }
         }
        
         case "ROLE": {
 
             return {
                 ...state,
                 role: action.payload
             }
         }
        
         default: return state;
     }
 }
 export default signinreducer;