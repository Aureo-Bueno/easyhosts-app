export interface IOrderService {
  description: string;
  userId: string;
  employeeId: string | null ;
  status: typeStatus;
  service: typeService;
}

export enum typeStatus {
  OPEN = 1,
  INPROGRESS = 2,
  COMPLETED = 3,
  CLOSED = 4
}

export enum typeService {
  CLEANING = 1,
  MAINTENANCE = 2,
  FOOD = 3,
}


