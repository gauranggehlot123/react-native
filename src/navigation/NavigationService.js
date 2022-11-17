import { CommonActions, StackActions } from '@react-navigation/native';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
 _navigator = navigatorRef;
}

function navigate(name, params) {
 _navigator.dispatch(
  CommonActions.navigate({
   name,
   params,
  })
 );
}

function push(name, reset=false) {
 if (reset) {
 _navigator.dispatch(
  CommonActions.reset({
   index: 0,
   routes: [
    { name },
   ],
  })
 )} else {
  _navigator.dispatch(
  StackActions.push(name)
 )}
}
// add other navigation functions that you need and export them

export default {
 navigate,
 setTopLevelNavigator,
 push,
};