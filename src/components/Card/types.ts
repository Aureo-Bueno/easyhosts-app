import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface ICard {
  title?: string,
  subTitle?: string,
  icon?: string,
  containerStyle?: StyleProp<ViewStyle>,
  wrapperStyle?: StyleProp<ViewStyle>,
  styleText?: StyleProp<TextStyle>,
  styleIcon?: StyleProp<TextStyle>,
}
