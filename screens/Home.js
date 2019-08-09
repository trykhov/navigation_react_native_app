import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      followReq: ["John", "Jane", "Ram", "Ben", "Bob"],
      following: ["Sony", "Kenny"]
    };
  }

  doFollow = index => {
    const { followReq, following } = this.state;
    const newFollow = followReq.splice(index, 1); // taking index of followReq
    following.push(newFollow); // add newFollow to following
    this.setState({ followReq, following });
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>You're following { this.state.following.length }</Text>
        <Button
          title="Go to Follow Page"
          onPress={() => {
            {/* this passes props / states when you navigate to follow */}
            this.props.navigation.navigate("Follow", {
              followReq: this.state.followReq,
              following: this.state.following,
              doFollow: this.doFollow
            })
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
