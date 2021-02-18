import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, Pressable, StyleSheet} from 'react-native';

// Importing Images
import DiceOne from './images/dice1.png';
import DiceTwo from './images/dice2.png';
import DiceThree from './images/dice3.png';
import DiceFour from './images/dice4.png';
import DiceFive from './images/dice5.png';
import DiceSix from './images/dice6.png';

const App = () => {
  // const uri = DiceFive;
  const [uri, setUri] = useState(DiceOne);
  const [uri2, setUri2] = useState(DiceSix);

  const playButtonTapped = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setUri(DiceOne);
        break;
      case 2:
        setUri(DiceTwo);
        break;
      case 3:
        setUri(DiceThree);
        break;
      case 4:
        setUri(DiceFour);
        break;
      case 5:
        setUri(DiceFive);
        break;
      case 6:
        setUri(DiceSix);
        break;

      // default:
      //   setUri(DiceTwo);
      //   break;
    };

    switch (randomNumber) {
      case 1:
        setUri2(DiceSix);
        break;
      case 2:
        setUri2(DiceFive);
        break;
      case 3:
        setUri2(DiceFour);
        break;
      case 4:
        setUri2(DiceThree);
        break;
      case 5:
        setUri2(DiceTwo);
        break;
      case 6:
        setUri2(DiceOne);
        break;

      // default:
      //   setUri(DiceTwo);
      //   break;
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={uri} />
        <Image style={styles.image} source={uri2} />
        <TouchableOpacity onPress={playButtonTapped}>
          <Text style={styles.gamePlay}>Play Game</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },

  gamePlay: {
    fontSize: 20,
    color: '#f2a365',
    marginTop: 30,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: '#30475e',
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: 'bold',
  },
});
