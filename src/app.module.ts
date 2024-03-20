import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocaisModule } from './locais/locais.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [LocaisModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
