import React from 'react';
import { ButtonProps } from './types';

import { Container, Title, IconWrapper, Img } from './styles';
import DiscordImg from '../../assets/discord.png';
const Button = ({ title, ...props }: ButtonProps) => {
  return (
    <Container {...props}>
      <IconWrapper>
        <Img source={DiscordImg} />
      </IconWrapper>

      <Title>
        {title}
      </Title>
    </Container>
  )
}

export default Button;