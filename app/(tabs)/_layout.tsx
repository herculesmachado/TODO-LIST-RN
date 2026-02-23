import useTheme, { ThemeProvider } from '@/hooks/useTheme';
import { Ionicons as IonIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
 const {colors} = useTheme();
    return (
   <Tabs
    screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,

        tabBarStyle: {
            backgroundColor: colors.surface,
            
        }
        
    }}
   >
    <Tabs.Screen
    name='index'
    options={{
        title: 'Todos',
        tabBarIcon: ({ color, size }) => (
            <IonIcons name='list' size={size} color={color} />
        )
    }}/>
    
    <Tabs.Screen
    name='settings'
    options={{
        title: 'settings',
        tabBarIcon: ({ color, size }) => (
            <IonIcons name='settings-outline' size={size} color={color} />
        )
    }}/>

    </Tabs>
  );
}