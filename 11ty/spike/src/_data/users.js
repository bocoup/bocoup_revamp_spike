const url = "https://dev.bocoup.com/wp-json/wp/v2/users";

module.exports = async () => {
    const response = await fetch(url);
    const users = await response.json();

    return users;
}
