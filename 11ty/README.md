# 11ty Score Card

## Disclaimer
There may be instances here that with my current experience I overlooked or did not handle the way the creators of the framework would reccommend. I do not know what I do not know, so if anyone is aware of better ways to handle anything that i've overlooked, let me know :)

## Quick Summary
`11ty` is less of a framework and more of a generator. In this case that means a lot of it is manual - this has the potential for more bugs as we'd have to code almost everything, but it does still take care of a lot of tempalting and `SSG` capabilities for us.

That being said, because it's so open to how we want to do it, a lot of things are intuitive and the things that end up being difficult are areas that make sense to be difficult. In this framework you won't be wondering why something is making you do so much for so little. 

On a completely arbitrary scale this is a 6/10

## Introduction
The following score-card was created to give insight into how 11ty would function if chosen for our new front-end framework. The following implementation was done with the latest version of `11ty` and `JS`. The styling library that was chosen was `Tailwind-css`.

`JS` was chosen because currently `11ty` does not ship with `typescript`.
`Tailwind-css` was chosen because of it's average-to-high package size and it being easy to replicate amongst the different frameworks without `TSX` component specific coding. 

To test the following examples, the functionality that was replicated from the original site were:
- Blog posts (pagination, slugging, etc)
- Wordpress Requests (our team members and the images)
- General Pages and Designs for size comparisons

## Statistics
To make sure all of the frameworks had the same factors, the following were recorded from their netlify deploys. https://transcendent-melomakarona-a5554a.netlify.app/ 

### Specific Performance Report
https://gtmetrix.com/reports/transcendent-melomakarona-a5554a.netlify.app/oOZka90x/

### Network 
- Index: Finish 390 ms, DOMContentLoaded: 387 ms, Load 395 ms. 
- Blog: Finish 160 ms, DOMContentLoaded 395 ms, Load 401 ms. 
- Our Team: Finish 445 ms DOMContentLoaded 420 ms, Load: 445 ms.

### Size 
- Index: 9 requests, 454 kB transferred, 1.2 MB resources.
- Blog: 7 requests, 454 kB transferred, 1.2 MB resources.
- Our Team: 11 requests, 454 kB transferred, 1.2 MB resources.

## The Developer Experience

### Learning Curve
If a developer is already familiar with html, js, and any templating language, going into 11ty will build off of that. That being said, before even getting to the coding point, 11ty requires structural setup. Out of all the framemworks, it's learning curve is probably the highest.

### Setup
`11ty` is a quite literally a static site generator - as in, of itself, it is not a framework. based on the config you supply, it takes your files and creates your static site. This opens you up to any kind of customizations you want, but with each of those customizations also opens you up to things going wrong in those areas. 

The documentation surrounding `11ty` is well done, so even though this is a daunting task, it is still doable. Although, for someone who is used to getting started with just coding, the setup may be an unfavorable task (really for anyone).

### Collaborative
This generator would require an agreed upon structure for individuals to work upon. Once that's been decided then collaboration should be more than doable - but may get into icky states based on the site generation. 

### Testing
Because `11ty` generates a static site, anything that works on that can work here as well. The documentation here is not great, but still doable if you've done it before.  

### Accessibility
Since `11ty` uses at most templating languages with already existing html syntax, the accessibility score here is based off of the developer coding it - the generator would not be in consideration here. 

The only thing to keep note of is to verify the behavior in the site generation - and this should be fine as long as your config is fine. 

### Assets
The setup for `11ty` is very very manual. When including anything in this generator, you have to tell it to keep track of it otherwise it will not care. This isn't the best situation to be if we have assets we want to keep in the repo versus calling it externally. 

### Deployment to Netlify
You may see variability in errors in netlify versus in your local 11ty setup. Although debugging this in my case was not terrible, this has the potential to not be a great state to be in.

### Other Notes
The implementation first started with npm's `tailwind-css` package, but it soon became an issue where if you have multiple api calls to data, the css will just... stop... working. In this case the npm install was replaced with the cdn link instead. 

The above is just one consideration to keep in mind if choosing this generator. You may think your config is doing what it should, but it can still get you in really icky terrible to debug generation states.

That being said, even this provided pagination and other templating features out of the box unlike `NextJS`... and this gives you nothing.

## The Audience Experience

### Accessibility
Dependent on the developer and the site generation. 

### Site Updates
Any update done to the repository gets applied to the netlify deploy - do have to be wary of the cache in certain instances, but the fix is to just delete and reupload. 

### Other Notes
None 