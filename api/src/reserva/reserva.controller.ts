import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@dataui/crud';
import { Reserva } from './entities/reserva.entity';
import { ReservaService } from './reserva.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';

@Crud({
  model: { type: Reserva },
  dto: {
    create: CreateReservaDto,
    update: UpdateReservaDto,
  },
})
@Controller('reservas')
export class ReservaController implements CrudController<Reserva> {
  constructor(public service: ReservaService) {}
}
