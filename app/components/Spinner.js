import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingSpinner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.spinnerBackground}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
      <Text style={styles.loadingText}>Loading</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  container: {
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  spinnerBackground: {
   
    backgroundColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
    marginBottom: 16,
  },
  loadingText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoadingSpinner;
