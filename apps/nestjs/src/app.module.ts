import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo/photo.entity';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'horeca-mariadb',
          port: 3306,
          username: 'root',
          password: 'root',
          database: 'nestjs',
          entities: [Photo],
          synchronize: true,
      }),
      PhotoModule,
  ],
})
export class AppModule {}
