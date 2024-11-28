import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { CreateUserUseCase } from "src/modules/User/useCases/createUserUseCase";
import { DatabaseModule } from "src/infra/database/prisma/database.module";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
    imports: [
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
    controllers: [UserController],
    providers: [CreateUserUseCase],
    exports: [ClientsModule]
})
export class UserModule {}