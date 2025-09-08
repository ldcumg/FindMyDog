import { GoogleRegisterButton } from '@/components/auth/GoogleRegisterButton';
import SocialLogInButton from '@/components/auth/SocialLogInButton';
import { LogInProviders } from '@/constants/logInProviders';
import React from 'react';
import { Text, View } from 'react-native';

const LogIn = () => {
  return (
    <>
      {/* <GoogleRegisterButton /> */}
      <SocialLogInButton provider={LogInProviders.kakao} />
      <SocialLogInButton provider={LogInProviders.google} />
    </>
  );
};

export default LogIn;
