import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { PrismaModule } from '@/prisma/prisma.module'

import { MailModule } from '@/mail/mail.module'
import { UsersModule } from '@/users/users.module'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { PasswordResetService } from './password-reset.service'
import { AccessTokenStrategy } from './strategies/accessToken.strategy'
import { RefreshTokenStrategy } from './strategies/refreshToken.strategy'

@Module({
	imports: [JwtModule.register({}), PrismaModule, UsersModule, MailModule],
	controllers: [AuthController],
	providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy, PasswordResetService],
})
export class AuthModule {}
