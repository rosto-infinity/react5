import React from 'react';

const Button = ({color, theme, children, className}) => {
    let background

    switch (color) {
      case 'secondary': background = "bg-secondary hover:bg-secondary-hover"
        break
      case 'danger': background = "bg-red-primary hover:bg-red-primary-hover"
        break
      default : background = "bg-primary hover:bg-primary-hover"
    }
    
    switch (theme) {
      case 'small' :
        return (
          <div>
            <button className={`${className} ${background} px-4 py-2 uppercase shadow-xl text-white-rosto text-xs font-medium animate rounded`}>
              {children}
            </button>
          </div>
        )
      case 'big' : 
        return (
          <div>
            <button className={`${className} ${background} px-4 py-4 md:px-8 md:py-4 uppercase shadow-xl text-white-rosto text-sm md:text-base font-medium animate rounded`}>
              {children}
            </button>
          </div>
        )
      default: 
        return (
          <div>
            <button className={`${className} ${background} px-4 py-3 uppercase shadow-xl text-white-rosto text-xs md:text-sm font-medium animate rounded`}>
              {children}
            </button>
          </div>
        )
    } 
}
export default Button;
