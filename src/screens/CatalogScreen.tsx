import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import {Nutrients, products} from '../../data';
import {COLORS} from '../../theme/theme';

type ItemProps = {
  title: string;
  proteins: number;
  fats: number;
  carbohydrates: number;
  calories: number;
  isFavorite: boolean;
};

const Item = ({title, proteins, fats, carbohydrates, calories}: ItemProps) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.nutrientRow}>
      <Text style={styles.nutrient}>{Nutrients.proteins}</Text>
      <Text style={styles.nutrient}>{proteins}</Text>
    </View>
    <View style={styles.nutrientRow}>
      <Text style={styles.nutrient}>{Nutrients.fats}</Text>
      <Text style={styles.nutrient}>{fats}</Text>
    </View>
    <View style={styles.nutrientRow}>
      <Text style={styles.nutrient}>{Nutrients.carbohydrates}</Text>
      <Text style={styles.nutrient}>{carbohydrates}</Text>
    </View>
    <View style={styles.nutrientRow}>
      <Text style={styles.calories}>{Nutrients.calories}</Text>
      <Text style={styles.calories}>{calories}</Text>
    </View>
  </View>
);

function CatalogScreen(): JSX.Element {
  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <Item
            title={item.title}
            proteins={item.proteins}
            fats={item.fats}
            carbohydrates={item.carbohydrates}
            calories={item.calories}
            isFavorite={false}
          />
        )}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </SafeAreaView>
  );
}

export default CatalogScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.bg,
  },
  list: {
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 80,
  },
  card: {
    width: '100%',
    display: 'flex',
    backgroundColor: COLORS.white,
    marginBottom: 6,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 12,
  },
  title: {
    fontFamily: 'Fira Sans',
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.dark,
    paddingBottom: 4,
  },
  nutrient: {
    fontFamily: 'Fira Sans',
    fontSize: 16,
    fontWeight: 'bold',
  },
  calories: {
    fontFamily: 'Fira Sans',
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  nutrientRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
