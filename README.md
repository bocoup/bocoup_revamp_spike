# Bocoup Revamp Spike

## Introduction
This repo provides insight into different potential heads for a headless cms. These frontends can come as static site generators, server side renderers, or a site builder from the headless cms itself. 

## The Frontends

### 11ty
A static site generator that you configure with it's config file, and then code however you would like. https://www.11ty.dev/ 

### Astro
A framework that's created an ecosystem that can function with anything. Essentially you can have react compoenents, svelte components, Vue components, vanilla html and js - all in the same project without any issue or complications. It has it's own templating language that can be used within `.astro` files. https://astro.build/ 

### NextJS
A framework that was created to handle complicated react configs for you. An `SSR` or `SSG` multi-page framework for `React`. https://nextjs.org/ 

### Wordpress
A website builder that can be utilized to just be a headless cms or also be a website host. Comes with it's own built in plugins, themes, and editors created for you. https://wordpress.com/ 

## Concluding Remarks
Regardless of what frontend is chosen, it's imperative that an editor system is in place as well. In this regard, any existing editor systems like wordpress have already done the work of that implementation. 

That being said, the security and plugin management of wordpress are points of concern. As well as, its ease in overhead coming with the caveat of difficulty in customizations.  

The other frameworks mentioned above do not come with editor systems already built in, but do have packages/plugins that can be used to create an editor system for them as well. The chosen frameworks are based around javascript and html foundations and are on a spectrum of overhead. `11ty` provides no overhead, and is a completely manually customized process through configs. `NextJS` provides routing and multi-page functionality for react projects, but comes with its own issues on top of reacts existing issues. `Astro` provides an overhead for site generation and everything else is completely customizeable, but it is still on it's first official release. 

It should be noted that all the frameworks listed here can still implement a wordpress-esque editor with packages like the following one: https://www.npmjs.com/package/@wordpress/block-editor 

Based upon the scorecards in the respective folders themselves, the final rankings come out to:

1. Astro (with the caveat of us having to build in an editor system)
2. Wordpress (for its editor system)
3. 11ty & NextJS (they both balanced out each others cons, but respectively were still not great)


