import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateAppointmentDto {

  @IsString()
  name: string;

  @IsString()
  hour: string;

  @IsString()
  service: string;

  @IsString()
  date: string;

  @IsString()
  barber: string;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;

  @IsOptional()
  @IsBoolean()
  wasCanceled: boolean;

  @IsOptional()
  @IsBoolean()
  isConcluded: boolean;
}
