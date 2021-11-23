import React, {useContext} from 'react';
import AppContext from "../../AppContext";
import NetworkButton from "./NetworkButton";
import {Modal} from "react-native";
import styled from "styled-components/native/dist/styled-components.native.esm";

const NetworkButtonModal = () => {
  const context = useContext(AppContext);
  return (
    <Modal
      animationType="slide"
      style={{height: "100%"}}
    >
      <FocusWindow onPress={() => {
        context.setOpenMenu({type: 'four-menu', bool: false})
      }}>
        <NetworkButton text={'Do Not Disturb'} more={true}/>
        <NetworkButton text={'Sleep'} more={true}/>
        <NetworkButton text={'Personal'}/>
        <NetworkButton text={'Work'}/>
      </FocusWindow>
    </Modal>
  )
    ;
};

const FocusWindow = styled.Pressable`
  width: 100%;
  height: 100%;
  background: #090707;
  padding: 40px 15px;
`;

export default NetworkButtonModal;