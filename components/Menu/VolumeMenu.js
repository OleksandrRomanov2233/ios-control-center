import React, {useContext, useState} from 'react';
import Slider from 'react-native-swipe-slider';
import {Pressable} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import AppContext from "../../AppContext";

const VolumeMenu = ({style, setIconSlider}) => {
  const [value, setValue] = useState(50);
  const [iconSliderValue, setIconSliderValue] = useState(50);
  const context = useContext(AppContext);
  const defaultStyle = style ? style : {
    width: 186,
    height: 75,
    top: 265,
    left: -110,
  };
  return (
    <Slider
      min={0}
      max={100}
      value={value}
      onChange={value => setIconSlider ? setIconSlider(value) : setIconSliderValue(value)}
      changeEventThrottle={100}
      style={{
        justifyContent: "center",
        transform: [{rotate: '-90deg'}],
        borderRadius: 22,
        ...defaultStyle
      }}
      backgroundColor={'#fca311'}
      barColor={'lightgrey'}
      vertical
    >
      <Pressable onLongPress={() => {
        context.setOpenMenu({type: 'volume', bool: true})
      }}>
        {!style && <Ionicons
          style={{marginHorizontal: 16}}
          name={iconSliderValue === 0 ? 'md-volume-off' : (iconSliderValue <= 50 ? 'md-volume-low' : 'md-volume-high')}
          size={32}
          color={'black'}
        />}
      </Pressable>
    </Slider>
  );
};

export default VolumeMenu;