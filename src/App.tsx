import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route>
            <div className="flex justify-center text-8xl">HI</div>
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
