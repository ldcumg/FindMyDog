import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const TapLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="main"
        options={{ title: '메인' }}
      />
      <Tabs.Screen
        name="board"
        options={{ title: '게시판' }}
      />
      <Tabs.Screen
        name="gallery"
        options={{ title: '갤러리' }}
      />
      <Tabs.Screen
        name="my"
        options={{ title: '마이' }}
      />
    </Tabs>
  );
};

export default TapLayout;
