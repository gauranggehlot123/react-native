import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import * as Location from 'expo-location';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as SQLite from 'expo-sqlite';
import Container from '../../../components/Container';
import FeedItem from '../../../components/FeedItem';
import Header from '../../../components/Header';
import { P } from '../../../styled-components/Text';
import { Box, Row } from '../../../styled-components/View';
import { SvgPicker } from '../../../styled-components/Svg';
import NavigationService from '../../../navigation/NavigationService';

export default function NewPost({ navigation, fetchLocation, locationData, fetchTemperature, temperature, updateData, userData, refetch }) {
	const [hasCameraPermission, setHasCameraPermission] = useState(null);
	const [hasLocationPermission, setHasLocationPermission] = useState(null);
	const [hasMediaPermission, setHasMediaPermission] = useState(null);
	const [location, setLocation] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const documentDirectory = useState(FileSystem.documentDirectory)[0];
	const [photo, setPhoto] = useState("");
	const [caption, setCaption] = useState("");
	const [lastDay, setLastDay] = useState(null)
	const date = useState(new Date())[0];
	const [localDate,setLocalDate] = useState('')
	const today = `${new Date().getDate()}${new Date().getMonth()}${new Date().getFullYear()}`
	const cameraRef = useRef(null);
	const db = SQLite.openDatabase("picadaydb.db")
	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync();
			setHasCameraPermission(status === 'granted');
		})();
		(async () => {
				let { status } = await Location.requestForegroundPermissionsAsync();
				setHasLocationPermission(status === 'granted')
				let location = await Location.getCurrentPositionAsync({});
				setLocation(location);
		})();
		(async () => {
				let { status } = await MediaLibrary.requestPermissionsAsync();
				setHasMediaPermission(status === 'granted')
		})();
		db.transaction(tx => {
   tx.executeSql('SELECT * FROM user', null,
    (txObj, { rows: { _array } }) => updateData({data: _array}),
    (txObj, error) => console.log('Error ', error)
   )
  })
	}, []);
	useEffect(()=>{
			if(photo && photo.length > 0){
				(async () => {
					await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
				})();
			}else{
				(async () => {
					await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
				})();
			}
			return ()=>{
				(async () => {
					await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
				})();
			}
	},[photo])

	useEffect(()=>{
		lastDay && setLocalDate(`${new Date(lastDay.date).getDate()}${new Date(lastDay.date).getMonth()}${new Date(lastDay.date).getFullYear()}`)
	},[lastDay])

	useEffect(()=>{
		location && fetchLocation({ lat:location.coords.latitude ,lon:location.coords.longitude  })
	},[location])

	useEffect(()=>{
		locationData && fetchTemperature({ city: locationData.city, countryCode: locationData.country_code })
	},[locationData])

	useEffect(()=>{
		documentDirectory && createDirectory()
	},[documentDirectory])

	userData.map(item => {
		if(!lastDay) {
			setLastDay(item)
		}else{
			if(lastDay.date < item.date){
				setLastDay(item)
			}
		}
	})
	const createDirectory = async () => {
		const res = await FileSystem.getInfoAsync(`${FileSystem.documentDirectory}images/`)
		if(!res.exists){
			await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'images/',{intermediates:true})
		}else{
			console.log("Directory exists")
		}
	}
	if (hasCameraPermission === null) {
		return <View />;
	}
	if (hasCameraPermission === false) {
		return <Box><P>No access to camera</P></Box>;
	}
	if (hasLocationPermission === null) {
		return <View />;
	}
	if (hasLocationPermission === false) {
		return <Box><P>Permission to access location was denied</P></Box>;
	}
	if (hasMediaPermission === null) {
		return <View />;
	}
	if (hasMediaPermission === false) {
		return <Box><P>Permission to access Gallery was denied</P></Box>;
	}	
	const clickPic = async () => {
		if (cameraRef) {
			await cameraRef.current.takePictureAsync({
				quality: 0,
				base64: false,
				exif: false,
				onPictureSaved: e=>setPhoto(e.uri),
				skipProcessing: true
			});			
		}
	}
	const savePost = async () => {
		let dateName = new Date();
		const asset = await MediaLibrary.createAssetAsync(photo);
		const asset2 = await MediaLibrary.getAssetInfoAsync(asset);
		let localData = {
			caption,
			photo: asset2.uri,
			date: dateName.getTime(),
			temperature,
			city: locationData.city,
			country: locationData.country
		}
		if(localDate ===	today){
			db.transaction(tx => {
				tx.executeSql('UPDATE user SET temperature = ?, city = ?, country = ?, image = ?, caption = ?  WHERE id = ?', [localData.temperature, localData.city, localData.country, localData.photo, localData.caption, lastDay.id],
					(txObj, resultSet) => refetch()
				)
			})
		}else{
			db.transaction(tx => {
					tx.executeSql('INSERT INTO user (date, temperature, city, country, image, caption) values (?, ?, ?, ?, ?, ?)', [localData.date, localData.temperature, localData.city, localData.country, localData.photo, localData.caption],
						(txObj, resultSet) => refetch(),
						(txObj, error) => console.log('Error', error)
					)
				})
			}
		NavigationService.navigate("Home", true)
	}
	return <Container>
		<Header back={true} navigation={navigation} />
		<Box>
			{photo && photo.length > 0 ? (
				<Box jc="flex-start">
					<FeedItem date={date} temperature={temperature} locationData={locationData} photo={photo} onPress={()=>navigation.navigate("ImageScreen",{ imageSrc: photo })} />
					<TouchableOpacity onPress={savePost} disabled={!temperature || !locationData} style={{ height: 56, width: 56, borderRadius: 56, backgroundColor: "#FFF", borderWidth: 1, position: 'absolute', top: 148, zIndex: 2, borderColor: "#E8E8E8", alignItems: 'center', justifyContent: 'center' }}>
						{!temperature || !locationData ? <SvgPicker name="camera-disabled" /> : <SvgPicker name="camera" />}
					</TouchableOpacity>
					<Box pl="25px" pr="25px" mt="45px" ai="flex-start" jc="flex-start">
						<TextInput placeholder="Type your thoughts..." multiline={true} style={{ width: "100%" }} onChangeText={(e)=>setCaption(e)}>						
						<P size="16px" lh="19px" color="#314743">{caption}</P>
						</TextInput>						
					</Box>
				</Box>
			) : (
				<Camera ref={cameraRef} ratio="16:9" style={{ width: "100%", height: "100%", justifyContent: 'flex-end' }} type={type}>
					<Row style={{ minHeight: 56, maxHeight: 56 }} mb="23px" jc="flex-start">
						<TouchableOpacity style={{ height: 56, width: 56, borderRadius: 56, marginLeft: 20, alignItems: 'center', justifyContent: 'center' }} 
							onPress={() => { setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);}}>
							<SvgPicker name="flip" />
						</TouchableOpacity>
					<Row mr="80px">
						<TouchableOpacity style={{ height: 56, width: 56, borderRadius: 56, backgroundColor: "#FFF", borderWidth: 1, borderColor: "#E8E8E8", alignItems: 'center', justifyContent: 'center' }} onPress={clickPic}>
							<SvgPicker name="camera" />
						</TouchableOpacity>
					</Row>
				</Row>
			</Camera>
			)}
		</Box>
	</Container>
}