import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

function Home({navigation}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        gap: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
      }}>
      <Image
        style={{
          width: 100,
        }}
        source={require('../assets/images/MASKOT2.png')}
      />
      <View style={{gap: 20}}>
        <View>
          <Text style={styles.customText}>Sistem Periodik Unsur Lebih</Text>
          <Text style={styles.customText}>Mudah dan Menyenangkan </Text>
        </View>
        <TouchableOpacity
          title="loading"
          onPress={() => navigation.navigate('Login')}
          style={{
            elevation: 8,
            backgroundColor: '#FFD911',
            borderRadius: 20,
            paddingVertical: 10,
            paddingHorizontal: 12,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: '#000',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Loading...
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  customText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: 'white',
  },
});

export default Home;
