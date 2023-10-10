import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function UserForm({ user, onSubmit }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    
    if (user) {
      setName(user.name);
      setRole(user.role);
    }
  }, [user]);

  const handleFormSubmit = () => {
    if (name && role) {
      const userData = {
        name,
        role,
      };

      onSubmit(userData);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Role"
        value={role}
        onChangeText={(text) => setRole(text)}
      />
      <Button
        style={styles.button}
        title={user ? "Update User" : "Add User"}
        onPress={handleFormSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button:{
    backgroundColor: "#088F8F",
    color: 'black'
  }
});
