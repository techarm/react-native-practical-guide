import { useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../utils/http';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    const response = await login(email, password);
    setIsAuthenticating(false);

    if (!response) {
      Alert.alert('Autnentication error', 'Incorrect username or password.');
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
