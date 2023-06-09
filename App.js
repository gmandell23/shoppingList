import React, {useState} from 'react';
import Header from './components/Header';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import {v4 as uuid_v4} from 'uuid';
import 'react-native-get-random-values';
import {uuid} from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid_v4(), text: 'Milk'},
    {id: uuid_v4(), text: 'Eggs'},
    {id: uuid_v4(), text: 'Bread'},
    {id: uuid_v4(), text: 'Juice'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'});
    }
    setItems(prevItems => {
      return [{id: uuid(), text}, ...prevItems];
    });
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
