This is a port of [EmberJS](http://emberjs.com/) starter kit to use indentation based languages([Emblem.js](http://emblemjs.com), [Coffeescript](http://coffeescript.org)) and [Rails](http://rubyonrails.org/) platform.
##How to Use this Code
You can look at the commit history to understand all the steps I took to gereate this starter kit. I have documented all the commands I used in the commit log. I also briefly summarize my edits to the files.

- I start by generating a boilerplate rails app using the `rails new` command.
- Then I add the necessary gems, create an empty controller that will act as an app container.
- Then I add the code from the starter kit and organize it in the right file structure.
- In the end I convert the handlebars templates to emblem templates, and javascript code to coffeescript code.

#About

Indentation based languages use appropriate indentation to establish hierarchy of the code instead of using commas, semicolons and curly braces. Python and YAML are popular examples of such languages.

[Emblemjs](http://emblemjs.com/) is the official indentation based format to write HTML templates for Emberjs. Similarly, [Coffescript](http://coffeescript.org/) is the popular way to write javascripts in indentation based forms. They all make the code look cleaner and more compact.

##Rails
Emberjs is a rich-client web-application framework. This means a lot of the computation is done on the client side, but still we need a server setup to do a few things.
- Deliver the static code (scripts, css, html templates, images... etc)
- Provide a CRUD/REST interface to persist data on the server side. This is needed to store data across client sessions.
- Provide authentication, authorization etc security features. These cannot be implemented on the client side because anyone can modify code on the clientside.

Rails is a good choice to get started with. This is because Emberjs developers are also developing rails gems(libraries) that follow Emberjs developments in lock-step. Also Rails is a fully featured, widely used, actively developed, well documented, community driven web framework.

However Rails conventions mainly focus on serverside MVC framework. Most of it will be unused by us and Emberjs will implement client side code conventions within `app/assets/javascripts/` directory of the rails app. This happens when we run the command `rails generate ember:bootstrap`.

###Gems: Ember/Emblem
Rails gems `ember-rails` and `ember-source` provide javascript libraries like emberjs, jquery, and handlebars. `emblem-rails` is actually server side implementation of the emblem.js feature. It works only on files with .emblem extensions that reside in `app/assets/` . It parses these files (e.g. `index.emblem`) and generates equivalent javascript code to be included in the page through rails [asset-pipeline](http://guides.rubyonrails.org/asset_pipeline.html). This means if you have an `x-emblem` template within an html page (hosted as `app/views/<controller>/page.html.erb`) then it will not be parsed. The embedded x-emblem template can only be parsed by client-side use of `emblem.js`. You might be able to use emblem-source gem to get that(I haven't tried this yet), or you can build emblem.js from source and put it within the `vendor/assets/javascripts/` folder and make it available to `app/assets/javascripts/application.js` file.

It seems that the convention is to use emblem on the server side. This probably improves performance by pre-parsing the emblem templates. This also makes things convenient by having `.emblem` files associated with emblem syntax so we can use syntax highlighter.

###Coffeescript
Rails has great built-in support for coffee script. Any `.js.coffee` file within app/assets/javascript will be automatically parsed and converted to javascript.

`application.js` is an important file and part of the rails convention. We can add `//= require` directives in that file which will include the corresponding javascript into each of the html pages that the rails app serves. You can read more about that in the rails [asset pipeline](http://guides.rubyonrails.org/asset_pipeline.html) page.

###CSS: Todo for you
Rails has great support for using [Sass](http://sass-lang.com/) which has a very neat indentation based syntax. However it's non indented Scss syntax seems more popular. I haven't provided any exampl of converting existing `.css` file to either `.scss` or `.sass` file. I'm certain [you can handle that](http://railscasts.com/episodes/268-sass-basics).
