import './App.css';
import First_Step from './pages/First_Step';
import Second_Step from './pages/Second_Step';
import Third_Step from './pages/Third_Step';
import { Step, Stepper, StepLabel } from '@mui/material';

function App() {
  function showStep(step) {
    switch (step) {
      case 1:
        return<First_Step/>
      case 2:
      return <Second_Step />
      case 3:
        return <Third_Step/>
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{ color: 'red', textDecoration: 'underline' }}>React MultiStep Form</h3>
        <div className="center-stepper">
          <Stepper style={{ width: '18%' }} activeStep='1' orientation='horizontal'>
            <Step>
              <StepLabel />
            </Step>
            <Step>
              <StepLabel />
            </Step>
            <Step>
              <StepLabel />
            </Step>
          </Stepper>
        </div>
       {showStep(2)}
      </header>
    </div>
  );
}

export default App;
