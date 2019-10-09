import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';

import { Icon } from '../components';
import { Images, materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";
import { Ionicons } from '@expo/vector-icons';
import numeral from 'numeral';

import NavigationService from '../services/NavigationService.js';

import leaders from '../data/leaders';
import _ from 'lodash';


const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;


class Profile extends React.Component {

  render() {

    const { navigation, product, horizontal, full, style, priceColor, imageStyle } = this.props;
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];

    let currentProfile = null;
    let email = navigation.getParam('email', 'palash.roy@db.com');

    currentProfile = _.find(leaders, item => {
      return item.email == email
    });

    const renderActiveChallenges = _.map(currentProfile.activeChallenges, item => {
      return (
        <Block card flex style={[styles.product, styles.shadow, style]} key={item.id}>
          <Block row >
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro', { product: product })}>
              <Block flex style={[styles.imageContainer, styles.shadow]}>
                <Image source={{ uri: item.idea.pic }} style={imageStyles} />
              </Block>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro', { product: product })}>
              <Block flex style={{ marginTop : 5}}>
                <Block row >
                  <Image source={{ uri: item.by.pic}} style={styles.avatar} />
                  <Block style={{ marginLeft : 5}}>
                    <Text size={12} muted>{item.by.name}</Text>
                    <Text size={12} muted>{item.by.createdOn}</Text>
                  </Block>
                </Block>
                <Block >
                  <Text bold size={14} style={styles.productTitle}>{item.idea.name}</Text>
                  
                </Block>
                <Block >
                  <Text size={14} style={styles.productTitle}>{item.idea.desc}</Text>
                </Block>
              </Block>
            </TouchableWithoutFeedback>
            
          </Block>
          <Block row style={styles.productDescription} space="between">
            <Block center row>
              <Text bold size={14} >{item.idea.measure.leaf}</Text>
              <Ionicons name="ios-leaf" size={20} color={materialTheme.COLORS.SUCCESS} style={{ marginLeft : 5 }} />
              <Text bold size={14} style={{ marginLeft : 5 }}>/ {item.idea.measure.unit}</Text>
            </Block>
            <Block center row>
              <Ionicons name="ios-calendar" color={materialTheme.COLORS.WARNING} size={20} />
              <Text bold size={14} style={{ marginLeft : 5 }}>till {item.end}</Text>
            </Block>
          </Block>
        </Block>
      );
    });

    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={{uri: currentProfile.pic}}
            style={styles.profileContainer}
            imageStyle={styles.profileImage}>
            <Block flex style={styles.profileDetails}>
              <Block style={styles.profileTexts}>
                <Text color="white" size={28} style={{ paddingBottom: 8 }}>{currentProfile.name}</Text>
                <Block row space="between">
                  <Block center row>
                    <Ionicons name="ios-leaf" size={28} color={materialTheme.COLORS.SUCCESS} />
                    <Text size={20} color={materialTheme.COLORS.SUCCESS}>
                        {numeral(currentProfile.coins).format('0.0 a')}
                    </Text>
                  </Block>
                  <Block>
                    <Text color={theme.COLORS.MUTED} size={16}>
                      <Icon name="map-marker" family="font-awesome" color={theme.COLORS.MUTED} size={16} />
                      {` `} Pune, India
                      </Text>
                  </Block>
                </Block>
              </Block>
              <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.gradient} />
            </Block>
          </ImageBackground>
        </Block>
        <Block flex style={styles.options}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Block row space="between" style={{ padding: theme.SIZES.BASE, }}>
              <Block center>
                <Ionicons name="ios-leaf" size={20} color={materialTheme.COLORS.SUCCESS} />
                <Text muted size={14}>{numeral(currentProfile.coins).format('0.0 a')}</Text>
                <Text muted size={14}>leaves</Text>
              </Block>
              <Block center>
                <Ionicons name="ios-flash" color={materialTheme.COLORS.INFO} size={20} />
                <Text muted size={14}>{currentProfile.challenges}</Text>
                <Text muted size={14}>challenges</Text>
              </Block>
              <Block center>
                <Ionicons name="ios-flag" size={20} color={materialTheme.COLORS.WARNING} />
                <Text muted size={14}>{currentProfile.leading}</Text>
                <Text muted size={14}>leading</Text>
              </Block>
            </Block>
            <Block row space="between" style={{ paddingVertical: 16, alignItems: 'baseline' }}>
              <Text size={16}>Active challenges</Text>
            </Block>

            <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
              {renderActiveChallenges}
            </Block>
          </ScrollView>
        </Block>
      </Block>
    );
  }
}

export default withNavigation(Profile);

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    marginBottom: -HeaderHeight * 2,
  },
  profileImage: {
    width: width * 1.1,
    height: 'auto',
  },
  profileContainer: {
    width: width,
    height: height / 2,
  },
  profileDetails: {
    paddingTop: theme.SIZES.BASE * 4,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    zIndex: 2
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 38,
  },
  seller: {
    marginRight: theme.SIZES.BASE / 2,
  },
  options: {
    position: 'relative',
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: -theme.SIZES.BASE * 3,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: '30%',
    position: 'absolute',
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
});
