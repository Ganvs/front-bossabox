import React from 'react';

import Card from '../Card';

import { Container } from './styles';

export default function List() {
  return (
    <Container>
      <ul>
        <Card />
        <Card />
      </ul>
    </Container>
  );
}
