import { Button } from '@rneui/themed';
import * as S from './styles';
import { useContext } from 'react';
import { BookingContext } from '../../context/BookingContext';
import { useNavigation } from '@react-navigation/native';

function Booking() {
  const navigation = useNavigation();
  const { user } = useContext(BookingContext);

  const reservation = {
    cpf: '123.456.789-00',
    valorPago: 'R$ 500,00',
    checkin: '19/05/2023',
    checkout: '22/05/2023',
  };

  const handleGoHome = () => {
    navigation.navigate('Auth' as never);
  };

  const handleGoRoomService = () => {
    // navigation.navigate('OrderService' as never);
  };

  return (
    <S.Container>
      <S.Header>
        <S.MenuIcon name="menu-outline" size={24} />
        <S.Logo source={require('../../assets/logo.jpg')} />
        <S.MenuIcon name="notifications-outline" size={24} />
      </S.Header>
      <S.HeaderTextContainer>
        <S.HeaderText>Informações</S.HeaderText>
      </S.HeaderTextContainer>
      <S.ContentContainer>
        <S.Card>
          <S.Title>Reserva</S.Title>
          <S.InfoText>Email: {user?.email}</S.InfoText>
          <S.InfoText>Nome: {user?.name}</S.InfoText>
          <S.InfoText>CPF: {reservation.cpf}</S.InfoText>
          <S.InfoText>Valor Pago: {reservation.valorPago}</S.InfoText>
          <S.InfoText>Checkin: {reservation.checkin}</S.InfoText>
          <S.InfoText>Checkout: {reservation.checkout}</S.InfoText>
        </S.Card>
        <S.ButtonContainer>
          <Button onPress={handleGoHome}>
            <S.ButtonText>Voltar para Home</S.ButtonText>
          </Button>
          <Button onPress={handleGoRoomService}>
            <S.ButtonText>Serviços de Quarto</S.ButtonText>
          </Button>
        </S.ButtonContainer>
      </S.ContentContainer>
    </S.Container>
  );
}

export default Booking;
