import { Module } from '@nestjs/common';

import { LocaisModule } from './locais/locais.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [LocaisModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
