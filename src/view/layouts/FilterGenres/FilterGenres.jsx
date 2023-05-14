

const FilterForGenres = ({mainGenre, setGenre}) => {
    
    return (
        <div className="genres">
            <h3>Filters:</h3>
            <ul className="genres_list">
                <li className="genres_list-item">
                    <button onClick={() => setGenre(mainGenre+',28')}>
                        Action
                    </button>
                </li>
                <li className="genres_list-item">
                    <button onClick={() => setGenre(mainGenre+',12')}>
                        Adventure 
                    </button>
                </li>
                <li className="genres_list-item">
                    <button onClick={() => setGenre(mainGenre+',16')}>
                        Animation 
                    </button>
                </li>

                <li className="genres_list-item">
                    <button onClick={() => setGenre(mainGenre+',35')}>
                        Comedy 
                    </button>
                </li>
                <li className="genres_list-item">
                    <button onClick={() => setGenre(mainGenre+',80')}>
                    Crime 
                    </button>
                </li>
                <li className="genres_list-item">
                    <button onClick={() => setGenre(mainGenre+',99')}>
                    Documentary 
                    </button>
                </li>
                <li className="genres_list-item">
                    <button onClick={() => setGenre(mainGenre+',18')}>
                    Drama
                    </button>
                </li>
                <li className="genres_list-item">
                    <button onClick={() => setGenre(mainGenre+',10751')}>
                    Family
                    </button>
                </li>
                <li className="genres_list-item">
                    <button onClick={() => setGenre(mainGenre+',14')}>
                    Fantasy
                    </button>
                </li>
                <li className="genres_list-item">
                    <button onClick={() => setGenre(mainGenre+',36')}>
                    History 
                    </button>
                </li>
                <li className="genres_list-item">
                    <button onClick={() => setGenre(mainGenre+',27')}>
                    Horror
                    </button>
                </li>
                <li className="genres_list-item">
                    <button onClick={() => setGenre(mainGenre+',10402')}>
                    Music
                    </button>
                </li>
                <li className="genres_list-item">
                    <button onClick={() => setGenre(mainGenre+',9648')}>
                    Mystery 
                    </button>
                </li>
                <li className="genres_list-item">
                    <button onClick={() => setGenre(mainGenre+',10749')}>
                    Romance
                    </button>
                </li>
                <li className="genres_list-item">
                    <button onClick={() => setGenre(mainGenre+',878')}>
                    Science Fiction
                    </button>
                </li>
                <li className="genres_list-item">
                    <button onClick={() => setGenre(mainGenre+',10770')}>
                    TV Movie
                    </button>
                </li>
                <li className="genres_list-item">
                    <button onClick={() => setGenre(mainGenre+',53')}>
                    Thriller 
                    </button>
                </li>
                <li className="genres_list-item">
                    <button onClick={() => setGenre(mainGenre+',10752')}>
                    War 
                    </button>
                </li>
                <li className="genres_list-item">
                    <button onClick={() => setGenre(mainGenre+',37')}>
                    Western 
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default FilterForGenres;