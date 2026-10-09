import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TaxModule } from './tax/tax.module.js';
import { BillsModule } from './bills/bills.module.js';
import { MeterModule } from './meter/meter.module.js';
import { ScoreModule } from './score/score.module.js';
import { TemperatureModule } from './temperature/temperature.module.js';
import { ShoppingModule } from './shopping/shopping.module.js';
import { LoanModule } from './loan/loan.module.js';
import { ElectricityModule } from './electricity/electricity.module.js';
import { ParkingModule } from './parking/parking.module.js';
import { ShippingModule } from './shipping/shipping.module.js';

@Module({
  imports: [ TaxModule, BillsModule, MeterModule, ScoreModule, TemperatureModule, ShoppingModule, LoanModule, ElectricityModule, ParkingModule, ShippingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
