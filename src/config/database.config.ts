import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from './env.config';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: DB_HOST,
  port: parseInt(DB_PORT!, 10) || 5432,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  entities: [User],
  synchronize: true,
};
