'use client';
import { UploadUrlData } from '@/types/next-auth';
import { Dialog, DialogContent, DialogOverlay } from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState } from 'react';

interface IProps {
  uploadUrlData: UploadUrlData;
  isUpload: boolean;
  setIsUpload: (value: boolean) => void;
  setUrlUpload: (value: string) => void;
}

export default function UploadImage(props: IProps) {
  const { uploadUrlData, isUpload, setIsUpload, setUrlUpload } = props;
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedImage(file);
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
      setUrlUpload(cloudinaryData.secure_url);
      URL.revokeObjectURL(previewUrl || '');
      setIsUpload(false);
    }
  };

  if (!isUpload) return null;

  return (
    <Dialog open={isUpload} onOpenChange={setIsUpload}>
      <DialogOverlay className="fixed inset-0 bg-black/40 z-40" />
      <DialogContent
        className="fixed inset-0 m-auto w-[85%] max-w-sm p-4 
                   bg-white rounded-2xl shadow-lg z-50 
                   sm:max-w-xs md:max-w-sm"
      >
        <form onSubmit={handleSubmit}>
          <h2 className="text-base font-semibold text-gray-800 mb-3 text-center">
            Upload Image
          </h2>

          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Choose an image:
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm 
                         text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 
                         focus:border-blue-500"
            />
          </div>

          {previewUrl && (
            <div className="mb-3 flex justify-center">
              <Image
                src={previewUrl}
                width={150}
                height={150}
                alt="Selected preview"
                className="rounded-lg shadow-md"
              />
            </div>
          )}

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={() => setIsUpload(false)}
              className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 
                         transition duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md 
                         hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 
                         focus:ring-opacity-50 transition duration-200"
            >
              Upload
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
