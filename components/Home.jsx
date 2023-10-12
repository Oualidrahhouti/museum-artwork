import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import ArtWork from "./ArtWork";
import db from '../firebaseConfig';
import { getDocs, collection } from "firebase/firestore";

export default function Home(){

    const [artWorks, setArtWorks] = useState([]);
    const [updateList, setUpdateList]= useState(false);
    useEffect(() => {
        getDocs(collection(db,"oeuvres")).then(function(snapshot){
            const donnes=[];
            snapshot.docs.map((doc)=>{
                donnes.push({...doc.data(),id: doc.id})
            })
            setArtWorks(donnes)
        })
       
      }, [updateList]); 
    
    return (
        <ScrollView>
            {artWorks.map((artWork) => (
                <ArtWork
                 key={artWork.id}
                 image={artWork.image}
                 nom={artWork.nom}
                 dt_creation={artWork.dt_creation}
                 auteur={artWork.auteur}
                 />
            ))}
        </ScrollView>
    )
}