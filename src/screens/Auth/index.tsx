import * as S from './styles';
import Menu from '../../components/Menu';
import { Button } from '@rneui/themed';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

function Auth() {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);

  const handleGoBooking = () => {
    navigation.navigate('Booking' as never);
  };

  return (
    <S.Container>
      <Menu headerText="Início" />

      <S.ContentContainer contentContainerStyle={{ paddingBottom: 20 }}>
        <S.BlockContainer>
          <S.BlockFat>
            <S.BlockTextName>Olá {user?.email},</S.BlockTextName>
            <S.BlockTextHotel>Bem vindo ao Hotel</S.BlockTextHotel>
            <Button
              title="Avaliar"
              titleStyle={{ fontWeight: 'bold', fontSize: 18, color: '#04091D' }}
              buttonStyle={{
                backgroundColor: '#F8B100',
                width: '35%',
                borderRadius: 10,
                marginTop: 25,
                paddingVertical: 12,
              }}
            />
          </S.BlockFat>
        </S.BlockContainer>

        <S.BlockContainer>
          <S.Block onPress={handleGoBooking}>
            <S.MenuIconBlock name="bed-outline" size={48} />
            <S.CardBlockText>Serviço de Quarto</S.CardBlockText>
          </S.Block>

          <S.Block>
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

export default Auth;
