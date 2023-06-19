import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { useContext } from 'react';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import Booking from '../screens/Booking';
import OrderServices from '../screens/OrderServices';
import { AuthContext } from '../context/AuthContext';
import Configuration from '../screens/Configuration';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
  const { user } = useContext(AuthContext);
  const role = user?.role.find(x => x === 'Employee')

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name='Welcome' component={Welcome} />
      <AuthStack.Screen name='Login' component={Login} />
      <AuthStack.Screen name='Home' component={Home} />
      <AuthStack.Screen name='Booking' component={Booking} />
      <AuthStack.Screen name='OrderServices' component={OrderServices} />
      {role === 'Employee' &&
        <AuthStack.Screen name='Configuration' component={Configuration} />
      }
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
