import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
import { Block, Button, Text, theme, Input } from 'galio-framework';
import StatusLogo from '../components/StatusLogo';

const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';

import auth from '../services/auth';

import { connect } from "react-redux";
import { getUser } from "../actions/userAction";

const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

class Onboarding extends React.Component {

  constructor(props) {
    super(props);

    this.state = { email : "palash.roy@db.com", password: "qwer1234"};

    this.doLogin = this.doLogin.bind(this);
  }

  componentDidMount(){

  }

  doLogin(){

    this.props.dispatch(getUser({ email : this.state.email }));
  }

  render() {
    const { navigation } = this.props;
    let {email,password} = this.state;

    return (
      <Block flex style={styles.container}>
        <Block flex center>
          <ImageBackground
            source={{  uri: Images.Face }}
            style={{ height: height, width: width, marginTop: '-55%', zIndex: 1 }}
          />
        </Block>
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{ zIndex: 2 }}>
            <Block center style={{ marginTop : 40 }}>
              <Block>
                <Text color={materialTheme.COLORS.SUCCESS} size={60}>ERDE</Text>
              </Block>
              <Text size={20} color={materialTheme.COLORS.SUCCESS}>
                The challenge is real...
              </Text>
            </Block>
            <Block center>
              <Input value={email} onChangeText={(email) => this.setState({ email })} type="email-address" placeholder="DB email" color={materialTheme.COLORS.SUCCESS} />
              <Input value={password} onChangeText={(password) => this.setState({ password })} viewPass={true} password={true} placeholder="Password" color={materialTheme.COLORS.SUCCESS} />
            </Block>
            <Block center>
              <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.SUCCESS}
                onPress={this.doLogin}
                
              >
                Login
              </Button>
            </Block>
          </Block>
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

export default connect(mapStateToProps)(Onboarding);

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: theme.SIZES.BASE,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  }
});
