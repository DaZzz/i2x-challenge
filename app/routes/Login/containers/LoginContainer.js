import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from '../components/Login'
import { login } from 'modules/Auth'

const mapStateToProps = (state) => ({
  isFetching: state.auth.isFetching,
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  login
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
