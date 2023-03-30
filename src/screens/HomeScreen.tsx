/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  // NativeSyntheticEvent,
  // TextInputChangeEventData,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';
import {products} from '../../data';
import {COLORS} from '../../theme/theme';

interface IProduct {
  id: string;
  title: string;
  proteins: number;
  fats: number;
  carbohydrates: number;
  calories: number;
  isFavorite: boolean;
}

function HomeScreen(): JSX.Element {
  const [searchQuery, setSearchQuery] = React.useState<any>('');
  const [filteredProducts, setFilteredProducts] = useState<IProduct[] | []>([]);

  useEffect(() => {
    const filtered = products.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase().trim()),
    );
    if (searchQuery === '') {
      return setFilteredProducts([]);
    }

    setFilteredProducts(filtered);
  }, [searchQuery]);

  // const handleChange = (
  //   e: NativeSyntheticEvent<TextInputChangeEventData>,
  // ): void => {
  //   let lowerCase = e.nativeEvent.text.toLowerCase().trim();
  //   const filteredData = products?.filter(product => {
  //     if (lowerCase === '') {
  //       return products;
  //     } else {
  //       return product.title.trim().toLowerCase().includes(lowerCase);
  //     }
  //   });
  //   setFilteredProducts(filteredData);
  //   setSearchQuery(lowerCase);
  // };

  type ItemProps = {
    title: string;
  };

  const Item = ({title}: ItemProps) => <Text style={styles.item}>{title}</Text>;

  return (
    <SafeAreaView style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
        placeholder="Пошук продуктів"
        // keyboardType="numeric"
      />
      <FlatList
        data={filteredProducts}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    // backgroundColor: COLORS.bg,
  },
  input: {
    // position: 'absolute',
    // bottom: 70,
    // left: 0,
    // right: 0,
    fontSize: 20,
    margin: 12,
    borderWidth: 1,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: COLORS.white,
    borderRadius: 12,
  },
  item: {
    fontSize: 20,
    color: COLORS.dark,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    paddingTop: 22,
    paddingBottom: 22,
    paddingLeft: 18,
    paddingRight: 18,
  },
  list: {
    margin: 12,
    backgroundColor: COLORS.white,
    borderRadius: 12,
  },
});
