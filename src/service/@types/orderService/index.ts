export interface IOrderService {
  description: string,
  userId: string | undefined,
  employeeId: string | null ,
  type: TypeService,
  productId?: string,
  bedroomId?: string,
}


export enum TypeService {
  CLEANING = 1,
  MAINTENANCE = 2,
  FOOD = 3
}


