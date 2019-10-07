import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
import { Block, Button, Text, theme, Input, Slider } from 'galio-framework';

const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';
import { Ionicons } from '@expo/vector-icons';
import numeral from 'numeral';

export default class StatusLogo extends React.Component {

	constructor(props) {
	    super(props);

	    this.sliderMap = {
	    	"0" : "2020/Jan",
	    	"1" : "2020/Feb",
	    	"2" : "2020/Mar",
	    	"3" : "2020/Apr",
	    	"4" : "2020/May",
	    	"5" : "2020/Jun",
	    	"6" : "2020/Jul",
	    	"7" : "2020/Aug",
	    	"8" : "2020/Sep",
	    	"9" : "2020/Oct",
	    	"10" : "2020/Nov",
	    	"11" : "2020/Dec",

	    	"12" : "2021/Jan",
	    	"13" : "2021/Feb",
	    	"14" : "2021/Mar",
	    	"15" : "2021/Apr",
	    	"16" : "2021/May",
	    	"17" : "2021/Jun",
	    	"18" : "2021/Jul",
	    	"19" : "2021/Aug",
	    	"20" : "2021/Sep",
	    	"21" : "2021/Oct",
	    	"22" : "2021/Nov",
	    	"23" : "2021/Dec",

	    	"24" : "2022/Jan",
	    	"25" : "2022/Feb",
	    	"26" : "2022/Mar",
	    	"27" : "2022/Apr",
	    	"28" : "2022/May",
	    	"29" : "2022/Jun",
	    	"30" : "2022/Jul",
	    	"31" : "2022/Aug",
	    	"32" : "2022/Sep",
	    	"33" : "2022/Oct",
	    	"34" : "2022/Nov",
	    	"35" : "2022/Dec",

	    	"36" : "2023/Jan",
	    	"37" : "2023/Feb",
	    	"38" : "2023/Mar",
	    	"39" : "2023/Apr",
	    	"40" : "2023/May",
	    	"41" : "2023/Jun",
	    	"42" : "2023/Jul",
	    	"43" : "2023/Aug",
	    	"44" : "2023/Sep",
	    	"45" : "2023/Oct",
	    	"46" : "2023/Nov",
	    	"47" : "2023/Dec",

	    	"48" : "2024/Jan",
	    	"49" : "2024/Feb",
	    	"50" : "2024/Mar",
	    	"51" : "2024/Apr",
	    	"52" : "2024/May",
	    	"53" : "2024/Jun",
	    	"54" : "2024/Jul",
	    	"55" : "2024/Aug",
	    	"56" : "2024/Sep",
	    	"57" : "2024/Oct",
	    	"58" : "2024/Nov",
	    	"59" : "2024/Dec",
	    }

	    this.state = { slider : 0, text : this.sliderMap["0"], greenOpacity : 0, totalLeaves : numeral(5000).format('0.0 a') };

	    this.onValueChange = this.onValueChange.bind(this);
	}

	onValueChange(slider) {
	    this.setState(() => {
	      return {
	        slider: parseFloat(slider),
	        text: this.sliderMap[Math.floor(slider).toString()],
	        greenOpacity: (slider / 59),
	        totalLeaves: numeral(5000 + (slider / 59 * 100 * 100000)).format('0.0 a')
	      };
	    });
	}

	render() {
		return (
			<Block flex space="between">
				<Block>
		          <ImageBackground
		            source={{  uri: Images.Onboarding }}
		            style={styles.logo}
		            imageStyle={{ tintColor : "blue", opacity: 1 - this.state.greenOpacity }}
		          />
		          <ImageBackground
		            source={{  uri: Images.Onboarding }}
		            style={styles.logo}
		            imageStyle={{ tintColor : materialTheme.COLORS.SUCCESS, opacity: this.state.greenOpacity }}
		          />
		          
		        </Block>
		        <Block style={styles.slider}>
	        		<Slider value={this.state.slider} onValueChange={this.onValueChange} maximumValue={59} />
		        </Block>
		        <Block center row>
			        <Text size={20} color={materialTheme.COLORS.SUCCESS}>
		                {this.state.text} - 
		            </Text>
		            <Ionicons name="ios-leaf" size={28} color={materialTheme.COLORS.SUCCESS} />
	            	<Text size={20} color={materialTheme.COLORS.SUCCESS}>
		                {this.state.totalLeaves}
		            </Text>
		           
	            </Block>
	        </Block>
		);
	}
}

const styles = StyleSheet.create({
  logo: {
    position: "absolute",
    left: 40,
    top: 40,
    zIndex: 1,
    height: width - theme.SIZES.BASE * 4,
    width: width - theme.SIZES.BASE * 4
  },
  slider: {
  	marginTop: width - theme.SIZES.BASE * 4 + 60,
  	paddingHorizontal: theme.SIZES.BASE * 2,
  }
});