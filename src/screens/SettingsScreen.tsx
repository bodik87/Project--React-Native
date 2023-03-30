import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import {COLORS} from '../../theme/theme';

type Product = {
  id: string;
  title: string;
  proteins: number;
  fats: number;
  carbohydrates: number;
  calories: number;
  isFavorite: boolean;
};

function SettingsScreen(): JSX.Element {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<Product[]>([]);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://6343dcad2dadea1175aebff4.mockapi.io/products',
      );
      const products = await response.json();
      setData(products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  type ItemProps = {
    title: string;
  };

  const Item = ({title}: ItemProps) => <Text style={styles.item}>{title}</Text>;

  return (
    <SafeAreaView style={styles.wrapper}>
      <Button title="Loading" onPress={() => getProducts()} />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Item title={item.title} />}
        />
      )}
    </SafeAreaView>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 12,
    paddingRight: 12,
    paddingLeft: 12,
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
    backgroundColor: COLORS.white,
    marginTop: 8,
    borderRadius: 8,
  },
});
