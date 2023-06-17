import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  // constructor(private userService: UserService, ){}
  constructor(private userService: UserService, private jwtService: JwtService){}
  async login(createAuthDto: CreateAuthDto) {

    const user = await this.userService.findbyEmail(createAuthDto.email)

    if (user?.password !== createAuthDto.password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user._id, username: user.name };

    return {
      access_token: await this.jwtService.signAsync(payload)
    };
    // return payload
  }

}
