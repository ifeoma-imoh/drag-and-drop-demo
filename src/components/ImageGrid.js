import { Row, Col, PageHeader } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Image from './Image';
const ImageGrid = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [resources, setResources] = useState([]);
  useEffect(() => {
    const uploadResults = location.state;
    setResources(uploadResults);
  }, []);
  const returnToUploads = () => {
    navigate('/');
  };
  return (
    <div style={{ margin: '5%' }}>
      <PageHeader
        ghost={true}
        onBack={returnToUploads}
        title="Upload Pictures"
      />
      <Row gutter={[0, 16]} align="middle">
        {resources.map((image) => {
          const { original_filename, public_id, created_at } = image;
          return (
            <Col span={6}>
              <Image
                key={public_id}
                publicId={public_id}
                originalFilename={original_filename}
                createdAt={created_at}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default ImageGrid;
