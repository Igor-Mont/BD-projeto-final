import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocaisModule } from './locais/locais.module';

@Module({
  imports: [LocaisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
