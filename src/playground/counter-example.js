class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0,
            name: 'Julia'
        };
    }
    
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: --prevState.count
            };
        });
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: ++prevState.count
            };
        });
    }
    handleReset(e) {
        e.preventDefault();
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return(
            <div>
                {this.state.name}
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleMinusOne.bind(this)}>-1</button>
                <button onClick={this.handleAddOne.bind(this)}>+1</button>
                <button onClick={this.handleReset.bind(this)}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));