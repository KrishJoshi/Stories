import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Story from './story';
import Form from './form';
import firebaseConf from './config/firebase';

class App extends Component {
  state = {
    stories: []
  };
  componentDidMount() {
    var storiesRef = firebaseConf.database().ref('stories/');
    const self = this;
    storiesRef.on('value', function(snapshot) {
      const snapVal = snapshot.val();
      const stories = Object.keys(snapVal).map((key) => {
        return snapVal[key];
      });
      console.log(stories);
      self.setState({stories})
    });
  }
  render() {
    const {stories} = this.state;
    return (
      <div>
        <Header/>
        {stories.map((story) => <Story {...story}/>)}
        <Form/>
      </div>
    );
  }
}

export default App;
