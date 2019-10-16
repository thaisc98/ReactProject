console.log('dkjasldjaskl');


// JSX - JavaScript XML
//syntanxs extension( injection of data  in those templates)

var app = {
    title: 'The musitionns',
    subtitle: 'Guitars',
    nameType: 'Tipos',
    type: 'Cuerda corta',
    type3: 'Cuerda larga'
};

var template = ( 
    <div>
        <h1>{app.title}</h1>
        <h2>{app.subtitle}</h2>
        <h3>{app.nameType}</h3>
        <ol>
            <li>{app.type}</li>
            <li>{app.type2}</li>
            <li>{app.type2 + ' + ' +app.type3}</li>
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
var templatetwo = (
        <div>
            <h1>{user.name}</h1>
            <p>Age: {user.age}</p>
            {getLocation(user.location)}
        </div>
);
 


var appRoot = document.getElementById('app');
                     
ReactDOM.render(templatetwo, appRoot);
