import axios from 'axios';

const url = "https://covid19.mathdro.id/api";
export const fetchData = async (country) => {
    let changableUrl = url;
    if (country) {
        changableUrl = `${url}/countries/${country}`
    }

    try {

        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changableUrl);

        return { confirmed, recovered, deaths, lastUpdate }
    } catch (e) {

    }

}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const dailyStatChartData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))

        return dailyStatChartData
    } catch (e) {

    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name)
    } catch (e) {

    }
}

