console.log('React running');

const app = {
    title: "This is Andrew's title",
    subtitle: "Description on my success",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted !!!');

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        renderCounterApp();
    }
};

const addRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const onRemoveAll = () => {
    app.options = [];
    renderCounterApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const renderCounterApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            
            {app.subtitle && <p>{app.subtitle}</p>}
    
            {app.options.length > 0 ? <p>Here your options</p> : <p>No options</p>}
    
            <p>{app.options.length}</p>

            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove all</button>

            <ol>
                {
                    app.options.map((item) => <li key={item}>{item}</li> )
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, addRoot);
};

renderCounterApp();