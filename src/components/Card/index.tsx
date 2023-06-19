import * as S from './styles';
import { ICard } from './types';

function Card({ title, subTitle, icon, containerStyle, styleText, styleIcon, wrapperStyle }: ICard) {
  return (
    <S.Card containerStyle={containerStyle} wrapperStyle={wrapperStyle}>
      <S.Card.Title style={styleText}>
        {title}
      </S.Card.Title>
      <S.Icon name={icon} size={48} style={styleIcon}/>
      <S.Text>{subTitle}</S.Text>
    </S.Card>
  );
}

export default Card;
