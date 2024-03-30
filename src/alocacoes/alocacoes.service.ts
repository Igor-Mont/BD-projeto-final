import { Injectable } from '@nestjs/common';

import { CreateAlocacaoDto } from './dto/create-alocacao.dto';
import { UpdateAlocacaoDto } from './dto/update-alocacao.dto';

@Injectable()
export class AlocacoesService {
  create(createAlocacaoDto: CreateAlocacaoDto) {
    return 'This action adds a new alocacoe';
  }

  findAll() {
    return `This action returns all alocacoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alocacoe`;
  }

  update(id: number, updateAlocacaoDto: UpdateAlocacaoDto) {
    return `This action updates a #${id} alocacoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} alocacoe`;
  }
}
