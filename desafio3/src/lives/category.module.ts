import { Module } from '@nestjs/common';
import { CategoriesService } from './category.service';
import { CategoriesController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category]),
  ],
  providers: [CategoriesService],
  controllers: [CategoriesController]
})
export class CategoriesModule { }
