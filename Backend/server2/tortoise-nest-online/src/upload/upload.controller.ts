// src/upload/upload.controller.ts
import { Controller, Get } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

@Controller('upload')
export class UploadController {
  @Get('presigned-url')
  async getPresignedUrl() {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const signature = cloudinary.utils.api_sign_request(
      { timestamp },
      process.env.CLOUDINARY_API_SECRET,
    );

    return {
      url: `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
      signature,
      api_key: process.env.CLOUDINARY_API_KEY,
      timestamp,
    };
  }
}
