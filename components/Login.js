import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SocialIcon } from 'react-native-elements'

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SocialIcon
          title='Sign In With Facebook'
          button
          type='facebook'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
});