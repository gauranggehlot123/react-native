import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Box } from '../styled-components/View';
import { P, Heading } from '../styled-components/Text';

const SummaryItem = ({ headingText, labelText, subText, onPress  }) => {
 return <TouchableOpacity disabled={!onPress} onPress={onPress} style={{ height: 184, width: "100%", borderBottomWidth: 1, borderBottomColor: "#E5E5E5", alignItems: 'center', justifyContent: 'space-evenly' }}>
  <Heading size="16px" lh="19px" color="#6C6C6C">{headingText}</Heading>
  <Heading size="56px" lh="67px" color="#314743">{labelText}</Heading>
  <P size="12px" lh="14px" color="#6C6C6C">{subText}</P>
 </TouchableOpacity>
}

export default SummaryItem;