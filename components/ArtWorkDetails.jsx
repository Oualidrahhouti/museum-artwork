import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ArtworkDetail({navigation, route}) {
  const artwork=route.params.artwork
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: artwork.image 
        }}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.titleText}>{artwork.nom}</Text>
        <Text style={styles.releaseDateText}>{artwork.dt_creation}</Text>
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
          nulla vel enim tincidunt fermentum a ut odio. Fusce dignissim quam eu
          nunc tempus, eu posuere est vestibulum. Praesent vel consectetur erat.
          Nulla facilisi.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
          nulla vel enim tincidunt fermentum a ut odio. Fusce dignissim quam eu
          nunc tempus, eu posuere est vestibulum. Praesent vel consectetur erat.
          Nulla facilisi.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  image: {
    width: 600,
    height: 400,
    borderRadius: 10,
    marginBottom: 16,
  },
  detailsContainer: {
    alignItems: "center",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  releaseDateText: {
    fontSize: 16,
    color: "#888",
    marginBottom: 16,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    textAlign: "justify"
  },
});
