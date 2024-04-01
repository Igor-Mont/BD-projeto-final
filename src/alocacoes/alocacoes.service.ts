import { BadRequestException, Injectable } from '@nestjs/common';

import { CreateAlocacaoDto } from './dto/create-alocacao.dto';
import { UpdateAlocacaoDto } from './dto/update-alocacao.dto';
import { Alocacao } from './entities/alocacao.entity';
import { IAlocacoesRepository } from './repositories/IAlocacoesPrismaRepository';

@Injectable()
export class AlocacoesService {
  constructor(private readonly alocacoesRepository: IAlocacoesRepository) {}

  async create(createAlocacaoDto: CreateAlocacaoDto): Promise<Alocacao> {
    const alocacao = await this.alocacoesRepository.create(createAlocacaoDto);
    if (!alocacao)
      throw new BadRequestException('id de alocacão ou horário inválido.');
    return alocacao;
  }

  async findAll() {
    return await this.alocacoesRepository.findAll();
  }

  async findOne(id: string) {
    const alocacao = await this.alocacoesRepository.findOne(id);
    if (!alocacao) throw new BadRequestException('alocacao não existe.');
    return alocacao;
  }

  async update(id: string, updateAlocacaoDto: UpdateAlocacaoDto) {
    const updatedAlocacao = await this.alocacoesRepository.update(
      id,
      updateAlocacaoDto,
    );

    if (!updatedAlocacao)
      throw new BadRequestException('verifique se todos os ids são válidos.');
    return updatedAlocacao;
  }

  async remove(id: string) {
    const removed = await this.alocacoesRepository.delete(id);
    if (!removed) throw new BadRequestException('alocacão não existe;');
  }
}
