import { GestureResponderEvent } from 'react-native';

export interface IButton {
  title: string,
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
