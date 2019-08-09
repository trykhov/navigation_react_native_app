import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Follow extends React.Component {

  
  render() {
    const followReq = this.props.navigation.getParam("followReq", "0");
    const doFollow = this.props.navigation.getParam("doFollow", "0");
    return (
      <View style={styles.container}>
        <Text>Follow</Text>
        {
          followReq.map((friend, index) => {
            return (
              <Button 
                key={friend}
                title={`Follow ${friend}`}
                onPress={() => doFollow(index)}
              />
            )
          })
        }


        <Button
          title="Go to Home Page"
          onPress={() => {
            this.props.navigation.navigate("Home")
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
