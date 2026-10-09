import { Module } from '@nestjs/common';
import { ShoppingService } from './shopping.service.js';
import { ShoppingController } from './shopping.controller.js';

@Module({
  controllers: [ShoppingController],
  providers: [ShoppingService],
})
export class ShoppingModule {}
