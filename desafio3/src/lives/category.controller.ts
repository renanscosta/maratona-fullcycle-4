import { Controller, Get } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoriesService } from './category.service';
import { Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  constructor(private livesService: CategoriesService) { }

  @Get()
  index(): Promise<Category[]> {
    return this.livesService.findAll();
  }

  @Post()
  async create(@Body() contactData: Category): Promise<any> {
    return this.livesService.create(contactData);
  }

  // @Put(':id/update')
  // async update(@Param('id') id, @Body() contactData: Contact): Promise<any> {
  //     contactData.id = Number(id);
  //     console.log('Update #' + contactData.id)
  //     return this.contactsService.update(contactData);
  // }  

  // @Delete(':id/delete')
  // async delete(@Param('id') id): Promise<any> {
  //   return this.livesService.delete(id);
  // }
}
