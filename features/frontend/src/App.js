import React, {useState, useEffect} from 'react';

import {
  BrowserRouter,
  Route,
  useNavigate,
  Navigate,
  Routes
} from 'react-router-dom';

import {
  createTheme,
  makeStyles,
  ThemeProvider} from '@material-ui/core';
import { purple } from '@mui/material/colors';
import NewsContainer from './Components/NewsContainer';
import Auth from './Components/auth/Auth';
import Calendar from './Components/Calendar';
import Layout from './Components/Layout';
import Create from './Components/pages/Create';
import Notes from './Components/pages/Notes';
import Game from './Components/Game';
import WeatherApp from './Components/weather/WeatherApp';
import AuthContext, { AuthContextProvider } from './Components/user/AuthContext';
import PageNotFound from './Components/PageNotFound';
import { useContext } from 'react';
import SearchWeather from './Components/weather/SearchWeather';
import netlifyIdentity from 'netlify-identity-widget';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple,
    pink: '#FFC0CB'
  },

  typography: {
    fontFamily: 'Quicksand',

    fontWightLight: 400,

    fontWightRegular: 500,

    fontWightMedium: 600,

    fontWightBold: 700
  },
});


const useStyles = makeStyles({
  page: 
  {
    background: '#f9f9f9',
    width: '100%' 
  },
  
  field: {
    marginTop: 20,
    marginBotton: 20,
    display: 'block'
  }
});



const App = () => {
  const classes = useStyles();

  
  const currentUser = netlifyIdentity.currentUser();

  netlifyIdentity.init();


  console.log(currentUser, 'current User');

    return (
    <AuthContextProvider>
     <ThemeProvider theme={theme} >
        <BrowserRouter>
        <Layout currentUser={currentUser}>
          <Routes>
                    <Route path="/Create" element={currentUser ? <Create currentUser={currentUser}/> :  <Navigate to='/' /> }/>
                    <Route path="/Notes" element={currentUser ? <Notes currentUser={currentUser}/> : <Navigate to="/" /> }/>
                    <Route path="/Calendar" element={currentUser ? <Calendar currentUser={currentUser}/> : <Navigate to="/" />}/>
                    <Route path="/news" element={<NewsContainer />}/>
                    <Route path="/" exact element={<Game/>}/>
                    <Route path="/Weather" element={<WeatherApp />} />
                    <Route path="*" element={<PageNotFound/>} /> 
          </Routes>
        </Layout>
        </BrowserRouter>
      
      </ThemeProvider>   
    </AuthContextProvider>
  )
}

export default App;