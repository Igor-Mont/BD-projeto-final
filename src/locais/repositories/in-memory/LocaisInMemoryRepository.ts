import { CreateLocalDto } from '@src/locais/dto/create-local.dto';
import { UpdateLocalDto } from '@src/locais/dto/update-local.dto';

import { shallowEqual } from '../../../utils/shallow-equal';
import { Local } from '../../entities/local.entity';
import { ILocaisRepository } from '../ILocaisRepository';
type Optional<T> = { [K in keyof T]?: T[K] };
export class LocaisInMemoryRepository implements ILocaisRepository {
  private locais: Local[] = [];

  async create(createLocalDto: CreateLocalDto): Promise<Local> {
    const new_local = new Local();
    Object.assign(new_local, { ...createLocalDto });

    this.locais.push(new_local);
    return new_local as Local;
  }

  async localAlreadyExists(
    potentialDuplicateLocal: Optional<Local>,
  ): Promise<boolean> {
    return !!this.locais.find((local) => {
      const { id, ...localWithoutId } = local;
      return shallowEqual(potentialDuplicateLocal, localWithoutId);
    });
  }

  async findAll(): Promise<Local[]> {
    return [...this.locais];
  }

  async findOne(id: string): Promise<Local | null> {
    const local = this.locais.find((currentLocal) => currentLocal.id === id);

    return local ?? null;
  }

  async delete(id: string): Promise<void> {
    this.locais = this.locais.filter((local) => local.id !== id);
  }

  async update(id: string, updateLocalDto: UpdateLocalDto): Promise<Local> {
    const localToUpdated = (await this.findOne(id)) as Local;
    this.locais = this.locais.map((currentLocal) => {
      if (id === currentLocal.id) {
        return { ...localToUpdated, ...updateLocalDto };
      }

      return currentLocal;
    });

    const updatedLocal = (await this.findOne(id)) as Local;
    return updatedLocal;
  }
}
