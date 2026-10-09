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
                KM: dto.meters / 1000,
                CM: dto.meters * 100,
                Miles: dto.meters / 1609
            }
        }
    }
}