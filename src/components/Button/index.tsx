import * as S from './styles';
import { IButton } from './types';

function Button({ title, onPress }:IButton) {
  return(
    <S.Button
      title={title}
      onPress={onPress}
    />
  );
}

export default Button;
