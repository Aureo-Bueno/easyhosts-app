import Menu from '../../components/Menu';
import * as S from './styles';
import { FlatList, View } from 'react-native';
import { Text } from '@rneui/themed';
import React, { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { IBookingResponse, useGetBookingId } from '../../service/queries/booking';
import { AuthContext } from '../../context/AuthContext';
import { useOrderServicesMutation } from '../../service/mutations/orderServices/services';
import { IOrderService, typeService } from '../../service/@types/orderService';
import {
  IOrderServicesResponse,
  useGetOrderServiceById,
} from '../../service/queries/orderServices';
import Modal from '../../components/Modal';

function OrderServices() {
  const [selectedService, setSelectedService] = useState<{ service: typeService } | {}>({});
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useContext(AuthContext);
  const { data: dataService } = useGetBookingId(user?.user.id);
  const renderItemTypeServiceId = ({ item }: { item: IBookingResponse }) => (
    <Text>
      Forneça uma breve descrição do pedido de{' '}
      {selectedService && 'service' in selectedService ? selectedService.service : ''} para o seu
      quarto número {item.codeBooking}.
    </Text>
  );

  const { data: dataStatus } = useGetOrderServiceById(user?.user.id);
  const renderItemStatusService = ({ item }: { item: IOrderServicesResponse }) => (
    <View>
      <Text>
        Descrição: {item.description} / Status: {item.status}
      </Text>
    </View>
  );

  const [description, setDescription] = useState('');

  const { mutate, isLoading } = useOrderServicesMutation();

  const handleServiceClick = (service: typeService) => {
    setSelectedService({
      service: service,
    });
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedService({});
  };

  return (
    <S.Container>
      <Menu headerText="Serviços" />
      <S.ContentContainer>
        <S.BlockContainer>
          <S.Block onPress={() => handleServiceClick(typeService.CLEANING)}>
            <S.BlockText>Limpeza </S.BlockText>
          </S.Block>
        </S.BlockContainer>

        <S.BlockContainer>
          <S.Block onPress={() => handleServiceClick(typeService.MAINTENANCE)}>
            <S.BlockText>Manutenção</S.BlockText>
          </S.Block>
        </S.BlockContainer>

        <S.BlockContainer>
          <S.Block onPress={() => handleServiceClick(typeService.FOOD)}>
            <S.BlockText>Alimentação</S.BlockText>
          </S.Block>
        </S.BlockContainer>

        <FlatList
          ListHeaderComponent={<S.StatusTitle>Status das Solicitações</S.StatusTitle>}
          data={dataStatus}
          renderItem={renderItemStatusService}
          keyExtractor={(item) => item.id}
        />
      </S.ContentContainer>
      <Modal
        animationType="slide"
        handleCloseModal={handleCloseModal}
        handleServiceClick={handleServiceClick}
        transparent={true}
        userId={user?.user.id}
        visible={false}
      />
    </S.Container>
  );
}

export default OrderServices;
