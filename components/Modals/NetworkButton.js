import React, {useContext, useEffect, useState} from 'react';
import {Image} from "../../styles/styles";
import Icon from "../Menu/NetworkMenu/Icon";
import {Pressable} from "react-native";
import moreImg from "../../assets/icons/more.png";
import AppContext from "../../AppContext";
import moon from "../../assets/icons/moon.png";
import {View} from "react-native";
import styled from "styled-components/native/dist/styled-components.native.esm";

const NetworkButton = ({text, more}) => {
    const context = useContext(AppContext);
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        if (context.isFocusOpen.bool && context.isFocusOpen.text !== text) {
            setOpenMenu(false);
        }
    }, [context.isFocusOpen]);

    return (
        <FocusButtonModalContainer style={openMenu && {height: 260, paddingBottom: 20, zIndex: 3}} onLongPress={() => {
            setOpenMenu(prev => !prev);
            context.setIsFocusOpen({bool: true, text})
        }}>
            <FocusButtonModalInit>
                <Icon image={moon}/>
                <FocusText style={{textAlign: "left"}}>{text}</FocusText>
                <Pressable style={!more && {opacity: 0}} onPress={() => {
                    setOpenMenu(prev => !prev);
                    context.setIsFocusOpen({bool: true, text})
                }}>
                    <Image source={moreImg}/>
                </Pressable>
            </FocusButtonModalInit>
            <View style={{overflow: 'hidden'}}>
                {openMenu && (
                    <>
                        <FocusButtonModalMore onPress={() => {
                            setOpenMenu(false);
                        }}>
                            <MoreOption>For 1 hour</MoreOption>
                            <MoreOption>Until this evening</MoreOption>
                            <MoreOption>Until I leave this location</MoreOption>
                        </FocusButtonModalMore>
                        <FocusText style={{
                            textAlign: "center",
                            marginTop: 10,
                            fontWeight: "normal",
                            color: "#E0E0E080"
                        }}>Settings</FocusText>
                    </>
                )}
            </View>

        </FocusButtonModalContainer>

    );
};

const FocusButtonModalMore = styled.Pressable``;

const FocusButtonModalContainer = styled.Pressable`
  background-color: lightgrey;
  border-radius: 45px;
  width: 100%;
  height: 100px;
  margin: auto;
`;

const FocusButtonModalInit = styled.View`
  padding: 10px;
  margin: auto;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const FocusText = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 14px;
`;

const MoreOption = styled.Text`
  background-color: rgba(0, 0, 0, 0.55);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.21);
  padding: 10px 40px;
`;

export default NetworkButton;