import type { LogInProviders } from '@/constants/logInProviders';
import { supabase } from '@/lib/supabase';
import { Linking } from 'react-native';

export const SocialLogIn = async (provider: LogInProviders) => {
  const { data } = await supabase.auth.signInWithOAuth({
    provider,
  });
  console.log('[ ㏒ ] data =>', data);
  // if (!data.url) throw new Error('no url');
  // try {
  //   await Linking.openURL(data.url);
  // } catch (error) {
  //   console.log(error);
  //   throw error;
  // }
};
