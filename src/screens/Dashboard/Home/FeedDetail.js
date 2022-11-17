import React, { useState } from 'react';
import * as SQLite from 'expo-sqlite';
import { TextInput } from 'react-native';
import { Box, Row } from '../../../styled-components/View';
import { P } from '../../../styled-components/Text';
import Container from '../../../components/Container';
import { PrimaryButton } from '../../../styled-components/Button';
import Header from '../../../components/Header';
import FeedItem from '../../../components/FeedItem';
import NavigationService from '../../../navigation/NavigationService';

export default function FeedDetail({ navigation, route, refetch }) {
	const db = SQLite.openDatabase("picadaydb.db")
	const { item } = route.params;
	const caption = useState(item.caption)[0]
	const [newCaption,setNewCaption] = useState(item.caption)
	const localDate = `${new Date(item.date).getDate()}${new Date(item.date).getMonth()}${new Date(item.date).getFullYear()}`
	const today = `${new Date().getDate()}${new Date().getMonth()}${new Date().getFullYear()}`
	const updateCaption = () => {
		db.transaction(tx => {
			tx.executeSql('UPDATE user SET caption = ? WHERE id = ?', [newCaption, item.id],
				(txObj, resultSet) => refetch()
			)
		})
		NavigationService.navigate("Home", true)
	}
	return <Container>
		<Header back={true} navigation={navigation} />
		<FeedItem temperature={item.temperature} date={item.date} locationData={{city: item.city, country: item.country}} photo={item.image}
		onPress={()=>navigation.navigate("ImageScreen",{ imageSrc: item.image })} />
		<Box mt="25px" pl="25px" pr="25px" jc="flex-start" ai="flex-start">
			{ localDate===today ? <TextInput placeholder="Type your thoughts..." multiline={true} autoFocus={true} style={{ width: "100%" }} onChangeText={(e)=>setNewCaption(e)}>						
					<P size="16px" lh="19px" color="#314743">{newCaption}</P>
					</TextInput> : <P align="left" size="16px" lh="19px" color="#314743">{caption}</P> }			
		</Box>
		{newCaption !== caption && <Row pl="25px" pr="25px" style={{ minHeight: 64, maxHeight: 64 }} mb="20px">
			<PrimaryButton onPress={updateCaption} width="100%">
			<P color="#FFF">Save</P>
			</PrimaryButton>
		</Row>}
	</Container>
}