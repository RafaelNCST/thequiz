import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  DropDownContainer,
  DropDownSubContainer,
  Selected,
  Option,
  TextSelected,
  TextDropDown,
  ContainerSelected,
} from './styles';

interface Props {
  Data: Array<string>;
  zIndex?: number;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setOtherDropDown: Dispatch<SetStateAction<boolean>>;
  placeholder: string;
  optionChoosed: Dispatch<SetStateAction<string | null>>;
}

export const DropDown: React.FC<Props> = ({
  Data,
  zIndex,
  open,
  setOpen,
  setOtherDropDown,
  placeholder,
  optionChoosed,
}) => {
  const [firstRun, setFirstRun] = useState<boolean>(true);
  const [selected, setSelected] = useState<string | null>(null);
  const [dataSize, setDataSize] = useState(Data.length);
  const [controlHeight, setControlHeight] = useState<number>(0);

  const handleOptionsNumberDropDown = () => {
    setDataSize(prev => prev - 1);
  };

  const handleSelectedOption = (item: string) => {
    setSelected(item);
    optionChoosed(item);
    setFirstRun(false);
    setOpen(false);
    handleOptionsNumberDropDown();
  };

  useEffect(() => {
    if (open) {
      setControlHeight(
        dataSize < Data.length ? (Data.length - 1) * 40 : Data.length * 40,
      );
    } else {
      setControlHeight(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <DropDownContainer zIndex={zIndex}>
      <Selected
        borderRadius={controlHeight === 0 ? '12px' : '0px'}
        onPress={() => {
          setOtherDropDown(false);
          setOpen(prev => !prev);
        }}
        activeOpacity={0.8}
        underlayColor="#cac8c8">
        <ContainerSelected>
          <TextSelected color={firstRun ? '#9e9d9d' : '#363636'}>
            {firstRun ? placeholder : selected}
          </TextSelected>
          <Icon name="keyboard-arrow-down" size={20} color={'#000'} />
        </ContainerSelected>
      </Selected>
      <DropDownSubContainer
        border={open ? '1px' : '0px'}
        style={{ height: controlHeight }}>
        <FlatList
          data={Data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            if (item === selected) {
              return null;
            }

            return (
              <Option
                activeOpacity={0.8}
                underlayColor="#cac8c8"
                sizeBorderRadius={index === Data.length - 1 ? '12px' : '0px'}
                key={index}
                onPress={() => handleSelectedOption(item)}>
                <TextDropDown>{item}</TextDropDown>
              </Option>
            );
          }}
        />
      </DropDownSubContainer>
    </DropDownContainer>
  );
};
