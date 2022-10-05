const url = "https://jsonplaceholder.typicode.com/posts";

module.exports = async () => {
    return await fetch(url).then(response => response.json())
}
