import { CreateHorarioDto } from '../dto/create-horario.dto';
import { UpdateHorarioDto } from '../dto/update-horario.dto';
import { Horario } from "../entities/horario.entity";


export abstract class IHorarioRepository {
  abstract create(createHorarioDto: CreateHorarioDto): Promise<Horario>;

  abstract findAll(): Promise<Horario[]>;

  abstract findOne(id: string): Promise<Horario | null>;

  abstract delete(id: string): Promise<void>;

  abstract update(id: string, updateHorarioDto:UpdateHorarioDto): Promise<Horario>;
}
