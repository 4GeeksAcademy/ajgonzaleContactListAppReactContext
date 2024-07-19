import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import image from "../../img/m101.jpg";

export const CardContact = ({index, contact}) => {
	
    const { store, actions } = useContext(Context);

	return (
        <div>
            <div className="card mb-3">
                <div className="row g-0 cardAligment">
                    <div className="col-md-3">
                        <img src={image} className="contactImage rounded-circle" />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body text-start">
                            <h5 className="card-title">{contact.name} {contact.id}</h5>
                            <p className="card-text">{contact.address}</p>
                            <p className="card-text">{contact.phone}</p>
                            <p className="card-text">{contact.email}</p>
                        </div>
                    </div>
                    <div className="col-md-1">                          
                        <Link to={"/contact/" + index}>
                            <i className="fas fa-pencil-alt"></i>
                        </Link>
                    </div>
                    <div className="col-md-1">  
                        <i className="fas fa-trash-alt" data-bs-toggle="modal" data-bs-target="#confirmModal" onClick={e => {actions.dataToModal(index)}} ></i>
                    </div>
                </div>
            </div>
      </div>
	);
};