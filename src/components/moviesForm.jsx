import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import { getMovie, saveMovie} from '../services/fakeMovieService';
import {getGenres} from '../services/fakeGenreService';

class MoviesForm extends Form{

    state={
        data:{ title:"", genreId:"",  numberInStock:"", dailyRentalRate:"" },
        genres:[],
        errors:{}
    }

    schema = {
        _id: Joi.string(),
        title: Joi.string().required().label("Title"),
        genreId: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().required().min(0).max(100).label("Number In Stock"),
        dailyRentalRate: Joi.number().required().min(0).max(100).label("Daily Rental Rate")
    };

    componentDidMount(){
        const genres = getGenres();
        this.setState({genres});

        const movieId = this.props.match.params.id;
        if(movieId === "new") return;
 
        const movie = getMovie(movieId);
        if(!movie) return this.props.history.replace("/Not-found")

        this.setState({data: this.mapToViewModel(movie)})
    };

    mapToViewModel(movie){
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        };
    };


    doSubmit =()=> {
        saveMovie(this.state.data);

        this.props.history.push("/movies")
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        {this.renderInput("title","Title")}
                    </div>
                    <div className="col-6">
                         {this.renderSelect("genreId", "Genre", this.state.genres)}
                    </div>
                    <div className="col-6">
                        {this.renderInput("numberInStock", "Number In Stock", "number")}
                    </div>
                    <div className="col-6">
                         {this.renderInput("dailyRentalRate", "Rate", "number")}  
                    </div>
                    <div className="col-3">
                    {this.renderButton("Save", "primary")}
                    </div>
                </div>
            </form>
            );
        };
    };
    
    export default MoviesForm;

//     const MoviesForm = ({match, history}) => {
        
//         return (
//             <div>
//             <h1>Movies  {this.match.params.id} </h1>


//             <button className="btn btn-primary" onClick={() => history.push('/movies')}>Save</button>
//         </div>
//     );
// };
