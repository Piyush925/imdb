import {connect } from 'react-redux';
import AddDirector from '../Components/Admin/AddDirector'

const mapDispatchToProps = dispatch => {
    return {
        onNameChange: (value) =>
            dispatch({
                type: "NAME",
                payload: value.target.value
            }),
           onAgeChange:(value)=>{
               dispatch({
                   type:"AGE",
                   payload:value.target.value
               })
           }
        
    };
};
const mapStateToProps = (state) => {
    return{
       
        name:state.adddirector.name,
        age:state.adddirector.age
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddDirector);