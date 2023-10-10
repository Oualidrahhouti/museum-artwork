import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function UserManagement() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "User 1",
      role: "Admin",
    },
    {
      id: 2,
      name: "User 2",
      role: "User",
    },
    {
      id: 3,
      name: "User 3",
      role: "User",
    },
  ]);

  const handleEdit = (user) => {
    alert(`Editing user: ${user.name}`);
  };

  const handleRemove = (user) => {
    const updatedUsers = users.filter((u) => u.id !== user.id);
    setUsers(updatedUsers);
  };

  const handleAdd = () => {
    
  };

  const handleRead = (user) => {
    alert(`Reading user: ${user.name}`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.role}>Role: {item.role}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleEdit(item)}>
          <Icon name="edit" size={20} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleRemove(item)}>
          <Icon name="trash" size={20} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleRead(item)}>
          <Icon name="eye" size={20} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>Add User</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    backgroundColor: "white",
    padding: 16,
    marginBottom: 10,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  role: {
    fontSize: 16,
    color: "#888",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
  },
});
