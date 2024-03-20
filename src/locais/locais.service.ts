import { ConflictException, Injectable } from '@nestjs/common';

import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';
import { Local } from './entities/local.entity';
import { ILocaisRepository } from './repositories/ILocaisRepository';

@Injectable()
export class LocaisService {
  constructor(private locaisRepository: ILocaisRepository) {}

  async create(createLocalDto: CreateLocalDto): Promise<Local> {
    const localAlreadyExists =
      await this.locaisRepository.localAlreadyExists(createLocalDto);

    if (localAlreadyExists)
      throw new ConflictException('Esse local já está registrado.');

    const newLocal = await this.locaisRepository.create(createLocalDto);

    return newLocal as Local;
  }

  async findAll(): Promise<Local[]> {
    return await this.locaisRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} locai`;
  }

  update(id: number, updateLocalDto: UpdateLocalDto) {
    return `This action updates a #${id} locai`;
  }

  remove(id: number) {
    return `This action removes a #${id} locai`;
  }
}
