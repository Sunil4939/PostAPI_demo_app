// import React, { useState, useEffect } from "react";
// import {Text, Image, View, StyleSheet } from "react-native";

// const Post = () => {
//     const [data, setData] = useState([]);
//     // const data = [];
//     const [value, setValue] = useState([]);

    // const fetchData = async () => {
    //     const response= await fetch('https://reqres.in/api/posts', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             firstParam: 'yourValue',
    //             secondParam: 'yourOtherValue',
    //             images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
    //             "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg"]
    //         })
    //     });
    //    const val = await response.json();
    // //    setData(val);
    //    data[0] = val;
    //    console.log(data);
    
   
    // };

//     const fetchData1 = async () => {
//         const response= await fetch('https://reqres.in/api/posts', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 id: 1,
//                 title: 'React POST Request Example',
//                 name: 'sunil',
//             })
//         });
//        const dat = await response.json();
//         setValue(dat);
//        console.log(value.title);
//     };


//     useEffect(() => {
//         fetchData();
//         fetchData1();
//     }, []);


//     return (
//         <>
//             <View style={styles.container}>
//                 { value  && value.title && (
//                     <Text>{value.title}</Text>
//                 )}
//                { data && data[0] && data[0].images && (
//                 <Image style={styles.img} source={{uri: data[0].images[1]}}></Image>
//                 )}
//             </View>
//         </>
//     );
// }

// export default Post;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     img: {
//         width: 300,
//         height: 300,
//     }
// })

// Example to Pick and Upload files in React Native
// https://aboutreact.com/file-uploading-in-react-native/
 
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
 
import DocumentPicker from 'react-native-document-picker';
 
const Post = () => {
  const [singleFile, setSingleFile] = useState(null);
  const [data, setData] = useState([]);
 
  const uploadImage = async () => {
    if (singleFile != null) {
    //   const fileToUpload = singleFile;
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file_attachment', singleFile);
    //   console.log( data._parts[1][1][0].uri);
        const response= await fetch('https://reqres.in/api/posts', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data
            })
        });
       const val = await response.json();
       setData(val.data)
    //    console.log(val.data);

    } else {
        alert('Please Select a File ');
    }
  };
  
  const selectFile = async () => {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSingleFile(res);
    //   console.log('res : ' + JSON.stringify(singleFile)); 
  };

  return (
    <View style={styles.mainBody}>
      <View style={{ alignItems: 'center' }}>
        {data  && data._parts && (
            <Image style={{width:200, height:200}} source={{uri: data._parts[1][1][0].uri}}></Image>
        )}
        <Text style={{ fontSize: 30, textAlign: 'center' }}>
          React Native File Upload Example
        </Text>
        <Text
          style={{
            fontSize: 25,
            marginTop: 20,
            marginBottom: 30,
            textAlign: 'center',
          }}>
          www.aboutreact.com
        </Text>
      </View>
      {singleFile && singleFile[0] && (
        <Text>File Name : {singleFile[0].name}{'\n'}
        File Type: {singleFile[0].type}{'\n'}
        File Size : {singleFile[0].size}{'\n'}
        URI: {singleFile[0].uri}{'\n'}
        </Text>
      )}
      
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={selectFile}>
        <Text style={styles.buttonTextStyle}>Select File</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={uploadImage}>
        <Text style={styles.buttonTextStyle}>Upload File</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Post;
 
const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
  },
});
 
