import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import UserForm from "./UserForm";

export default function EditUser({ route, navigation }) {
  const { user } = route.params;
  const [isEditing, setIsEditing] = useState(true);

  const handleEditUser = (updatedUserData) => {
    // Handle updating user data here, e.g., making an API request
    console.log("Updating user:", updatedUserData);

    // After successfully updating, you can exit edit mode and navigate back
    setIsEditing(false);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit User</Text>
      <UserForm user={user} onSubmit={handleEditUser} isEditing={isEditing} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
});
