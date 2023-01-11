import { Injectable } from '@nestjs/common';
import { OrderCreatedEvent } from './OrderCreated.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  handleOrderCreated(OrderCreatedEvent: OrderCreatedEvent) {
    console.log(OrderCreatedEvent);
  }
}
