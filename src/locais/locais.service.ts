import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

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

  async findOne(id: string) {
    return await this.locaisRepository.findOne(id);
  }

  async update(id: string, updateLocalDto: UpdateLocalDto): Promise<Local> {
    const exists = await this.findOne(id);
    if (!exists) throw new NotFoundException('Local não encontrado.');
    return await this.locaisRepository.update(id, updateLocalDto);
  }

  async delete(id: string): Promise<void> {
    const exists = await this.findOne(id);
    if (!exists) throw new NotFoundException('Local não encontrado.');
    return await this.locaisRepository.delete(id);
  }
}
