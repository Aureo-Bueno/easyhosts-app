import * as S from './styles';
import Menu from '../../components/Menu';
import { Button } from '@rneui/themed';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { useGetBookingId, IBooking } from '../../service/queries/booking';
import { ActivityIndicator, FlatList } from 'react-native';

function Booking() {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const { data, isLoading, isError, error } = useGetBookingId(user?.id!);

  const handleGoHome = () => {
    navigation.navigate('Auth' as never);
  };

  const handleGoRoomService = () => {
    navigation.navigate('OrderService' as never);
  };

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (isError) {
    return <div>Ocorreu um erro: {error.message}</div>;
  }

  const renderItem = ({ item }: { item: IBooking }) => (
    <S.Card>
      <S.Title>Reserva</S.Title>
      <S.InfoText>ID: {item.id}</S.InfoText>
      <S.InfoText>Name: {item.name}</S.InfoText>
    </S.Card>
  );

  return (
    <S.Container>
      <Menu headerText="Informações" />
      <S.ContentContainer>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
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