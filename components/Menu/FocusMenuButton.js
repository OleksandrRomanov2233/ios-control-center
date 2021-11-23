import React, {useContext} from 'react';
import AppContext from "../../AppContext";
import Icon from "./NetworkMenu/Icon";
import moon from "../../assets/icons/moon.png";
import styled from "styled-components/native/dist/styled-components.native.esm";

const FocusMenuButton = () => {
  const context = useContext(AppContext);
  return (
    <FocusMenuButtonContainer onPress={() => context.setOpenMenu({type: 'focus-menu', bool: true})}>
      <FocusMenuButtonInit>
        <Icon image={moon}/>
        <FocusText style={{marginLeft: 10}}>Focus</FocusText>
      </FocusMenuButtonInit>
    </FocusMenuButtonContainer>
  );
};

const FocusMenuButtonContainer = styled.TouchableOpacity`
  top: 310px;
  left: 10px;
  width: 170px;
  height: 85px;
  padding: 10px;
  background-color: lightgrey;
  border-radius: 30px;
  position: relative;
`;

const FocusMenuButtonInit = styled.View`
  position: absolute;
  padding: 10px;
  margin: auto;
  align-items: center;
  flex: 1;
  flex-direction: row;
`;

const FocusText = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 14px;
`;


export default FocusMenuButton;