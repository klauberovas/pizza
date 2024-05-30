import { usePrefs } from '../../context/settings-context';

export const Header = () => {
  const { veganOnly, updateVeganPreference } = usePrefs();

  return (
    <header>
      <p>Vyberte si jaké ingredience chcete:</p>
      <select
        value={veganOnly ? 'vegan' : 'all'}
        onChange={(e) => {
          updateVeganPreference(e.target.value);
        }}
      >
        <option value="all">Všechny</option>
        <option value="vegan">Veganské</option>
      </select>
    </header>
  );
};

export default Header;
