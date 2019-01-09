
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: true
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility,
            };
        });
    };

    render() {
        return (
            <div>
                <h1>Visibility toggle</h1>

                <button onClick={this.handleToggleVisibility.bind(this)}>
                    {!this.state.visibility ? 'Hide details' : 'Show details' }
                </button>

                {!this.state.visibility && (
                    <div className="yo">
                        <p>This is some detailst!!!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// let switcher = false;

// const onToggleText = () => {
//     switcher = !switcher;

//     renderToggle();
// }

// const renderToggle = () => {
//     const template = (
//         <div>
//             <h1>Visibility toggle</h1>

//             <button onClick={onToggleText}>
//                 {switcher ? 'Hide details' : 'Show details' }
//             </button>

//             {switcher && (
//                 <div className="yo">
//                     <p>This is some detailst!!!</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(template, document.getElementById('app'));
// }

// renderToggle();