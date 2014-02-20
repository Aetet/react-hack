/** @jsx React.DOM */

var React = require('react');
var Index = React.createClass({
  render: function () {
    return <div>Hello, Hack</div>;
  }
});
React.renderComponent(
    <Index /> , document.querySelector('.app'));