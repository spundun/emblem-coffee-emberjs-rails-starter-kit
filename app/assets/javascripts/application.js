// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require emblem_coffee_rails_starter_kit
//= require app

// for more details see: http://emberjs.com/guides/application/
App = Ember.Application.create();

// Spundun:
// `rails g ember:bootstrap` bumped the following require_tree command below a line of javascript.
// This means that require_tree here is not going to work because it's after a javascript line
// But that's ok because we don't need it.
// If you wish to use it then paste it right below the other require statements
//= require_tree .
