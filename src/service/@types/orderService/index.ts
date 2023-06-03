export interface IOrderService {
  description: string;
  userId: string | undefined;
  employeeId: string | null ;
  typeService: TypeService | undefined;
}


export enum TypeService {
  CLEANING = 1,
  MAINTENANCE = 2,
  FOOD = 3
}


