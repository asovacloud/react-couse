import React from 'react'
import ReactDOM from 'react-dom'

const inputComponent = props => {
    const wrapAttr = {
        className: 'row',
        style: {
            marginBottom: 10,
            display: 'flex',
        },
    }

    const inputAttr = {
        type: props.type,
        placeholder: props.placeholder,
        fontSize: 18,
        style: {
            lineHeight: 30,
            height: 30,
            paddingLeft: 15,
            paddingRight: 15,
            display: 'block',
            width: '100%',
        },
    }

    return React.createElement(
        'div',
        wrapAttr,
        React.createElement('input', inputAttr),
    )
}

const buttonComponent = props => {
    const buttonAttr = {
        fontSize: props.fontSize,
        style: {
            width: 160,
            height: 40,
            margin: '0 auto',
            cursor: 'pointer',
        },
    }

    return React.createElement(
        'div',
        { className: 'row-btn' },
        React.createElement('button', buttonAttr, 'Login'),
    )
}

const formComponent = () => {
    const formAttr = {
        type: 'POST',
        action: '#',
        style: {
            margin: '0 auto',
            width: 300,
            padding: 80,
            textAlign: 'center',
        },
    }

    return React.createElement(
        'form',
        formAttr,
        React.createElement(inputComponent, {
            type: 'text',
            placeholder: 'Enter The Name...',
        }),
        React.createElement(inputComponent, {
            type: 'password',
            placeholder: 'Enter The Password...',
        }),
        React.createElement(buttonComponent, { fontSize: 18 }),
    )
}

ReactDOM.render(
    React.createElement(formComponent),
    document.getElementById('app'),
)
