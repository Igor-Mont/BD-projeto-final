import { ConflictException, NotFoundException } from '@nestjs/common';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';
import { HorariosService } from './horarios.service';
import { IHorariosRepository } from './repositories/IHorariosPrismaRepository';
import { Horario } from './entities/horario.entity';
import { HorariosInMemoryRepository } from './dto/in-memory/HorariosInMemoryRepository';

let horariosService: HorariosService;
let horarioRepository: IHorariosRepository;

const makeFakeHorarioDto = (): CreateHorarioDto => {
  return {
    hora_inicial: '08:00:00',
    hora_final: '17:00:00',
  };
};

describe('HorariosService', () => {
  beforeEach(async () => {
    horarioRepository = new HorariosInMemoryRepository(); // Preencha com a implementação do seu repositório
    horariosService = new HorariosService(horarioRepository);
  });

  it('should be able create a horario', async () => {
    const horario = await horariosService.create(makeFakeHorarioDto());

    expect(horario).toHaveProperty('id');
  });

  it('should be able to list all horarios', async () => {
    await horariosService.create(makeFakeHorarioDto());

    await horariosService.create({
      hora_inicial: '09:00:00',
      hora_final: '18:00:00',
    });

    const horarios = await horariosService.findAll();

    expect(horarios).toHaveLength(2);
  });

  it('should be able to find one horario by id', async () => {
    const horario = await horariosService.create(makeFakeHorarioDto());

    const findedHorario = await horariosService.findOne(horario.id);

    expect(findedHorario).toEqual(horario);
  });

  it('should not be able to find one horario if horario not exists', async () => {
    await expect(horariosService.findOne('INVALID_ID')).rejects.toEqual(
      new NotFoundException('Horario não encontrado.'),
    );
  });

  it('should be able to delete one horario by id', async () => {
    const horario = await horariosService.create(makeFakeHorarioDto());

    const findedHorario = await horariosService.findOne(horario.id);

    expect(findedHorario).toEqual(horario);

    await horariosService.delete(horario.id);

    const horarios = await horariosService.findAll();

    expect(horarios).toHaveLength(0);
  });

  it('should not be able to delete one horario if horario not exists', async () => {
    await expect(horariosService.delete('INVALID_ID')).rejects.toEqual(
      new NotFoundException('Horario não encontrado.'),
    );
  });

  it('should be able to update one horario by id', async () => {
    const horario = await horariosService.create(makeFakeHorarioDto());

    const updateHorarioDto = {
      hora_inicial: '09:00:00',
      hora_final: '18:00:00',
    } as UpdateHorarioDto;

    const { id, ...findedHorario } = await horariosService.update(
      horario.id,
      updateHorarioDto,
    );

    expect(findedHorario).toEqual(updateHorarioDto);
  });

  it('should not be able to update one horario if horario not exists', async () => {
    const updateHorarioDto = {
      hora_inicial: '09:00:00',
      hora_final: '18:00:00',
    } as UpdateHorarioDto;

    await expect(
      horariosService.update('INVALID_ID', updateHorarioDto),
    ).rejects.toEqual(new NotFoundException('Horario não encontrado.'));
  });
});
