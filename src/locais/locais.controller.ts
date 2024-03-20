import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';
import { LocaisService } from './locais.service';

@Controller('locais')
export class LocaisController {
  constructor(private readonly locaisService: LocaisService) {}

  @Post()
  create(@Body() createLocaiDto: CreateLocalDto) {
    return this.locaisService.create(createLocaiDto);
  }

  @Get()
  findAll() {
    return this.locaisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locaisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLocaiDto: UpdateLocalDto) {
    return this.locaisService.update(+id, updateLocaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locaisService.remove(+id);
  }
}
