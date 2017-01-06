import React, { Component } from 'react';
import { Menu, Grid, Image } from 'semantic-ui-react';
import Company from './Company.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu>
          <Menu.Item name="home" active={ activeItem === 'home' } onClick={ this.handleItemClick }>Home</Menu.Item>
          <Menu.Item name="about_us" active={ activeItem === 'about_us' } onClick={ this.handleItemClick }>About Us</Menu.Item>
        </Menu>
        <Grid>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={8}>
            <p>{ this.state.activeItem }</p>
            <Company />
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
