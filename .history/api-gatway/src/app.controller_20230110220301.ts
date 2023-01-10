import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrderRequest } from './create-order-request.dto';
import { CreateOrderRequest } from '../../.history/api-gatway/src/create-order-request.dto_20230110220029';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  createOrder(@Body() createOrderRequest: CreateOrderRequest) {
   this.appService.CreateOrder(createOrderRequest);
  }
}
