import { View, Text, StyleSheet } from 'react-native';

export default function KayitSatiri({ miktar, saat }) {
  return (
    <View style={styles.satir}>
      <Text style={styles.miktar}>{miktar} ml</Text>
      <Text style={styles.saat}>{saat}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  satir: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  miktar: {
    fontSize: 15,
  },
  saat: {
    fontSize: 13,
    color: '#666',
  },
});