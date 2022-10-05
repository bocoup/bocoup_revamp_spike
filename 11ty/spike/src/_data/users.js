require('dotenv').config()
const fetch = require('node-fetch');
const url = "https://dev.bocoup.com/wp-json/wp/v2/users";


module.exports = async () => {
    const username = process.env.BASIC_AUTH_USERNAME;
    const password = process.env.BASIC_AUTH_PASSWORD;

    if(username != null && password != null) {
        return await fetch(url, {
            headers: new Headers({
                Authorization: `Basic ${Buffer.from(username + ":" + password).toString('base64')}`,
              })    // we’ll parse JSON for you
        }).then(response => response.json());
    }
    else {
        return await fetch(url).then(response => response.json());
    }

    
}
