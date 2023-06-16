import axios from "axios";
import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const axiosRates = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=pln");

                const { rates, date } = response.data;

                setRatesData({
                    state: "success",
                    rates,
                    date,
                })
            } catch {
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(axiosRates, 1000);
    }, []);

    return ratesData;
};