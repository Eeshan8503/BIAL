import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import api from '../Utils/api';

const Luggage = ({ details }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [report, setReport] = useState(details.lost);
  return (
    <View style={styles.container}>
      <View style={styles.modalView}>
        <Modal animationType="slide" visible={modalVisibility}>
          <Text
            style={{
              fontSize: 30,
              margin: 20,
              marginLeft: 73
            }}
          >
            Luggage QR Code
          </Text>
          <View style={{ marginLeft: 85 }}>
            <QRCode size={210} value={`/luggage/find/${details.token}`} />
          </View>

          <TouchableOpacity
            onPress={() => setModalVisibility(!setModalVisibility)}
          >
            <Text
              style={{
                fontSize: 30,
                margin: 20,
                marginLeft: 150,
                color: 'red'
              }}
            >
              CLOSE
            </Text>
          </TouchableOpacity>
        </Modal>
      </View>
      <View style={{ justifyContent: 'center' }}>
        <Text
          style={{
            fontSize: 20
          }}
        >
          {details.description}
        </Text>
        <Text
          style={{
            fontSize: 20
          }}
        >
          {details.color}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setModalVisibility(true);
          }}
        >
          <Text
            style={{
              fontSize: 20
            }}
          >
            ID: {details._id.slice(0, 17)}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={async () => {
          const res = await api.patch(`/luggage/${details._id}`, {
            lost: !report
          });
          console.log(res.data);
          if (res.data.status) setReport(!report);
        }}
      >
        {report ? (
          <View
            style={{
              marginTop: 5,
              height: 80,
              width: 80,
              justifyContent: 'center',
              alignContent: 'center',
              borderWidth: 3,
              borderColor: 'red',
              borderRadius: 40
            }}
          >
            <Text style={{ textAlign: 'center' }}>LOST</Text>
          </View>
        ) : (
          <View
            style={{
              marginTop: 5,
              height: 80,
              width: 80,
              justifyContent: 'center',
              alignContent: 'center',
              borderWidth: 3,
              borderColor: 'red',
              borderRadius: 40
            }}
          >
            <Text style={{ textAlign: 'center' }}>REPORT</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Luggage;

const styles = StyleSheet.create({
  container: {
    width: '85%',
    flexDirection: 'row',
    height: 120,
    marginLeft: 20,
    borderWidth: 3,
    borderColor: '#44369E',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'space-between',
    marginBottom: 20
  }
});
