if (Meteor.isClient) {
  Meteor.startup( function() {
      Reveal.initialize();
    });
  Template.hello.greeting = function () {
    return "Welcome to reveal-test.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
