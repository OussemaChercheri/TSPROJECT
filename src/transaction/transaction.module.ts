import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from '../category/category.module';
import { UsersModule } from '../users/users.module';
import { Transaction } from './entities/transaction.entity';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transaction]),
    UsersModule,
    forwardRef(() => CategoryModule)
  ],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
