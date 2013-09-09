# For more information see: http://emberjs.com/guides/routing/

#App.Router.map ()->
#  # @resource('posts')

`
App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
`
