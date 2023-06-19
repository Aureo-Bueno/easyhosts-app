import * as S from './styles';
import { IButton } from './types';

function Button({ title, onPress, colorBackground, size, loading }: IButton) {
  return (
    <S.Button
      title={title}
      onPress={onPress}
      color={colorBackground}
      size={size}
      loading={loading}
    />
  );
}

export default Button;
