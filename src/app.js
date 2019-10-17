console.log('dkjasldjaskasdsal');


// JSX - JavaScript XML
//syntanxs extension( injection of data  in those templates)

var app = {
    title: 'The musitionns',
    subtitle: 'Guitars',
    type: 'Cuerda corta',
    type2: 'Cuerda larga',
    options: ['One', 'Twoooo']
};

var template = ( 
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here is your options' : 'no options'}</p>
        <ol>
            <li>{app.type}</li>
            <li>{app.type2}</li>
        </ol>
</div>
);


//create a new template var jsx espression
//div -> h1 -[name] ->p tag Age:21 -> p Location: SD render template2 insted of template
var userName = 'Mike';
var userAge = 27;
var userLocation = 'Santo Domingo';
var toyjarta = 'Jarta';

var user = { 
    name: 'Thais',
    age: 21,
    location: 'New York'
};

function getLocation(location){

    //const lolo = location ? location : 'Unknown';
    if(location){
        return  <p>Location: {location}</p>;
    }                           
    
}

var templatetwo = (
        <div>
            <h2>{user.name  ? user.name : 'Anonymous'}</h2>
             {(user.name && user.age >=18) && <p>Age: {user.age}</p>}
            {getLocation(user.location)}
        </div>
);
 


var appRoot = document.getElementById('app');
                     
ReactDOM.render(template, appRoot);
