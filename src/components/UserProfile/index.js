import React from 'react';
import { StyleSheet, View, Image, TextInput, Button, Alert } from 'react-native';

export const UserProfile = (props) => {
  
  const data = props.data; 

  const [text, onChangeText] = React.useState("");
  
  return(
    <>
    <View style={styles.container}>
      <Image 
        source={{ uri: data.image }}
        style={styles.imageIcon}
      />
      <TextInput 
        style={styles.textInput}
        placeholder="What's your dog doing?"
        clearTextOnFocus={true}
        multiline
        numberOfLines={2}
        maxLength={80}
        textBreakStrategy='balanced'
        onChangeText={onChangeText}
        value={text}
        onFocus={() => props.onFocus()}
      />
    </View>
    <View style={styles.button}>
      { props.isFocus ? <Button title="Post" onPress={() => {
        Alert.alert('Simple Button pressed')
        props.onFocus()
        props.addElement(data,text)
        onChangeText("")
    }} />  
                : null }
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  textInput:{
    fontSize: 15,
    width: 330,
    color: 'black', 
  },
  imageIcon:{
    marginLeft: 5,
    marginRight: 5,
    width: 30, 
    height:30,
    borderRadius: 40,
  },
  button: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  }
});