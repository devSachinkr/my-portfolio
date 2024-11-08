import axios from "axios";
export const uploadFile = async ({ data }: { data: FormData }) => {
  if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
    throw new Error(
      "Cloudinary cloud name is not set in environment variables"
    );
  }
  try {
    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      data
    );
    return res.data.secure_url;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Upload failed: ${error.response?.data?.message || error.message}`
      );
    } else {
      throw new Error("An unknown error occurred during the upload process.");
    }
  }
};
