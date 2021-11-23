import React, {useContext, useState} from 'react';
import AppContext from "../../AppContext";
import BrightnessMenu from "../Menu/BrightnessMenu";
import {Ionicons} from "@expo/vector-icons";
import VolumeMenu from "../Menu/VolumeMenu";
import {Modal} from "react-native";
import Controls from "../Controls/Controls";
import styled from "styled-components/native/dist/styled-components.native.esm";

const BrightnessModal = ({type}) => {
  const context = useContext(AppContext);
  const style = {
    width: 310,
    height: 120,
    top: 216,
    left: 30,
    borderRadius: 40
  };
  const [iconSliderValue, setIconSliderValue] = useState(50);

  return (
    <Modal
      animationType="slide"
      style={{height: "100%"}}
    >
      <FocusWindow onPress={() => {
        context.setOpenMenu({type: 'brightness', bool: false})
      }}>
        {type === 'brightness' && <><Ionicons
          style={{top: 70, textAlign: "center", width: "100%"}}
          name="sunny"
          size={40}
          color={'white'}
        />
          <BrightnessMenu style={style}/>
          <Controls style={{top: 360}}/>
        </>}
        {type === 'volume' && <><Ionicons
          style={{top: 70, textAlign: "center", width: "100%"}}
          name={iconSliderValue === 0 ? 'md-volume-off' : (iconSliderValue <= 50 ? 'md-volume-low' : 'md-volume-high')}
          size={40}
          color={'white'}
        />
          <VolumeMenu style={style} setIconValue={setIconSliderValue}/>
          <Controls style={{top: 360}}/>
        </>}
      </FocusWindow>
    </Modal>
  );
};

const FocusWindow = styled.Pressable`
  width: 100%;
  height: 100%;
  background: #090707;
  padding: 40px 15px;
`;

export default BrightnessModal;