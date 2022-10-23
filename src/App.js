import React, { useState, useContext, createContext } from 'react';
import { LIGHT, DARK, GREY } from './colors/COLORS';
import './App.css';
import Layout from './components/Layout/Layout'
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';

export const ThemeContext = createContext(LIGHT);
function App() {

  const [themeValue, setThemeValue] = useState(LIGHT);

  return (
    <ThemeContext.Provider value={themeValue}>
      <Layout>
        <Header />
        <div className='settings'>
          <select
            value={themeValue}
            onChange={e => setThemeValue(e.target.value)}>
            <option value={DARK}>{DARK}</option>
            <option value={LIGHT}>{LIGHT}</option>
            <option value={GREY}>{GREY}</option>

          </select>
        </div>
        <Content/>
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;


