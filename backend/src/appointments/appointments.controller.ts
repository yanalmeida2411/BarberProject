import {
  Controller,
  Post,
  Get,
  Delete,
  Patch,
  Body,
  Param,
} from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { AppointmentsService } from './appointments.service';
import { UpdateAppointmentstDto } from './dto/update-appointment.dto';

@Controller('inicioAdmin')
export class AppointmentsController {
  constructor(private appointmentsService: AppointmentsService) {}
  @Post()
  async registerAppointment(@Body() body: CreateAppointmentDto) {
    return this.appointmentsService.registerAppointment(body);
  }
  @Get()
  async findAll() {
    return this.appointmentsService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.appointmentsService.findOne(+id);
  }
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAppointmentsDTO: UpdateAppointmentstDto,
  ) {
    return this.appointmentsService.update(+id, updateAppointmentsDTO);
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.appointmentsService.remove(+id);
  }
}