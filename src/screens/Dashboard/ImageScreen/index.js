import React, { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Box } from '../../../styled-components/View';
import { FgImage } from '../../../styled-components/Image';
import Container from '../../../components/Container';
import Header from '../../../components/Header';

export default function ImageScreen({ navigation, route }) {
	const { imageSrc } = route.params;
	useEffect(()=>{
		(async () => {
			await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
		})();
		return ()=>{
			(async () => {
				await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
			})();
		}
	},[])
	return (<Container>
		<Header back={true} navigation={navigation} />
		<Box>
			<FgImage height="100%" width="100%" source={{ uri: imageSrc }} />
		</Box>
	</Container >
	)
}