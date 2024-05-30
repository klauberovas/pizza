import { createContext, useContext } from 'react';

export interface PrefsData {
  veganOnly: boolean;
}

export interface PrefsContextData extends PrefsData {
  updateVeganPreference: (value: string) => void;
}

export const PrefsContext = createContext<PrefsContextData>({
  veganOnly: true,
  updateVeganPreference: () => {},
});

export const usePrefs = () => useContext(PrefsContext);
