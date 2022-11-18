import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type IconButtonProps = {
  onPressed: () => void;
}

function IconButton({
  onPressed,
}: IconButtonProps): JSX.Element {
  return <TouchableOpacity
    activeOpacity={0.6}
    style={styles.button}
    onPress={onPressed}>
    <Text style={styles.text}>Fav</Text>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 8,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default IconButton;
