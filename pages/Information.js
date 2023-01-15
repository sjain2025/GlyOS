import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image } from 'react-native';

export default function Information({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Information</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={styles.button3}>
            <Text style={styles.buttontext3}>Go Home</Text>
          </View>
        </TouchableOpacity>
        <Image 
            style={styles.image2}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png'}}
        />
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
  header: {
    paddingTop: '20%',
    paddingLeft: '27%',
    paddingRight: '27%',
    paddingBottom: '6%',
    backgroundColor: 'black',
    color: '#62F97A',
    fontWeight: 'bold',
    fontSize: '32px',
  },
  title: {
    marginTop: '30%',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '40px',
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: "83%",
    marginTop: "-58%"
  },
  image2: {
    width: 50,
    height: 50,
    marginLeft: "40%",
    marginTop: "-19%"
  },
  button: {
    backgroundColor: '#62F97A',
    marginTop: '10%',
    borderRadius: 40
  },
  button2: {
    backgroundColor: '#62F97A',
    marginTop: '10%',
    borderRadius: 40
  },
  buttontext: {
    paddingLeft: '15%',
    paddingRight: '15%',
    paddingBottom: '8%',
    paddingTop: '8%',
    fontSize: '32',
    fontWeight: '800',
    marginBottom: '0%',
  },
  buttontext2: {
    paddingLeft: '12%',
    paddingRight: '12%',
    paddingBottom: '8%',
    paddingTop: '8%',
    fontSize: '32',
    fontWeight: '800',
    marginBottom: '0%',
  },
  button3: {
    backgroundColor: '#2C2C2C',
    marginTop: '18%',
    borderRadius: 40,
    borderColor: '#62F97A',
    borderWidth: 2
  },
  buttontext3: {
    color: '#62F97A',
    paddingLeft: '10%',
    paddingRight: '22%',
    paddingBottom: '7%',
    paddingTop: '7%',
    fontSize: '28',
    fontWeight: '800',
    marginBottom: '0%',
  },
});
