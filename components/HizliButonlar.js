import { View, Button, StyleSheet } from 'react-native';

export default function HizliButonlar({ onEkle }) {
  return (
    <View style={styles.butonlar}>
      <Button title="+150 ml" onPress={() => onEkle(150)} />
      <Button title="+250 ml" onPress={() => onEkle(250)} />
      <Button title="+500 ml" onPress={() => onEkle(500)} />
    </View>
  );
}

const styles = StyleSheet.create({
  butonlar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});