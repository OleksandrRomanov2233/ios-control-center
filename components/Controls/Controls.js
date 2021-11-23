import React from 'react';
import Icon from '../Menu/NetworkMenu/Icon';
import wifi from "../../assets/icons/wifi.png";
import airplane from "../../assets/icons/airplane-mode.png";
import styled from "styled-components/native/dist/styled-components.native.esm";

const Controls = ({style}) => {
  return (
    <ChildContainer style={style && {...style}}>
      <FocusCell>
        <Icon image={airplane}/>
        <FocusText>Airplane mode</FocusText>
        <FocusStatus>Off</FocusStatus>
      </FocusCell>
      <FocusCell>
        <Icon image={wifi}/>
        <FocusText>Airplane mode</FocusText>
        <FocusStatus>Off</FocusStatus>
      </FocusCell>
    </ChildContainer>
  );
};

const ChildContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

const FocusCell = styled.View`
  flex: 1;
  align-items: center;
  margin: 10px 0;
`;

const FocusText = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 14px;
`;

const FocusStatus = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export default Controls;
