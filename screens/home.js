// import React, { useEffect, useState } from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// const Home = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     getMovies();
//   }, []);

//   const getMovies = () => {
//      fetch('https://reactnative.dev/movies.json')
//       .then((response) => response.json())
//       .then((json) => {
//         setData(json.movies);
//       })

//   };


//   // const getMovies = async () => {
//   //   const response = await fetch('https://reactnative.dev/movies.json');
//   //   const json = await response.json();
//   //   setData(json.movies);
//   // }

//   return (
//     <>
//       {data && data[0] &&
//         <View style={styles.container}>
//           <Text>{data[0].id} {data[0].title} {data[0].releaseYear}</Text>
//         </View>
//       }
//     </>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// })

import React, { useState, useEffect } from "react";
import {  Image, View, StyleSheet, TouchableOpacity, Text } from "react-native";

const Home = ({navigation}) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try{const response = await fetch("https://api.sampleapis.com/coffee/hot");
    const data = await response.json();
    setData(data);
  }
    catch(error) {
      console.log(error);
  }
 
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (

    <>
      <View style={styles.container}>
      {data && data[2] && (
        <Image style={styles.img} source={{ uri: data[2].image }}></Image>
      )}
      <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate("Post")}>
        <Text>Go to post api</Text>
      </TouchableOpacity>
      </View>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:{
    width:300,
    height:300,
  },
  btn:{
    backgroundColor:'red',
    padding:20,
  }
})