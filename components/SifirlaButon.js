import { Button, View, StyleSheet } from 'react-native';

export default function SifirlaButon({ onSifirla }) {
  return (
    <View style={styles.kapsayici}>
      <Button title="Sıfırla" onPress={onSifirla} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  kapsayici: {
    marginBottom: 10,
  },
});