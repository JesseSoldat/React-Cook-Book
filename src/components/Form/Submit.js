// import React, {PropTypes} from 'react';

// const Submit = React.createClass({
// 	propTypes: {
// 		onSubmit: PropTypes.func,
// 		isValid: PropTypes.bool,
// 		submitText: PropTypes.string
// 	},

// 	getDefaultProps() {
// 		return {
// 			value: 'Submit',
// 			isValid: true
// 		};
// 	},

// 	render: function() {
// 		return (
// 			<input type='submit'
// 						value={this.props.submitText}
// 						disabled={!this.props.isValid}
// 						 />
// 		);
// 	}
// });

// export default Submit;

import React, { PropTypes } from 'react'

const Submit = React.createClass({
  propTypes: {
    submitText: PropTypes.string,
    onSubmit: PropTypes.func,
    isValid: PropTypes.bool
  },
  getDefaultProps: function() {
    return {
      value: 'Submit',
      isValid: true
    }
  },
  render: function() {
    return (
      <input type='submit'
             onClick={this.props.onSubmit}
             value={this.props.submitText}
             disabled={!this.props.isValid} />
    )
  }
})

export default Submit
