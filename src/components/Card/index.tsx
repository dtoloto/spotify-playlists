import React from 'react';
import { BiPlay } from 'react-icons/bi';

import {
  Container,
  Image,
  Name,
  Description,
  ImageBox,
  PlayButton,
} from './styles';

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
        <ImageBox>
          <Image src={image} alt="/" />
          <PlayButton className="playbutton">
            <BiPlay />
          </PlayButton>
        </ImageBox>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Container>
    </a>
  );
};

export default Card;
