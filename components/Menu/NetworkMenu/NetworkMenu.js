import React, {useContext} from 'react';
import AppContext from "../../../AppContext";
import {Image} from "../../../styles/styles";
import Icons from "./Icons";
import wifi from "../../../assets/icons/wifi.png";
import bluetooth from "../../../assets/icons/bluetooth-signal.png";
import signal from "../../../assets/icons/antenna.png";
import airplane from "../../../assets/icons/airplane-mode.png";
import play from "../../../assets/icons/play.png";
import back from "../../../assets/icons/back.png";
import styled from "styled-components/native/dist/styled-components.native.esm";

const NetworkMenu = ({type}) => {
  const context = useContext(AppContext);
  return (
    <Container onLongPress={() => {
      if (type !== 'music') context.setOpenMenu({type: 'four-icons', bool: true})
    }}>
      {type === 'music' ? <MusicPlayer>
          <PlayerText>Not Playing</PlayerText>
          <MusicPlayerContainer>
            <Image style={{transform: [{rotate: '180deg'}]}} source={back}/>
            <Image source={play}/>
            <Image source={back}/>
          </MusicPlayerContainer>
        </MusicPlayer>
        : <><Icons icons={[airplane, signal]}/>
          <Icons icons={[wifi, bluetooth]}/></>}
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  background-color: lightgrey;
  border-radius: 45px;
  flex: 1;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  height: 180px;
`;

const MusicPlayerContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin-top: 20px;
`;

const PlayerText = styled.Text`
  padding-bottom: 30px;
  font-size: 20px;
  color: grey;
  text-align: center;
  top: 20px;
  font-weight: 700;
`;

const MusicPlayer = styled.View`
  margin: 10px 0;
`;


export default NetworkMenu;
