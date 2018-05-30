import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import {Button,Text} from 'native-base';

import { MonoText } from '../components/StyledText';
import {connect} from 'react-redux';
import {loginUser} from '../redux/actions';
 class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props);
    this.state={
      userName:'',
      password:''
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.userObject!==undefined){
      console.log(nextProps.userObject);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

        <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}
           <View style={styles.headerParent}>   
            <Text style={styles.getStartedText}>Welcome Pravallika</Text>
           </View>     
            {/* <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View> */}

            {/* <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload.
            </Text> */}
          <View style={{padding: 10}}>
            <View style={styles.userNameParent}> 
              <TextInput
                 style={styles.userNameTextInput}
                  placeholder="Type Username!"
                  onChangeText={(userName) => this.setState({userName})}
                value={this.state.userName}
                />
            </View>  
            <View style={styles.passwordParent}>
              <TextInput
                  style={styles.userNameTextInput}
                  placeholder="Type Password"
                  secureTextEntry={true}
                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password}
              />
            </View>

            <View style={styles.signInParent}>
              
              <Button primary onPress={this._handleSignInPress}>
                <Text>Sign-In</Text>
              </Button>
              
            </View>
          </View>
        </View>

      </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  
  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };


_handleSignInPress=()=>{
  alert(this.state.userName+" - "+this.state.password);
  this.props.dispatch(loginUser(this.state.userName,this.state.password));
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  userNameTextInput:{
    height:50,
    width:200,
    borderWidth:1,
    borderColor:'gray',
    marginTop:5
  },
  headerParent:{
    marginTop:15,
    
  },
  userNameParent:{
    marginTop:15,
   
  },
  passwordParent:{
    marginTop:15,
  },
  signInParent:{
    marginTop:15,
    marginLeft:50
  }

});

const mapStateToProps=(state)=>{
  return{
    userObject:state.Auth.userObject,
    loginuser:state.Auth.loginuser
  }
}
export default connect(mapStateToProps)(HomeScreen);
