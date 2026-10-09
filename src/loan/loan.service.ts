import { Injectable } from '@nestjs/common';
import { LoanDTO, ParamDTO, QueryDTO } from './dto.js';

@Injectable()
export class LoanService {
	calculate(params: ParamDTO, query: QueryDTO, dto: LoanDTO) {
		const monthlyInterestRate = dto.annualInterestRate / 12 / 100;
		const monthlyInstallment = monthlyInterestRate === 0
			? params.principal / dto.months
			: params.principal
				* monthlyInterestRate
				* Math.pow(1 + monthlyInterestRate, dto.months)
				/ (Math.pow(1 + monthlyInterestRate, dto.months) - 1);
		const roundedInstallment = Math.round(monthlyInstallment);
		const totalPayment = roundedInstallment * dto.months;

		return {
			success: true,
			message: 'Installment calculated',
			data: {
				principal: params.principal,
				currency: query.currency,
				months: dto.months,
				annualInterestRate: dto.annualInterestRate,
				monthlyInterestRate,
				monthlyInstallment: roundedInstallment,
				totalPayment,
				totalInterest: totalPayment - params.principal,
			},
		};
	}
}