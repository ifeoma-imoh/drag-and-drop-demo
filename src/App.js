import './App.css';
import { Button, Card } from 'antd';
import DragAndDrop from './components/DragAndDrop';
import useFileSelection from './hooks/useFileSelection';

const App = () => {
  const [addFile, removeFile] = useFileSelection();

  return (
    <div style={{ margin: '1%' }}>
      <Card
        style={{ margin: 'auto', width: '50%' }}
        actions={[<Button type="primary">Submit</Button>]}
      >
        <DragAndDrop addFile={addFile} removeFile={removeFile} />
      </Card>
    </div>
  );
};

export default App;
