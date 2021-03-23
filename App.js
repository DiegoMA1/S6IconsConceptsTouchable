import React, {useState} from 'react';
import { StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native';
import {Header} from './src/components/Header';
import {Feed} from './src/components/Feed';
import {UserProfile} from './src/components/UserProfile';

export default function App() {
  const dataUser = {
    "name": "Carlos Fuentes",
    "image": "https://cnnespanol.cnn.com/wp-content/uploads/2020/07/200703104728-labrador-retriever-stock-super-169.jpg?quality=100&strip=info&w=940&h=530&crop=1",
  }
  
  const dataFeed = [
    {
      "_id": 1,
      "name": "Jorge Luis Borges",
      "image": 'https://www.ecestaticos.com/image/clipping/557/418/7052744faf519355ca32636cf370cf63/tres-estudios-que-han-cambiado-todo-lo-que-creiamos-sobre-los-perros.jpg',
      "description": "Description Description Description Description Description Description Description Description",
      "like": true,
    },
    {
      "_id": 2,
      "name": "Julio Cortazar",
      "image": 'https://cdn.forbes.com.mx/2018/12/perro_china-640x360.jpg',
      "description": "Description Description Description Description Description Description Description Description",
      "like": true,
    },
    {
      "_id": 3,
      "name": "Jorge Luis Borges",
      "image": 'https://www.hola.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-a.jpg',
      "description": "Description Description Description Description Description Description Description Description",
      "like": false,
    },
    {
      "_id": 4,
      "name": "Jorge Luis Borges",
      "image": 'https://www.ecestaticos.com/image/clipping/557/418/7052744faf519355ca32636cf370cf63/tres-estudios-que-han-cambiado-todo-lo-que-creiamos-sobre-los-perros.jpg',
      "description": "Description Description Description Description Description Description Description Description",
      "like": true,
    },
    {
      "_id": 5,
      "name": "Julio Cortazar",
      "image": 'https://cdn.forbes.com.mx/2018/12/perro_china-640x360.jpg',
      "description": "Description Description Description Description Description Description Description Description",
      "like": false,
    },
    {
      "_id": 6,
      "name": "Jorge Luis Borges",
      "image": 'https://www.hola.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-a.jpg',
      "description": "Description Description Description Description Description Description Description Description",
      "like": true,
    },
  ]
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = () =>{
    setIsFocus(!isFocus)
  }
  const onFocusFlat = () =>{
    if(isFocus)
      setIsFocus(!isFocus)
  }
  
  return (
    <>
    <Header />
    <UserProfile data = {dataUser} onFocus={onFocus} isFocus={isFocus}/>
    <TouchableWithoutFeedback onPress={onFocusFlat}>
      <FlatList 
        keyExtractor={ (item) => String(item['_id']) }
        data = {dataFeed}
        renderItem = { ({item}) =>(
          <Feed data={item}/>
        )}
      />
    </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
    borderTopColor: 'grey',
    borderTopWidth: 1,
  },
  text:{
    fontSize: 20,
    color: 'black' 
  },
  descriptionText:{
    margin: 8,
  },
  image:{
    backgroundColor:'violet',
    marginTop: 5,
    marginLeft: 16,
    marginRight: 16,
    width: 30, 
    height:30
  },
});
