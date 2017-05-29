import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Recordings from '../components/Recordings'
import { logout } from 'modules/Auth'

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  logout
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Recordings)
