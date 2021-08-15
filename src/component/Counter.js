import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>You clicked {count} times.</p>
            <button onClick={handleClick}>
                Click
            </button>
        </div>
    );
};

export default Counter;