export interface IInput{
  placeholder: string,
  secureTextEntry?: boolean,
  value?: string,
  onChangeText?: ((text: string) => void) | undefined;
}
