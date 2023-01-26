import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { auth } from '../firebase';

export default function Login({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
      })
      .catch(error => {
        if (error.message === "Firebase: Error (auth/missing-email).") {
          alert("Email address is required")
        } else if (error.message === "Firebase: An internal AuthError has occurred. (auth/internal-error).") {
          alert("Password is required")
        } else if (error.message === "Firebase: The email address is badly formatted. (auth/invalid-email).") {
          alert("Email address is not formatted correctly")
        } else if (error.message === "Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).") {
          alert("User login is invalid")
        } else if (error.message === "FirebaseError: Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).") {
          alert("User login is invalid")
        } else {
          alert("Invalid login")
        }
      })
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>GlyOS</Text>
        <TextInput value={email} onChangeText={text => setEmail(text)} style={styles.input} placeholder="    Enter Email Address" placeholderTextColor={'#bfbfbf'} underlineColorAndroid="transparent" spellCheck="false" autoCorrect="false" autoCapitalize="none" required></TextInput>
        <Image 
          style={styles.image}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/666/666162.png'}}
        />
        <TextInput value={password} onChangeText={text => setPassword(text)} style={styles.input2} placeholder="    Enter Password" placeholderTextColor={'#bfbfbf'} secureTextEntry='true' underlineColorAndroid="transparent" spellCheck="false" autoCorrect="false" autoCapitalize="none" required></TextInput>
        <Image 
          style={styles.image2}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/61/61457.png'}}
        />
        <TouchableOpacity onPress={handleLogin}>
          <View style={styles.button}>
            <Text style={styles.buttontext}>LOGIN</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={styles.buttonextra}>
            <Text style={styles.buttonextratext}>Log in with Azure AD</Text>
          </View>
        </TouchableOpacity>

        <Image 
          style={styles.image3}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1200px-Windows_logo_-_2012.svg.png'}}
        />
        
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
    marginTop: '15%',
    color: '#62F97A',
    fontWeight: '800',
    fontSize: '48px',
  },
  input: {
    marginTop: '15%',
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
  image3: {
    width: 40,
    height: 40,
    marginTop: '-13.5%',
    marginLeft: '-67%'
  },
  button: {
    backgroundColor: '#62F97A',
    marginTop: '12%',
    borderRadius: 20
  },
  buttonextra: {
    backgroundColor: '#3778bf',
    marginTop: '6%',
    borderRadius: 15
  },
  buttontext: {
    paddingLeft: '35.5%',
    paddingRight: '35.5%',
    paddingBottom: '5%',
    paddingTop: '5%',
    fontSize: '25',
    fontWeight: '800',
    marginBottom: '0%',
  },
  buttonextratext: {
    color: 'white',
    paddingLeft: '22%',
    paddingRight: '6%',
    paddingBottom: '5%',
    paddingTop: '5%',
    fontSize: '24',
    fontWeight: '700',
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
    marginTop: '14%',
    marginBottom: '-6%',
    color: 'white',
    paddingBottom: '5%',
    paddingTop: '5%',
    fontSize: '25',
    fontWeight: 'bold',
  }
});
