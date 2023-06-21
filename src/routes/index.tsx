import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { useContext } from 'react';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import Booking from '../screens/Booking';
import OrderServices from '../screens/OrderServices';
import { AuthContext } from '../context/AuthContext';
import Manager from '../screens/Manager';
import ListOrderServices from '../screens/ListOrderService';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
  const { user } = useContext(AuthContext);
  const role = user?.role.find((x) => x === 'Manager');

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Login" component={Login} />

      {user != null && (
          <>
            <AuthStack.Screen name="Home" component={Home} />
            <AuthStack.Screen name="Booking" component={Booking} />
            <AuthStack.Screen name="OrderServices" component={OrderServices} />
          <>
          {role === 'Manager' && (
            <>
              <AuthStack.Screen name="Manager" component={Manager} />
              <AuthStack.Screen name="ListOrderServices" component={ListOrderServices} />
            </>
          )}
        </></>
      )}
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
