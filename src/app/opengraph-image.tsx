import {
  createSocialImage,
  socialImageAlt,
  socialImageSize,
} from "@/shared/seo/social-image";

export const dynamic = "force-static";
export const alt = socialImageAlt;
export const size = socialImageSize;
export const contentType = "image/png";

export default function Image() {
  return createSocialImage();
}
