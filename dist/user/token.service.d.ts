import { TokenEntity } from './token.entity';
import { Repository } from 'typeorm';
export declare class TokenService {
    protected readonly tokenRepository: Repository<TokenEntity>;
    constructor(tokenRepository: Repository<TokenEntity>);
    save(body: any): Promise<any>;
    findOne(options: any): Promise<TokenEntity>;
    delete(option: any): Promise<import("typeorm").DeleteResult>;
}
