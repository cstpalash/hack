import React from 'react';
import { connect } from "react-redux";
import { StyleSheet, Dimensions, ScrollView, ActivityIndicator, Picker, Image, DatePickerIOS } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import Header from '../components/Header';
import { withNavigation } from 'react-navigation';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { Icon, Product, Post } from '../components/';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');
import products from '../constants/products';

import _ from 'lodash';
import materialTheme from '../constants/Theme';

import NavigationService from '../services/NavigationService.js';
import Images from '../constants/Images';

class SubmitEvidence extends React.Component {

  state = {
    title : 'Evidence - ',
    desc : '',
    image : null
  }

  async componentDidMount() {
    const permission = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    if (permission.status !== 'granted') {
        const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (newPermission.status === 'granted') {
          //its granted.
        }
    } else {

    }
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  submitEvidence(){

    this.props.navigation.navigate('Feed');
  }

  constructor(props) {
    super(props);
    this.submitEvidence = this.submitEvidence.bind(this);
  }


  render() {
    const { navigation } = this.props;

    let challenge = navigation.getParam('challenge', {});

    return (
      <Block flex>
        <ScrollView
          style={styles.home}
          showsVerticalScrollIndicator={false}>

          <Block card flex style={[styles.product, styles.shadow, { paddingHorizontal: theme.SIZES.BASE }]}>
            <Block row >
              <Block flex style={[styles.imageContainer, styles.shadow]}>
                <Image source={{ uri: challenge.idea.pic }} style={styles.horizontalImage} />
              </Block>

              <Block flex style={{ marginTop : 5, marginLeft : 5}}>
                <Block >
                  <Text bold size={14} style={styles.productTitle}>{challenge.idea.name}</Text>
                </Block>
                <Block >
                  <Text size={14} style={styles.productTitle}>{challenge.idea.desc}</Text>
                </Block>
              </Block>
              
            </Block>
            <Block row style={styles.productDescription} space="between">
              <Block center row>
                <Text bold size={14} >{challenge.idea.measure.leaf}</Text>
                <Ionicons name="ios-leaf" size={20} color={materialTheme.COLORS.SUCCESS} style={{ marginLeft : 5 }} />
                <Text bold size={14} style={{ marginLeft : 5 }}>/ {challenge.idea.measure.unit}</Text>
              </Block>

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

          <Block center style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Button onPress={this.pickImage} shadowless color={materialTheme.COLORS.INFO} style={[styles.button, styles.shadow]}>
              Select evidence
            </Button>
            {this.state.image && <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }} />}
          </Block>



          <Block style={{ paddingHorizontal: theme.SIZES.BASE, marginTop : 5 }}>
            <Block center>
              <Button onPress={this.submitEvidence} shadowless color={materialTheme.COLORS.SUCCESS} style={[styles.button, styles.shadow]}>
                Submit
              </Button>
            </Block>
          </Block>

        </ScrollView>
      </Block>
    );
  }
}

export default withNavigation(SubmitEvidence);

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
