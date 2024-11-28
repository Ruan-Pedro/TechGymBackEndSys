import { Module } from "@nestjs/common";
import { ClassController } from "./class.controller";
import { DatabaseModule } from "src/infra/database/prisma/database.module";
// import { ClientsModule, Transport } from "@nestjs/microservices";
import { CreateClassUseCase } from "src/modules/Class/useCases/createClassUseCase";

@Module({
    imports: [
      DatabaseModule,
      // ClientsModule.register([
      //   {
      //     name: 'COMUNICATION_SERVICE',
      //     transport: Transport.RMQ,
      //     options: {
      //       urls: [process.env.RMQ_URL || 'amqp://localhost:5672'],
      //       queue: 'user_registered_queue'
      //     }
      //   }
      // ])
    ],
    controllers: [ClassController],
    providers: [CreateClassUseCase]
    // exports: [ClientsModule]
})
export class ClassModule {}