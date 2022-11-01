import { useContext, useState } from 'react';
import { createUser } from '../utils/http';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authContext = useContext(AuthContext);

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    const token = await createUser(email, password);
    authContext.authenticate(token);

    if (!token) {
      setIsAuthenticating(false);
      Alert.alert(
        'Autnentication error',
        'Could not create user, please check your input and try again later.'
      );
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
