import React, { useState } from 'react';
import { TextSubTitle } from '../../../../styles/globalStyles';
import { ContainerOptions, Option } from './styles';

const DATA = ['GANTT', 'GUSTAVO', 'GRANTT', 'GANT'];

interface Props {
  endRound: boolean;
}

export const ContainerBoardChoices: React.FC<Props> = ({ endRound }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState<number | null>(null);

  return (
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
  );
};
