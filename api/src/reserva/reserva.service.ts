import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reserva } from './entities/reserva.entity';

@Injectable()
export class ReservaService extends TypeOrmCrudService<Reserva> {
  constructor(@InjectRepository(Reserva) repo: Repository<Reserva>) {
    super(repo);
  }
}
