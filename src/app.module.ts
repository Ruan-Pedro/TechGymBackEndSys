import { Module } from '@nestjs/common';
import { UserModule } from './infra/http/modules/User/user.module';
import { DatabaseModule } from './infra/database/prisma/database.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthModule } from './infra/http/modules/Auth/auth.module';
import { ClassModule } from './infra/http/modules/Class/class.module';
import { StudentModule } from './infra/http/modules/Students/students.module';

@Module({
  imports: [
    UserModule,
    ClassModule,
    AuthModule,
    StudentModule,
    DatabaseModule,
    ClientsModule.register([
      {
        name: 'COMUNICATION_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RMQ_URL || 'amqp://localhost:5672'],
          queue: 'user_registered_queue'
        }
      }
    ])
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
