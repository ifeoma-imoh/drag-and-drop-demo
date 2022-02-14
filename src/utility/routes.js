import ImageUpload from '../components/ImageUpload';
import ImageGrid from '../components/ImageGrid';
const routes = [
  {
    path: '/',
    element: <ImageUpload />,
  },
  {
    path: '/results',
    element: <ImageGrid />,
  },
];
export default routes;
