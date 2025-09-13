import '../styles/global.css';
import { supabase } from '@/lib/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Session } from '@supabase/supabase-js';
import { Slot, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import 'react-native-url-polyfill/auto';

const RootLayout = () => {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  console.log('[㏒] - session =>', session);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    (async function () {
      const hasLaunched = await AsyncStorage.getItem('hasLaunched');

      if (hasLaunched === 'true') {
        router.replace('/');
        return;
      }

      await AsyncStorage.setItem('hasLaunched', 'true');
      router.replace('/onboarding');
    })();
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Slot />
    </SafeAreaView>
  );
};

export default RootLayout;
