import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // Load .env config globally
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // MySQL Database Configuration
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'mysql',
          host: config.get<string>('DATABASE_HOST', '127.0.0.1'),
          port: parseInt(config.get<string>('DATABASE_PORT', '3306'), 10),
          username: config.get<string>('DATABASE_USER', 'root'),
          password: config.get<string>('DATABASE_PASSWORD', 'Praveenmsd1@'),
          database: config.get<string>('DATABASE_NAME', 'mydb'),
          autoLoadEntities: true,
          synchronize: true, // Set to false in production
        };
      },
    }),

    // Feature Modules
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



// import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { AuthModule } from './auth/auth.module';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//     }),
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: (config: ConfigService) => {
//         const dbHost = config.get<string>('DATABASE_HOST') || '127.0.0.1';
//         const dbPort = parseInt(config.get<string>('DATABASE_PORT') || '3306', 10);
//         const dbUser = config.get<string>('DATABASE_USER') || 'root';
//         const dbPass = config.get<string>('DATABASE_PASSWORD') || 'Praveenmsd1@';
//         const dbName = config.get<string>('DATABASE_NAME') || 'mydb';

//         console.log('Connected Successfully');
//         // console.log({ dbHost, dbPort, dbUser, dbPass, dbName });
        

//         return {
//           type: 'mysql',
//           host: dbHost,
//           port: dbPort,
//           username: dbUser,
//           password: dbPass,
//           database: dbName,
//           autoLoadEntities: true,
//           synchronize: true,
//         };
//       },
//     }),
//     AuthModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}





// import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { AuthModule } from './auth/auth.module';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//     }),
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: (config: ConfigService) => ({
//         type: 'mysql',
//         host: config.get('127.0.0.1'),
//         port: config.get<number>('3306'),
//         username: config.get('nest'),
//         password: config.get('Praveenmsd1@'),
//         database: config.get('mydb'),
//         autoLoadEntities: true,
//         synchronize: true, 
//       }),
//     }),
   
//     AuthModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
