import { Module } from '@nestjs/common';
import { ResetController } from './reset.controller';
import { ResetService } from './reset.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResetEntity } from './reset.entity';
import { MailerModule } from '@nestjs-modules/mailer';
import { UserModule } from "../user/user.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([ResetEntity]),
    MailerModule.forRoot({
      transport: {
        host: '0.0.0.0',
        port: 1025,
      },
      defaults: {
        from: 'ash982416@gmail.com',
      },
    }),
    UserModule
  ],
  controllers: [ResetController],
  providers: [ResetService],
})
export class ResetModule {}
