import { ApiProperty } from '@nestjs/swagger';

export class CreateBeeHiveDto {
  @ApiProperty()
  number: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  breed: string;

  @ApiProperty()
  frameType: string;
}
