import {  Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
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

    @Post()
    public async create(@Body() photo: Photo) {
        return this.photoService.create(photo);
    }
}