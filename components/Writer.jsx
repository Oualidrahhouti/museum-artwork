import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // You can choose any icon library you prefer

export default function Writer() {
  const [artworks, setArtworks] = useState([
    {
      id: 1,
      title: "Artwork 1",
      releaseDate: "January 1, 2023",
    },
    {
      id: 2,
      title: "Artwork 2",
      releaseDate: "February 15, 2023",
    },
    {
      id: 3,
      title: "Artwork 3",
      releaseDate: "March 22, 2023",
    },
  ]);

  const handleShow = (item) => {
    // Handle the show action here
    alert(`Showing artwork: ${item.title}`);
  };

  const handleEdit = (item) => {
    // Handle the edit action here
    alert(`Editing artwork: ${item.title}`);
  };

  const handleDelete = (item) => {
    // Handle the delete action here
    const updatedArtworks = artworks.filter((artwork) => artwork.id !== item.id);
    setArtworks(updatedArtworks);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.releaseDate}>Release Date: {item.releaseDate}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleShow(item)}>
          <Icon name="eye" size={20} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleEdit(item)}>
          <Icon name="edit" size={20} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleDelete(item)}>
          <Icon name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={artworks}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 16,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  releaseDate: {
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
});
