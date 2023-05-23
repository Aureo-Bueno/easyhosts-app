import styled from 'styled-components/native';
import { Input as InputRnui } from '@rneui/themed';

export const Container = styled.View`
flex: 1;
background-color: #F4F4F4;
`;

export const ContentContainer = styled.ScrollView`
flex: 1;
padding: 20px;
`;

export const HeaderText = styled.Text`
color: #FFF;
font-size: 20px;
text-align: center;
margin-top: 10px;
`;

export const BlockContainer = styled.View`
margin-bottom: 20px;
`;

export const Block = styled.TouchableOpacity`
height: 80px;
background-color: #04091D;
border-radius: 10px;
padding: 20px;
justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-top: 28px;
`;

export const Input = styled(InputRnui)`
  border-bottom-width: 1px;
  height: 40px;
  font-size: 16px;
`;

export const BlockText = styled.Text`
color: #FFF;
font-size: 18px;
`;

export const StatusSection = styled.View`
margin-top: 40px;
`;

export const StatusTitle = styled.Text`
color: #04091D;
font-size: 20px;
font-weight: bold;
margin-bottom: 20px;
`;

export const StatusItem = styled.View`
background-color: #FFF;
padding: 20px;
border-radius: 10px;
margin-bottom: 10px;
flex-direction: row;
align-items: center;
`;

export const StatusText = styled.Text`
color: #04091D;
font-size: 16px;
margin-left: 10px;
`;
