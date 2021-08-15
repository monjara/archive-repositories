import React, {useState, useEffect} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });

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