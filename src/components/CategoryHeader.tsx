import * as React from 'react';
import { Text, View, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default class CategoryHeader extends React.Component {
  state = {
    data: [
      { icon: 'grid', id: 11, label: 'Products' },
      { icon: 'message-circle', id: 1, label: 'Blogs' },
      { icon: 'heart', id: 2, label: 'Services' },
      { icon: 'users', id: 3, label: 'Refer' },
      { icon: 'phone', id: 4, label: 'Contact us' },
      { icon: 'shopping-bag', id: 5, label: 'My cart' },
      { icon: 'user', id: 6, label: 'Account' },
      { icon: 'percent', id: 7, label: 'Calculator' },
      { icon: 'help-circle', id: 8, label: 'Help' },
      { icon: 'award', id: 9, label: 'About us' },
      { icon: 'log-out', id: 10, label: 'Logout' },
    ],
    text: null,
  };

  render() {
    const renderItem = ({ item, index }) => (
      <View style={{ padding: 10, alignItems: 'center' }}>
        <View
          style={{
            position: 'absolute',
            top: 17,
            left: 10,
            height: 30,
            width: 30,
            borderRadius: 100,
            backgroundColor: index % 2 ? 'pink' : 'gold',
          }}
        />
        <Feather name={item.icon} color="#222" size={25} />
        <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#333' }}>
          {item.label}
        </Text>
      </View>
    );
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}
