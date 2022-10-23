import React, { useState, useReducer, createContext } from 'react';
import { LIGHT, DARK, GREY } from './colors/COLORS';
import './App.css';
import Layout from './components/Layout/Layout'
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';
import { reducer, INITIAL_STATE } from './reducer/reducer';
import { deccrementCount, doubleCount, incrementCount } from './action/actions';

export const ThemeContext = createContext(LIGHT);
function App() {

  const [themeValue, setThemeValue] = useState(LIGHT);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

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
        <Content />
        <hr />
        <div className='useReducer_section'>
          <h1> This is for useReducer Hook</h1>
          <div className='subsection'>
            <h3> counter: {state.count}</h3>
            <button onClick={() => dispatch(incrementCount())}>Increment</button>
            <button onClick={() => dispatch(doubleCount())}>Double</button>
            <button
              disabled={state.count === 0}
              onClick={() => dispatch(deccrementCount())}
            >
              Decrement
            </button>
          </div>
        </div>
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;


