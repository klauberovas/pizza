import React from 'react';
import Check from '../Check';
import ITopping from '../../models/Topping';
import './style.css';

interface IToppingProps {
  topping: ITopping;
  onSelectedChange: (selected: boolean) => void;
}

const Topping: React.FC<IToppingProps> = ({ topping, onSelectedChange }) => {
  {
    return (
      <div className="topping">
        <Check
          onChange={onSelectedChange}
          checked={topping.selected}
          isVegan={topping.vegan}
        />
        <span className="topping__content">
          {topping.name}: {topping.price} €
        </span>
      </div>
    );
  }
};

export default Topping;
