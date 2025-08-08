import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import CourseScreen from './src/screens/CourseScreen';
import LessonScreen from './src/screens/LessonScreen';
import QuizScreen from './src/screens/QuizScreen';
import type { SupportedLanguage } from './src/types';

export type RootStackParamList = {
  Home: undefined;
  Course: { language: SupportedLanguage };
  Lesson: { language: SupportedLanguage; lessonId: string };
  Quiz: { language: SupportedLanguage; lessonId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Programming Tutor' }} />
        <Stack.Screen name="Course" component={CourseScreen} options={({ route }) => ({ title: route.params.language })} />
        <Stack.Screen name="Lesson" component={LessonScreen} options={{ title: 'Урок' }} />
        <Stack.Screen name="Quiz" component={QuizScreen} options={{ title: 'Квиз' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}