// cloudinary.module.ts
import { Module, Global } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

@Global()
@Module({
  providers: [
    {
      provide: 'CLOUDINARY',
      useFactory: () => {
        return cloudinary.config({
          cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
          api_key: process.env.CLOUDINARY_API_KEY,
          api_secret: process.env.CLOUDINARY_API_SECRET,
        });
      },
    },
  ],
  exports: ['CLOUDINARY'],
})
export class CloudinaryModule {}
