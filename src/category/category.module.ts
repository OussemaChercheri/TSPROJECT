import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetModule } from 'src/budget/budget.module';
import { Budget } from 'src/budget/entities/budget.entity';
import { Transaction } from 'src/transaction/entities/transaction.entity';
import { TransactionModule } from 'src/transaction/transaction.module';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category, Budget, Transaction]),
    forwardRef(() => BudgetModule),
    forwardRef(() => TransactionModule),
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService]
})
export class CategoryModule {}
