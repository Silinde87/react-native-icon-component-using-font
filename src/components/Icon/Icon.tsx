import React from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import iconConfig from './../../assets/fonts/selection.json';
import {IconSizes, IIconProps} from './Icon.types';

const Icon: React.FC<IIconProps> = ({
  name,
  color,
  size = IconSizes.MEDIUM,
  ...props
}) => {
  const IconComponent = createIconSetFromIcoMoon({
    ...iconConfig,
    metadata: {name: 'icomoon'},
    preferences: {
      showGlyphs: true,
      showCodes: true,
      showQuickUse: true,
      showQuickUse2: true,
      showSVGs: true,
      fontPref: {
        prefix: 'icon-',
        metadata: {
          fontFamily: 'icomoon',
        },
      },
    },
  });

  return <IconComponent name={name} color={color} size={size} {...props} />;
};

export default Icon;
