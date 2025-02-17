import { useEffect, useState } from "react";

const useFetchData = (url, opt = {}) => {
    const [response, setresponse] = useState(null)
    const [error, setError] = useState(false)
    const [options, setOptions] = useState(opt)
    const d = async () => {
        try {
            let response = await fetch(url, options)
            let res = await response.json();
            if (!res.success) {
                throw new Error(res.message);

            }
            setresponse(res)
            if (error) {
                setError(false)
            }
        }
        catch (e) {
            setError(e)
        }
    }
    useEffect(() => {
        if (Object.keys(options).length > 0) {
            d()
        }
    }, [options])
    return { response, error, setOptions }
}
export default useFetchData;