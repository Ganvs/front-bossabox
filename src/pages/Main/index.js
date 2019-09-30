import React, { Component } from 'react';

import { Container, Form } from './styles';

import List from '../../components/List';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <h1>VUTTR</h1>
        <p>Very Useful Tools to Remember</p>
        <div className="search-add-session">
          <Form>
            <input type="text" placeholder="search" />
            <input type="checkbox" id="tag-search" />
            <label htmlFor="tag-search">search in tags only</label>
          </Form>
          <button>+ Add</button>
        </div>
        <List />
      </Container>
    );
  }
}
