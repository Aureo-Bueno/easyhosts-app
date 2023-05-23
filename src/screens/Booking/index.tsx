import * as S from './styles';
import Menu from '../../components/Menu';
import { Button, Text } from '@rneui/themed';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { useGetBookingId, IBooking, IBookingResponse } from '../../service/queries/booking';
import { ActivityIndicator, FlatList } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

function Booking() {
  const navigation = useNavigation<NavigationStackProp>();
  const { user } = useContext(AuthContext);
  const { data, isLoading, isError, error } = useGetBookingId(user?.id);

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
      <S.InfoText>Code: {item.codeBooking}</S.InfoText>
      <S.InfoText>Checkint: {item.checkin}</S.InfoText>
      <S.InfoText>Checkout: {item.checkout}</S.InfoText>
      <S.InfoText>User: {item.userId}</S.InfoText>
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
            title="Voltar para Home"
            onPress={handleGoHome}
            titleStyle={{ fontWeight: 'bold', fontSize: 16, color: '#04091D' }}
            buttonStyle={{
              backgroundColor: '#F8B100',
              borderRadius: 10,
              paddingVertical: 12,
            }}
          />
          <Button
            title="Serviços de Quarto"
            onPress={handleGoRoomService}
            titleStyle={{ fontWeight: 'bold', fontSize: 16, color: '#04091D' }}
            buttonStyle={{
              backgroundColor: '#F8B100',
              borderRadius: 10,
              paddingVertical: 12,
            }}
          />
        </S.ButtonContainer>
      </S.ContainerView>
    </S.Container>
  );
}

export default Booking;
