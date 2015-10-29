//overwriting the default-conf to prevent safari from running (no safari 9.0-driver available at the moment)
module.exports = {
  plugins: {
    local: {
      browsers: ['firefox'],
    },
    /* To use this, you have to specify SAUCE_USERNAME and SAUCE_ACCESS_KEY, e.g.
    export SAUCE_USERNAME=abc123
    export SAUCE_ACCESS_KEY=52345s3-5d32345-234-d5-5345f34
    */
    sauce: {
      browsers: ['Windows 7/internet explorer']
    }
  },
};
