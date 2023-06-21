export interface IOrderServices {
  id: string,
  name: string,
}

export interface IOrderServicesResponse {
  id: string,
  description: string,
  userId: string,
  status: StatusOrderService,
}

enum StatusOrderService {
  OPEN = 1,
  INPROGRESS = 2,
  COMPLETED = 3,
  CLOSED = 4
}
