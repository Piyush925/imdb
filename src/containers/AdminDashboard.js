import { connect } from "react-redux"
import AdminDashboard from "../Components/Admin/AdminDashboard"

const mapStateToProps = (state) => {
    return {
        items: state.Showmovies,
        success: state.Showmovies.success
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSuccess: (value) =>
            dispatch({
                type: "Success",
                payload: value
            }),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminDashboard);