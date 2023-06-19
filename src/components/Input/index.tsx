import * as S from './styles';
import { IInput } from './types';

function Input({ placeholder, secureTextEntry, onChangeText, value }: IInput) {
  return (
    <S.Input
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={value}
      inputContainerStyle={{ width: '100%' }}
    />
  );
}

export default Input;
