import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Controller('api')
export class UserController {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  @Post('register')
  async register(@Body() body: any) {
    if (body.password !== body.password_confirm) {
      throw new BadRequestException('Passwords do not match!');
    }

    return this.userService.save({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      password: await bcryptjs.hash(body.password, 12),
    });
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({passthrough: true}) response: Response,
  ) {
    const user = await this.userService.findOne({ email });

    if (!user) {
      throw new BadRequestException('invalid credentials');
    }

    if (!(await bcryptjs.compare(password, user.password))) {
      throw new BadRequestException('invalid credentials');
    }

    const accessToken = await this.jwtService.signAsync(
      {
        id: user.id,
      },
      { expiresIn: '30s' },
    );

    const refreshToken = await this.jwtService.signAsync({
      id: user.id,
    });

    response.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
    });

    return {
      token: accessToken,
    };
  }
}
