import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    protected readonly userRepository: Repository<UserEntity>;
    constructor(userRepository: Repository<UserEntity>);
    save(body: any): Promise<any>;
    findOne(options: any): Promise<UserEntity>;
}
