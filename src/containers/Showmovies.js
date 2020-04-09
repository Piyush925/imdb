import { connect } from 'react-redux'
import Showmovies from '../Components/Showmovies'

const mapStateToProps = (state) => {
    return {
        items: state.Showmovies,
        success: state.Showmovies.success,
        isAdmin: state.Showmovies.isAdmin,
        search: state.Showmovies.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSuccess: (value) =>
            dispatch({
                type: "Success",
                payload: value
            }),
        setAdmin: (value) =>
            dispatch({
                type: "ADMIN",
                payload: value
            }),
        onSearchChange: (value) =>
            dispatch({
                type: "SEARCH",
                payload: value.target.value
            })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Showmovies);