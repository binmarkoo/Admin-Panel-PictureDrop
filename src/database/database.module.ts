/* eslint-disable */
//src/database/database.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('localhost'),
        port: configService.get('5432'),
        username: configService.get('myuser'),
        password: configService.get('mypassword'),
        database: configService.get('mydb'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true, // Be cautious about using synchronize in production
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
