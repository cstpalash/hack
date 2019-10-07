import React from 'react';
import { TouchableWithoutFeedback, ScrollView, StyleSheet, Dimensions, Image } from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Images, materialTheme } from "../constants/";
import Icon from './Icon';
import auth from '../services/auth';
import { connect } from "react-redux";

const { width } = Dimensions.get('screen');


class CurrentUser extends React.Component {
  state = {
    avatar: Images.Profile,
    name: '',
    type: 'Seller',
    plan: 'Pro',
    rating: 4.8
  }

  componentDidMount() {

    
  }

  render() {
    let {user} = this.props;

    return (
      <Block style={styles.header}>
        <Block style={styles.profile}>
          <Image source={{ uri: this.state.avatar}} style={styles.avatar} />
          <Text h5 color="white">{user.name}</Text>
        </Block>
        <Block row>
          <Block middle style={styles.pro}>
            <Text size={16} color="white">{user.city}</Text>
          </Block>
          <Text size={16} muted style={styles.seller}>{user.country}</Text>
          <Text size={16} color={materialTheme.COLORS.SUCCESS}>
            {this.state.rating} <Icon name="shape-star" family="GalioExtra" size={14} />
          </Text>
        </Block>
      </Block>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUser.user,
  processing: state.currentUser.processing,
  error: state.currentUser.error
});

export default connect(mapStateToProps)(CurrentUser);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#4B1958',
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 2,
    justifyContent: 'center',
  },
  footer: {
    paddingHorizontal: 28,
    justifyContent: 'flex-end'
  },
  profile: {
    marginBottom: theme.SIZES.BASE / 2,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginBottom: theme.SIZES.BASE,
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: 8,
    borderRadius: 4,
    height: 19,
    width: 'auto',
  },
  seller: {
    marginRight: 16,
  }
});
