import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { Box } from '../../../styled-components/View';
import { P } from '../../../styled-components/Text';
import Container from '../../../components/Container';
import NavService from '../../../navigation/NavigationService';
import Header from '../../../components/Header';
import FeedItem from '../../../components/FeedItem';

export default function Home({ updateData, userData, refetchData }) {
	const db = SQLite.openDatabase("picadaydb.db")
	useEffect(()=>{
		refetchData && fetchData()
	},[refetchData])
	const fetchData = () => {
  db.transaction(tx => {
   tx.executeSql('SELECT * FROM user', null,
    (txObj, { rows: { _array } }) => updateData({data: _array.reverse()}),
    (txObj, error) => console.log('Error ', error)
   )
  })
 }

 return <Container>
		<Header back={false} />
			{userData && userData.length > 0 ? <ScrollView showsVerticalScrollIndicator={false}>{
				userData.map(item=>(<FeedItem key={item.id} date={item.date} temperature={item.temperature} locationData={{city: item.city, country: item.country}} photo={item.image} onPress={()=>NavService.navigate("FeedDetail",{ item })}/>))
			}</ScrollView> : <Box><P>Pictures you click will be shown here</P></Box> }
	</Container>
}