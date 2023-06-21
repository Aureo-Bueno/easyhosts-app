import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: #f4f4f4;
`;

export const TitleList = styled.Text`
  color: #04091d;
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0 20px 0;
  text-align: center;
`;

export const TextStatus = styled.Text`
  margin: 0 0 15px 0;
  font-size: 16px;
  vertical-align: middle;
`;

export const TextDesc = styled.Text`
  margin: 15px 0 0 0;
  font-size: 16px;
`;

export const Icon = styled(Ionicons)`
`;
