import React, { useEffect, useRef } from 'react'

const App = () => {

    // useRef : 리액트는 js DOM 직접 접근을 지양
    // js dom element에 접근이 필요할 시 useRef 훅을 이용하여
    // 값들을 저장해놨다가 사용 가능
    // 렌더링시에도 초기화되지 않는 특성

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