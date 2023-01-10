import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './create-order-request.dto';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClients: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  CreateOrder({ userId, price }: CreateOrderRequest) {
    this.billingClients.emit('order_created');
  }
}
