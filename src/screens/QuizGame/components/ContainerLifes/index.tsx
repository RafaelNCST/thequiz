import React, { useRef, useEffect, useState } from 'react';
import { ContainerLifesStyled, SubContainerHeart } from './styles';
import LottieView from 'lottie-react-native';

export const ContainerLifes = () => {
  const controlFirstHeart = useRef<LottieView | null>(null);
  const controlSecondHeart = useRef<LottieView | null>(null);
  const controlThirdHeart = useRef<LottieView | null>(null);

  const [count, setCount] = useState<number>(0);

  const handlerWrongResponse = () => {
    if (count === 1) {
      controlFirstHeart?.current?.play(144, 0);
    } else if (count === 2) {
      controlSecondHeart?.current?.play(144, 0);
    } else if (count === 3) {
      controlThirdHeart?.current?.play(144, 0);
    }
  };

  console.log(count);

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    if (
      controlFirstHeart.current &&
      controlSecondHeart.current &&
      controlThirdHeart.current
    ) {
      controlFirstHeart.current.play(144, 144);
      controlSecondHeart.current.play(144, 144);
      controlThirdHeart.current.play(144, 144);
    }
  }, []);

  useEffect(() => {
    handlerWrongResponse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <ContainerLifesStyled>
      <SubContainerHeart>
        <LottieView
          source={require('../../../../assets/lottie/Heart.json')}
          resizeMode="cover"
          loop={false}
          autoPlay={false}
          ref={controlFirstHeart}
        />
      </SubContainerHeart>
      <SubContainerHeart onPress={() => setCount(prev => prev + 1)}>
        <LottieView
          source={require('../../../../assets/lottie/Heart.json')}
          resizeMode="cover"
          loop={false}
          autoPlay={false}
          ref={controlSecondHeart}
        />
      </SubContainerHeart>
      <SubContainerHeart>
        <LottieView
          source={require('../../../../assets/lottie/Heart.json')}
          resizeMode="cover"
          loop={false}
          autoPlay={false}
          ref={controlThirdHeart}
        />
      </SubContainerHeart>
    </ContainerLifesStyled>
  );
};
