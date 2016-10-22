import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import Exponent from 'exponent'
import { SocialIcon } from 'react-native-elements'
import * as config from '../config'

export default class Login extends React.Component {
  async logIn() {
    const { type, token } = await Exponent.Facebook.logInWithReadPermissionsAsync(
      config.FB_APP_ID, {
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      const name = (await response.json()).name
      Alert.alert(
        'Logged in as', name,
      );
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <SocialIcon
          title='Sign In With Facebook'
          button
          type='facebook'
          onPress={this.logIn}
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