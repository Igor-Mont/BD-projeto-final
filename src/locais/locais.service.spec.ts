import { ConflictException } from '@nestjs/common';

import { LocaisService } from './locais.service';
import { ILocaisRepository } from './repositories/ILocaisRepository';
import { LocaisInMemoryRepository } from './repositories/in-memory/LocaisInMemoryRepository';

let locaisService: LocaisService;
let locaisInMemoryRepository: ILocaisRepository;
describe('LocaisService', () => {
  beforeEach(async () => {
    locaisInMemoryRepository = new LocaisInMemoryRepository();
    locaisService = new LocaisService(locaisInMemoryRepository);
  });

  it('should be able create a local', async () => {
    const local = await locaisService.create({
      bairro: 'Bairro A',
      capacidade: 1000,
      CEP: '49100000',
      cidade: 'Cidade X',
      logradouro: 'Rua C',
      numero: 12,
      UF: 'SE',
    });

    expect(local).toHaveProperty('id');
  });

  it('should not be able create a duplicate local', async () => {
    await locaisService.create({
      bairro: 'Bairro A',
      capacidade: 1000,
      CEP: '49100000',
      cidade: 'Cidade X',
      logradouro: 'Rua C',
      numero: 12,
      UF: 'SE',
    });

    await expect(
      locaisService.create({
        bairro: 'Bairro A',
        capacidade: 1000,
        CEP: '49100000',
        cidade: 'Cidade X',
        logradouro: 'Rua C',
        numero: 12,
        UF: 'SE',
      }),
    ).rejects.toEqual(new ConflictException('Esse local já está registrado.'));
  });
});
