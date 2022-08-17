import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavbarEl from './components/Nav/Nav'
import FilterSection from './components/FilterSection/FilterSection';
import HouseList from './components/HouseList/HouseList';

const App = () => {
  return (
    <>
      <NavbarEl />
      <FilterSection />
      <HouseList />
    </>
  )
}

export default App