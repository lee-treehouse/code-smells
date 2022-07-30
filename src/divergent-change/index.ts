interface Product {
  getIdentifier(): string;
  getDescription(): string;
  getPrice(): number;
  setPrice(newPrice: number): void;
}

interface Order {
  getIdentifier(): string;
  getCustomerId(): string;
  setCustomerId(newCustomerId: string): void;
  getProducts(): Product[];
}

interface Return {
  getIdentifier(): string;
  getStatus(): string;
  getOrderId(): string;
  setOrderId(newOrderId: string): void;
  getReturnedProducts(): Product[];
}

interface OrderService {
  createOrder: (customerId: string, products: Product[]) => Order;
  deleteOrder: (orderId: string) => void;
  addProductsToOrder: (orderId: string, products: Product[]) => void;
  removeProductsFromOrder: (orderId: string, products: Product[]) => void;
  getOrderDetails: (orderId: string) => Order;
}

interface CustomerService {
  registerCustomerAddress: (customerId: string, address: string) => void;
  getCustomerAddress: (customerId: string) => string;
}

interface ShipmentService {
  setShipmentAddress: (orderId: string, address: string) => void;
  getShipmentAddress: (orderId: string) => string;
}

interface ReturnService {
  initiateOrderReturn: (orderId: string, returnedProducts: Product[]) => Return;
  cancelReturn: (returnId: string) => void;
  getReturnStatus: (returnId: string) => string;
}

export {};
