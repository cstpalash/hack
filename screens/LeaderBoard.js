import React from 'react';
import { connect } from "react-redux";
import { StyleSheet, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import Header from '../components/Header';

import { Icon, Leader } from '../components/';

const { width } = Dimensions.get('screen');

import { getLeader } from "../actions/leaderAction";
import _ from 'lodash';
import materialTheme from '../constants/Theme';

import NavigationService from '../services/NavigationService.js';

class LeaderBoard extends React.Component {

  componentDidMount(){
    this.props.dispatch(getLeader());
  }

  render() {

    let {leaders} = this.props;

    const renderLeaders = _.map(leaders, item => {
      return <Leader key={item.email} leader={item} />
    });

    return (
      <Block flex center style={styles.home}>
        <Block >

          { 
            this.props.processing && this.props.processing === true ? 
              <Text bold style={{ marginTop : 10 }} color={materialTheme.COLORS.SUCCESS}>Loading...</Text> :
              <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.products}>
                <Block flex>
                  {renderLeaders}
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
    paddingVertical: theme.SIZES.BASE
  },
});

const mapStateToProps = state => ({
  leaders: state.leaders.leaders,
  processing: state.leaders.processing,
  error: state.leaders.error
});

export default connect(mapStateToProps)(LeaderBoard);
