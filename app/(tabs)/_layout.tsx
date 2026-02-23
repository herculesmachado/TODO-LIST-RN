import { Ionicons as IonIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
 return (   
   <Tabs
    screenOptions={{
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