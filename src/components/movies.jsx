import React, { Component } from "react";
import Pagination from "./common/pagination";
import { Paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import SearchBox from "./common/searchBox";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    selectGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies, currentPage: 1 });
  };

  handleLiked = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSelectGenre = (genre) => {
    this.setState({ selectGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectGenre: "", currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      selectGenre,
      movies: allMovies,
      sortColumn,
      searchQuery,
    } = this.state;

    let filtter = allMovies;
    if (searchQuery)
      filtter = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectGenre && selectGenre._id)
      filtter = allMovies.filter((m) => m.genre._id === selectGenre._id);

    const sorted = _.orderBy(filtter, [sortColumn.path], [sortColumn.order]);
    const movies = Paginate(sorted, currentPage, pageSize);
    return { filtterlength: filtter.length, movies };
  };

  render() {
    const {
      pageSize,
      genres,
      currentPage,
      selectGenre,
      sortColumn,
      searchQuery,
    } = this.state;

    const count = this.state.movies.length;

    const { filtterlength, movies } = this.getPageData();

    return (
      <React.Fragment>
        <div className="row">
          {/* //this Component is a listGroup of genre to filter the Movies table */}
          <div className="col-3 mt-5">
            <ListGroup
              Items={genres}
              textProperty="name"
              valueProperty="_id"
              onItemSelect={this.handleSelectGenre}
              selectGenre={selectGenre}
            />
          </div>

          <div className="col-9">
            {/* //this Component is a button of new movie */}
            <Link to="/movies/new" className="btn btn-primary mb-3">
              New Movie
            </Link>
            <div className="row">
              <div className="col-9">
                {/* // this statement is acounting or length of data onto table of movies */}
                {count > 0 ? (
                  <h5 className="boder">
                    Show {filtterlength} Movies in database
                  </h5>
                ) : (
                  <h5>There are no Movies in Database</h5>
                )}
              </div>

              <div className="col-3">
                {/* //this Component is a SearchBox of Movies of the table */}
                <SearchBox value={searchQuery} onChange={this.handleSearch} />
              </div>
            </div>

            {/* //this Component is a table of movies */}
            <MoviesTable
              movies={movies}
              onDelete={this.handleDelete}
              onLike={this.handleLiked}
              currentPage={currentPage}
              pageSize={pageSize}
              onSort={this.handleSort}
              sortColumn={sortColumn}
              searchQuery={searchQuery}
            />

            {/* //this Component is a pagination of movies table */}
            <Pagination
              itemCount={filtterlength}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
