import React from "react";
import { View, TouchableOpacity } from "react-native";
import styled from 'styled-components/native'
import NavigationService from '../navigation/NavigationService'
import { SvgPicker } from "../styled-components/Svg"

export default function CustomTabBar({ state, descriptors, navigation }) {
	return <View style={{
		display: "flex", width: "100%", flexDirection: "row", minHeight: 56, maxHeight: 56, justifyContent: "center", backgroundColor: "#FFF", borderTopWidth: 0.5, borderTopColor: "#E8E8E8"
	}}>
		<AddPost onPress={()=>NavigationService.navigate("NewPost")}><SvgPicker name="add-post" /></AddPost>
		{ state.routes.map((route, index) => {
			const { options } = descriptors[route.key];
			const focused = state.index === index;
			const indexKey = index;
			const onPress = () => {
				const event = navigation.emit({ type: "tabPress", target: route.key, canPreventDefault: true });
				if (!focused && !event.defaultPrevented) return navigation.navigate(route.name);
			};
			const onLongPress = () => navigation.emit({ type: "tabLongPress", target: route.key });
			return (<TouchableOpacity key={index} accessibilityRole="button" accessibilityStates={focused ? ["selected"] : []}
				accessibilityLabel={options.tabBarAccessibilityLabel} testID={options.tabBarTestID} onPress={onPress}
				onLongPress={onLongPress} style={{
					display: "flex", flex: 1, paddingTop: 18, paddingBottom: 18, alignItems: "center", justifyContent: "space-evenly",
				}}>
					{focused ? <SvgPicker name={focusedNames[indexKey]} /> : <SvgPicker name={names[indexKey]} /> }
			</TouchableOpacity>);
		})}
	</View>
}
const names = [
	"navbar-home",
	"navbar-summary",
];
const focusedNames = [
	"navbar-home-active",
	"navbar-summary-active",
];
const AddPost = styled.TouchableOpacity`
	height: 56px;
	width: 56px;
	background-color: #FFF;
	justify-content: center;
	align-items: center;
	border-radius: 56px;
	z-index: 2;
	border: 1px solid #E8E8E8;
	position: absolute;
	bottom: 17px
`