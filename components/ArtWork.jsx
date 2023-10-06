import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function ArtWork()
{
    return (
        <View style={styles.artwork}>
                <Image style={styles.image} source={{
                    uri: 'https://picsum.photos/2000/3000?random',
                    width: 300,
                    height: 450
                }}/>
                <View style={styles.dataContainer}>
                    <View style={styles.infos}>
                        <Text> Release Date here</Text>
                        <Text> Title here</Text>
                        <Text> Writer here</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.button}>Details</Pressable>
                    </View>
                    
                </View>
                
        </View>
    )
}

const styles= StyleSheet.create({
    artwork: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor:'grey',
        borderRadius: 20,
        margin: 20
    },
    image:{
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    },
    dataContainer: {
        display: 'flex',
        justifyContent: "space-between",
        paddingVertical: 20,
        alignItems: "center",
        flex:1
        },
    infos: {
        flex:1,
        backgroundColor: '#bbb'
    },
    button: {
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: 3,
        width: '10rem',
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 25
    }
    
})