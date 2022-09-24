import React, { useState } from 'react';
import '../styles/square.scss';


const Square = () => {
    
    const [isRandomColor, setIsRandomColor] = useState(false);
    const [randomColor, setRandomColor] = useState(null);
    
    const defaultColor = {
        backgroundColor: 'black'
    }

    const activeRandomColor = () => {
        setRandomColor(generateRandomColor);
        setIsRandomColor(true);
    }

    const disableRandomColor = () => {
        setIsRandomColor(false);
    }

    const generateRandomColor = () => {
        let red = getRandomNumberBetween(0, 255);
        let green = getRandomNumberBetween(0, 255);
        let blue = getRandomNumberBetween(0, 255);
        return {
            backgroundColor: `rgb(${red},${green},${blue})`
        }
    }

    const getRandomNumberBetween = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <div>

            <div
                className='square'
                style={ isRandomColor ? randomColor : defaultColor }
                onMouseEnter={activeRandomColor}
                onMouseLeave={disableRandomColor}
                onDoubleClick={disableRandomColor}
            >
                
            </div>

        </div>
    );
}

export default Square;
