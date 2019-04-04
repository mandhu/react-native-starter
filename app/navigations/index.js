import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AppNavigator from './AppNavigator';
import BootstrapScreen from '../screens/BootstrapScreen';

const SwitchNavigator = createSwitchNavigator({
    Boot: BootstrapScreen,
    App: AppNavigator,
});
  
export default createAppContainer(SwitchNavigator);