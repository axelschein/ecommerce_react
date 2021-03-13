import React from "react";
import Card from "../../components/Card/Card";
import "./listContainer.css";

const ListContainer = () => {
    return ( 
        <div className="wrap">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export default ListContainer;