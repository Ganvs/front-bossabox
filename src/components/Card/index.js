import React from 'react';

import { Container } from './styles';

export default function Card() {
  return (
    <Container>
      <header>
        <a href="/">Notion</a>
        <span>X Remove</span>
      </header>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iure eos
        dolor sunt est esse mollitia incidunt quis neque quaerat!
      </span>
      <span>#lorem #ipsum #dolor</span>
    </Container>
  );
}
