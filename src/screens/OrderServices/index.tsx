import Menu from '../../components/Menu';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import * as S from './styles';

function OrderServices() {
  return (
    <S.Container>
      <Menu headerText="Serviços" />
      <S.ContentContainer>
        <S.Card>
          <Text>Serviços de Quarto</Text>
        </S.Card>
      </S.ContentContainer>
    </S.Container>
  );
}

export default OrderServices;
