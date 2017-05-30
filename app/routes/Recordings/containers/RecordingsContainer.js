import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Recordings from '../components/Recordings'
import { logout } from 'modules/Auth'
import { fetchRecordings } from '../modules/RecordingsModule'

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  recordings: state.recordings.recordings,
  isFetching: state.recordings.isFetching
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  logout,
  fetchRecordings
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Recordings)
