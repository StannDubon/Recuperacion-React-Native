import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Importa tus pantallas
import SplashScreen from '../screens/SplashScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import Home from '../screens/Home'; // Pantalla Home original
import Add from '../screens/Add';   // Pantalla Add original

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* Splash Screen */}
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }} // Oculta el encabezado
        />

        {/* Registro de Usuarios */}
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Registro de Usuarios' }}
        />

        {/* Inicio de Sesión */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Inicio de Sesión' }}
        />

        {/* Pantalla de Inicio */}
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Inicio' }}
        />

        {/* Edición de Perfil */}
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{ presentation: 'modal', title: 'Editar Perfil' }}
        />

        {/* Home original */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />

        {/* Add original */}
        <Stack.Screen
          name="Add"
          component={Add}
          options={{ presentation: 'modal', title: 'Agregar productos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
