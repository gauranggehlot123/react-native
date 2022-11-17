import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Row } from '../styled-components/View';
import { SvgPicker } from '../styled-components/Svg';
import { BgImage } from '../styled-components/Image';
import { P, Heading } from '../styled-components/Text';
const MONTHS = [
 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]
const FeedItem = ({ temperature, locationData, photo, date, onPress }) => {
 let month = MONTHS[new Date(date).getMonth()];
 let localDate = new Date(date).getDate();
 return <TouchableOpacity onPress={onPress}>
  <BgImage source={photo && photo.length > 0 && { uri: photo }} height="184px" width="100%" style={{ backgroundColor: '#DDD' }} pt="8px" pb="8px" pl="12px" pr="12px">
   <Box ai="flex-start" jc="flex-start" style={{ minWidth: "100%", maxWidth: "100%" }}>
    <Heading size="14px" lh="17px">{month || 'Feb'}</Heading>
    <Heading size="24px" lh="29px">{localDate || 18}</Heading>
   </Box>
   <Row ai="flex-end">
    <Row jc="flex-start">
     <SvgPicker name="location" />
     {locationData && <P size="12px" lh="15px" color="#FFF" ml="6px">{locationData.city}, {locationData.country}</P>}
    </Row>
    <Row jc="flex-end">
     <Heading size="12px" lh="15px" mr="3px">{temperature && `${temperature.toFixed(1)}°`}</Heading>
     <SvgPicker name="temp" />
    </Row>
   </Row>
  </BgImage>
 </TouchableOpacity>
}

export default FeedItem;