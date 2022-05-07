import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Searchbox() {
    let navigate = useNavigate();
    const [symbol, setSymbol] = useState("");
  
    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        navigate(`/stocks/${symbol}`);
        window.location.reload(false);
    };
  
    return (
        <div className="search-input">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="search symbol"
                    value={symbol}
                    onChange={e => setSymbol(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};