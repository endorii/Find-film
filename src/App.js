import './App.css';
import Main from './view/pages/Main/Main';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SinglePage from './view/pages/singlePage/SinglePage';
import GlobalFilms from './view/pages/GlobalFilms/GlobalFilms';
import MainNavbar from './view/layouts/Navbar/Navbar';
import Footer from './view/layouts/Footer/Footer';

function App() {

    const [moviesList, setMoviesList] = useState([]);
    const [popCartoonsList, setPopCartoonsList] = useState([]);
    const [popAnimeList, setPopAnimeList] = useState([]);
    const [tvList, setTVList] = useState([]);


    return (
        <Router>
            <div className="App">
                <MainNavbar/>
                <Routes>

                    <Route path="/Find-film" element={<Main 
                        moviesList={moviesList} 
                        setMoviesList={setMoviesList} 

                        popCartoonsList={popCartoonsList} 
                        setPopCartoonsList={setPopCartoonsList}
                        
                        popAnimeList={popAnimeList}
                        setPopAnimeList={setPopAnimeList}

                        tvList={tvList}
                        setTVList={setTVList}
                    />}/>
                    <Route path="/Find-filmproduction/:filmId" element={<SinglePage/>}/>

                    <Route path="/Find-film/films" element={<GlobalFilms mainGenre={'18'} mainWithoutGenre={'16,10749'}/>}/>
                    <Route path="/Find-film/cartoons" element={<GlobalFilms mainGenre={'16'} mainWithoutGenre={'18,10749'}/>}/>
                    <Route path="/Find-film/anime" element={<GlobalFilms mainGenre={'16'} mainWithoutGenre={'18,10749'} origLang={'&with_original_language=ja'}/>}/>
                    <Route path="/Find-film/tv" element={<GlobalFilms mainGenre={'10749'} mainWithoutGenre={'18,16'}/>}/>
                    
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;