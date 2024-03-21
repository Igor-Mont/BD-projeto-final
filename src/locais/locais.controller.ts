import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';
import { LocaisService } from './locais.service';

@ApiTags('Locais')
@Controller('locais')
export class LocaisController {
  constructor(private readonly locaisService: LocaisService) {}

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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLocaiDto: UpdateLocalDto) {
    return this.locaisService.update(id, updateLocaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locaisService.delete(id);
  }
}
