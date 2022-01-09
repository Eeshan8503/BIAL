import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import api from '../Utils/api';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [req, setReq] = useState('');
  const [text, setText] = useState('');

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    if (data.startsWith('/luggage/find/')) {
      setScanned(true);
      setReq(data);
      setText('Found A Lost Luggage, Kindly Report It!');
    }
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={'Allow Camera'}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  // Return the View
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#FEF8F8'
      }}
    >
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 50,
            marginBottom: 50,
            color: '#5451D6',
            fontWeight: '900'
          }}
        >
          Scan QR code
        </Text>
        <View style={styles.barcodebox}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 800, width: 500 }}
          />
        </View>
        <Text style={styles.maintext}>{text}</Text>
        {scanned && (
          <Button
            title={'Report Luggage?'}
            onPress={async () => {
              const res = await api.get(req);
              setReq('');
              setText('Reported Successfully');
              setScanned(false);
              console.log(res.data);
            }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FEF8F8',
    alignItems: 'center',
    marginTop: 60
  },
  maintext: {
    fontSize: 16,
    margin: 20
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 6,
    borderColor: '#5451D6',
    height: 450,
    width: 330,
    overflow: 'hidden',
    backgroundColor: 'white'
  }
});
