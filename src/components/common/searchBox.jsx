import React from 'react';

const SearchBox = ({value, onChange}) => {
    return(
      
 
  <form action="">
      <div className="input-group">
      <input 
        type="text"
        name="query"
        className="form-control"
        placeholder="search..." 
        value={value}
        onChange={e=> onChange(e.currentTarget.value)}        
        />
      <div className="input-group-btn">
        <button disabled className="btn btn-primary" style={{cursor:"pointer"}} to= ""type="submit">
            <i className="fa fa-search"></i>
        </button>
      </div>
      </div>
  </form>
    );   
};

export default SearchBox;