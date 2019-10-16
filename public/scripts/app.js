'use strict';

console.log('dkjasldjaskl');

// JSX - JavaScript XML
//syntanxs extension( injection of data  in those templates)

var app = {
    title: 'The musitionns',
    subtitle: 'Guitars',
    nameType: 'Tipos',
    type: 'Cuerda corta',
    type2: 'Cuerda larga'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'h2',
        null,
        app.subtitle
    ),
    React.createElement(
        'h3',
        null,
        app.nameType
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            app.type
        ),
        React.createElement(
            'li',
            null,
            app.type2
        ),
        React.createElement(
            'li',
            null,
            app.type2 + ' + ' + app.type2
        )
    )
);

//create a new template var jsx espression
//div -> h1 -[name] ->p tag Age:21 -> p Location: SD render template2 insted of template
var userName = 'Mike';
var userAge = 27;
var userLocation = 'Santo Domingo';

var user = {
    name: 'Andrew',
    age: 26,
    location: 'New York'
};

function getLocation(location) {

    //const lolo = location ? location : 'Unknown';
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}
var templatetwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templatetwo, appRoot);
