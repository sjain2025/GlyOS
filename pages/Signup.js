import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { auth } from '../firebase';

export default function Signup({navigation}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const handleSignUp = ({navigation}) => {
    if (password !== repeatPassword) {
      alert("Passwords do not match");
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          navigation.replace("Home");
        })
        .catch(error => {
          if (!(error.message === "undefined is not an object (evaluating 'navigation.replace')" || error.message === "TypeError: undefined is not an object (evaluating 'navigation.replace')")) {
            alert("Enter a valid email and password. Ensure that password match before registering a new account.")
          }
        })
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        <TextInput value={email} onChangeText={text => setEmail(text)} style={styles.input} placeholder="    Enter Email Address" placeholderTextColor={'#bfbfbf'} underlineColorAndroid="transparent" spellCheck="false" autoCorrect="false" autoCapitalize="none" required></TextInput>
        <Image 
          style={styles.image}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/666/666162.png'}}
        />
        <TextInput value={password} onChangeText={text => setPassword(text)} style={styles.input} placeholder="    Enter Password" placeholderTextColor={'#bfbfbf'} underlineColorAndroid="transparent" spellCheck="false" autoCorrect="false" autoCapitalize="none" secureTextEntry='true' required></TextInput>
        <Image 
          style={styles.image}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/61/61457.png'}}
        />
        <TextInput value={repeatPassword} onChangeText={text => setRepeatPassword(text)} style={styles.input} placeholder="    Repeat Password" placeholderTextColor={'#bfbfbf'} underlineColorAndroid="transparent" spellCheck="false" autoCorrect="false" autoCapitalize="none" secureTextEntry='true' required></TextInput>
        <Image 
          style={styles.image}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/61/61457.png'}}
        />
        <TouchableOpacity onPress={handleSignUp}>
          <View style={styles.button}>
            <Text style={styles.buttontext}>REGISTER</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.extratext}>Have an existing account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <View style={styles.button2}>
            <Text style={styles.buttontext2}>Log in here</Text>
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
  },
  title: {
    marginTop: '30%',
    marginBottom: '5%',
    color: '#62F97A',
    fontWeight: '800',
    fontSize: '42px',
  },
  input: {
    marginTop: '12%',
    backgroundColor: '#3E3E3E',
    width: '90%',
    height: '10%',
    borderRadius: 15,
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: '22%',
    fontSize: '19px'
  },
  image: {
    width: 50,
    height: 50,
    marginTop: '-16.5%',
    marginLeft: '-68%'
  },
  button: {
    backgroundColor: '#62F97A',
    marginTop: '13%',
    marginBottom: '-8%',
    borderRadius: 40
  },
  buttontext: {
    paddingLeft: '30%',
    paddingRight: '30%',
    paddingBottom: '5%',
    paddingTop: '5%',
    fontSize: '25',
    fontWeight: '800'
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
    fontSize: '22',
    fontWeight: 'bold'
  },
  extratext: {
    marginTop: '15%',
    marginBottom: '-6%',
    color: 'white',
    paddingBottom: '5%',
    paddingTop: '5%',
    fontSize: '22',
    fontWeight: 'bold'
  }
});
