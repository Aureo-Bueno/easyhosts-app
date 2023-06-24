import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { Card as RNCard, Divider as RNDivider } from '@rneui/base';

export const Card = styled(RNCard)`
`;

export const Divider = styled(RNDivider)`
`;

export const Container = styled.View`
  flex: 1;
  background-color: #f4f4f4;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

export const StatusTitle = styled.Text`
  color: #04091d;
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0 20px 0;
  text-align: center;
`;

export const ContainerList = styled.View`
  flex: 1;
`;

export const Grid = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const GridItem = styled.View`
  width: 80%;
`;

export const GridItemIcon = styled.View`
  width: 10%;
`;

export const TextStatus = styled.Text`
  flex: 1;
  padding: 15px;
`;

export const TextDesc = styled.Text`
  margin: 15px 0 0 0;
  font-size: 16px;
`;

export const Icon = styled(Ionicons)`
  padding-top: 11px;
`;
