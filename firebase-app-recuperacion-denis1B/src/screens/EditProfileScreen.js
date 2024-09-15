import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { firebase } from 'config/firebase.js';

const EditProfileScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    setUser(currentUser);
    setEmail(currentUser.email);
  }, []);

  const updateEmail = () => {
    user.updateEmail(email).then(() => {
      alert('Email updated!');
      navigation.navigate('Home');
    }).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <View>
      <Text>Edit Profile</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Button title="Update Email" onPress={updateEmail} />
    </View>
  );
};

export default EditProfileScreen;
