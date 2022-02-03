import React, { useState } from "react";

const Input = ({ type, placeholder }) => {
const [value, setValue] = useState("")
    return (
        <>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
            ></input>
        </>
    );
};

export default Input;
