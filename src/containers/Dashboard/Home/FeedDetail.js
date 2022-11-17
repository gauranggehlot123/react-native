import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FeedDetail from '../../../screens/Dashboard/Home/FeedDetail';
import { refetch } from '../../../actions/data';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
 refetch
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FeedDetail);