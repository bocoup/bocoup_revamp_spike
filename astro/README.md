# Bocoup Clone

Within the `spike` folder you'll find a incomplete functional clone of the Bocoup website.

This was created using the Astro framework and TailwindCSS.

Currently the blogs are using jsonplaceholder apis, but the users are using the wordpress urls.

To see differences in authorized and unauthorized wordpress requests:

1. Start the repo locally as is and navigate to the "Our Team" page. You should only see public users
2. Stop the local server, create a `.env` file in the `spike` repository that matches the following: 

```
BASIC_AUTH_USERNAME="YOUR_USER@bocoup.com"
BASIC_AUTH_PASSWORD="YOUR_PASSWORD"
```
3. Rerun the local server, and navigate to the "Our Team" page. You should now see everyone.
