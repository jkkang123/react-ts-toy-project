import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './App.css';
import Counter from './Counter';
import MyForm from './MyFrom';
import ReducerSample from './ReducerSample';
import { SampleProvider} from './SampleContext';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

function NotePage({ match }: RouteComponentProps) {
  console.log(match);
  return <div>노트 페이지</div>
}

const App: React.FC = () => {
  return (
    <SampleProvider>
      <ReducerSample />
    </SampleProvider>
  );
};


export default App;
