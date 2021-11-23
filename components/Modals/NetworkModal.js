import React, {useContext} from 'react';
import AppContext from "../../AppContext";
import {Modal} from "react-native";
import Controls from "../Controls/Controls";
import styled from "styled-components/native/dist/styled-components.native.esm";

const NetworkModal = () => {
    const context = useContext(AppContext);
    return (
        <Modal
            animationType="slide"
            style={{height: "100%"}}
        >
            <FocusWindow onPress={() => {
                context.setOpenMenu({type: 'four-icons', bool: false})
            }}>
                <FocusWindowContainer>
                    <Controls />
                    <Controls />
                    <Controls />
                </FocusWindowContainer>
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

const FocusWindowContainer = styled.Pressable`
  background-color: lightgrey;
  border-radius: 45px;
  flex: 1;
  flex-direction: column;
  height: auto;
  padding: 60px 20px;
  margin: 50px 15px;
`;

export default NetworkModal;