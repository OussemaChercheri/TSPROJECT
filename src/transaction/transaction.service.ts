import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryService } from 'src/category/category.service';
import { Repository } from 'typeorm';
import { UsersService } from './../users/users.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
    private readonly usersService: UsersService,
    private readonly categoryService: CategoryService,

  ) {}
  async create(createTransactionDto: CreateTransactionDto) {
    const { userId, categoryId, ...transactionData } = createTransactionDto;
    const user = await this.usersService.findById(userId);
    const category = await this.categoryService.findById(categoryId);
  
    const transaction = this.transactionRepository.create({
      ...transactionData,
      user,
      category,
    });
  
    return await this.transactionRepository.save(transaction);
  }
  async findAll() {
    return await this.transactionRepository.find();
  }

  async findOne(id: number) {
    return await this.transactionRepository.findOneBy({ id });
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return await this.transactionRepository.update(id, updateTransactionDto);
  }

  async remove(id: number) {
    return await this.transactionRepository.delete(id);
  }


}
