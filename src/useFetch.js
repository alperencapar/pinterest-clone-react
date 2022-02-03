import { useState, useEffect } from "react";
import axios from "axios";

// const {data, loading, error, reFetch} = useFetch("https://...")

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetch = (url) => {
        // instead of defining inside of useEffect, defined as a func 
        setLoading(true);
        axios.get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        setLoading(true);
        axios.get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    const reFetch = () =>{
        fetch();
    }

    return { data, loading, error, reFetch };
};

export default useFetch;
