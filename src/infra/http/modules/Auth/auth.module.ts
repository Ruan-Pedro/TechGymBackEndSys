import { MiddlewareConsumer, Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { LocalStrategy } from "src/modules/Auth/Strategies/local.strategy";
import { ValidateUserUseCase } from "src/modules/Auth/useCases/validateUserUseCase";
import { UserModule } from "../User/user.module";
import { DatabaseModule } from "src/infra/database/prisma/database.module";
import { SignInDTOValidateMiddleware } from "./middleware/signinDTOValidate.middleware";

@Module({
    controllers: [AuthController],
    imports: [UserModule, DatabaseModule],
    providers: [LocalStrategy, ValidateUserUseCase]
})
export class AuthModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(SignInDTOValidateMiddleware).forRoutes('/signin');
    }
}