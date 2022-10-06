# Astro Score Card

## Disclaimer
There may be instances here that with my current experience I overlooked or did not handle the way the creators of the framework would reccommend. I do not know what I do not know, so if anyone is aware of better ways to handle anything that i've overlooked, let me know :)

## Quick Summary
My bias is definitely here, but it should be noted that going into this I was expecting NextJS to come on top.

This is a 10/10

## Introduction
The following score-card was created to give insight into how Astro would function if chosen for our new front-end framework. The following implementation was done with the latest version of `Astro`. The styling library that was chosen was `Tailwind-css`.

`Tailwind-css` was chosen because of it's average-to-high package size and it being easy to replicate amongst the different frameworks without `TSX` component specific coding. 

To test the following examples, the functionality that was replicated from the original site were:
- Blog posts (pagination, slugging, etc)
- Wordpress Requests (our team members and the images)
- General Pages and Designs for size comparisons

## Statistics
To make sure all of the frameworks had the same factors, the following were recorded from their netlify deploys. https://papaya-croissant-97011e.netlify.app/

### Specific Performance Report
https://gtmetrix.com/reports/papaya-croissant-97011e.netlify.app/ZbSSMV4c/

### Network 
- Index: Finish 225 ms, DOMContentLoaded: 116 ms, Load 161 ms.  
- Blog: Finish 253 ms, DOMContentLoaded 107 ms, Load 162 ms. 
- Our Team: Finish 293 ms DOMContentLoaded 145 ms, Load: 233 ms.

### Size 
- Index: 9 requests, 454 kB transferred, 503 kB resources.
- Blog: 5 requests, 454 kB transferred, 493 kB resources.
- Our Team: 10 requests, 454 kB transferred, 519 kB resources.

## The Developer Experience

### Learning Curve
Although the addition of the `.astro` file can seem daunting at first, it's actually just componenet based html. 

The documentation is also really well done, to where things get really intuitive after a certain point. This is a batteries included framework, but the batteries also allow you to customize them how ever you'd like - of you'd like. Essentially this framework takes the good of `NextJS` and the good of `11ty` and optimizes on the bad. 

### Setup
The setup of `Astro` is a single command through `npx`. And they already have an official built in integration with `tailwind-css` so that was also a single command. Even though it is on it's first release, the release was released with a whole ecosystem in mind. That being said because the system is also typescript based, any other non official integrations can be `import {} from ..` in as well. 

### Collaborative
Because of the framework's struture, it supplies a clear pattern to follow. The components and pages themselves would have to be strucutred by the developers themselves, but once a pattern exists it should be easily understandable

### Testing
No official testing integrations exist yet for `Astro`, but frameworks like `selenium` and `cypress` and other frameworks like those can still be used. They are currently working on the testing integrations.  

### Accessibility
Depending on what file types you end up using here, for example if you add in any react you'd have to develop with the cons of react in mind and code for those - but unlike `NextJS` it does not force on you it's own custom components. The `.astro` files are all `html` based so the accessibility implications there are on the developer developing it. `Astro` itself also has it's own accessible components integrations: https://components.accessible-astro.dev/ to build off of into an accessible user flow for own project.

### Assets
When it comes to assets, you can call them in externally and/or you can store them within the framework's `public` directory and `Astro` takes care of all of the building and handling. This process is not a manual set up. 

### Deployment to Netlify
Since they have an existing netlify integration, this was just a matter of applying that with the `.netlfiy.toml` file.

### Other Notes
This framework took everything that were complaints from other site generators and found intuitive ways to expand upon them as well as creating their own ecosystem. It is important to note that the framework itself is still on its first version so things can be subject to change, but it is also important to note that its first version is ahead of certain frameworks current version.

## The Audience Experience

### Accessibility
Dependent on how the developer developed it. 

### Site Updates
Any update done to the repository gets applied to the netlify deploy. 

### Other Notes
None