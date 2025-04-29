import { Module } from '@nestjs/common';
import { AppointmentsModule } from './appointments/appointments.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [AppointmentsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
