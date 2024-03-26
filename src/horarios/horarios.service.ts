import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';
import { Horario } from './entities/horario.entity';
import { IHorariosRepository } from './repositories/IHorariosPrismaRepository';

@Injectable()
export class HorariosService {
  constructor(private horariosRepository: IHorariosRepository){}
 
  async create({ hora_inicial, hora_final }: CreateHorarioDto): Promise<Horario> {
    const [hi, mi, si] = hora_inicial.split(":").map(Number)
    const [hf, mf, sf] = hora_final.split(":").map(Number)
    const dateInicial = new Date(2024, 0, 1, hi-3, mi, si).toISOString()
    const dateFinal = new Date(2024, 0, 1, hf-3, mf, sf).toISOString()
    const horario = await this.horariosRepository.create({
      hora_inicial: dateInicial,
      hora_final: dateFinal
    });
    console.log(dateInicial, hi, mi, si);
    return horario;
  }

  async findAll(): Promise<Horario[]> {
    const horarios = await this.horariosRepository.findAll();
    return horarios;
  }

  async findOne(id: string): Promise<Horario> {
    const horario = await this.horariosRepository.findOne(id);
    if (!horario) {
      throw new NotFoundException(`Horario não encontrado.`);
    }
    return horario;
  }

  async update(id: string, updateHorarioDto: UpdateHorarioDto): Promise<Horario> {
    if (updateHorarioDto.hora_inicial === undefined || updateHorarioDto.hora_final === undefined) {
      throw new Error("Hora inicial ou hora final não estão definidas.");
    }
    const [hi, mi, si] = updateHorarioDto.hora_inicial.split(":").map(Number)
    const [hf, mf, sf] = updateHorarioDto.hora_final.split(":").map(Number)
    const existingHorario = await this.horariosRepository.findOne(id);
    
    if (!existingHorario) {
      throw new NotFoundException(`Horario não encontrado.`);
    }
    
    const dateInicial = new Date(2024, 0, 1, hi-3, mi, si).toISOString()
    const dateFinal = new Date(2024, 0, 1, hf-3, mf, sf).toISOString()
  
    const updatedHorario = await this.horariosRepository.update(id,{
      hora_inicial: dateInicial,
      hora_final: dateFinal
    });
    return updatedHorario;
  }


  

  async delete(id: string): Promise<void> {
    const existingHorario = await this.horariosRepository.findOne(id);
    if (!existingHorario) {
      throw new NotFoundException(`Horario não encontrado.`);
    }
    await this.horariosRepository.delete(id);
  }
}