import { Module } from '@nestjs/common';
import { FoodModule } from './food/food.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RasmlarModule } from './rasmlar/rasmlar.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  // imports: [FoodModule, MongooseModule.forRoot('mongodb://127.0.0.1/foodmagazine'), RasmlarModule, UserModule,
  imports: [FoodModule, MongooseModule.forRoot('mongodb+srv://ixtiyor:ixtiyor99@cluster0.pac6i.mongodb.net/foodmagazine'), RasmlarModule, UserModule, AuthModule


],
  controllers: [],
  providers: [],
})
export class AppModule {}
