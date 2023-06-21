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
  const { data, isLoading, isError, error } = useGetBookingId(user?.user.id);

  const handleGoHome = () => {
    navigation.navigate('Home');
  };

  const handleGoRoomService = () => {
    navigation.navigate('OrderServices');
  };

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (isError) {
    return <div>Ocorreu um erro: {error.message}</div>;
  }

  const renderItem = ({ item }: { item: IBookingResponse }) => (
    <S.Card>
      <S.Title>Reserva</S.Title>
      <S.InfoText>Código: {item.codeBooking}</S.InfoText>
      <S.InfoText>Check-int: {DateTime.fromISO(item.checkin).toFormat('D')} ás 14:00</S.InfoText>
      <S.InfoText>Check-out: {DateTime.fromISO(item.checkout).toFormat('D')} ás 15:00</S.InfoText>
      <S.InfoText>Usuário: {item.user.userName}</S.InfoText>
    </S.Card>
  );

  return (
    <S.Container>
      <Menu headerText="Informações" />
      <S.ContainerView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.codeBooking.toString()}
        />
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
