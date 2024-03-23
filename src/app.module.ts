import { Module } from '@nestjs/common';

import { LocaisModule } from './locais/locais.module';
import { PrismaService } from './prisma/prisma.service';
import { HorariosModule } from './horarios/horarios.module';

@Module({
  imports: [LocaisModule, HorariosModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
