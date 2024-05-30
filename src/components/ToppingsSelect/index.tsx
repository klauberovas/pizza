import { useState } from 'react';
import ITopping from '../../models/Topping';
import Topping from '../Topping';
import './style.css';

interface IToppingsSelectProps {
  toppings: ITopping[];
}

const ToppingsSelect: React.FC<IToppingsSelectProps> = ({ toppings }) => {
  const [toppingsData, setToppingsData] = useState<ITopping[]>(toppings);

  const handleSelectTopping = (index: number, selected: boolean) => {
    const newToppings = [...toppings];
    newToppings[index].selected = selected;
    setToppingsData(newToppings);
  };

  let totalPrice = 0;
  let selectedToppings = 0;
  toppingsData.map((topping) => {
    if (topping.selected) {
      totalPrice += topping.price;
      selectedToppings += 1;
    }
  });
  totalPrice = Math.round(totalPrice * 100) / 100;

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings: {selectedToppings}, total price: {totalPrice} Euro
      </p>

      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping
            topping={topping}
            key={topping.name}
            onSelectedChange={(selected) =>
              handleSelectTopping(index, selected)
            }
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
