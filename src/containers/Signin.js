import { connect } from "react-redux";
import Signin from '../Components/Signin';
const mapDispatchToProps = dispatch => {
    return {
       
        onPasswordChange: (value) =>
            dispatch({
                type: "PASSWORDCHANGE",
                payload: value.target.value
            }),
            setAdmin: (value) =>
            dispatch({
                type: "ADMIN",
                payload: value
            }),
        
            setSuccess: (value) =>
            dispatch({
                type: "Success",
                payload: value
            }),
       
        setEmail: (value) =>
            dispatch({
                type: "EMAIL",
                payload: value.target.value
            }),
        setRole: (value) =>
            dispatch({
                type: "ROLE",
                payload: value.label
            }),
        
    };
};
const mapStateToProps = (state) => {
    return{
        password: state.signinreducer.password,
    role: state.signinreducer.role,
    email: state.signinreducer.email,
    success:state.Showmovies.success,
    isAdmin:state.Showmovies.isAdmin
    
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin);