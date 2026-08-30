import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { useState } from 'react';

import KayitSatiri from './components/KayitSatiri';
import HizliButonlar from './components/HizliButonlar';
import Ilerleme from './components/Ilerleme';
import SifirlaButon from './components/SifirlaButon';

export default function App() {
  const [kayitlar, setKayitlar] = useState([]);
  const [hedef, setHedef] = useState(2500);

  const toplam = kayitlar.reduce((acc, k) => acc + k.miktar, 0);

  function kayitEkle(miktar) {
    const now = new Date();
    const saat =
      String(now.getHours()).padStart(2, '0') + ':' +
      String(now.getMinutes()).padStart(2, '0');

    const yeniKayit = {
      id: Date.now(),
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

      <Ilerleme toplam={toplam} hedef={hedef} />

      <HizliButonlar onEkle={kayitEkle} />

      <Text style={styles.altBaslik}>Bugünkü kayıtlar:</Text>

      <ScrollView style={styles.liste}>
        {kayitlar.length === 0 && (
          <Text style={styles.bosMesaj}>Henüz kayıt yok.</Text>
        )}
        {kayitlar.map(kayit => (
          <KayitSatiri
            key={kayit.id}
            miktar={kayit.miktar}
            saat={kayit.saat}
          />
        ))}
      </ScrollView>

      <SifirlaButon onSifirla={sifirla} />
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
});