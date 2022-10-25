import React, { useState, useRef, useEffect } from 'react';
import { BodyScreen } from '../../styles/backgroundImage';
import { Modal } from 'react-native';
import { ModalOptions } from './components/ModalOptions';
import { TipsModal } from './components/TipsModal';

import {
  TextRegular,
  TextSubTitle,
  Image,
  TextPresentation,
} from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  ContainerTitle,
  ContainerUtils,
  ContainerMain,
  ContainerOptions,
  TitleBar,
  ContainerText,
  TextMain,
  Option,
  Marker,
  ContainerLifes,
  Tips,
  ConfigTipsButton,
  ContainerMarker,
  ConfigButton,
  SubContainerHeart,
} from './styles';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/types';
import LottieView from 'lottie-react-native';

const DATA = ['GANTT', 'GUSTAVO', 'GRANTT', 'GANT'];

export const QuizGame = () => {
  const { theme, time } =
    useRoute<RouteProp<RootStackParamList>>()?.params || {};

  const [showModalOption, setShowModalOptions] = useState<boolean>(false);
  const [showTipsModal, setShowTipsModal] = useState<boolean>(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState<number | null>(null);
  const [endRound, setEndRound] = useState<boolean>(false);

  const controlFirstHeart = useRef();
  const controlSecondHeart = useRef();
  const controlThirdHeart = useRef();

  const handlerWrongResponse = (item: number) => {
    if (item === 0) {
      controlFirstHeart?.current?.play(144, 0);
    } else if (item === 1) {
      controlSecondHeart?.current?.play(144, 0);
    } else if (item === 2) {
      controlThirdHeart?.current?.play(144, 0);
    }
  };

  useEffect(() => {
    controlFirstHeart.current.play(144, 144);
    controlSecondHeart.current.play(144, 144);
    controlThirdHeart.current.play(144, 144);
  }, []);

  return (
    <Container>
      <BodyScreen />
      <ContainerTitle>
        <TitleBar>
          <TextRegular>Tema</TextRegular>
          <TextSubTitle>{theme}</TextSubTitle>
        </TitleBar>
      </ContainerTitle>

      <ContainerUtils>
        <ContainerMarker>
          <TextPresentation>TEMPO: 1:00</TextPresentation>

          <Modal visible={showModalOption} animationType="fade" transparent>
            <ModalOptions setModal={setShowModalOptions} />
          </Modal>

          <ConfigButton onPress={() => setShowModalOptions(true)}>
            <Icon name="settings" size={25} color="#000" />
          </ConfigButton>
          <Marker source={require('../../assets/images/marker.png')} />
        </ContainerMarker>
        <ContainerLifes>
          <SubContainerHeart>
            <LottieView
              source={require('../../assets/lottie/Heart.json')}
              resizeMode="cover"
              loop={false}
              autoPlay={false}
              ref={controlFirstHeart}
            />
          </SubContainerHeart>
          <SubContainerHeart>
            <LottieView
              source={require('../../assets/lottie/Heart.json')}
              resizeMode="cover"
              loop={false}
              autoPlay={false}
              ref={controlSecondHeart}
            />
          </SubContainerHeart>
          <SubContainerHeart>
            <LottieView
              source={require('../../assets/lottie/Heart.json')}
              resizeMode="cover"
              loop={false}
              autoPlay={false}
              ref={controlThirdHeart}
            />
          </SubContainerHeart>
        </ContainerLifes>
        <Tips>
          <Tips onPress={() => setShowTipsModal(true)}>
            <TextRegular>DICA</TextRegular>
          </Tips>
          <Modal visible={showTipsModal} animationType="fade" transparent>
            <TipsModal setModal={setShowTipsModal} />
          </Modal>
        </Tips>
      </ContainerUtils>
      <ContainerMain>
        <Image
          source={require('../../assets/images/paper.png')}
          width={'100%'}
          height={'200px'}
        />
        <ContainerText>
          <TextMain>
            Nome dado ao diagrama usado para ilustrar o avanço das diferentes
            etapas de um projeto
          </TextMain>
        </ContainerText>
      </ContainerMain>

      <ContainerOptions>
        {DATA.map((item, index) => {
          return (
            <Option
              key={index}
              disabled={endRound ? true : false}
              selected={correct === index ? true : false}
              noSelected={selected !== index ? true : false}>
              <TextSubTitle>{item}</TextSubTitle>
            </Option>
          );
        })}
      </ContainerOptions>
    </Container>
  );
};
