import { IBedroom } from "../../bedroom/@types";
import { IProduct } from "../../product/types";

export interface IOrderServices {
  id: string,
  name: string,
}

export interface IOrderServicesResponse {
  id: string,
  description: string,
  userId: string,
  status: StatusOrderService,
  bedroomId: string,
  bedroom: IBedroom,
  productId?: string,
  product?: IProduct,
}

export enum StatusOrderService {
  OPEN = 1,
  INPROGRESS = 2,
  COMPLETED = 3,
  CLOSED = 4
}

