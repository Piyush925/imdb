import {connect} from 'react-redux';
import AddProducer from  '../Components/Admin/AddProducer'
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
       
        name:state.addproducer.name,
        age:state.addproducer.age
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddProducer);