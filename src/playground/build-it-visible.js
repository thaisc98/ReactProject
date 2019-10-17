
const app = {
    tittle: 'Visibility Toggle',
    details: 'Hey. These are some detals you ca now see!',
    options: 'Show details'

}


const changeAll = () => {

    if(app.options == 'Show details'){

        app.options = 'Hide details';

        rendeTemplate();
    } else if (app.options == 'Hide details'){
        app.options = 'Show details';
        rendeTemplate();
    }
 };


const appRoot = document.getElementById('app');  

const rendeTemplate = () => {
    const template = (
        <div>
            <h1>{app.tittle}</h1>
            <button onClick={changeAll}>{app.options}</button>
            <p>{app.options == 'Hide details' ? app.details : ''}</p>
           
        </div>

    )

    ReactDOM.render(template,appRoot);
};

rendeTemplate();