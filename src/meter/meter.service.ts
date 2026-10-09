import { Injectable} from '@nestjs/common';
import { meterDTO } from './dto.js';

@Injectable()
export class MeterService {
    convertMeters(dto:meterDTO) {
        return {
            succes: true,
            message: "Lenght Converted",
            data: {
                meters: dto.meters,
                kilometers: dto.meters / 1000,
                centimeters: dto.meters * 100,
                miles: dto.meters / 1609
            }
        }
    }
}