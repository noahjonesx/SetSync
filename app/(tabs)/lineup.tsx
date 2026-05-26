import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function LineupScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Lineup coming soon</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f', justifyContent: 'center', alignItems: 'center' },
  text: { color: '#888', fontSize: 16 },
});
