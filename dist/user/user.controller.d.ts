import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { TokenService } from './token.service';
export declare class UserController {
    private userService;
    private jwtService;
    private tokenService;
    constructor(userService: UserService, jwtService: JwtService, tokenService: TokenService);
    register(body: any): Promise<any>;
    login(email: string, password: string, response: Response): Promise<{
        token: string;
    }>;
    user(request: Request): Promise<{
        id: number;
        first_name: string;
        last_name: string;
        email: string;
    }>;
    refresh(request: Request, response: Response): Promise<{
        accessToken: string;
    }>;
    logout(request: Request, response: Response): Promise<{
        message: string;
    }>;
}
