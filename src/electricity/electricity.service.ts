import { BadRequestException, Injectable } from '@nestjs/common';
import { ElecDTO } from './dto.js';

@Injectable()
export class ElectricityService {
	calculate(dto: ElecDTO) {
		if (dto.meter.currentKwh <= dto.meter.previousKwh) {
			throw new BadRequestException({
				success: false,
				message: 'current Kwh must be greater than previous Kwh',
				errors: [{ field: 'meter.currentKwh', message: 'current Kwh must be greater than previous Kwh' }],
			});
		}

		const usageKwh = dto.meter.currentKwh - dto.meter.previousKwh;
		const usageFee = usageKwh * dto.rates.perKwh;
		const subtotal = dto.rates.baseFee + usageFee;
		const tax = subtotal * dto.rates.taxRate / 100;

		return {
			success: true,
			message: 'Electricity bill calculated',
			data: {
				customerName: dto.customerName,
				usageKwh,
				baseFee: dto.rates.baseFee,
				usageFee,
				subtotal,
				taxRate: dto.rates.taxRate,
				tax,
				total: subtotal + tax,
			},
		};
	}
}