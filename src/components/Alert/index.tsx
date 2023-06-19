import { AlertButton, Alert as RNAlert } from 'react-native';

interface IAlert {
  title: string,
  message: string | undefined,
  alertButtons: AlertButton[] | undefined,
}

function Alert({title, message, alertButtons}: IAlert) {
  return(
    RNAlert.alert(title, message, alertButtons)
  );
}

export default Alert;
