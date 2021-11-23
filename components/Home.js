import React, {useContext} from 'react';
import {View} from "react-native";
import NetworkMenu from "./Menu/NetworkMenu/NetworkMenu";
import AppContext from "../AppContext";
import BrightnessMenu from "./Menu/BrightnessMenu";
import VolumeMenu from "./Menu/VolumeMenu";
import FocusMenuButton from "./Menu/FocusMenuButton";
import Button from "./Button";
import NetworkModal from "./Modals/NetworkModal";
import NetworkButtonModal from "./Modals/NetworkButtonModal";
import BrightnessModal from "./Modals/BrightnessModal";
import styled from "styled-components/native/dist/styled-components.native.esm";
import lock from "../assets/icons/lock.png";
import copy from "../assets/icons/copy.png";
import flashlight from "../assets/icons/flashlight.png";
import calculator from "../assets/icons/calculator.png";
import camera from "../assets/icons/camera.png";
import battery from "../assets/icons/battery.png";

const Home = () => {
    const context = useContext(AppContext);
    return (
        <View>
            {context.openMenu.bool && context.openMenu.type === 'four-icons' && <NetworkModal/>}
            {context.openMenu.bool && context.openMenu.type === 'focus-menu' && <NetworkButtonModal/>}
            {context.openMenu.bool && context.openMenu.type === 'brightness' && <BrightnessModal type={'brightness'}/>}
            {context.openMenu.bool && context.openMenu.type === 'volume' && <BrightnessModal type={'volume'}/>}
            <Container>
                <NetworkMenu/>
                <NetworkMenu type={'music'}/>
            </Container>
            <SecondSection>
                <View>
                    <Block>
                        <Button type={"block"} image={lock}/>
                        <Button type={"block"} image={copy}/>
                    </Block>
                    <FocusMenuButton/>
                </View>
                <Slider>
                    <BrightnessMenu/>
                    <VolumeMenu/>
                </Slider>
            </SecondSection>
            <ThirdSection>
                <Button type={'light'} image={flashlight}/>
                <Button image={calculator}/>
                <Button image={camera}/>
                <Button image={battery}/>
            </ThirdSection>
        </View>
    );
};

const Block = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  width: 1px;
  top: 210px;
  left: 0;
`;

const Slider = styled.View`
  flex: 1;
  flex-direction: row;
  width: 48%;
`;

const Container = styled.View`
  height: 100%;
  flex: 1;
  flex-direction: row;
`;

const SecondSection = styled.View`
  flex: 1;
  flex-direction: row;
`;

const ThirdSection = styled.View`
  flex: 1;
  flex-direction: row;
  top: 415px;
`;

export default Home;
