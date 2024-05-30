import { useState } from 'react';
import ToppingsSelect from './components/ToppingsSelect';
import Header from './components/Header/Header';
import toppings from './data/topping';
import './style.css';
import { PrefsContext, PrefsData } from './context/settings-context';

const App: React.FC = () => {
  const [veganOnly, setVeganOnly] = useState<PrefsData>({ veganOnly: true });

  const updateVeganPreference = (value: string) => {
    if (value === 'vegan') {
      setVeganOnly({ ...veganOnly, veganOnly: true });
    } else {
      setVeganOnly({ ...veganOnly, veganOnly: false });
    }
  };

  return (
    <div className="container">
      <header>
        <div className="pizza" />
        <h1>Build your own pizza</h1>
      </header>
      <main>
        <PrefsContext.Provider value={{ ...veganOnly, updateVeganPreference }}>
          <Header />
          <ToppingsSelect toppings={toppings} />
        </PrefsContext.Provider>
      </main>
    </div>
  );
};

export default App;
