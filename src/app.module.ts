
import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [OrdersModule, HelloModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
