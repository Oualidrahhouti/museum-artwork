import React from "react";
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

export default function ArtWork() {
  return (
    <View style={styles.artwork}>
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: 'https://picsum.photos/600/200',
        }}
      >
        <View style={styles.overlay}>
          <View style={styles.dataContainer}>
            <View style={styles.infos}>
              <Text style={[styles.titleText, styles.text]}>Title here</Text>
              <Text style={styles.text}>Release Date here</Text>
              <Text style={styles.text}>Writer here</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Details</Text>
              </Pressable>
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
