import Menu from '../../components/Menu';
import * as S from './styles';
import { FlatList } from 'react-native';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useGetOrderServiceById } from '../../service/queries/orderServices';
import { TypeService } from '../../service/@types/orderService';
import ModalCreateOrderService from './components/ModalCreateOrderService';
import Button from '../../components/Button';
import {
  IOrderServicesResponse,
  StatusOrderService,
} from '../../service/queries/orderServices/@types';

function OrderServices() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [typeService, setTypeService] = useState<TypeService>(TypeService.CLEANING);
  const { user } = useContext(AuthContext);
  const { data: dataStatus } = useGetOrderServiceById(user?.user.id);

  const renderItemStatusService = ({ item }: { item: IOrderServicesResponse }) => (
    <S.Card>
      <S.Divider width={1} />
      <S.ContainerList>
        <S.Grid>
          <S.GridItem>
            <S.TextStatus>Descrição: {item.description}</S.TextStatus>
          </S.GridItem>
          <S.GridItemIcon>
            {item.status === StatusOrderService.OPEN && (
              <S.Icon name='alert-circle-outline' size={24} color='#00b7ff' />
            )}
            {item.status === StatusOrderService.INPROGRESS && (
              <S.Icon name='refresh-circle-outline' size={24} color='#ff9d00' />
            )}
            {item.status === StatusOrderService.COMPLETED && (
              <S.Icon name='checkmark-done-circle-outline' size={24} color='#039900' />
            )}
            {item.status === StatusOrderService.CLOSED && (
              <S.Icon name='close-circle-outline' size={24} color='#ff0000' />
            )}
          </S.GridItemIcon>
        </S.Grid>
      </S.ContainerList>

      {item.productId !== null && <S.TextStatus>Produto: {item.product?.name}</S.TextStatus>}
      <S.Divider width={1} />
    </S.Card>
  );

  const handleServiceClick = (service: TypeService) => {
    setTypeService(service);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <S.Container>
      <Menu headerText='Serviços' />
      <S.ContentContainer>
        <Button
          title='Limpeza'
          colorBackground='#04091d'
          onPress={() => handleServiceClick(TypeService.CLEANING)}
          size='lg'
        />
        <Button
          title='Manutenção'
          colorBackground='#04091d'
          onPress={() => handleServiceClick(TypeService.MAINTENANCE)}
          size='lg'
        />
        <Button
          title='Alimentação'
          colorBackground='#04091d'
          onPress={() => handleServiceClick(TypeService.FOOD)}
          size='lg'
        />
        <FlatList
          ListHeaderComponent={<S.StatusTitle>Status das Solicitações</S.StatusTitle>}
          data={dataStatus}
          renderItem={renderItemStatusService}
          keyExtractor={(item) => item.id}
        />
      </S.ContentContainer>

      <ModalCreateOrderService
        typeService={typeService}
        animationType='slide'
        handleCloseModal={handleCloseModal}
        handleServiceClick={handleServiceClick}
        transparent={true}
        userId={user?.user.id}
        visible={modalVisible}
      />
    </S.Container>
  );
}

export default OrderServices;
