import React, {useContext, useState} from 'react';
import AppContext from "../AppContext";
import styled from "styled-components/native/dist/styled-components.native.esm";

const Button = ({type, image}) => {
  const [isPressed, setIsPressed] = useState(false);
  const context = useContext(AppContext);
  const setStyle = () => {
    let style = {};
    isPressed ? style = {backgroundColor: "#fca311"} : style = {backgroundColor: "lightgrey"};
    if (type === "block") style = {...style, marginTop: "auto", marginBottom: "auto", marginLeft: 10, marginRight: 10};
    return style;
  }

  return (
    <ButtonContainer style={setStyle()}
                     onPress={() => setIsPressed(prev => !prev)}
                     onLongPress={() => type === 'light' && context.setOpenMenu({type: 'light', bool: true})}>
      <Image source={image}/>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.Pressable`
  padding: 37px 26px;
  margin: auto;
  width: auto;
  border-radius: 25px;
`;

const Image = styled.Image`
  width: 25px;
  height: 25px;
  margin: auto;
`;

export default Button;
