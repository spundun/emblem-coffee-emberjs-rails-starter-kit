# http://emberjs.com/guides/models/defining-a-store/

EmblemCoffeeEmberjsRailsStarterKit.Store = DS.Store.extend
  revision: 11
  adapter: DS.RESTAdapter.create()

