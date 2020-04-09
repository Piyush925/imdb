import {connect} from  'react-redux';
import AddActress from '../Components/Admin/AddActress'


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
       
        name:state.addactress.name,
        age:state.addactress.age
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddActress);