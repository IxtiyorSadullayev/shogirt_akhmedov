import { PartialType } from '@nestjs/swagger';
import { CreateRasmlarDto } from './create-rasmlar.dto';

export class UpdateRasmlarDto extends PartialType(CreateRasmlarDto) {}
