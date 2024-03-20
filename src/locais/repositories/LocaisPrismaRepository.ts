import { Injectable } from '@nestjs/common';

import { CreateLocalDto } from '@src/locais/dto/create-local.dto';
import { Local } from '@src/locais/entities/local.entity';

import { PrismaService } from '../../prisma/prisma.service';
import { ILocaisRepository } from './ILocaisRepository';

type Optional<T> = { [K in keyof T]?: T[K] };
@Injectable()
export class LocaisPrismaRepository implements ILocaisRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createLocalDto: CreateLocalDto): Promise<Local> {
    const new_local = await this.prismaService.local.create({
      data: createLocalDto,
    });

    return new_local as Local;
  }

  async localAlreadyExists(data: Optional<Local>): Promise<boolean> {
    return !!(await this.prismaService.local.findFirst({
      where: {
        ...data,
      },
    }));
  }

  async findAll(): Promise<Local[]> {
    return await this.prismaService.local.findMany({});
  }

  async findOne(id: string): Promise<Local | null> {
    return await this.prismaService.local.findFirst({
      where: {
        id,
      },
    });
  }
}
