import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-6xl h-full m-auto md:px-0 px-9 sm:px-0'>
           {children}  
        </div>
    );
}

export default Container;
