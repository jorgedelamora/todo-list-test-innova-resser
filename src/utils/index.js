export const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const fetchedData = await res.json();
    return fetchedData;
}

export const generateUniqueId = () => Math.round(Math.random() * 10000);