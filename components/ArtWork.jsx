import React from "react";
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

export default function ArtWork({nom, image, dt_creation, auteur}) {
  return (
    <View style={styles.artwork}>
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: image,
        }}
      >
        <View style={styles.overlay}>
          <View style={styles.dataContainer}>
            <View style={styles.infos}>
              <Text style={[styles.titleText, styles.text]}>{nom}</Text>
              <Text style={styles.text}>{dt_creation}</Text>
              <Text style={styles.text}>{auteur}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  artwork: {
    width: 500,
    height: 175,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop:10,
    margin: 'auto',
  },
  image: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end', // Move dataContainer to the bottom
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  dataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Center the content vertically at the bottom
    padding: 10,
  },
  infos: {
    flex: 1,
  },
  text: {
    color: 'white',
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'white',
    shadowOpacity: 0.7,
    shadowRadius: 30,
    width:100,
    height:40
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
