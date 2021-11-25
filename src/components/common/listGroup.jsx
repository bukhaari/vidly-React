import React from 'react';

const ListGroup = (props) => {
    
    const {Items,onItemSelect,textProperty, valueProperty,selectGenre } = props;
    return <ul  className="list-group shadow">
     {Items.map(item => 
         <li 
         key={item[valueProperty]} 
         style={{cursor:'pointer'}} 
         onClick={()=> onItemSelect(item)} 
         className = {selectGenre === item?  
         "list-group-item active": "list-group-item " }>{item[textProperty]}
         </li>
      )}
   </ul>
} 

ListGroup.defaultPrps ={
textProperty: "name",
valueProperty: "_id"
};

export default ListGroup;