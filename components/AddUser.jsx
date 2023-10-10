import React from "react";
import { View, StyleSheet } from "react-native";
import UserForm from "./UserForm"; 

export default function AddUser({ navigation }) {
  const handleAddUser = (userData) => {
    
    alert(`Adding User: ${userData.name} with Role: ${userData.role}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <UserForm onSubmit={handleAddUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
