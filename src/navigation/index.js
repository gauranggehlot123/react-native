import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NavigationService from "./NavigationService";
import CustomTabBar from "../components/TabBar";
import Home from "../containers/Dashboard/Home";
import Summary from "../containers/Dashboard/Summary";
import NewPost from "../containers/Dashboard/NewPost";
import ImageScreen from "../screens/Dashboard/ImageScreen";
import FeedDetail from "../containers/Dashboard/Home/FeedDetail";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Dashboard() {
	return <Tab.Navigator initialRouteName="Home" tabBar={props => <CustomTabBar {...props} />} tabBarOptions={{ inactiveTintColor: "gray", showLabel: false, keyboardHidesTabBar: true }}>
		<Tab.Screen name="Home" component={Home} />
		<Tab.Screen name="Summary" component={Summary} />
	</Tab.Navigator>
}
function AppNavigator() {
	const initialNavigationState = useState()[0];
	return <NavigationContainer ref={navigatorRef => { NavigationService.setTopLevelNavigator(navigatorRef); }} initialState={initialNavigationState} >
		<Stack.Navigator headerMode={false} screenOptions={() => ({ gestureEnabled: false, cardOverlayEnabled: false, ...TransitionPresets.SlideFromRightIOS, })}			>
			<Stack.Screen name="Dashboard" component={Dashboard} />	
			<Stack.Screen name="NewPost" component={NewPost} options={{ cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS, }} />
			<Stack.Screen name="ImageScreen" component={ImageScreen} />	
			<Stack.Screen name="FeedDetail" component={FeedDetail} />
		</Stack.Navigator>
	</NavigationContainer>
}

export default AppNavigator;
