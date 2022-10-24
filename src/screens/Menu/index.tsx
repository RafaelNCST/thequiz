import React, { useState, useEffect } from 'react';
import { BodyScreen } from '../../styles/backgroundImage';
import { Modal } from 'react-native';
import {
  Container,
  ContainerMenu,
  ContainerButtons,
  ButtonMenu,
  ContainerLogo,
  SubContainer,
} from './styles';
import { LoadingPencil } from '../../components/LoadingPencil';
import { TextButton, TextTitle } from '../../styles/globalStyles';
import { DropDown } from '../../components/DropDown';
import { ModalHowPlay } from './components/ModalHowPlay';
import Logo from '../../assets/images/logo.svg';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/types';
import { StackNavigationProp } from '@react-navigation/stack';

const DATA1 = [
  'Todos',
  'História da Computação',
  'Lógica e Algoritmos',
  'Gestão de Projetos',
];
const DATA2 = [
  '1 Minuto',
  '50 Segundos',
  '40 Segundos',
  '30 Segundos',
  '20 Segundos',
  '10 Segundos',
];

export const Menu: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openDropDown1, setOpenDropDown1] = useState<boolean>(false);
  const [openDropDown2, setOpenDropDown2] = useState<boolean>(false);
  const [openModalHowPlay, setOpenModalHowPlay] = useState<boolean>(false);
  const [themeChoosed, setThemeChoosed] = useState<string | null>(null);
  const [timeChoosed, setTimeChoosed] = useState<string | null>(null);

  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlerHowPlay = () => {
    setOpenDropDown1(false);
    setOpenDropDown2(false);
    setOpenModalHowPlay(true);
  };

  const handlerPlay = () => {
    setOpenDropDown1(false);
    setOpenDropDown2(false);
    navigate('QuizGameScreen', {
      theme: themeChoosed || 'Todos',
      time: timeChoosed || '1 minuto',
    });
  };

  useEffect(() => {
    if (!loading) {
      setTimeout(() => setLoading(true), 2000);
    }
  }, [loading]);

  return (
    <Container>
      <BodyScreen />
      {loading ? (
        <SubContainer>
          <ContainerLogo>
            <Logo width={300} height={200} />
          </ContainerLogo>
          <ContainerMenu>
            <TextTitle color={'white'}>ínicio</TextTitle>
            <DropDown
              Data={DATA1}
              zIndex={3}
              open={openDropDown1}
              setOpen={setOpenDropDown1}
              setOtherDropDown={setOpenDropDown2}
              placeholder={'Escolha o Tema'}
              optionChoosed={setThemeChoosed}
            />
            <DropDown
              Data={DATA2}
              zIndex={2}
              open={openDropDown2}
              setOpen={setOpenDropDown2}
              setOtherDropDown={setOpenDropDown1}
              placeholder={'Tempo Máx de Round'}
              optionChoosed={setTimeChoosed}
            />
            <ContainerButtons>
              <Modal
                visible={openModalHowPlay}
                animationType="fade"
                transparent>
                <ModalHowPlay setOpen={setOpenModalHowPlay} />
              </Modal>
              <ButtonMenu onPress={handlerHowPlay}>
                <TextButton>COMO JOGAR</TextButton>
              </ButtonMenu>
              <ButtonMenu onPress={handlerPlay}>
                <TextButton>JOGAR</TextButton>
              </ButtonMenu>
            </ContainerButtons>
          </ContainerMenu>
        </SubContainer>
      ) : (
        <LoadingPencil />
      )}
    </Container>
  );
};
