import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Box } from '../../../styled-components/View';
import { P } from '../../../styled-components/Text';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import SummaryItem from '../../../components/SummaryItem';
import NavigationService from '../../../navigation/NavigationService';
const MONTHS = [
 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]
const DAY = [
 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
]
export default function Summary({ userData }) {
	const [diffInDays, setDiffInDays] = useState(1)
	const [firstDay, setFirstDay] = useState(new Date().getTime())
	const [hottestDay, setHottestDay] = useState({temperature: 0})
	const [coldestDay, setColdestDay] = useState({temperature: 100})
	const today = new Date().getTime();
	useEffect(()=>{
		setDiffInDays(Math.round((today-firstDay)/(1000*60*60*24)));
	},[firstDay])
	userData.map(item => {
		if(firstDay > item.date){
			setFirstDay(item.date)
		}
	})
	userData.map(item => {
		if(hottestDay.temperature < item.temperature){
			setHottestDay(item)
		}
	})
	userData.map(item => {
		if(coldestDay.temperature > item.temperature){
			setColdestDay(item)
		}
	})
	return (<Container>
		<Header back={false} />
		{userData && userData.length > 0 ? <ScrollView showsVerticalScrollIndicator={false}><Box jc="flex-start" pl="12px" pr="12px">
			<SummaryItem
				headingText="Days"
				labelText={`${userData.length || 0}/${diffInDays+1}`}
				subText={`You have recorded ${userData.length || 0} day(s) since the first day`}
			/>
			<SummaryItem
			 onPress={()=>NavigationService.navigate("FeedDetail",{ item: hottestDay })}
				headingText="Hottest Day"
				labelText={`${hottestDay.temperature.toFixed(1)}°`}
				subText={`${DAY[new Date(hottestDay.date).getDay()]} ${MONTHS[new Date(hottestDay.date).getMonth()]} ${new Date(hottestDay.date).getDate()}, ${new Date(hottestDay.date).getFullYear()}`}
			/>
			<SummaryItem
			 onPress={()=>NavigationService.navigate("FeedDetail",{ item: coldestDay })}
				headingText="Coldest Day"
				labelText={`${coldestDay.temperature.toFixed(1)}°`}
				subText={`${DAY[new Date(coldestDay.date).getDay()]} ${MONTHS[new Date(coldestDay.date).getMonth()]} ${new Date(coldestDay.date).getDate()}, ${new Date(coldestDay.date).getFullYear()}`}
			/>
		</Box></ScrollView> : <Box><P>Add pictures to get summary</P></Box>}
	</Container >
	)
}