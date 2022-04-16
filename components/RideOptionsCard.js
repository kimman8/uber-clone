import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

const RideOptionsCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <Text style={tw`text-center py-5 text-xl`}>Select a ride</Text>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
