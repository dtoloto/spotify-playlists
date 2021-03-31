import React from 'react';

import { Container, Image, Name, Description } from './styles';

interface IProps {
  link: string;
  image: string;
  name: string;
  description: string;
}

const Card: React.FC = () => {
  return (
    <a href="/" target="_blank">
      <Container>
        <Image
          src="https://i.scdn.co/image/ab67706f0000000397e40cbd3fce67e782deaf14"
          alt="/"
        />
        <Name>Nome da Playlist</Name>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          iusto laborum ipsam nemo, dolores similique quae earum velit vero modi
          exercitationem dolorum odit mollitia fugiat beatae. Vel doloribus
          quidem vitae.
        </Description>
      </Container>
    </a>
  );
};

export default Card;
