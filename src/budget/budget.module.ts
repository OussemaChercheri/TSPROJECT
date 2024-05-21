import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from 'src/category/category.module';
import { UsersModule } from 'src/users/users.module';
import { BudgetController } from './budget.controller';
import { BudgetService } from './budget.service';
import { Budget } from './entities/budget.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Budget]),
    UsersModule,
    forwardRef(() => CategoryModule)
  ],
  controllers: [BudgetController],
  providers: [BudgetService],
  exports: [BudgetService]
})
export class BudgetModule {}
