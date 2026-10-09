import { Injectable, NotFoundException } from '@nestjs/common';
import { ParamsDTO, QueryDTO, ShippingDTO } from './dto.js';

@Injectable()
export class ShippingService {
	calculate(params: ParamsDTO, query: QueryDTO, dto: ShippingDTO) {
		const tujuan : Record<string, number> = {
			jakarta: 9000,
			bandung: 12000,
			surabaya: 15000,
			medan: 18000,
			denpasar: 20000,
		};
		const tujuans = tujuan[params.city];

		if (tujuans === undefined) {
			throw new NotFoundException({
				success: false,
				message: `City '${params.city}' is not supported`,
				errors: [],
			});
		}

		const volume = dto.dimension.lengthCm
			* dto.dimension.widthCm
			* dto.dimension.heightCm / 5000;
		const chargeable = Math.max(dto.weightKg, volume);
		const weightExtra = Math.max(0, Math.ceil(chargeable - 1)) * 2000;
		const expressFee = query.express ? (tujuans + weightExtra) * 0.5 : 0;
		const insuranceFee = query.insurance ? chargeable * 1000 : 0;

		return {
			success: true,
			message: 'Shipping cost calculated',
			data: {
				city: params.city,
				express: query.express,
				insurance: query.insurance,
				weightKg: dto.weightKg,
				volume,
				chargeable,
				tujuans,
				expressFee,
				insuranceFee,
				total: tujuans + weightExtra + expressFee + insuranceFee,
			},
		};
	}
}