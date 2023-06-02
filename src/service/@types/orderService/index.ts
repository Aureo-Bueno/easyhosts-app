export interface IOrderService {
  description: string;
  userId: string | undefined;
  employeeId: string | null ;
  type: typeService;
}


export enum typeService {
  CLEANING = 1,
  MAINTENANCE = 2,
  FOOD = 3
}


