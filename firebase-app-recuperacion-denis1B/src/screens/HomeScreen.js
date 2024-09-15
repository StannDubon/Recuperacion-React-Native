import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { firebase } from '../firebase';

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    setUser(currentUser);
  }, []);

  const signOut = () => {
    firebase.auth().signOut().then(() => {
      navigation.replace('Login');
    });
  };

  return (
    <View>
      <Text>Welcome, {user?.email}</Text>
      <Button title="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

export default HomeScreen;
