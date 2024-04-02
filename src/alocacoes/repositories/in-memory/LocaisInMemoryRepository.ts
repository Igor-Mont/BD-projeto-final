import { CreateAlocacaoDto } from '@src/alocacoes/dto/create-alocacao.dto';
import { UpdateAlocacaoDto } from '@src/alocacoes/dto/update-alocacao.dto';

import { Alocacao } from '../../entities/alocacao.entity';
import { IAlocacoesRepository } from '../IAlocacoesPrismaRepository';

export class AlocacoesInMemoryRepository implements IAlocacoesRepository {
  alocacoes: Alocacao[] = [];

  async create(createAlocacaoDto: CreateAlocacaoDto): Promise<Alocacao> {
    const newAlocacao = new Alocacao();
    Object.assign(newAlocacao, { ...createAlocacaoDto });
    newAlocacao.id = '0';
    this.alocacoes.push(newAlocacao);
    return newAlocacao;
  }

  async findAll(): Promise<Alocacao[]> {
    return [...this.alocacoes];
  }

  async findOne(id: string): Promise<Alocacao | null> {
    const alocacao = this.alocacoes.find(
      (currentAlocacoes) => currentAlocacoes.id === id,
    );
    return alocacao ?? null;
  }

  async delete(id: string): Promise<boolean> {
    let removed: boolean = false;
    this.alocacoes = this.alocacoes.filter((alocacao) => {
      if (alocacao.id === id) removed = true;
      return alocacao.id !== id;
    });

    return removed;
  }

  async update(
    id: string,
    updateAlocacaoDto: UpdateAlocacaoDto,
  ): Promise<Alocacao | null> {
    const alocacaoToBeUpdated = (await this.findOne(id)) as Alocacao;
    if (alocacaoToBeUpdated) {
      Object.assign(alocacaoToBeUpdated, updateAlocacaoDto);

      return alocacaoToBeUpdated;
    }
    return null;
  }
}
