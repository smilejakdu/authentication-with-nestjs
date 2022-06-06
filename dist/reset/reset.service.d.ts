import { ResetEntity } from './reset.entity';
import { Repository } from 'typeorm';
export declare class ResetService {
    private readonly resetRepository;
    constructor(resetRepository: Repository<ResetEntity>);
    save(body: any): Promise<any>;
    findOne(options: any): Promise<ResetEntity>;
}
