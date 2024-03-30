import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { CreateAlocacaoDto } from '../dto/create-alocacao.dto';
import { UpdateAlocacaoDto } from '../dto/update-alocacao.dto';
import { Alocacao } from '../entities/alocacao.entity';
import { IAlocacoesRepository } from './IAlocacoesPrismaRepository';

@Injectable()
export class AlocacoesPrismaRepository implements IAlocacoesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createAlocacoesDto: CreateAlocacaoDto): Promise<Alocacao> {
    const newAlocacao = await this.prismaService.alocacao.create({
      data: createAlocacoesDto,
    });

    return newAlocacao as Alocacao;
  }

  async findAll(): Promise<Alocacao[]> {
    return await this.prismaService.alocacao.findMany({});
  }

  async findOne(id: string): Promise<Alocacao | null> {
    return await this.prismaService.alocacao.findFirst({
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.alocacao.delete({
      where: {
        id,
      },
    });
  }

  async update(
    id: string,
    updateAlocacoesDto: UpdateAlocacaoDto,
  ): Promise<Alocacao> {
    const updatedAlocacao = await this.prismaService.alocacao.update({
      where: { id },
      data: updateAlocacoesDto,
    });

    return updatedAlocacao;
  }
}
