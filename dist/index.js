// Generated by CoffeeScript undefined
var React, isRetina, md5, querystring;

React = require('react');

md5 = require('md5');

querystring = require('querystring');

isRetina = function() {
  var mediaQuery;
  if (typeof window !== "undefined" && window !== null) {
    mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
    if (window.devicePixelRatio > 1) {
      return true;
    }
    if (window.matchMedia && window.matchMedia(mediaQuery).matches) {
      return true;
    }
  }
  return false;
};

module.exports = React.createClass({
  displayName: 'Gravatar',
  propTypes: {
    size: React.PropTypes.number.isRequired,
    rating: React.PropTypes.string.isRequired,
    https: React.PropTypes.bool.isRequired,
    "default": React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired
  },
  getDefaultProps: function() {
    return {
      size: 50,
      rating: 'g',
      https: false,
      "default": "retro"
    };
  },
  render: function() {
    var base, query, src;
    base = this.props.https ? "https://secure.gravatar.com/avatar/" : 'http://www.gravatar.com/avatar/';
    query = querystring.stringify({
      s: isRetina() ? this.props.size * 2 : this.props.size,
      r: this.props.rating,
      d: this.props["default"]
    });
    src = base + md5.digest_s(this.props.email) + "?" + query;
    return React.DOM.img({
      "className": "react-gravatar",
      "src": src,
      "alt": this.props.email,
      "height": this.props.size,
      "width": this.props.size
    });
  }
});