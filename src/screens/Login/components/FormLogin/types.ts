export interface IFormLogin {
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  email: string,
  password: string,
  navigation: any,
}
