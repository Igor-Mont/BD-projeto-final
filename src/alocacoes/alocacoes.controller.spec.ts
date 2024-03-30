import { Test, TestingModule } from '@nestjs/testing';
import { AlocacoesController } from './alocacoes.controller';
import { AlocacoesService } from './alocacoes.service';

describe('AlocacoesController', () => {
  let controller: AlocacoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlocacoesController],
      providers: [AlocacoesService],
    }).compile();

    controller = module.get<AlocacoesController>(AlocacoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
