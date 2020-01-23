import {  Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    NotFoundException
} from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('v1/photos')
export class PhotoController {
    constructor(private readonly photoService: PhotoService) {}

    @Get()
    async findAll(): Promise<Photo[]> {
        return this.photoService.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: number): Promise<Photo> {
        const photo: Photo = await this.photoService.findByID(id);
        if (photo === undefined) {
            throw new NotFoundException('No query results for photo entity');
        }
        return photo;
    }

    @Post()
    public async create(@Body() photo: Photo) {
        return this.photoService.create(photo);
    }
}