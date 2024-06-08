import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './screens/Menu'
import NumbersCheck from './screens/mathematicsDiscrete/NumbersCheck';
import NumbersHelp from './screens/mathematicsDiscrete/NumbersHelp';
import MMCCalculator from './screens/mathematicsDiscrete/MMCCalculator';
import MDCCalculator from './screens/mathematicsDiscrete/MDCCalculator';
import Dice from './screens/statisticsBasic/Dice';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            alignSelf: 'center',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            textAlign: 'center',
          },
        }}
        initialRouteName='Home'>
        <Stack.Screen name='Menu' component={Menu} />
        <Stack.Screen name='Numbers Check' component={NumbersCheck} />
        <Stack.Screen name='Numbers Help' component={NumbersHelp} />
        <Stack.Screen name='MMC Calculator' component={MMCCalculator} />
        <Stack.Screen name='MDC Calculator' component={MDCCalculator} />
        <Stack.Screen name='Dice RPG' component={Dice} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}

