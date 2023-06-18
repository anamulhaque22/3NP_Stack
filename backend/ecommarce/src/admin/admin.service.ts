import { Injectable } from '@nestjs/common';
import { AdminDTO, AdminLoginDTO } from './admin.dot';

@Injectable()
export class AdminService {
  adminRegistration(data: AdminDTO): AdminDTO {
    return data;
  }

  adminLogin(data: AdminLoginDTO): AdminLoginDTO {
    return data;
  }

  getAdminByEmail(email: string): { email: string } {
    return { email };
  }

  updateAdminByEmail(email: string, data: AdminDTO): AdminDTO {
    return data;
  }
}
