const url = "https://jsonplaceholder.typicode.com/posts";

module.exports = async () => {
    const response = await fetch(url);
    const posts = await response.json();

    return posts;
}
