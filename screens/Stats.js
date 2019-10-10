import React from 'react';
import { connect } from "react-redux";
import { StyleSheet, Dimensions, ScrollView, ActivityIndicator, Picker, Image, DatePickerIOS } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import Header from '../components/Header';
import { withNavigation } from 'react-navigation';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { Icon, Product, Post, StatusLogo } from '../components/';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');
import products from '../constants/products';

import _ from 'lodash';
import materialTheme from '../constants/Theme';

import NavigationService from '../services/NavigationService.js';
import Images from '../constants/Images';

class Stats extends React.Component {


  state = {
    performance : "My performance",
    initialValue : 4500,
    maxValue : 10000,
    displayResult : true
  }

  onSelect(selectedValue, selectedIndex){
    
    if(selectedValue == "My performance"){
      this.setState({
        performance : "My performance",
        initialValue : 4500,
        maxValue : 10000,
        displayResult : true
      });
    }
    else{
      this.setState({
        performance : "DB's performance",
        initialValue : 4500 * 5000,
        maxValue : 10000 * 5000,
        displayResult : false
      });
    }
  }

  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);
    
  }


  render() {
    const { navigation } = this.props;

    return (
      <Block flex>
        <Header title="Stats" />
        <ScrollView
          style={styles.home}
          showsVerticalScrollIndicator={false}>

          <Block>
            <StatusLogo initialValue={this.state.initialValue} maxValue={this.state.maxValue} />
          </Block>
          <Block style={{ marginTop : -50 }}>
            <Picker selectedValue={this.state.performance} onValueChange={this.onSelect}>
              {
                _.map(["My performance", "DB's performance"], item => {
                  return <Picker.Item key={item} label={item} value={item} />
                })
              }
            </Picker>
          </Block>

          {
            this.state.displayResult && 
            <Block row space="between" style={{ marginTop : -25 }}>

              <Block center flex>
                <Text bold size={14} >Q1</Text>
                <Text size={14} >Exp : 2.5k</Text>
                <Text size={14} >Act : 2.6k</Text>
                <Text size={14} color={materialTheme.COLORS.SUCCESS} >Meets</Text>
              </Block>

              <Block center flex>
                <Text bold size={14} >Q2</Text>
                <Text size={14} >Exp : 5.0k</Text>
                <Text size={14} >Act : 4.6k</Text>
                <Text size={14} color={materialTheme.COLORS.WARNING} >Below</Text>
              </Block>

              <Block center flex>
                <Text bold size={14} >Q3</Text>
                <Text size={14} >Exp : 7.5k</Text>
                <Text size={14} >Act : TBD</Text>
                <Text size={14} >TBD</Text>
              </Block>

              <Block center flex>
                <Text bold size={14} >Q4</Text>
                <Text size={14} >10.0 k</Text>
                <Text size={14} >ACT : TBD</Text>
                <Text size={14} >TBD</Text>
              </Block>

            </Block>
          }

          

        </ScrollView>
      </Block>
    );
  }
}

export default withNavigation(Stats);

const styles = StyleSheet.create({
  home: {
    width: width 
  },
  title: {
    paddingHorizontal: theme.SIZES.BASE,
  },
  group: {
    paddingTop: 20,
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
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  horizontalImage: {
    height: 140,
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
  button: {
    marginBottom: theme.SIZES.BASE,
    width: width - (theme.SIZES.BASE * 2),
  },
});
