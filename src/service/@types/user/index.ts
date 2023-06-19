export interface IUser {
  id: string,
  email: string,
  userName: string,
  password: string
}

export interface IUserRole {
  user: IUser,
  role: string[]
}
