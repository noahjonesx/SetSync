import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#6C63FF' }}>
      <Tabs.Screen name="index" options={{ title: 'Schedule' }} />
      <Tabs.Screen name="lineup" options={{ title: 'Lineup' }} />
    </Tabs>
  );
}
