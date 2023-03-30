import {ColorValue} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';

interface IProps {
  color: ColorValue;
  icon: string;
  size?: number;
}

const TabIcon = ({icon, color, size}: IProps) => {
  return <SvgXml xml={icon} color={color} width={size} height={size} />;
};

export default TabIcon;
