import React from 'react';
import { View, StatusBar } from 'react-native';

import { Container, Image, Content, Title, SubTitle } from './styles';
import IlustrationImg from '../../assets/illustration.png';

import Button from '../../components/Button';

const SingnIn: React.FC = () => {

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Image source={IlustrationImg} />
      <Content>
        <Title>
          Organize{`\n`}
          suas jogatinas{`\n`}
          facilmente
        </Title>

        <SubTitle>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </SubTitle>

        <Button title="Entrar com o Discord" onPress={() => console.log("ButtonProps")} />
      </Content>
    </Container>
  )
}

export default SingnIn;