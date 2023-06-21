import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Menu from '../../components/Menu';
import * as S from './styles';
import { TouchableOpacity } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { useNavigation } from '@react-navigation/native';
import Card from '../../components/Card';

function Manager() {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation<NavigationStackProp>();

  const handleOrderService = () => {
    navigation.navigate('ListOrderServices');
  };

  return (
    <S.Container>
      <Menu headerText="Gerencia do Hotel" />
      <TouchableOpacity onPress={handleOrderService}>
        <Card
          title="Lista de Serviços de Quartos"
          styleText={{ color: 'white', fontWeight: 'normal', fontSize: 16 }}
          styleIcon={{ color: '#f8b100' }}
          icon="bed-outline"
          containerStyle={{
            flexDirection: 'row',
            justifyContent: 'center',
            borderRadius: 2,
            borderWidth: 0,
            backgroundColor: '#04091d',
          }}
        />
      </TouchableOpacity>
    </S.Container>
  );
}

export default Manager;
