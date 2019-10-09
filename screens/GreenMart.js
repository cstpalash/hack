import React from 'react';
import { connect } from "react-redux";
import { StyleSheet, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import Header from '../components/Header';

import { Icon, Product } from '../components/';
import { products } from '../constants/';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

import _ from 'lodash';
import materialTheme from '../constants/Theme';

export default class GreenMart extends React.Component {

  state = {
    processing : true,
    items : []
  }

  componentDidMount(){
    this.setState({
      processing : false,
      items : products
    })
  }

  render() {

    const renderMart = _.map(this.state.items, item => {
      return <Block style={{ paddingHorizontal: theme.SIZES.BASE }} key={item.id}>
               <Product product={item} horizontal />
             </Block>
    });

    return (
      <Block flex center style={styles.home}>
        <Header search title="GreenMart" />
        <Block >

          { 
            this.state.processing  === true ? 
              <Text bold style={{ marginTop : 10 }} color={materialTheme.COLORS.SUCCESS}>Loading...</Text> :
              <ScrollView style={{ marginBottom : 150 }} showsVerticalScrollIndicator={false} contentContainerStyle={styles.products}>
                <Block flex>
                  {renderMart}
                </Block>
              </ScrollView>
          }
          
          
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width 
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300'
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2
  },
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
  },
  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    elevation: 1,
  },
  image: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  fullImage: {
    height: 215,
    width: width - theme.SIZES.BASE * 3,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

