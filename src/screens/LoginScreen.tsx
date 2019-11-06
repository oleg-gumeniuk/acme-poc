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

import { auth } from '../config/firebase';

interface State {
  email: string;
  password: string;
  emailTouched: boolean;
  passwordTouched: boolean;
  displayErrorMsg: boolean;
  errorMsg: string;
}

/**
 * A Log in screen which handles an authentication operations
 *
 */
class LoginScreen extends React.Component<{}, State> {
  passwordInputRef = React.createRef<FormTextInput>();

  state: State = {
    email: '',
    password: '',
    emailTouched: false,
    passwordTouched: false,
    displayErrorMsg: false,
    errorMsg: ''
  };

  componentDidUpdate() {
    if (!this.state.displayErrorMsg && this.state.errorMsg) {
      this.setState({
        errorMsg: ''
      });
    }
  }

  handleEmailChange = email => this.setState({ email: email });

  handlePasswordChange = password => this.setState({ password: password });

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
    this.setState({
      displayErrorMsg: false
    });

    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.navigation.navigate('Dashboard');
      })
      .catch(error => {
        this.setState({
          displayErrorMsg: true,
          errorMsg: error.message
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
            {this.state.errorMsg ? this.state.errorMsg : ''}
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
    justifyContent: 'center'
  },
  logo: {
    flex: 1,
    width: '80%',
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    width: '80%'
  },

  wrongCredentialsText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'red',
    marginBottom: 5
  }
});

export default LoginScreen;
