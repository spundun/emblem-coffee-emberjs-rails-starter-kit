# For more information see: http://emberjs.com/guides/routing/

App.Router.map ->
  # put your routes here
  # @resource('posts')

App.IndexRoute = Ember.Route.extend
  model: -> ['red', 'yellow', 'blue']
