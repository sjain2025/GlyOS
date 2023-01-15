import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image } from 'react-native';

export default function RecordResults({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.header}>GlyceTrack</Text>
        <Text style={styles.title}>Record Results</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Results")}>
          <View style={styles.button}>
            <Text style={styles.buttontext}>Your Results</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={styles.button2}>
            <Text style={styles.buttontext2}>Go Back</Text>
          </View>
        </TouchableOpacity>
        <Image 
            style={styles.image2}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/137/137531.png'}}
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
    marginTop: '16%',
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
    marginLeft: "-40%",
    marginTop: "-18%"
  },
  button: {
    backgroundColor: '#62F97A',
    marginTop: '30%',
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
  button2: {
    backgroundColor: '#2C2C2C',
    marginTop: '18%',
    borderRadius: 40,
    borderColor: '#62F97A',
    borderWidth: 2
  },
  buttontext2: {
    color: '#62F97A',
    paddingLeft: '23%',
    paddingRight: '10%',
    paddingBottom: '7%',
    paddingTop: '7%',
    fontSize: '28',
    fontWeight: '800',
    marginBottom: '0%',
  },
});
