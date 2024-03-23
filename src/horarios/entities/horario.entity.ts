import { ApiProperty } from '@nestjs/swagger';

import { randomUUID } from 'crypto';

export class Horario {
  @ApiProperty()
  id: string;

  @ApiProperty()
  hora_inicial: Date;

  @ApiProperty()
  hora_final: Date;

  constructor() {
    this.id = randomUUID();
  }
}