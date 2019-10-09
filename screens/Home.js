import React from 'react';
import { connect } from "react-redux";
import { StyleSheet, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import Header from '../components/Header';

import { Icon, Product, Post } from '../components/';

const { width } = Dimensions.get('screen');
import products from '../constants/products';

import { getPost } from "../actions/postAction";
import _ from 'lodash';
import materialTheme from '../constants/Theme';

import NavigationService from '../services/NavigationService.js';

class Home extends React.Component {

  componentDidMount(){
    this.props.dispatch(getPost());
  }

  render() {

    let {posts} = this.props;

    const renderPosts = _.map(posts, item => {
      return <Post key={item.id} post={item} />
    });

    return (
      <Block flex center style={styles.home}>
        <Header search title="Home" />
        <Block >

          { 
            this.props.processing && this.props.processing === true ? 
              <Text bold style={{ marginTop : 10 }} color={materialTheme.COLORS.SUCCESS}>Loading...</Text> :
              <ScrollView style={{ marginBottom : 150 }} showsVerticalScrollIndicator={false} contentContainerStyle={styles.products}>
                <Block flex>
                  {renderPosts}
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
});

const mapStateToProps = state => ({
  posts: state.posts.posts,
  processing: state.posts.processing,
  error: state.posts.error
});

export default connect(mapStateToProps)(Home);
