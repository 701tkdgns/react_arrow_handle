import React, { useEffect, useRef } from 'react'

const App = () => {
    const txtContent = useRef();
    const handleKey = async (e) => {
        if (e.key === "ArrowRight"){
            // let txt = document.getElementsByClassName('txt').;
            // console.log(txt);
            txtContent.current.textContent = 'R';
            console.log('right');
        } else if (e.key === "ArrowUp"){
            txtContent.current.textContent = 'U';
            console.log('up')
        } else if (e.key === "ArrowLeft"){
            txtContent.current.textContent = 'L';
            console.log('left')
        } else if (e.key === "ArrowDown"){
            txtContent.current.textContent = 'D';
            console.log('down')
        } else{
            return;
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKey);

        return () => {
            window.removeEventListener("keydown", handleKey);
        }
    }, []);

    return (
        <div>
            <h1>Test</h1>
            <div>
                <p>In other word... <span className='txt' ref={txtContent}></span></p>
            </div>
        </div>
    )
}

export default App