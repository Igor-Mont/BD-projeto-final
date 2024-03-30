import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { AlocacoesService } from './alocacoes.service';
import { CreateAlocacaoDto } from './dto/create-alocacao.dto';
import { UpdateAlocacaoDto } from './dto/update-alocacao.dto';

@Controller('alocacaos')
export class AlocacoesController {
  constructor(private readonly alocacoesService: AlocacoesService) {}

  @Post()
  create(@Body() createAlocacaoDto: CreateAlocacaoDto) {
    return this.alocacoesService.create(createAlocacaoDto);
  }

  @Get()
  findAll() {
    return this.alocacoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alocacoesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAlocacaoDto: UpdateAlocacaoDto,
  ) {
    return this.alocacoesService.update(+id, updateAlocacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alocacoesService.remove(+id);
  }
}
