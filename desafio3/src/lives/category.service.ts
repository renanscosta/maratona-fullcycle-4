import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category)
        private liveRepository: Repository<Category>,
    ) { }
    async findAll(): Promise<Category[]> {
        return await this.liveRepository.find();
    }

    async create(contact: Category): Promise<Category> {
        return await this.liveRepository.save(contact);
    }

    async update(contact: Category): Promise<UpdateResult> {
        return await this.liveRepository.update(contact.id, contact);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.liveRepository.delete(id);
    }
}
