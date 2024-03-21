import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';
import { Local } from './entities/local.entity';
import { LocaisService } from './locais.service';

@ApiTags('Locais')
@Controller('locais')
export class LocaisController {
  constructor(private readonly locaisService: LocaisService) {}

  @ApiCreatedResponse({
    description: 'Criado com sucesso.',
    type: Local,
  })
  @ApiConflictResponse({ description: "Esse local já está registrado.'" })
  @ApiBadRequestResponse({ description: 'Payload incorreto.' })
  @Post()
  async create(@Body() createLocalDto: CreateLocalDto) {
    return await this.locaisService.create(createLocalDto);
  }

  @Get()
  findAll() {
    return this.locaisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locaisService.findOne(id);
  }

  @ApiNotFoundResponse({ description: 'Local não encontrado.' })
  @ApiBadRequestResponse({ description: 'Payload incorreto.' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLocaiDto: UpdateLocalDto) {
    return this.locaisService.update(id, updateLocaiDto);
  }

  @ApiNotFoundResponse({ description: 'Local não encontrado.' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locaisService.delete(id);
  }
}
