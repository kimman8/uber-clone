import React, { useState } from 'react';
import { selectTravelTimeInformation } from '../slices/navSlice';
import 'intl';
import 'intl/locale-data/jsonp/en-GB';
import tw from 'tailwind-react-native-classnames';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const data = [
  {
    id: 'Uber-X',
    title: 'UberX',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Uber-XL',
    title: 'Uber XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'Uber-LUX',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
];

//if we have surge pricing, this goes up
const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow flex-1`}>
      <View>
        <TouchableOpacity
          style={tw`absolute top-3 left-5 p-3 z-50 rounded-full`}
          onPress={() => navigation.navigate('NavigateCard')}
        >
          <Icon name='chevron-left' type='fontawesome' />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Select a ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { image, multiplier, id, title }, item }) => (
          <TouchableOpacity
            onPress={() => {
              setSelected(item);
            }}
            style={tw`flex-row items-center justify-between px-10 ${
              id === selected?.id && 'bg-gray-200'
            }`}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: 'contain' }}
              source={{
                uri: image,
              }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text style={tw``}>{travelTimeInformation?.duration?.text}</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat('en-AU', {
                style: 'currency',
                currency: 'AUD',
              }).format(
                (travelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}
          disabled={!selected}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
