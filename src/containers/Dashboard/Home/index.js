import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../../../screens/Dashboard/Home';
import { updateData } from '../../../actions/data';

const mapStateToProps = (state) => ({
 userData: state.user.data,
 refetchData: state.user.refetchData
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
 updateData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);