import React from 'react';

const NotFound = () => {
    return (
        <div>
             <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading text-center">404 Error!</h4>
                <p className='text-center'>Path Not Found</p>
            </div>
        </div>
    );
};

export default NotFound;