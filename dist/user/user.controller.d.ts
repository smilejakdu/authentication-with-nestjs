import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    register(body: any): Promise<any>;
    login(email: string, password: string): Promise<import("./user.entity").UserEntity>;
}
