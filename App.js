import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [kayitlar, setKayitlar] = useState([]);
  const [hedef, setHedef] = useState(2500);

  // Toplam miktarı hesaplama — computed value
  const toplam = kayitlar.reduce((acc, k) => acc + k.miktar, 0);

  // Yeni kayıt ekleme fonksiyonu
  function kayitEkle(miktar) {
    const now = new Date();
    const saat =
      String(now.getHours()).padStart(2, '0') + ':' +
      String(now.getMinutes()).padStart(2, '0');

    const yeniKayit = {
      id: Date.now(),   // benzersiz id — mevcut zamanı milisaniye olarak
      miktar: miktar,
      saat: saat,
    };

    setKayitlar([yeniKayit, ...kayitlar]);
  }

  function sifirla() {
    setKayitlar([]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.baslik}>Su Hatırlatıcı</Text>

      <Text style={styles.miktar}>{toplam} ml</Text>
      <Text style={styles.hedef}>Hedef: {hedef} ml</Text>

      {toplam >= hedef && (
        <Text style={styles.basari}>Hedefe ulaştın!</Text>
      )}

      <View style={styles.butonlar}>
        <Button title="+150 ml" onPress={() => kayitEkle(150)} />
        <Button title="+250 ml" onPress={() => kayitEkle(250)} />
        <Button title="+500 ml" onPress={() => kayitEkle(500)} />
      </View>

      <Text style={styles.altBaslik}>Bugünkü kayıtlar:</Text>

      <ScrollView style={styles.liste}>
        {kayitlar.length === 0 && (
          <Text style={styles.bosMesaj}>Henüz kayıt yok.</Text>
        )}
        {kayitlar.map(kayit => (
          <View key={kayit.id} style={styles.kayitSatir}>
            <Text style={styles.kayitMiktar}>{kayit.miktar} ml</Text>
            <Text style={styles.kayitSaat}>{kayit.saat}</Text>
          </View>
        ))}
      </ScrollView>

      <Button title="Sıfırla" onPress={sifirla} color="red" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  baslik: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1D9E75',
    textAlign: 'center',
    marginBottom: 20,
  },
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
  butonlar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  altBaslik: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  liste: {
    flex: 1,
    marginBottom: 10,
  },
  bosMesaj: {
    color: '#999',
    textAlign: 'center',
    padding: 20,
  },
  kayitSatir: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  kayitMiktar: {
    fontSize: 15,
  },
  kayitSaat: {
    fontSize: 13,
    color: '#666',
  },
});