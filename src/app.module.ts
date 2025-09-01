import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { NotesModule } from './notes/notes.module';
import { TagsModule } from './tags/tags.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    NotesModule,
    TagsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
