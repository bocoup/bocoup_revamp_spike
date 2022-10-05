# NextJS Score Card

## Disclaimer
There may be instances here that with my current experience I overlooked or did not handle the way the creators of the framework would reccommend. I do not know what I do not know, so if anyone is aware of better ways to handle anything that i've overlooked, let me know :)

## Quick Summary
In `NextJS`'s efforts to simplify certain things, it has successfully overcomplicated other things. With it's helpful overhead, certain simple tasks become daunting, and the simplifiation of other things almost feels less helpful. 

In creating certain custom components like the `Link` and `Image` components, it has opened up developers to certain accessibility functionality mishaps that are already handled by the html itself. This ends up introducing custom variability in the end result based on the developer, and therefore variability in how screen-readers may navigate the site. 

That being said, in terms of being a multi-page framework for react, it successfully achieves that. But everything that comes with react, comes with this, and more. 

On a completely arbitrary scale this is a 3/30. 

## Introduction
The following score-card was created to give insight into how NextJS would function if chosen for our new front-end framework. The following implementation was done with the latest version of `NextJS` and `Typescript`. The styling library that was chosen was `Tailwind-css`.

`Typescript` was chosen because of it's strict syntax capabilities unavailable to vanilla js.
`Tailwind-css` was chosen because of it's average-to-high package size and it being easy to replicate amongst the different frameworks without `TSX` component specific coding. 

To test the following examples, the functionality that was replicated from the original site were:
- Blog posts (pagination, slugging, etc)
- Wordpress Requests (our team members and the images)
- General Pages and Designs for size comparisons

## Statistics
To make sure all of the frameworks had the same factors, the following were recorded from their netlify deploys. https://fantastic-concha-0db0f3.netlify.app/

### Network 
- Index: Finish 413 ms, DOMContentLoaded: 260 ms, Load 265 ms.  
- Blog: Finish 797 ms, DOMContentLoaded 641 ms, Load 641 ms. 
- Our Team: Finish 846 ms DOMContentLoaded 598 ms, Load: 598 ms.

### Size 
- Index: 27 requests, 455 kB transferred, 858 kB resources.
- Blog: 23 requests, 470 kB transferred, 945 kB resources.
- Our Team: 31 requests, 563 kB transferred, 900 kB resources.

## The Developer Experience

### Learning Curve
If a developer is already familiar with the fundamentals of node and react, then learning NextJS is simply understanding how it's routing, custom files, and specific components function. 

Although that in and of itself does not sound like a steep learning curve, there is a lot to uncover and a lot that is still currently being developed on. 

You will find certain things working for non-typescript functions that need some cusomtization for their typescript equivalent. Although this is known for most frameworks that allow variations in syntax, NextJS does not have a the best documentation in outlining the differences. 

### Setup
The setup of `NextJS` is a singular command, so it is not a from scratch framework. You will have certain directories created for you, but you still have the flexibiity of creating other ones to your liking. For example, the pages directory ships with it to handle routing, but the components directory can be created by you anywhere. 

Adding in `Tailwind-css` was also as simple as following their documentation. 

Even though `NextJS` comes shipped with most of the things you'll need done for you, creating any customization on it comes with custom files. For example, to manage anything related to the header of your html files, you'll have to create a `_document.js` file that you have to specify with what you'd like. There are many other options like this, but all of them are known to come with the disclaimer of certain things may not work as expected if you do this. 

To code for something simple like changing the title of all of your html pages becomes more cumbersome with this process. Even though this framework's main selling point is it's routing capability - they are not accessible, nor easily intuitive past what they've set up for you. For example if you would like any specifications on SSG or SSR routing, it's not hard, but not nice either (and may or may not work how you expect it to).  

### Collaborative
Because of the framework's struture, it supplies a clear pattern to follow. The components and pages themselves would have to be strucutred by the developers themselves, but once a pattern exists it should be easily understandable

### Testing
Because `NextJS` is a react based JS framework, anything that works for that works here as well. They even have documentation on how to go about different frameworks.  

### Accessibility
Since `NextJS` created itself upon a multipage routing framework, they have created their own components for this functionality. These components themselves do not always align with their html counterparts and do not have the same behavior in some cases. In this case, developers would have to code for certain scenarios that were already handled by existing html attributes. 

Also important to note the other complaints about accessibility and dynamic components still applies here as well - as it does with react in general. 

### Assets
When it comes to assets, you can call them in externally and/or you can store them within the framework's `public` directory and `NextJS` takes care of all of the building and handling. This process is not a manual set up. 

Styling can be done globally, through existing component/react frameworks, or through the framework's `[component_name].module.css` system. This system was made to make the styling easier and more component organized, but ends up being messy and not as sleek as they'd expected. 

### Deployment to Netlify
One of the things that became apparent when deploying the static site to netlify, was that the styling in a static `NextJS` site has the potential to not look like how it does in the `SSR` version. This would require extra debugging and setup from the developer themselves to figure out - in relation to whatever style library/system they're using. This did not seem like an issue with netlify, but rather with the framework's generation of the site itself.

### Other Notes
The expectation from a framework that decides to automate a lot of things for you, is that certain things would be handled. One of the things that `NextJS` does not handle in it's routing is pagination. This has to be coded by the developers themselves - unlike other `SSG`'s. This is not a hard fix, but adds more overhead and room for bugs in the process.

This was ironic as the creators of `NextJS` came up with a pagination system, that is currently being used in astro automatically... but has to be coded for `NextJS`

## The Audience Experience

### Accessibility
Because of the framework's reliance on it's own custom components, the experience here may not be as expected for screen-reader users. In most cases, since they'd have to be customized per developer. Since the variance in things like `Link` components becomes large, the accessibility experience here is not the best. 

### Load Testing


### Site Updates
Any update done to the repository gets applied to the netlify deploy - do have to be wary of the cache in certain instances, but the fix is to just delete and reupload. 

### Other Notes
Variability in site build styling and developer local styling could open up the audience to situations that developer's may not have accounted for - as well as weirdness with the cache. 