import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Row } from '../styled-components/View';
import { SvgPicker } from '../styled-components/Svg';

const Header = ({ back, navigation }) => {
 return <Row style={{ minHeight: 56, maxHeight: 56, backgroundColor: '#FFF' }} pl={back ? '23px' : '0px'}>
  { back && <TouchableOpacity onPress={()=>navigation.goBack()}><SvgPicker name="back-arrow" /></TouchableOpacity>}
  <Row mr={back ? '46px' : '0px'}><SvgPicker name="logo" /></Row>
 </Row>
}

export default Header;