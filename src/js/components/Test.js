var React = require("react");

require("css/components/test");

var Test = React.createClass({
  render: function() {
    return (
      <div>
        <div className="tl-Test">
          Test
        </div>
      </div>
    );
  }
});

module.exports = Test;