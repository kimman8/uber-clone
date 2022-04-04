import React from 'react';
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: 'Box Hill, Melbourne',
  },
  {
    id: '456',
    icon: 'briefcase',
    location: 'Work',
    destination: 'AKQA, Melbourne',
  },
];
const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Text>yo</Text>
        </TouchableOpacity>
      )}
    >
      <Text></Text>
    </FlatList>
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
