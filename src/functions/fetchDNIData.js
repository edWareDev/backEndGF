import fetch from "node-fetch";

export async function fetchData(dni) {
    try {
        const options = { method: 'GET' };
        const response = await fetch(`https://dniruc.apisperu.com/api/v1/dni/${dni}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImVtLmVzYy5ldEBnbWFpbC5jb20ifQ.cdU8F_bc2jA_4ayDVmD5K4bKwN8lQ5sZtKXqBIZwwEM`, options);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
}