import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    condition: false
  };
  checkCondition = (options) => {
    if(options.length > 0) {
      this.setState(() => ({ condition: true }));
    } else {
      this.setState(() => ({ condition: false  }));
    };

    console.log(options.length);
  }
  handleDeleteOptions = (e) => {
    this.setState(() => ({ 
      options: [],
      condition: false
     }));

    const form = document.getElementsByTagName("input");
    form[0].value = '';
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
      condition: prevState.options.filter((option) => optionToRemove !== option).length > 0
    }));
  };


  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));

  };
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
      condition: true
    }));

  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
        //this.checkCondition(options);
      }

    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.options.length);
    console.log(this.state.condition);
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    };
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div
        className= { this.state.condition ? "todo-box active" : "todo-box" }
      >
        <Header subtitle={subtitle} />
        <div className="todo-box__content">
          <AddOption
              handleAddOption={this.handleAddOption}
            />
          <Options
            options={this.state.options}
            handleDeleteOption={this.handleDeleteOption}
          />
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
          />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
            handleDeleteOptions={this.handleDeleteOptions}
          />
        </div>
      </div>
    );
  }
}
