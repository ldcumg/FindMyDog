import type { LogInProviders } from '@/constants/logInProviders';
import { SocialLogIn } from '@/services/socialLogInService';
import { Text, Pressable } from 'react-native';

interface SocialLogInButtonProps {
  provider: LogInProviders;
}

const SocialLogInButton = ({ provider }: SocialLogInButtonProps) => {
  return (
    <Pressable onPress={() => SocialLogIn(provider)}>
      <Text>{provider}로그인 버튼</Text>
    </Pressable>
  );
};

export default SocialLogInButton;
