import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme, Accordion } from 'galio-framework';

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';
import { Ionicons } from '@expo/vector-icons';
import numeral from 'numeral';
import NavigationService from '../services/NavigationService.js';

import _ from 'lodash';

const { width } = Dimensions.get('screen');

class Leader extends React.Component {

  constructor(props) {
    super(props);

    this.navigateToProfile = this.navigateToProfile.bind(this);
  }



  navigateToProfile(){
    this.props.navigation.navigate('UserProfile', { email : this.props.leader.email});
  }


  render() {
    const { navigation, product, horizontal, full, style, priceColor, imageStyle } = this.props;
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];
    let { leader } = this.props;

    return (
      <Block card flex style={[styles.product, styles.shadow, style]}>
        <Block row >
          <TouchableWithoutFeedback onPress={this.navigateToProfile}>
            <Block center flex style={[styles.imageContainer, styles.shadow]}>
              <Image source={{ uri: leader.pic }} style={styles.avatar} />
              <Text size={12} muted>{leader.name}</Text>
              <Text size={12} muted>{leader.city}, {leader.country}</Text>
            </Block>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.navigateToProfile}>
            <Block flex style={{ marginTop : 5}}>
              <Block >
                <Text bold size={20} color={materialTheme.COLORS.SUCCESS} style={styles.productTitle}>Rank - {leader.rank}</Text>
              </Block>
              <Block row space="between" style={{ marginTop : 5 }}>
                <Block center>
                  <Ionicons name="ios-leaf" size={20} color={materialTheme.COLORS.SUCCESS} />
                  <Text muted size={14}>{numeral(leader.coins).format('0.0 a')}</Text>
                  <Text muted size={14}>leaves</Text>
                </Block>
                <Block center>
                  <Ionicons name="ios-flash" color={materialTheme.COLORS.INFO} size={20} />
                  <Text muted size={14}>{leader.challenges}</Text>
                  <Text muted size={14}>challenges</Text>
                </Block>
                <Block center>
                  <Ionicons name="ios-flag" size={20} color={materialTheme.COLORS.WARNING} />
                  <Text muted size={14}>{leader.leading}</Text>
                  <Text muted size={14}>leading</Text>
                </Block>
              </Block>
            </Block>
          </TouchableWithoutFeedback>
          
        </Block>
      </Block>
    );
  }
}

export default withNavigation(Leader);

const styles = StyleSheet.create({
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
    height: 80,
    width: 80,
    borderRadius: 40,
    marginTop: 5
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
});