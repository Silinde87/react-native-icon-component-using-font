import {IconNames} from '../../utils/constants/icon.constants';

export interface IIconProps {
  name: IconNames;
  color: string;
  size?: IconSizes;
}

export enum IconSizes {
  'SMALL' = 18,
  'MEDIUM' = 24,
  'LARGE_MOBILE' = 40,
  'LARGE' = 48,
}
