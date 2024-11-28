import { Module } from "@nestjs/common";
import { StudentController } from "./students.controller";
import { DatabaseModule } from "src/infra/database/prisma/database.module";
// import { ClientsModule, Transport } from "@nestjs/microservices";
import { CreateStudentUseCase } from "src/modules/Students/useCases/createStudentUseCase";

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
    controllers: [StudentController],
    providers: [CreateStudentUseCase]
    // exports: [ClientsModule]
})
export class StudentModule {}