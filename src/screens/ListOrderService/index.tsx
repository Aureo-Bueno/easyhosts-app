import { useContext, useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import { useUpdateStatusOrderService } from '../../service/mutations/orderServices/services/useUpdateStatusOrderService';
import { useGetOrderServiceAll } from '../../service/queries/orderServices';
import { IOrderServicesResponse } from '../../service/queries/orderServices/@types';
import * as S from './styles';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import Modal from '../../components/Modal';
import { Card, Divider } from '@rneui/base';
import { useGetBookingId } from '../../service/queries/booking';

function ListOrderServices() {
  const [userBookingId, setUserBookingId] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const { user } = useContext(AuthContext);

  const { mutate } = useUpdateStatusOrderService();
  const { data: dataListOrderService } = useGetOrderServiceAll();
  const { data: bookingByUser } = useGetBookingId(userBookingId);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const renderItemStatusService = ({ item }: { item: IOrderServicesResponse }) => {
    setUserBookingId(item.userId);
    const teste = bookingByUser?.find((test) => test.userId === item.userId);

    const handleAlterStatusOrderService = () => {
      mutate(
        {
          employeId: user?.user.id,
          orderServiceId: item.id,
        },
        {
          onSuccess() {
            <Modal
              animationType="slide"
              handleCloseModal={handleCloseModal}
              transparent={true}
              visible={modalVisible}>
              <Text>Você aceitou a ordem de Serviço de quarto.</Text>
            </Modal>;
          },
          onError() {},
        }
      );
    };
    return (
      <TouchableOpacity onPress={handleAlterStatusOrderService}>
        <Card>
          <Divider width={1} />
          <S.TextStatus>
            Descrição: {item.description}
            {item.status === 1 && <S.Icon name="md-checkmark-circle" size={24} color="#039900" />}
            {item.status === 2 && (
              <S.Icon name="refresh-circle-outline" size={24} color="#ff9d00" />
            )}
            {item.status === 3 && <S.Icon name="md-checkmark-circle" size={24} color="green" />}
            {item.status === 4 && <S.Icon name="close-outline" size={24} color="#990000" />}
          </S.TextStatus>
          <S.TextStatus>Nome do Hóspede: {teste?.user.userName} </S.TextStatus>
          <S.TextStatus>Número do quarto: {teste?.bedroom.number}</S.TextStatus>

          <Divider width={1} />
        </Card>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    renderItemStatusService
  }, [renderItemStatusService, userBookingId, dataListOrderService])

  return (
    <S.Container>
      <Menu headerText="Lista de Serviços de Quarto" />
      <FlatList
        ListHeaderComponent={<S.TitleList>Pedidos de Quartos</S.TitleList>}
        data={dataListOrderService}
        renderItem={renderItemStatusService}
        keyExtractor={(item) => item.id}
      />
    </S.Container>
  );
}

export default ListOrderServices;
