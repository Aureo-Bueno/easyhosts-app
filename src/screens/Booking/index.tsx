import { Button } from '@rneui/themed';
import * as S from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useQuery } from 'react-query';
import { useNavigation } from '@react-navigation/native';
import { useGetId } from '../../service/queries/booking/axios';
import { AxiosError } from 'axios';
import { ActivityIndicator } from 'react-native';

interface BookingDTO {
  id: number,
  name: string
}

function Booking() {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);

  const fetchBookingData = async (id: string) => {
    return useGetId(id);
  };

  const { data, isLoading, isError, error } = useQuery<BookingDTO[], AxiosError>(
    ['getBooking', user?.id], () => fetchBookingData(user?.id || '')
  );

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff"/>;
  }

  if (isError) {
    return <p>Error: {error?.message}</p>;
  }

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
          {data && data.map((booking) => (
            <div key={booking.id}>
              <S.InfoText>ID: {booking.id}</S.InfoText>
              <S.InfoText>Name: {booking.name}</S.InfoText>
            </div>
          ))}
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