console.log('sdsadsadsa');

// JSX - JavaScript XML
//syntanxs extension( injection of data  in those templates)

const app = {
    title: 'The musitionns',
    subtitle: 'Guitars',
    nameType: 'Tipos',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplateApp();
    }

};

const resetAll = () => {
    app.options = [];
    renderTemplateApp();
 };

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');   


const renderTemplateApp = () => {
    const template = ( 
        <div>
            <h1>{app.title}</h1>
                {app.subtitle && <p>{app.subtitle}</p>}
            <h3>{app.options.length > 0 ? 'Here are your options: ' : 'No options'}</h3>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={resetAll}>Remove All</button>
                <ol>
                    {
                      app.options.map((opt)=> <li key={opt}> {opt}</li>)
                    }
                </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
             </form>
        </div>
    );
    
    ReactDOM.render(template,appRoot);
};

 renderTemplateApp();

