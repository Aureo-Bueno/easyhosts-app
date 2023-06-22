import * as S from './styles';
import Menu from '../../components/Menu';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { useGetBookingId, IBooking, IBookingResponse } from '../../service/queries/booking';
import { ActivityIndicator, FlatList } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import Button from '../../components/Button';
import { DateTime } from 'luxon';

function Booking() {
  const navigation = useNavigation<NavigationStackProp>();
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useGetBookingId(user?.user.id);

  const handleGoHome = () => {
    navigation.navigate('Home');
  };

  const handleGoRoomService = () => {
    navigation.navigate('OrderServices');
  };

  return (
    <S.Container>
      <Menu headerText="Informações" />
      {isLoading && <ActivityIndicator size="large" />}
      <S.ContainerView>
        {!data ? (
          <S.Card>
            <S.Title>Não possui reserva</S.Title>
          </S.Card>
        ) : (
          <S.Card>
            <S.Title>Reserva</S.Title>
            <S.InfoText>Código: {data?.codeBooking}</S.InfoText>
            <S.InfoText>
              Check-int: {DateTime.fromISO(data?.checkin).toFormat('D')} ás 14:00
            </S.InfoText>
            <S.InfoText>
              Check-out: {DateTime.fromISO(data?.checkout).toFormat('D')} ás 15:00
            </S.InfoText>
            <S.InfoText>Usuário: {data?.user.userName}</S.InfoText>
          </S.Card>
        )}

        <S.ButtonContainer>
          <Button
            colorBackground="#F8B100"
            size="lg"
            title="Voltar"
            onPress={() => handleGoHome()}
          />
          <Button
            colorBackground="#F8B100"
            size="lg"
            title="Serviços de Quarto"
            onPress={() => handleGoRoomService()}
          />
        </S.ButtonContainer>
      </S.ContainerView>
    </S.Container>
  );
}

export default Booking;
