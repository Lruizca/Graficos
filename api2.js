//let url= 'https://www.datos.gov.co/resource/72sg-cybi.json';
//fetch(url)
//Then necesita una promesa, y esa promesa se devuelve
//.then(respuesta=>respuesta.json())
// data es el resultado de la promesa respuesta
//.then(data=>{console.log(data);})


////NUEVO GRAFICO-----

grafico=document.getElementById('grafico2');
var violencia_contra = [];
var municipio = [];

fetch('https://www.datos.gov.co/resource/3f55-fabk.json')

.then(dat_obte => dat_obte.json())
.then(function transformar (dat_obte){
    //iteramos sobre cada dato
        dat_obte.forEach(function agregar(dat_obte)
        {
        //si los datos son diferentes de vacio
            if(dat_obte.violencia_contra != undefined && dat_obte.municipio != undefined )
            {
                violencia_contra.push(dat_obte.violencia_contra);
                municipio.push(dat_obte.municipio);
            }
        });

        var trace1 = {
            x: municipio,
            y: violencia_contra,
            mode: 'lines',
            marker: {
              color: 'green',
              opacity: 10,
              size: 40,
            }
          };
          
          var data = [trace1];
          
          var layout = {
            title: 'TIPOS DE VIOLENCIA POR MUNICIPIO',
            showlegend: false,
            height: 600,
            width: 1400,
            xaxis:
            {
                title:'MUNICIPIO'
            },
            yaxis:
            {
                title: 'VIOLENCIA CONTRA'
            },
          };
          
    Plotly.newPlot('grafico2', data, layout);
          
});

grafico=document.getElementById('grafico');
var a_o = [];
var municipio = [];
var descripcion = [];


fetch('https://www.datos.gov.co/resource/4ypt-m8ys.json')

.then(datos_obtenidos => datos_obtenidos.json())
.then(function transformar (datos_obtenidos){
//iteramos sobre cada dato
    datos_obtenidos.forEach(function agregar(datos_obtenidos)
    {
    //si los datos son diferentes de vacio
        if(datos_obtenidos.a_o != undefined && datos_obtenidos.municipio != undefined && datos_obtenidos.descripcion != undefined)
        {
            a_o.push(datos_obtenidos.a_o);
            municipio.push(datos_obtenidos.municipio);
            descripcion.push(datos_obtenidos.descripcion);
        }
    });


//Variables para las graficas
var graf1 = 
{
    y:descripcion,
    x:municipio,
    mode: 'markers',
    type:'scatter',
    name:'Team A',
    marker:{
        color:'red',
        size:15,
    },
};
 
var graf2 =
{
   y:a_o,
   x:municipio,
   mode: 'markers',
   type:'scatter',
   name:'Team B',
   line:{
       color: 'pink',
   }
}


var datosGraficas = [graf1,graf2];

//estilos de la grafica
var layout =
{
    title: 'TIPOS POR CADA MUNICIPIO',
    showlegend: false,
    height:600,
    width:1000,
    xaxis:
    {
        title: 'MUNICIPIO'
    },
    yaxis:
    {
        title: 'DESCRIPCION Y AÑO'
    }
    
    
};

   
Plotly.newPlot('grafico', datosGraficas,layout);
});