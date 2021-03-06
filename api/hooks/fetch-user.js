// api/hooks/fetch-user.js
module.exports = function fetchUserHook(sails) {

    return {
  
      // Add some routes to the app.
      routes: {
  
        // Add these routes _before_ anything defined in `config/routes.js`.
        before: {
  
          // Add a route that will match everything (using skipAssets to...skip assets!)
          '/*': {
            fn: function(req, res, next) {
  
              // Get the user ID  out of the session.
              var userId = req.session.userId;
  
              // If there's no user logged in, just continue.
              if (!userId) { return next(); }
  
              // Look up the user by ID.
              User.findOne({id: userId}).exec(function(err, user) {
                if (err) { return res.serverError(err); }
                if (!user) { return res.serverError(new Error('Could not find user in session!')); }
  
                // Add the user info to the request.
                req.user = user;
  
                // Continue the request.
                return next();
  
              });
            },
            skipAssets: true
          }
  
        }
      }
    };
  };