import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Main, PostDetails } from './pages';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/posts/:id' element={<PostDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
