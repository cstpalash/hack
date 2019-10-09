import React from 'react';
import { connect } from "react-redux";
import { StyleSheet, Dimensions, ScrollView, ActivityIndicator, Picker, Image, DatePickerIOS } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import Header from '../components/Header';
import { withNavigation } from 'react-navigation';

import { Icon, Product, Post } from '../components/';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');
import products from '../constants/products';

import { getPost } from "../actions/postAction";
import _ from 'lodash';
import materialTheme from '../constants/Theme';

import NavigationService from '../services/NavigationService.js';
import Images from '../constants/Images';

class AddChallenge extends React.Component {


  createChallenge(){
    this.props.navigation.navigate('Feed');
  }

  state = {
    title : "Plant a tree",
    desc : "Trees contribute to the global environment by improving air quality, conserving water, preserving soil, supporting wildlife.",
    selectedIdeaId : 1,

    selectedIdea : {
      id : 1,
      name : 'Plant a tree',
      desc : 'Trees contribute to the global environment by improving air quality, conserving water, preserving soil, supporting wildlife.',
      pic : Images.Challenge.TreePlanting,
      measure : {
        unit : "1 tree",
        leaf : 10
      }
    },

    ideaList : [
      {
        id : 1,
        name : 'Plant a tree',
        desc : 'Trees contribute to the global environment by improving air quality, conserving water, preserving soil, supporting wildlife.',
        pic : Images.Challenge.TreePlanting,
        measure : {
          unit : "1 tree",
          leaf : 10
        }
      },
      {
        id : 2,
        name : 'Use public transport to office',
        desc : 'Using public transport can significantly reduce carbon emissions, we all should avail where efficient.',
        pic : Images.Challenge.PublicTransport,
        measure : {
          unit : "1 km",
          leaf : 1
        }
      },
      {
        id : 3,
        name : 'Cycling around',
        desc : 'Cycling could reduce carbon emissions by a substantial amount, having footprint 0.002% of a car',
        pic : Images.Challenge.Cycling,
        measure : {
          unit : "1 km",
          leaf : 1
        }
      },
      {
        id : 4,
        name : 'Use stairs',
        desc : 'Using stairs and avoiding escalator reduces carbon emissions by a substantial amount.',
        pic : Images.Challenge.StairClimbing,
        measure : {
          unit : "20 steps",
          leaf : 1
        }
      },
      {
        id : 5,
        name : 'Bring plastic products',
        desc : 'Bring plastic goods in office as much you can, we shall process to recycle',
        pic : Images.Challenge.RecyclePlastic,
        measure : {
          unit : "500 gm",
          leaf : 1
        }
      }
    ],

    dayList : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    monthList : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    yearList : ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],

    day : 1,
    month : 'Jan',
    year : '2020'
  }

  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);
    this.createChallenge = this.createChallenge.bind(this);
  }

  onSelect(selectedValue, selectedIndex){
    let sIdea = _.find(this.state.ideaList, item => item.id == selectedValue);

    this.setState({
      selectedIdeaId : selectedValue,
      selectedIdea : sIdea,

      title : sIdea.name,
      desc : sIdea.desc
    })
  }

  render() {
    const { navigation } = this.props;

    return (
      <Block flex>
        <Header title="Create challenge" />
        <ScrollView
          style={styles.home}
          showsVerticalScrollIndicator={false}>

          <Block flex style={styles.group}>
            <Text bold size={16} style={styles.title}>Select an idea</Text>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>

              <Picker selectedValue={this.state.selectedIdeaId} onValueChange={this.onSelect}>
                {
                  _.map(this.state.ideaList, item => {
                    return <Picker.Item key={item.id} label={item.name} value={item.id} />
                  })
                }
              </Picker>
            </Block>
          </Block>

          <Block card flex style={[styles.product, styles.shadow, { paddingHorizontal: theme.SIZES.BASE }]}>
            <Block row >
              <Block flex style={[styles.imageContainer, styles.shadow]}>
                <Image source={{ uri: this.state.selectedIdea.pic }} style={styles.horizontalImage} />
              </Block>

              <Block flex style={{ marginTop : 5, marginLeft : 5}}>
                <Block >
                  <Text bold size={14} style={styles.productTitle}>{this.state.selectedIdea.name}</Text>
                </Block>
                <Block >
                  <Text size={14} style={styles.productTitle}>{this.state.selectedIdea.desc}</Text>
                </Block>
              </Block>
              
            </Block>
            <Block row style={styles.productDescription} space="between">
              <Block center row>
                <Text bold size={14} >{this.state.selectedIdea.measure.leaf}</Text>
                <Ionicons name="ios-leaf" size={20} color={materialTheme.COLORS.SUCCESS} style={{ marginLeft : 5 }} />
                <Text bold size={14} style={{ marginLeft : 5 }}>/ {this.state.selectedIdea.measure.unit}</Text>
              </Block>

            </Block>
            <Block style={{ marginBottom : 5}}>
              <Text bold size={14} color={materialTheme.COLORS.INFO}>Have a green idea ? Write to support@db.com</Text>
            </Block>
          </Block>

          <Block flex style={styles.group}>
            <Text bold size={16} style={styles.title}>Title</Text>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Input
                value={this.state.title}
                onChangeText={(title) => this.setState({ title })}
                placeholder="Title"
                style={{ borderRadius: 3, borderColor: materialTheme.COLORS.INPUT }}
                color={materialTheme.COLORS.SUCCESS}
              />
            </Block>
          </Block>

          <Block flex style={styles.group}>
            <Text bold size={16} style={styles.title}>Description</Text>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Input
                value={this.state.desc}
                onChangeText={(desc) => this.setState({ desc })}
                placeholder="Description"
                style={{ borderRadius: 3, borderColor: materialTheme.COLORS.INPUT }}
                color={materialTheme.COLORS.SUCCESS}
              />
            </Block>
          </Block>

          <Block flex style={styles.group}>
            <Text bold size={16} style={styles.title}>End date</Text>
            <Block row space="between" style={{ paddingHorizontal: theme.SIZES.BASE }}>
              
              <Picker style={{ width : 100 }} selectedValue={this.state.year} onValueChange={(itemValue, itemIndex) => this.setState({year: itemValue})}>
                {
                  _.map(this.state.yearList, item => {
                    return <Picker.Item key={item} label={item} value={item} />
                  })
                }
              </Picker>

              <Picker style={{ width : 100 }} selectedValue={this.state.month} onValueChange={(itemValue, itemIndex) => this.setState({month: itemValue})}>
                {
                  _.map(this.state.monthList, item => {
                    return <Picker.Item key={item} label={item} value={item} />
                  })
                }
              </Picker>

              <Picker style={{ width : 100 }} selectedValue={this.state.day} onValueChange={(itemValue, itemIndex) => this.setState({day: itemValue})}>
                {
                  _.map(this.state.dayList, item => {
                    return <Picker.Item key={item} label={item} value={item} />
                  })
                }
              </Picker>

            </Block>
          </Block>

          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Block center>
              <Button onPress={this.createChallenge} shadowless color={materialTheme.COLORS.SUCCESS} style={[styles.button, styles.shadow]}>
                Create
              </Button>
            </Block>
          </Block>

        </ScrollView>
      </Block>
    );
  }
}

export default withNavigation(AddChallenge);

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
