import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EggController} from "./egg.controller";

@Module({
  imports: [],
  controllers: [AppController, EggController],
  providers: [AppService],
})
export class AppModule {}
