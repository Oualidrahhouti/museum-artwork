import { ScrollView, View } from "react-native";
import ArtWork from "./ArtWork";

export default function Home(){

    return (
        <ScrollView>
            <ArtWork/>
            <ArtWork/>
        </ScrollView>
    )
}