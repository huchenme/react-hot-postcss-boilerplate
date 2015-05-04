var React = require("react");

require("css/components/test");
require("suitcss-utils-layout");

var Test = React.createClass({
  render: function() {
    return (
      <div>
        <div className="tl-Test u-cf">
          Test
        </div>
      </div>
    );
  }
});

module.exports = Test;