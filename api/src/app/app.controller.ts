import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('hello')
  getHello() {
    return { message: '¡Hola desde el backend con NestJS!' };
  }
}
