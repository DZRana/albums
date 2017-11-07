// Import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// Make a Component
const Header = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center', // Flexbox align vertically
    alignItems: 'center', // Flexbox align horizontally
    height: 60,
    paddingTop: 15,
    elevation: 5,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the Component available to other parts of the App
export default Header;
