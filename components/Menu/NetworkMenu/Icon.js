import React, {useState} from 'react';
import {Image} from "../../../styles/styles";
import styled from "styled-components/native/dist/styled-components.native.esm";

const Icon = ({image}) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <FocusButton style={isPressed ? {backgroundColor: "#fca311"} : {backgroundColor: "rgba(255,255,255,0.89)"}}
                onPress={() => setIsPressed(prev => !prev)}>
            <Image source={image}/>
        </FocusButton>
    );
};

const FocusButton = styled.Pressable`
  border-radius: 50px;
  width: 55px;
  height: 55px;
  margin: 5px 5px;
`;

export default Icon;