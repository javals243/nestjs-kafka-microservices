import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './create-order-request.dto';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClients: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  CreateOrder({ userId, price }: CreateOrderRequest) {
    this.billingClients.emit(
      'order_created',
      new OrderCreatedEvent('123', userId, price),
    );
  }
}
