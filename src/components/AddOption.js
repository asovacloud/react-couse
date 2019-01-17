import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption} className="add-option">
          <input type="text" name="option" />
        </form>
        {this.state.error && <div className="error-message">{this.state.error}</div>}
      </div>
    );
  }
}
