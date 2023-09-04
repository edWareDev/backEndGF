// import fetch from "node-fetch";

export async function fetchData(dni) {
    try {
        const options = { method: 'GET' };
        const response = await fetch(`https://dniruc.apisperu.com/api/v1/dni/${dni}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImN1ZW50YTBkb3RhMDFAZ21haWwuY29tIn0.MsCEc12bA-T3sDPaNK1d18OEGFfKP0MYY-dts_enw7k`, options);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
}