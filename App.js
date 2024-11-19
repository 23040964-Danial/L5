// Exercise 1
// import React from 'react';
// import {View, Text, FlatList, StyleSheet, TouchableOpacity, SectionList, StatusBar} from 'react-native';
//
//
// const datasource = [
//   {key: 'a'},
//   {key: 'b'},
//   {key: 'c'},
//   {key: 'd'},
//   {key: 'e'},
//   {key: 'f'},
//   {key: 'g'},
//   {key: 'h'},
//   {key: 'i'},
//   {key: 'j'},
//   {key: 'k'},
//   {key: 'l'},
//   {key: 'm'},
//   {key: 'n'},
//   {key: 'o'},
//   {key: 'p'},
//   {key: 'q'},
//   {key: 'r'},
//   {key: 's'},
//   {key: 't'},
//   {key: 'u'},
//   {key: 'v'},
//   {key: 'w'},
//   {key: 'x'},
//   {key: 'y'},
//   {key: 'z'},
// ];
//
// const styles = StyleSheet.create({
//   opacityStyle: {
//     borderWidth: 1,
//   },
//   textStyle: {
//     fontSize: 15,
//     marginBottom: 10,
//     textAlign: 'left',
//   }
// })
//
// const renderItem = ({item}) => {
//   return (
//       <TouchableOpacity style={styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//   );
// };
//
// const App = () => {
//   return (
//       <View>
//         <StatusBar hidden={true}/>
//         <FlatList data={datasource} renderItem={renderItem} />
//       </View>
//   )
// }
//
// export default App;


// Exercise 2
// import React from 'react';
// import {View, Text, FlatList, StyleSheet, TouchableOpacity, SectionList, StatusBar} from 'react-native';
//
// const datasource = [
//   {data:[
//       {key: 'a'},
//       {key: 'e'},
//       {key: 'i'},
//       {key: 'o'},
//     ],
//     title:'Vowels', bgColor:'skyblue',},
//   {data:[
//       {key: 'b'},
//       {key: 'c'},
//       {key: 'd'},
//       {key: 'f'},
//       {key: 'g'},
//       {key: 'h'},
//       {key: 'j'},
//       {key: 'k'},
//       {key: 'l'},
//       {key: 'm'},
//       {key: 'n'},
//       {key: 'p'},
//       {key: 'q'},
//       {key: 'r'},
//       {key: 's'},
//     ],
//     title:'Consonants', bgColor: 'khaki'}
// ];
//
// const styles = StyleSheet.create({
//   opacityStyle: {
//     borderWidth: 1,
//   },
//   textStyle: {
//     fontSize: 15,
//     marginBottom: 10,
//     textAlign: 'left',
//   },
//   headerText: {
//     fontSize: 20,
//     margin: 10,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   }
// })
//
// const renderItem = ({item}) => {
//   return (
//       <TouchableOpacity style={styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//   );
// };
//
// const App = () => {
//   return (
//       <View style={{marginBottom: 50, margin: 10}}>
//         <StatusBar hidden={true} />
//         <SectionList sections={datasource} renderItem={renderItem}
//                      renderSectionHeader={({section:{title, bgColor}})=>(
//                          <Text style={[styles.headerText, {backgroundColor: bgColor}]}>{title}</Text>
//                      )}/>
//       </View>
//   )
// }
//
// export default App;



// Exercise 3
// import React from 'react';
// import {View, Text, FlatList, StyleSheet, TouchableOpacity, SectionList, StatusBar, Button,Image} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome6';
//
// const datasource = [
//   {
//     title: 'Water', icon_name: 'water', icon_color: 'blue',
//     data: [
//       {
//         name: 'Squirtle',
//         imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_7-2x.png',
//       },
//       {
//         name: 'Jigglypuff',
//         imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_61-2x.png',
//       },
//     ],
//     bgColor: 'blue',
//   },
//   {
//     title: 'Thunder', icon_name: 'bolt',icon_color: 'yellow',
//     data: [
//       {
//         name: 'Pikachu',
//         imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25-2x.png',
//       },
//       {
//         name: 'Raichu',
//         imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_26-2x.png\n',
//       },
//     ],
//     bgColor: 'yellow'
//   },
// ];
//
// const renderItem = ({item}) => {
//   return (
//       <TouchableOpacity style={styles.itemContainer}>
//         <Text style={styles.pokemonName}>{item.name}</Text>
//
//         <Image source={{uri: item.imageUrl}}
//                style={styles.cardImage} />
//       </TouchableOpacity>
//   );
// };
//
// const App = () => {
//   return (
//       <View style={[styles.container, {marginBottom: 50, margin: 10}]}>
//         <StatusBar hidden={true} />
//         <Button title="Add Pokémon" onPress={() => alert('Add Pokémon button pressed')} />
//         <SectionList
//             sections={datasource}
//             renderItem={renderItem}
//             renderSectionHeader={({ section: { title, icon_name, bgColor }}) => (
//                 <View style={[styles.headerContainer, { backgroundColor: bgColor}]}>
//                   <Text style={styles.headerText}>{title}<Icon name={icon_name} size={20}/></Text>
//                 </View>
//             )}
//         />
//       </View>
//   );
// };
// // Styles for the components
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     paddingVertical: 10,
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   pokemonName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginRight: 10,
//     flexGrow: 1,
//   },
//   cardImage: {
//     width: 200,
//     height: 250,
//     resizeMode: 'contain',
//   },
// });
//
// export default App;



// Exercise 4
import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, SectionList, StatusBar, Button,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const datasource = [
  {
    title: 'Fruits', icon_name: 'apple', icon_color: 'red',
    data: [
      {
        name: 'Apple',
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/004/942/744/original/cute-apple-cartoon-illustration-free-vector.jpg',
      },
      {
        name: 'Banana',
        imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/009/584/950/small_2x/cute-and-smile-cartoon-fruit-colorful-character-banana-free-png.png',
      },
    ],
    bgColor: 'red',
  },
  {
    title: 'Vegetables', icon_name: 'carrot',icon_color: 'green',
    data: [
      {
        name: 'Carrot',
        imageUrl: 'https://th.bing.com/th/id/R.1230d28eb00910042b1abbe951fcd233?rik=mNplX37UTfATKQ&riu=http%3a%2f%2fimages.clipartpanda.com%2fcarrot-clipart-carrots15.png&ehk=vkFraNlWe47uksmhagc%2bQ1jyo5R7SxR%2baPjKt78ZDLY%3d&risl=&pid=ImgRaw&r=0',
      },
      {
        name: 'Broccoli',
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/009/665/821/original/colorful-cute-cartoon-vegetable-broccoli-free-png.png',
      },
    ],
    bgColor: 'green'
  },
];

const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.itemContainer}>
        <Text style={styles.pokemonName}>{item.name}</Text>

        <Image source={{uri: item.imageUrl}}
               style={styles.cardImage} />
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <View style={[styles.container, {marginBottom: 50, margin: 30}]}>
        <StatusBar hidden={true} />
        <Button title="Add Fruits or Vegetables" onPress={() => alert('Add Fruits or Vegetables button pressed')} />
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, icon_name, bgColor }}) => (
                <View style={[styles.headerContainer, { backgroundColor: bgColor}]}>
                  <Text style={styles.headerText}>{title}<Icon name={icon_name} size={20}/></Text>
                </View>
            )}
        />
      </View>
  );
};
// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  pokemonName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 10,
    flexGrow: 1,
  },
  cardImage: {
    width: 200,
    height: 250,
    resizeMode: 'contain',
  },
});

export default App;
