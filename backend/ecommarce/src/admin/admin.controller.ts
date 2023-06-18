import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminDTO, AdminLoginDTO } from './admin.dot';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';

@Controller('/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('/register')
  @UseInterceptors(
    FileInterceptor('avatar', {
      fileFilter: (req, file, cb) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
          cb(null, true);
        } else {
          cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
        }
      },
      limits: { fileSize: 2097152 },
      storage: diskStorage({
        destination: './uploads',
        filename: function (req, file, cb) {
          cb(null, Date.now() + file.originalname);
        },
      }),
    }),
  )
  @UsePipes(new ValidationPipe())
  adminRegistration(
    @UploadedFile() avatar: Express.Multer.File,
    @Body() data: AdminDTO,
  ): AdminDTO {
    data.avatar = avatar.path;
    console.log(avatar.path);
    return this.adminService.adminRegistration(data);
  }

  @Post('/login')
  @UsePipes(new ValidationPipe())
  adminLogin(@Body() data: AdminLoginDTO): AdminLoginDTO {
    return this.adminService.adminLogin(data);
  }

  @Get('/:email')
  getAdminByEmail(@Param() data: { email: string }): {
    email: string;
  } {
    return this.adminService.getAdminByEmail(data.email);
  }

  @Put('/update/:email')
  // @UsePipes(new ValidationPipe())
  updateAdminByEmail(@Body() data: AdminDTO, @Param() email: string): AdminDTO {
    console.log(data);
    return this.adminService.updateAdminByEmail(email, data);
  }
}
