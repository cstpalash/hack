import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme, Accordion } from 'galio-framework';

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';
import { Ionicons } from '@expo/vector-icons';

import _ from 'lodash';

const { width } = Dimensions.get('screen');

class Post extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubUpdate = this.handleSubUpdate.bind(this);
    this.state = { total : this.props.post.stats.subscribed, me : this.props.post.stats.isSubscribedByMe };
  }

  handleSubUpdate(){
    this.setState({
      total : (this.state.me) ? this.state.total -1 : this.state.total + 1,
      me : !this.state.me
    });
  }

  render() {
    const { navigation, product, horizontal, full, style, priceColor, imageStyle } = this.props;
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];
    let { post } = this.props;

    const renderLeaders = _.map(post.stats.leaders, item => {
      return (
        <Block center key={item.name} style={{ marginLeft : 5 }}>
          <Image source={{ uri: item.pic}} style={styles.avatar} />
          <Text size={12} muted>{item.name}</Text>
          <Block row center>
            <Ionicons name="ios-leaf" size={20} color={materialTheme.COLORS.SUCCESS} />
            <Text muted size={14}>{item.coins}</Text>
          </Block>
        </Block>
      );
    });

    return (
      <Block card flex style={[styles.product, styles.shadow, style]}>
        <Block row >
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro', { product: product })}>
            <Block flex style={[styles.imageContainer, styles.shadow]}>
              <Image source={{ uri: post.idea.pic }} style={imageStyles} />
            </Block>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro', { product: product })}>
            <Block flex style={{ marginTop : 5}}>
              <Block row >
                <Image source={{ uri: post.by.pic}} style={styles.avatar} />
                <Block style={{ marginLeft : 5}}>
                  <Text size={12} muted>{post.by.name}</Text>
                  <Text size={12} muted>{post.by.createdOn}</Text>
                </Block>
              </Block>
              <Block >
                <Text bold size={14} style={styles.productTitle}>{post.idea.name}</Text>
                
              </Block>
              <Block >
                <Text size={14} style={styles.productTitle}>{post.idea.desc}</Text>
              </Block>
            </Block>
          </TouchableWithoutFeedback>
          
        </Block>
        <Block row style={styles.productDescription} space="between">
          <Block center row>
            <Text bold size={14} >{post.idea.measure.leaf}</Text>
            <Ionicons name="ios-leaf" size={20} color={materialTheme.COLORS.SUCCESS} style={{ marginLeft : 5 }} />
            <Text bold size={14} style={{ marginLeft : 5 }}>/ {post.idea.measure.unit}</Text>
          </Block>
          <Block center row>
            <Ionicons name="ios-calendar" color={materialTheme.COLORS.WARNING} size={20} />
            <Text bold size={14} style={{ marginLeft : 5 }}>till {post.end}</Text>
          </Block>
        </Block>
        <Block row style={styles.productDescription} space="between">
          <Block>
            <Block center>
              <Text bold size={14} >Leaders (total {this.state.total})</Text>
            </Block>
            <Block row style={{ marginTop : 5 }}>
              {renderLeaders}
            </Block>
          </Block>
          <TouchableWithoutFeedback onPress={this.handleSubUpdate}>
          <Block>
            <Block center>
              <Text bold size={14} >Subscribe</Text>
            </Block>
            <Block style={{ marginTop : 5 }} center>
              {
                this.state.me ? 
                  <Ionicons name="ios-flash" color={materialTheme.COLORS.SUCCESS} size={34} /> :
                  <Ionicons name="ios-flash-off" color="grey" size={34} />
              }
            </Block>
            <Block style={{ marginTop : 5 }} center>
              <Text size={12} bold color={materialTheme.COLORS.SUCCESS}>Win prob {post.stats.winningProbability}%</Text>
            </Block>
          </Block>
          </TouchableWithoutFeedback>
        </Block>
      </Block>
    );
  }
}

export default withNavigation(Post);

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