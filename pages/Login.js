import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function Login({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>GlyceTrack</Text>
        <TextInput style={styles.input} placeholder="    Enter Email Address" placeholderTextColor={'#bfbfbf'} underlineColorAndroid="transparent" spellCheck="false" autoCorrect="false" autoCapitalize="none" required></TextInput>
        <Image 
          style={styles.image}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/666/666162.png'}}
        />
        <TextInput style={styles.input2} placeholder="    Enter Password" placeholderTextColor={'#bfbfbf'} secureTextEntry='true' underlineColorAndroid="transparent" spellCheck="false" autoCorrect="false" autoCapitalize="none" required></TextInput>
        <Image 
          style={styles.image2}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/61/61457.png'}}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={styles.button}>
            <Text style={styles.buttontext}>LOGIN</Text>
          </View>
        </TouchableOpacity>
        
        <Text style={styles.extratext}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <View style={styles.button2}>
            <Text style={styles.buttontext2}>Sign up here</Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: '8%',
    color: '#62F97A',
    fontWeight: '800',
    fontSize: '48px',
  },
  input: {
    marginTop: '20%',
    backgroundColor: '#3E3E3E',
    width: '90%',
    height: '10%',
    borderRadius: 15,
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: '22%',
    paddingRight: '5%',
    fontSize: '19px'
  },
  input2: {
    marginTop: '12%',
    backgroundColor: '#3E3E3E',
    width: '90%',
    height: '10%',
    borderRadius: 15,
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: '22%',
    paddingRight: '5%',
    fontSize: '19px'
  },
  image: {
    width: 50,
    height: 50,
    marginTop: '-17%',
    marginLeft: '-68%'
  },
  image2: {
    width: 50,
    height: 50,
    marginTop: '-17%',
    marginLeft: '-68%'
  },
  button: {
    backgroundColor: '#62F97A',
    marginTop: '13%',
    borderRadius: 40
  },
  buttontext: {
    paddingLeft: '32%',
    paddingRight: '32%',
    paddingBottom: '5%',
    paddingTop: '5%',
    fontSize: '25',
    fontWeight: '800',
    marginBottom: '0%',
  },
  button2: {
    borderRadius: 40,
  },
  buttontext2: {
    color: '#62F97A',
    paddingLeft: '30%',
    paddingRight: '30%',
    paddingBottom: '5%',
    paddingTop: '5%',
    fontSize: '25',
    fontWeight: 'bold',
    marginBottom: '5%',
  },
  extratext: {
    marginTop: '15%',
    marginBottom: '-5%',
    color: 'white',
    paddingBottom: '5%',
    paddingTop: '5%',
    fontSize: '25',
    fontWeight: 'bold',
  }
});
