import Input from './components/Input';
import Chart from './components/Chart';
import './App.css';

const App = () => {
  return (
    <div className="container mx-auto my-8 bg-slate-50 p-8">
      <h1 className="text-3xl font-bold">Koroonasurmade statistika</h1>
      <Input />
      <Chart />
    </div>
  );
};

export default App;
