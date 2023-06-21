import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: #f4f4f4;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

export const StatusTitle = styled.Text`
  margin: 20px 0 0 0;
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
