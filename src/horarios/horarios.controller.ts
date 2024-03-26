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
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { IsUUIDPipe } from '@utils/pipes/is-uuid-pipe';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';
import { Horario } from './entities/horario.entity';
import { HorariosService } from './horarios.service';

@ApiTags('Horarios')
@Controller('horarios')
export class HorariosController {
  constructor(private readonly horariosService: HorariosService) {}

  @ApiCreatedResponse({
    description: 'Criado com sucesso.',
    type: Horario,
  })
  @Post()
  create(@Body() createHorarioDto: CreateHorarioDto) {
    return this.horariosService.create(createHorarioDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Todos os registros listados com sucesso.' })
  findAll() {
    return this.horariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.horariosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHorarioDto: UpdateHorarioDto) {
    return this.horariosService.update(id, updateHorarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.horariosService.delete(id);
  }
}
