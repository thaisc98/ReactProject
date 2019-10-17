console.log('dkjasldjaskl');

// JSX - JavaScript XML
//syntanxs extension( injection of data  in those templates)

const app = {
    title: 'The musitionns',
    subtitle: 'Guitars',
    nameType: 'Tipos',
    type: 'sads',
    type2: '2dsad',
    option: ['One','Two']
};

const template = ( 
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <h3>{app.option.length > 0 ? 'Here are your options: ' : 'No options'}</h3>
        <ol>
            <li>{app.type}</li>
            <li>{app.type2}</li>
        </ol>
</div>
);


//create a new template var jsx espression
//div -> h1 -[name] ->p tag Age:21 -> p Location: SD render template2 insted of template
const userName = 'Mike';
const userAge = 27;
const userLocation = 'Santo Domingo';


const user = {
    name: 'Andrew',
    age: 26,
    location: 'New York'
};

function getLocation(location){

    //const lolo = location ? location : 'Unknown';
    if(location){
        return  <p>Location: {location}</p>;
    }                           
    
}

const templatetwo = (
        <div>
            <h1>{user.name}</h1>
            <p>Age: {user.age}</p>
            {getLocation(user.location)}
        </div>
);
 


const appRoot = document.getElementById('app');
                     
ReactDOM.render(template, appRoot);
