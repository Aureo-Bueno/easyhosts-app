import styled from 'styled-components/native';
import { View as RNView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export const View = styled(RNView)`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0 10px 0;
`;

export const Container = styled.View`
  background-color: #ffffff;
  border-width: 1px;
  border-color: #dddddd;
  border-radius: 4px;
  padding: 10px;
`;

export const Select = styled(RNPickerSelect)`
  color: #000000;
`;
