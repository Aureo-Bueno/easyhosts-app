import { Fragment, useContext, useState } from 'react';
import Menu from '../../components/Menu';
import {
  useUpdateStatusCompletedOrderService,
  useUpdateStatusOrderService,
} from '../../service/mutations/orderServices/services/useUpdateStatusOrderService';
import { useGetOrderServiceAll } from '../../service/queries/orderServices';
import {
  IOrderServicesResponse,
  StatusOrderService,
} from '../../service/queries/orderServices/@types';
import * as S from './styles';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import Modal from '../../components/Modal';
import { useGetProductById } from '../../service/queries/product';
import Button from '../../components/Button';

function ListOrderServices() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const { user } = useContext(AuthContext);

  const { mutate } = useUpdateStatusOrderService();
  const { mutate: updateCompletedOrderService } = useUpdateStatusCompletedOrderService();
  const { data: dataListOrderService } = useGetOrderServiceAll();

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const renderItemStatusService = ({ item }: { item: IOrderServicesResponse }) => {
    const handleAlterStatusOrderService = () => {
      mutate(
        {
          employeId: user?.user.id,
          orderServiceId: item.id,
        },
        {
          onSuccess() {
            <Modal
              animationType='slide'
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

    const handleClompleted = () => {
      updateCompletedOrderService(
        {
          employeId: user?.user.id,
          orderServiceId: item.id,
        },
        {
          onSuccess() {
            <Modal
              animationType='slide'
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
      <Fragment>
        {item.status === StatusOrderService.OPEN && (
          <S.Card>
            <S.Divider width={1} />
            <S.ContainerList>
              <S.Grid>
                <S.GridItem>
                  <S.TextStatus>Descrição: {item.description}</S.TextStatus>
                </S.GridItem>
                <S.GridItemIcon>
                  <S.Icon name='alert-circle-outline' size={24} color='#00b7ff' />
                </S.GridItemIcon>
              </S.Grid>
            </S.ContainerList>

            <S.TextStatus>Número do quarto: {item.bedroom.number}</S.TextStatus>
            {item.productId !== null && <S.TextStatus>Produto: {item.product?.name}</S.TextStatus>}
            <Button
              title='Em Andamento'
              onPress={handleAlterStatusOrderService}
              colorBackground='#04091D'
              size='lg'
            />
            <S.Divider width={1} />
          </S.Card>
        )}
        {item.status === StatusOrderService.INPROGRESS && (
          <S.Card>
            <S.Divider width={1} />
            <S.ContainerList>
              <S.Grid>
                <S.GridItem>
                  <S.TextStatus>Descrição: {item.description}</S.TextStatus>
                </S.GridItem>
                <S.GridItemIcon>
                  <S.Icon name='refresh-circle-outline' size={24} color='#ff9d00' />
                </S.GridItemIcon>
              </S.Grid>
            </S.ContainerList>
            <S.TextStatus>Número do quarto: {item.bedroom.number}</S.TextStatus>
            {item.productId !== null && <S.TextStatus>Produto: {item.product?.name}</S.TextStatus>}
            <Button
              title='Finalizar'
              onPress={handleClompleted}
              colorBackground='#04091D'
              size='lg'
            />
            <S.Divider width={1} />
          </S.Card>
        )}
        {item.status === StatusOrderService.COMPLETED && (
          <S.Card>
            <S.Divider width={1} />
            <S.ContainerList>
              <S.Grid>
                <S.GridItem>
                  <S.TextStatus>Descrição: {item.description}</S.TextStatus>
                </S.GridItem>
                <S.GridItemIcon>
                  <S.Icon name='checkmark-done-circle-outline' size={24} color='#039900' />
                </S.GridItemIcon>
              </S.Grid>
            </S.ContainerList>

            <S.TextStatus>Número do quarto: {item.bedroom.number}</S.TextStatus>
            {item.productId !== null && <S.TextStatus>Produto: {item.product?.name}</S.TextStatus>}
            <S.Divider width={1} />
          </S.Card>
        )}
      </Fragment>
    );
  };

  return (
    <S.Container>
      <Menu headerText='Lista de Serviços de Quarto' />
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
