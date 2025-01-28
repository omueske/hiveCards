import { ApiProperty } from '@nestjs/swagger';

export class UpdateQueenDto {
  @ApiProperty()
  number: number;

  @ApiProperty()
  breed: string;

  @ApiProperty()
  hatchDate: Date;

  @ApiProperty()
  color: string;

  @ApiProperty()
  pedigree: string;

  @ApiProperty()
  comment: string;
}
