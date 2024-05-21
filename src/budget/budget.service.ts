import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryService } from 'src/category/category.service';
import { Repository } from 'typeorm';
import { UsersService } from './../users/users.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { Budget } from './entities/budget.entity';

@Injectable()

export class BudgetService {
  constructor(
    @InjectRepository(Budget)
    private budgetRepository:Repository<Budget>,
    private readonly usersService: UsersService,
    private readonly categoryService: CategoryService,
  ){}
  async create(createBudgetDto: CreateBudgetDto) {
    const { userId, categoryId, ...budgetData} = createBudgetDto;
    const user = await this.usersService.findById(userId);
    const category = await this.categoryService.findById(categoryId);
    const budget = this.budgetRepository.create({
      ...budgetData,
      user,
      category,
    })
    return await this.budgetRepository.save(budget);
  }

  async findAll() {
    return this.budgetRepository.find();
  }

  async findOne(id: number) {
    return this.budgetRepository.findOneBy({id});
  }

  async update(id: number, updateBudgetDto: UpdateBudgetDto) {
    return await this.budgetRepository.update(id, updateBudgetDto);
  }

  async remove(id: number) {
    return this.budgetRepository.delete(id);
  }
}
