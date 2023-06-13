import { GestureResponderEvent } from 'react-native';

export interface IButton {
  title: string,
  colorBackground: string,
  size: 'lg',
  loading?: boolean,
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
