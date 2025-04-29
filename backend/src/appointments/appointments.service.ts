import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateAppointmentstDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(private prismaService: PrismaService) {}

  async registerAppointment(data: CreateAppointmentDto) {
    const appointment = await this.prismaService.appointments.create({ data });

    return appointment;
  }
  findAll() {
    return this.prismaService.appointments.findMany();
  }
  findOne(id: number) {
    return this.prismaService.appointments.findUnique({ where: { id } });
  }
  update(id: number, updateAppointmentsDTO: UpdateAppointmentstDto) {
    return this.prismaService.appointments.update({
      where: { id },
      data: updateAppointmentsDTO,
    });
  }
  remove(id: number) {
    return this.prismaService.appointments.delete({ where: { id } });
  }
}
