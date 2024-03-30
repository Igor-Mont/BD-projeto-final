import { Horario } from '@src/horarios/entities/horario.entity';
import { Local } from '@src/locais/entities/local.entity';

export class Alocacao {
  id: string;

  local: Local;

  horario: Horario;
}
