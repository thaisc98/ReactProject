console.log('dkjasldjaskasdsal');

// JSX - JavaScript XML
//syntanxs extension( injection of data  in those templates)

const app = {
    title: 'The musitionns',
    subtitle: 'Guitars',
<<<<<<< HEAD
    type: 'Cuerda corta',
    type2: 'Cuerda larga',
    options: ['One', 'Twoooo']
=======
    nameType: 'Tipos',
    type: 'sads',
    type2: '2dsad',
    option: ['One','Two']
>>>>>>> 36dd3aa58d69483066491b76238d840c1b98662c
};

const template = ( 
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
<<<<<<< HEAD
        <p>{app.options.length > 0 ? 'Here is your options' : 'no options'}</p>
=======
        <h3>{app.option.length > 0 ? 'Here are your options: ' : 'No options'}</h3>
>>>>>>> 36dd3aa58d69483066491b76238d840c1b98662c
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


<<<<<<< HEAD
var user = { 
    name: 'Thais',
    age: 21,
=======
const user = {
    name: 'Andrew',
    age: 26,
>>>>>>> 36dd3aa58d69483066491b76238d840c1b98662c
    location: 'New York'
};

function getLocation(location){

    //const lolo = location ? location : 'Unknown';
    if(location){
        return  <p>Location: {location}</p>;
    }                           
    
}

<<<<<<< HEAD
var templatetwo = (
=======
const templatetwo = (
>>>>>>> 36dd3aa58d69483066491b76238d840c1b98662c
        <div>
            <h2>{user.name  ? user.name : 'Anonymous'}</h2>
             {(user.name && user.age >=18) && <p>Age: {user.age}</p>}
            {getLocation(user.location)}
        </div>
);
 


const appRoot = document.getElementById('app');
                     
ReactDOM.render(template, appRoot);
