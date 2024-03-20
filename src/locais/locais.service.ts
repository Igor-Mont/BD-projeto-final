import { Injectable } from '@nestjs/common';
import { CreateLocaiDto } from './dto/create-locai.dto';
import { UpdateLocaiDto } from './dto/update-locai.dto';

@Injectable()
export class LocaisService {
  create(createLocaiDto: CreateLocaiDto) {
    return 'This action adds a new locai';
  }

  findAll() {
    return `This action returns all locais`;
  }

  findOne(id: number) {
    return `This action returns a #${id} locai`;
  }

  update(id: number, updateLocaiDto: UpdateLocaiDto) {
    return `This action updates a #${id} locai`;
  }

  remove(id: number) {
    return `This action removes a #${id} locai`;
  }
}
