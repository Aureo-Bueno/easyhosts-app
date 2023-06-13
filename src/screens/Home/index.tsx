import * as S from './styles';
import Menu from '../../components/Menu';
import { Button } from '@rneui/themed';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { NavigationStackProp } from 'react-navigation-stack';

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

      <S.ContentContainer contentContainerStyle={{ paddingBottom: 20 }}>
        <S.BlockContainer>
          <S.BlockFat>
            <S.BlockTextName>Olá {user?.user.userName},</S.BlockTextName>
            <S.BlockTextHotel>Bem vindo ao Hotel</S.BlockTextHotel>
          </S.BlockFat>
        </S.BlockContainer>

        <S.BlockContainer>
          <S.Block onPress={handleOrderService}>
            <S.MenuIconBlock name="bed-outline" size={48} />
            <S.CardBlockText>Serviço de Quarto</S.CardBlockText>
          </S.Block>

          <S.Block onPress={handleGoBooking}>
            <S.MenuIconBlock name="newspaper-outline" size={48} />
            <S.CardBlockText>Dados da Reserva</S.CardBlockText>
          </S.Block>
        </S.BlockContainer>

        <S.BlockContainer>
          <S.Block>
            <S.MenuIconBlock name="compass-outline" size={48} />
            <S.CardBlockText>Evento</S.CardBlockText>
          </S.Block>

          <S.Block>
            <S.MenuIconBlock name="cash-outline" size={48} />
            <S.CardBlockText>Checkout</S.CardBlockText>
          </S.Block>
        </S.BlockContainer>
      </S.ContentContainer>
    </S.Container>
  );
}

export default Home;
