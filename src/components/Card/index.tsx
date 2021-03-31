import React from 'react';

import { Container, Image, Name, Description } from './styles';

interface IProps {
  link: string;
  image: string;
  name: string;
  description: string;
}

const Card: React.FC<IProps> = ({ link, image, name, description }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Container>
        <Image src={image} alt="/" />
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Container>
    </a>
  );
};

export default Card;
