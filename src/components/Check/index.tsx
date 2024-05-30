import './style.css';
import { usePrefs } from '../../context/settings-context';

interface CheckProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  isVegan: boolean;
}

const Check: React.FC<CheckProps> = ({ checked, onChange, isVegan }) => {
  const { veganOnly } = usePrefs();

  const handleClick = () => {
    onChange(!checked);
  };

  const chooseVegan = () => {
    if (veganOnly && isVegan) {
      return 'check';
    } else if ((!isVegan || isVegan) && !veganOnly) {
      return 'check';
    } else {
      return 'check check--disabled';
    }
  };

  return (
    <button className={chooseVegan()} onClick={handleClick}>
      {checked ? '✓' : ''}
    </button>
  );
};

export default Check;
