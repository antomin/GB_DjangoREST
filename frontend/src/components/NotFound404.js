import React from "react";
import {Link} from "react-router-dom";

const NotFound404 = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template text-center">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details">
                            Извините, произошла ошибка! Запрашиваемая страница не найдена!
                        </div>
                        <div className="error-actions mt-2">
                            <Link to="/" className="btn btn-primary btn-lg">Домой</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound404;
