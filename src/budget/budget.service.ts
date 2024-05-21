import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { Budget } from './entities/budget.entity';

@Injectable()

export class BudgetService {
  constructor(
    @InjectRepository(Budget)
    private budgetRepository:Repository<Budget>
  ){}
  async create(createBudgetDto: CreateBudgetDto) {
    const budget = this.budgetRepository.create(createBudgetDto);
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
