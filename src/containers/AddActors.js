import {connect} from 'react-redux';
import AddActor from '../Components/Admin/AddActors'


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
       
        name:state.addactor.name,
        age:state.addactor.age
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddActor);