import React, {Component} from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import Style from './Style';
import vespa from '../../assets/images/vespa.jpg';
import honda from '../../assets/images/honda.jpg';
export class History extends Component {
  histories = [
    {
      image: vespa,
      name: 'Vespa Matic',
      date: 'Jan 18 to 21 2021',
      price: 245000,
      status: 'Has been returned',
    },
    {
      image: honda,
      name: 'Vespa Matic',
      date: 'Jan 18 to 21 2021',
      price: 245000,
      status: 'Has been returned',
    },
    {
      image: vespa,
      name: 'Vespa Matic',
      date: 'Jan 18 to 21 2021',
      price: 245000,
      status: 'Has been returned',
    },
  ];
  render() {
    return (
      <View style={Style.container}>
        <View style={Style.historyHeading}>
          <Text style={Style.historyText}>Order History</Text>
        </View>
        <View style={Style.historyContent}>
          <View>
            <Text style={Style.cardHeading}>A week ago</Text>
            <FlatList
              data={this.histories}
              renderItem={({item}) => (
                <View style={Style.historyCard}>
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    style={Style.cardImage}
                  />
                  <View>
                    <Text style={Style.itemName}>{item.name}</Text>
                    <Text style={Style.itemDate}>{item.date}</Text>
                    <Text style={Style.itemPrice}>
                      Prepayment: Rp{item.price}
                    </Text>
                    <Text style={Style.itemStatus}>{item.status}</Text>
                  </View>
                  <View style={Style.checkBox}>
                    <Text>a</Text>
                  </View>
                </View>
              )}
            />
          </View>
          <View>
            <Text style={Style.cardHeading}>Select</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default History;
