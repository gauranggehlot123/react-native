import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Summary from '../../../screens/Dashboard/Summary';

const mapStateToProps = (state) => ({
 userData: state.user.data
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Summary);