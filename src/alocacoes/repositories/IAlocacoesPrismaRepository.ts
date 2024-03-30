import { CreateAlocacaoDto } from '../dto/create-alocacao.dto';
import { UpdateAlocacaoDto } from '../dto/update-alocacao.dto';
import { Alocacao } from '../entities/alocacao.entity';

export abstract class IAlocacoesRepository {
  abstract create(createAlocacaoDto: CreateAlocacaoDto): Promise<Alocacao>;

  abstract findAll(): Promise<Alocacao[]>;

  abstract findOne(id: string): Promise<Alocacao | null>;

  abstract delete(id: string): Promise<void>;

  abstract update(
    id: string,
    updateAlocacaoDto: UpdateAlocacaoDto,
  ): Promise<Alocacao>;
}
