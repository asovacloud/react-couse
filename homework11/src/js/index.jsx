import React from 'react';
import ReactDOM from 'react-dom';

const InputComponent = props => {
    const wrapAttr = {
        className: 'row',
        style: {
            marginBottom: 10,
            display: 'flex',
        },
    };

    const inputAttr = {
        type: props.type,
        placeholder: props.placeholder,
        style: {
            fontSize: 12,
            lineHeight: 30,
            height: 30,
            paddingLeft: 15,
            paddingRight: 15,
            display: 'block',
            width: '100%',
        },
    };

    return (
        <div className={wrapAttr.className} style={wrapAttr.style}>
            <input
                type={inputAttr.type}
                placeholder={inputAttr.placeholder}
                style={inputAttr.style}
            />
        </div>
    );
};

const ButtonComponent = ({ fontSize }) => {
    const buttonAttr = {
        width: 160,
        height: 40,
        margin: '0 auto',
        cursor: 'pointer',
    };

    return (
        <div className="row-btn">
            <button style={Object.assign(buttonAttr, { fontSize })}>
                Login
            </button>
        </div>
    );
};

const FormComponent = () => {
    const formAttr = {
        margin: '0 auto',
        width: 300,
        padding: 80,
        textAlign: 'center',
    };

    return (
        <form action="#" typeof="POST" style={formAttr}>
            <InputComponent type="text" placeholder="Enter The Name..." />
            <InputComponent
                type="password"
                placeholder="Enter The Password..."
            />
            <ButtonComponent fontSize={18} />
        </form>
    );
};

ReactDOM.render(<FormComponent />, document.getElementById('app'));
