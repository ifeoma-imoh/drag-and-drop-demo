import { Card } from 'antd';
import { Image as CloudinaryImage, Transformation } from 'cloudinary-react';
import { cloudName, uploadPreset } from '../utility/cloudinaryConfig';
const { Meta } = Card;
const Image = ({ publicId, originalFilename, createdAt }) => {
  const dateString = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(new Date(createdAt));
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <CloudinaryImage
          publicId={`${publicId}.png`}
          cloudName={cloudName}
          upload_preset={uploadPreset}
          secure={true}
          alt={originalFilename}
        >
          <Transformation width={240} height={300} crop="scale" />
        </CloudinaryImage>
      }
    >
      <Meta
        title={originalFilename}
        description={`Uploaded on ${dateString}`}
      />
    </Card>
  );
};
export default Image;
