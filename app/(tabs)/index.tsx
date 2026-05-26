import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { bonnarooThursdaySets } from '@/data/festivals/bonnaroo2026/thursday';
import type { FestivalSet } from '@/services/clashfinder/types';

function formatTime(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}

function SetCard({ item }: { item: FestivalSet }) {
  return (
    <View style={styles.card}>
      <View style={styles.timeCol}>
        <Text style={styles.time}>{formatTime(item.startTime)}</Text>
        {item.endTime && (
          <Text style={styles.timeEnd}>{formatTime(item.endTime)}</Text>
        )}
      </View>
      <View style={styles.infoCol}>
        <Text style={styles.artist}>{item.artist}</Text>
        <Text style={styles.stage}>{item.stage}</Text>
      </View>
    </View>
  );
}

export default function ScheduleScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Thursday · June 11</Text>
      <FlatList
        data={bonnarooThursdaySets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SetCard item={item} />}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f' },
  header: { color: '#fff', fontSize: 20, fontWeight: '700', padding: 16 },
  list: { paddingHorizontal: 16, paddingBottom: 32 },
  card: {
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
  },
  timeCol: { width: 70, marginRight: 12 },
  time: { color: '#6C63FF', fontSize: 13, fontWeight: '600' },
  timeEnd: { color: '#555', fontSize: 12, marginTop: 2 },
  infoCol: { flex: 1 },
  artist: { color: '#fff', fontSize: 16, fontWeight: '700' },
  stage: { color: '#888', fontSize: 13, marginTop: 2 },
});
