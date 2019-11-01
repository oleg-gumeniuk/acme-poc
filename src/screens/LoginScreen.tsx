import * as React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from '../components/Button';
import FormTextInput from '../components/FormTextInput';
import imageLogo from '../assets/images/logo.png';
import colors from '../config/colors';
import strings from '../config/strings';
import constants from '../config/constants';

import { doAuth } from '../api/AuthService';

interface State {
  email: string;
  password: string;
  emailTouched: boolean;
  passwordTouched: boolean;
  isWrongCredentialError: boolean;
}

class LoginScreen extends React.Component<{}, State> {
  passwordInputRef = React.createRef<FormTextInput>();

  state: State = {
    email: '',
    password: '',
    emailTouched: false,
    passwordTouched: false,
    isWrongCredentialError: false
  };

  handleEmailChange = (email: string) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password: string) => {
    this.setState({ password: password });
  };

  handleEmailSubmitPress = () => {
    if (this.passwordInputRef.current) {
      this.passwordInputRef.current.focus();
    }
  };

  handleEmailBlur = () => {
    this.setState({ emailTouched: true });
  };

  handlePasswordBlur = () => {
    this.setState({ passwordTouched: true });
  };

  handleLoginPress = () => {
    doAuth(this.state).then(response => {
      if (response.length && response[0].token) {
        this.props.navigation.navigate('Dashboard');
        this.setState({
          isWrongCredentialError: false
        });
        return;
      }
      this.setState({
        isWrongCredentialError: true
      });
    });
  };

  render() {
    const { email, password, emailTouched, passwordTouched } = this.state;
    const emailError =
      !email && emailTouched ? strings.EMAIL_REQUIRED : undefined;
    const passwordError =
      !password && passwordTouched ? strings.PASSWORD_REQUIRED : undefined;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
        <Image source={imageLogo} style={styles.logo} />
        <View style={styles.form}>
          <Text style={styles.wrongCredentialsText}>
            {this.state.isWrongCredentialError
              ? strings.INCORRECT_CREDENTIALS
              : ''}
          </Text>
          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            onSubmitEditing={this.handleEmailSubmitPress}
            placeholder={strings.EMAIL_PLACEHOLDER}
            keyboardType="email-address"
            autoCorrect={false}
            returnKeyType={'next'}
            onBlur={this.handleEmailBlur}
            error={emailError}
            blurOnSubmit={constants.IS_IOS}
          />
          <FormTextInput
            ref={this.passwordInputRef}
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
            secureTextEntry={true}
            returnKeyType={'done'}
            onBlur={this.handlePasswordBlur}
            error={passwordError}
          />
          <Button
            label={strings.LOGIN}
            onPress={this.handleLoginPress}
            disabled={!email || !password}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    width: '80%'
  },
  wrongCredentialsText: {
    fontSize: 12,
    textAlign: 'center',
    color: 'red',
    margin: 5
  }
});

export default LoginScreen;
