import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
    constructor(
        @InjectRepository(Photo)
        private readonly photoRepository: Repository<Photo>,
    ) {}

    async findAll(): Promise<Photo[]> {
        return this.photoRepository.find();
    }

    async findByID(id): Promise<Photo> {
        return this.photoRepository.findOne(id);
    }

    async create(photo: Photo): Promise<Photo> {
        return this.photoRepository.create(photo);
    }
}