import { createRoot } from 'react-dom/client';
import './index.scss';
import { Root } from './Components/Routes/Router';

createRoot(document.getElementById('root') as HTMLDivElement).render(<Root />);
