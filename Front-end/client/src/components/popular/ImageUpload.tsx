'use client'
import { UploadUrlData } from '@/types/next-auth';
import Image from 'next/image';
import { useState } from 'react';

interface IProps {
  uploadUrlData: UploadUrlData;
}

export default function UploadImage(props: IProps) {
  const { uploadUrlData } = props;
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null); // URL xem trước ảnh

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedImage(file);
      
      // Tạo URL xem trước ảnh
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (uploadUrlData && selectedImage) {
      const formData = new FormData();
      formData.append('file', selectedImage);
      formData.append('api_key', uploadUrlData.api_key);
      formData.append('timestamp', uploadUrlData.timestamp.toString());
      formData.append('signature', uploadUrlData.signature);

      const cloudinaryRes = await fetch(uploadUrlData.url, {
        method: 'POST',
        body: formData,
      });

      const cloudinaryData = await cloudinaryRes.json();
      console.log('Image uploaded:', cloudinaryData);

      // Hủy URL tạm sau khi upload
      URL.revokeObjectURL(previewUrl || '');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Upload Image</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Choose an image:
        </label>
        <input
          type="file"
          onChange={handleImageChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {previewUrl && (
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Image preview:</p>
          <Image
            src={previewUrl}
            width={200}
            height={200}
            alt="Selected preview"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Upload
      </button>
    </form>
  );
}
