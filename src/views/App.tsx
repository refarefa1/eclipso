import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { CalendarPage } from '../components/CalendarPage';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </Router>
  );
}
