import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { CreateAlocacaoDto } from '../dto/create-alocacao.dto';
import { UpdateAlocacaoDto } from '../dto/update-alocacao.dto';
import { Alocacao } from '../entities/alocacao.entity';
import { IAlocacoesRepository } from './IAlocacoesPrismaRepository';

@Injectable()
export class AlocacoesPrismaRepository implements IAlocacoesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    createAlocacoesDto: CreateAlocacaoDto,
  ): Promise<Alocacao | null> {
    try {
      const newAlocacao = await this.prismaService.alocacao.create({
        data: createAlocacoesDto,
        select: {
          id: true,
          local: true,
          horario: true,
        },
      });

      return newAlocacao as Alocacao;
    } catch (err) {
      return null;
    }
  }

  async findAll(): Promise<Alocacao[]> {
    return await this.prismaService.alocacao.findMany({
      select: {
        id: true,
        local: true,
        horario: true,
      },
    });
  }

  async findOne(id: string): Promise<Alocacao | null> {
    return await this.prismaService.alocacao.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        local: true,
        horario: true,
      },
    });
  }

  async update(
    id: string,
    updateAlocacoesDto: UpdateAlocacaoDto,
  ): Promise<Alocacao | null> {
    try {
      const updatedAlocacao = await this.prismaService.alocacao.update({
        where: { id },
        data: updateAlocacoesDto,
        select: {
          id: true,
          local: true,
          horario: true,
        },
      });

      return updatedAlocacao;
    } catch (err) {
      return null;
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.prismaService.alocacao.delete({
        where: {
          id,
        },
      });

      return true;
    } catch (err) {
      return false;
    }
  }
}
