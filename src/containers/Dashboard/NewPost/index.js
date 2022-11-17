import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewPost from '../../../screens/Dashboard/NewPost';
import { fetchLocation } from '../../../actions/location';
import { fetchTemperature } from '../../../actions/temperature';
import { updateData, refetch } from '../../../actions/data';

const mapStateToProps = (state) => ({
 locationData: state.location.data,
 temperature: state.temperature.temperature,
 userData: state.user.data
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
 fetchLocation,
 fetchTemperature,
 updateData,
 refetch
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);