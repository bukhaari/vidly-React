import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Like from './common/Like';
import Table from './common/table'


class MoviesTable extends Component {
    
   Columns =[
       {path:"title", label:"Title", content: m => <Link to={`/movies/${m._id}`} >{m.title}</Link>},
       {path:"genre.name", label:"Genre"},
       {path:"numberInStock", label:"Stock"},
       {path:"dailyRentalRate", label:"Rate"},
       {key:"LIke", content: movie=>  <td><Like Liked={movie.liked} onClick={() => this.props.onLike(movie)} /></td> },
       {key:"Delete", content: movie=>  <td><button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td> }
   ]

    render(){
        const {movies, onSort, sortColumn} = this.props;
        return (
            <div>
                <Table data={movies} onSort={onSort} sortColumn={sortColumn} Columns={this.Columns}  />
                
                 {movies.length === 0 && <div> <h4 className="text-center">
                      <i className="fa fa-search fa-lg"></i></h4>  
                      <i className="fa fa-laugh"></i>
                      <h4 className="text-muted text-center"> Sory, This Movie is not in Database </h4>
                 </div> }
            </div>

        );
    }
}




export default MoviesTable;