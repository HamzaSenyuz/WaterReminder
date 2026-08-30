import { View, Text, StyleSheet } from 'react-native';

export default function Ilerleme({ toplam, hedef }) {
  const hedefeUlasildi = toplam >= hedef;

  return (
    <View>
      <Text style={styles.miktar}>{toplam} ml</Text>
      <Text style={styles.hedef}>Hedef: {hedef} ml</Text>

      {hedefeUlasildi && (
        <Text style={styles.basari}>Hedefe ulaştın!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  miktar: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1D9E75',
    textAlign: 'center',
  },
  hedef: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  basari: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F6E56',
    backgroundColor: '#E1F5EE',
    padding: 10,
    borderRadius: 8,
    textAlign: 'center',
    marginBottom: 20,
  },
});