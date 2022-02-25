# javascript-2020A
curso de javascript

### correr archivo js desde terminal
```
$ node archivo.js
```


About SAILS: Sails.js es un marco de aplicación web Model-View-Controller desarrollado sobre el entorno Node.js, 
lanzado como software gratuito y de código abierto bajo la licencia MIT. Está diseñado para facilitar la creación de API y 
aplicaciones web Node.js personalizadas y de nivel empresarial.

intalacion de nuevo paquete para BACKEND
https://sailsjs.com/documentation/concepts/models-and-orm/model-settings
```
$npm install sails -g
```

### creacion de nuevo proyecto
```
$sails new backend
```

###correr servidor
```
$sails lift
```
### crear una nueva api
https://sailsjs.com/documentation/concepts/models-and-orm/attributes

```
$sails generate api Usuario
```

Imagenes de docker funcionan como un shell
SAILS no se preocupa de la base de datos -> no hay que confiarse de que cree la db o las tablas -> es mejor conectarse a una base de datos ya creada

###Busquedas Exactas
```
$http://localhost:1337/Usuario?nombre=Jonathan&estadoCivil=Soltero
```

###Paginacion (Skip Limit)
http://localhost:1337/Usuario?skip=2&limit=3


###Espacio dentro de una URL 
se utiliza la codificacion %20


###	query language documentacion sailsjs
https://sailsjs.com/documentation/concepts/models-and-orm/query-language


### herramienta web para validad JSON
best json
```
$https://jsonformatter.org/
```


#### busquedas con condiciones
```
$http://localhost:1337/Usuario?where{"id":{"<=":"4"}}

```


Es importante dessuscribirse de todas las suscripciones. En el evento OnDestroy()--


### Angular Material
```
$ng add @angular/material
```
PINK - yes - yes

### Bootstrap  https://ng-bootstrap.github.io/#/components/modal/examples

```
$ng add @ng-bootstrap/ng-bootstrap
```

### PrimeNG   https://primefaces.org/primeng/showcase/#/setup

```
$npm install primeng primeicons --save
```
se agrega en angular.json
"node_modules/primeicons/primeicons.css",
"node_modules/primeng/resources/themes/saga-blue/theme.css",
"node_modules/primeng/resources/primeng.min.css",




















