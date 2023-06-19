import * as S from './styles';
import Menu from '../../components/Menu';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { NavigationStackProp } from 'react-navigation-stack';
import Card from '../../components/Card';
import { TouchableOpacity } from 'react-native';

function Home() {
  const navigation = useNavigation<NavigationStackProp>();
  const { user } = useContext(AuthContext);

  const handleGoBooking = () => {
    navigation.navigate('Booking');
  };

  const handleOrderService = () => {
    navigation.navigate('OrderServices');
  };

  return (
    <S.Container>
      <Menu headerText="Início" />
      <Card
        title={user?.user.userName}
        subTitle="Bem vindo ao Aplicativo"
        styleText={{ color: 'white', fontWeight: 'normal', fontSize: 36 }}
        containerStyle={{
          borderRadius: 2,
          borderWidth: 0,
          padding: 30,
          alignItems: 'center',
          backgroundColor: '#04091d',
        }}
      />
      <S.ContentContainer>
        <TouchableOpacity onPress={handleOrderService}>
          <Card
            title="Serviço de Quarto"
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
        <TouchableOpacity onPress={handleGoBooking}>
          <Card
            title="Dados da Reserva"
            styleText={{ color: 'white', fontWeight: 'normal', fontSize: 16 }}
            styleIcon={{ color: '#f8b100' }}
            icon="newspaper-outline"
            containerStyle={{
              flexDirection: 'row',
              justifyContent: 'center',
              borderRadius: 2,
              borderWidth: 0,
              backgroundColor: '#04091d',
            }}
          />
        </TouchableOpacity>
      </S.ContentContainer>
    </S.Container>
  );
}

export default Home;
