const express= require('express');
const morgan = require('morgan');
const path= require('path');
const mysql= require('mysql2');
const cors = require('cors');
const myConnection= require('express-myconnection');

const app= express();

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000", 
                    credentials: true
                }
            ]
        }
}
};

var bodyParser = require('body-parser');
app.use(bodyParser.json());



app.use(express.static(path.join(__dirname,'public')));



app.use(cors(
    config.application.cors.server
  ));


  // rutas backend
const rutasRoutes = require('./rutas/empresa');
const clientesRoutes = require('./rutas/clientes');
const proveedorRoutes = require('./rutas/proveedor');
const sucursalesRoutes = require('./rutas/sucursales');
const usuarioRoutes = require('./rutas/usuario');
const productoRoutes = require('./rutas/producto');
const empleadosRoutes = require('./rutas/empleados');
const areas_trabajoRoutes = require('./rutas/areas_trabajo');
const cxcobrarRoutes = require('./rutas/cxcobrar');
const cxpagarRoutes = require('./rutas/cxpagar');
const detalle_compraRoutes = require('./rutas/detalle_compra');
const detalleventaRoutes = require('./rutas/detalleventa');
const encabezado_compraRoutes = require('./rutas/encabezado_compra');
const encabezado_ventaRoutes = require('./rutas/encabezado_venta');
const formapagoRoutes = require('./rutas/formapago');
const pagosRoutes = require('./rutas/pagos');
const tipoproductoRoutes = require('./rutas/tipoproducto');
const tipousuarioRoutes = require('./rutas/tipousuario');
const empresaRoutes = require('./rutas/empresa');


  app.set('port', process.env.PORT || 3000);


  app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'1234',
    port:3306,
    database:'ventas'
}, 'single'));
app





//inicializando el server
app.listen(app.get('port'), () =>{
    console.log("PUERTO 3000");
});


// frontend
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/api/empresa', empresaRoutes);
app.use('/api/proveedor', proveedorRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/sucursales', sucursalesRoutes);
app.use('/api/usuario', usuarioRoutes);
app.use('/api/producto', productoRoutes);
app.use('/api/empleados', empleadosRoutes);
app.use('/api/areas_trabajo', areas_trabajoRoutes);
app.use('/api/cxcobrar', cxcobrarRoutes);
app.use('/api/cxpagar', cxpagarRoutes);
app.use('/api/detalle_compra', detalle_compraRoutes);
app.use('/api/detalleventa', detalleventaRoutes);
app.use('/api/encabezado_compra', encabezado_compraRoutes);
app.use('/api/encabezado_venta', encabezado_ventaRoutes);
app.use('/api/formapago', formapagoRoutes);
app.use('/api/pagos', pagosRoutes);
app.use('/api/tipoproducto', tipoproductoRoutes);
app.use('/api/tipousuario', tipousuarioRoutes);

// archivos estaticos frontend
app.use(express.static(path.join(__dirname,'public')));

