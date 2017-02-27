var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/escuelas', function(request, response) {
  console.log("Holas");
  response.send({
     "hotspots":[
        {
           "id":"ito",
           "anchor":{
              "geolocation":{
                 "lat": 17.077295,
                 "lon": -96.744438
              }
              },
              "text":{
              "title":"Instituto Tecnológico de Oaxaca",
              "description":"El IT Oaxaca, es una institución pública de educación superior; imparte 9 carreras a nivel licenciatura y 2 a nivel posgrado en las áreas de ciencias sociales y administrativas, e ingeniería.",
              "footnote":"07:00 - 20:00, Lunes - Viernes"
              },
              "imageURL":""
        },
        {
           "id":"medicina",
           "anchor":{
              "geolocation":{
              "lat": 17.082949,
              "lon": -96.718850
              }
           },
           "text":{
           "title":"Facultad de Medicina y Cirugía UABJO",
           "Description":"Institución fuerte, con una planta docente de experiencia y renovada, con los mejores estudiantes, con personal administrativo y manual comprometido.",
           "footnote":"16:00-20:00  Lunes-Viernes"
           },
           "imageURL":"https://drive.google.com/file/d/0Bz4qVMnEIUlpWGNPb0NoN0FIdjA/view?usp=sharing"
        },
        {
           "id":"cleu",
           "anchor":{
              "geolocation":{
                 "lat": 17.062782,
                 "lon":  -96.721209
              }
           },
           "text":{
           "title":"CLEU Criminología y Criminalística",
           "Description":"El CLEU es una institución educativa, comprometida para la formación de criminólogos-criminalistas profesionales con un alto nivel de preparación.",
           "footnote":"07:00-20:00  Lunes-Sábado"
           },
           "imageURL":"https://drive.google.com/file/d/0Bz4qVMnEIUlpcnRocm9nb3ZMelU/view?usp=sharing"
        },
        {
           "id":"idiomas",
           "anchor":{
              "geolocation":{
                 "lat": 17.055524,
                 "lon":-96.725610
              }
           },
           "text":{
              "title":"Facultad de Idiomas UABJO",
              "description":"Instituto que forma profesionales especialistas de alto nivel académico",
              "footnote":"17:00 - 22:00 Lunes-Sábado"
           },

           "imageURL": "https://drive.google.com/file/d/0Bz4qVMnEIUlpZEZBLV9Tc1RlTlU/view?usp=sharing"
        },

        {
           "id":"mesoame",
           "anchor":{
              "geolocation":{
                 "lat":17.063247,
                 "lon": -96.725108
              }
           },
           "text":{
              "title":"Universidad Mesoamericana",
              "description":"La Universidad Mesoamericana es una institución de educación superior que se dedica a formar excelentes profesionales y mejores seres humanos.",
              "footnote":"17:00 - 22:00 Lunes-Sábado"
           },

           "imageURL":"https://drive.google.com/file/d/0Bz4qVMnEIUlpRHZlODlNTkpHenc/view?usp=sharing"
        },

        {
           "id":"creno",
           "anchor":{
              "geolocation":{
                 "lat": 17.087052,
                 "lon": -96.717346
              }
           },
           "text":{
              "title":"Centro Regional de Educación Normal de Oaxaca (CRENO)",
              "description":"El Centro Regional de Educación Normal de Oaxaca (CRENO), es una institución de Educación Superior, formadora de Docentes, que ofrece oportunidad de cursar los estudios con grado académico de Licenciatura en Educación Primaria y Educación Física.",
              "footnote":"17:00 - 22:00 Lunes-Viernes"
           },
           
	     
		"imageURL":"https://drive.google.com/file/d/0Bz4qVMnEIUlpWUlRNDhNOHJ2Z28/view?usp=sharing"
        },


        {
           "id":"miCasa",
           "anchor":{
              "geolocation":{
                 "lat": 17.080046,
                 "lon": -96.749218
              }
           },
           "text":{
              "title":"Mi Casa",
              "description":"",
              "footnote":"24 : 24"
           },

           
		"imageURL":"https://drive.google.com/file/d/0Bz4qVMnEIUlpdHlnNFUxd1NCRkU/view?usp=sharing"
        }
     ],
     "layer":"tecnologiaq9kw",
     "errorString":"ok",
     "errorCode":0
  }
);
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
