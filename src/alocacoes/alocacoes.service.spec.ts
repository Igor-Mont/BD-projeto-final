import { Test, TestingModule } from '@nestjs/testing';
import { AlocacoesService } from './alocacoes.service';

describe('AlocacoesService', () => {
  let service: AlocacoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlocacoesService],
    }).compile();

    service = module.get<AlocacoesService>(AlocacoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
