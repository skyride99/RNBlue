/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
// let RFDuinoContainer = require('./RFDuinoContainer');
var AppleBeacon = require('AppleBeacon');
var EddystoneView = require('EddystoneView');

//var ScrollableTabView = require('react-native-scrollable-tab-view');

var {
  AppRegistry,
  StyleSheet,
  View,
  Text
} = React;

var Fire2 = React.createClass({
  render() {
    return (
      <View style={{marginTop: 50}}>
        <Text>We a re here and ready to go</Text>
        <AppleBeacon tabLabel="iBeacon" />
        <EddystoneView tabLabel="EddyStone" />
      </View>
    );
  }
});

AppRegistry.registerComponent('Fire2', () => Fire2);
