import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BudgetModule } from './budget/budget.module';
import { Budget } from './budget/entities/budget.entity';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entities/category.entity';
import { Transaction } from './transaction/entities/transaction.entity';
import { TransactionModule } from './transaction/transaction.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tracker-db',
      entities: [User, Transaction, Category, Budget],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    TransactionModule,
    CategoryModule,
    BudgetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
