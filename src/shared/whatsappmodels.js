function MessageText(textResponse, number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,    
        "text": {
            "preview_url": true,
            "body": textResponse
        },
        "type": "text"
    });
    return data;
}

function MessageList(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "✅ Tengo estas opciones"
            },
            "footer": {
                "text": "Selecciona una de las opciones para poder atenderte"
            },
            "action": {
                "button": "Ver opciones",
                "sections": [
                    {
                        "title": "Sistemas Sadge",
                        "rows": [
                            {
                                "id": "main-comprar",
                                "title": "Comprar",
                                "description": "Compra los mejores sistemas de facturación"
                            },
                                {
                                    "id": "main-acistencia",
                                    "title": "Tutoriales ",
                                    "description": "Desearia ver los tutoriales de los sistemas"
                                },
                                {
                                    "id": "main-acistencia-soporte",
                                    "title": "Soporte",
                                    "description": "Desearia soporte de los sistemas"
                                }
                        ]
                    },
                    {
                        "title": "📍Centro de atención",
                        "rows": [
                            {
                                "id": "main-agencia",
                                "title": "Agencia",
                                "description": "Puedes visitar nuestra agencia."
                            },
                            {
                                "id": "main-contacto",
                                "title": "Centro de contacto",
                                "description": "Te atenderá uno de nuestro agentes."
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}
function MessageComprar(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",  
        "interactive": {
            "type": "button",
            "body": {
                "text": "Selecciona uno de los productos"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-laptop",
                            "title": "Laptop"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-computadora",
                            "title": "Computadora"
                        }
                    }
                ]
            }
        }     
    });
    return data;
}

function MessageLocation(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "location",
        "location": {
        "latitude": "19.377546561385746",
        "longitude": "-69.85523320596421",
        "name": "Nagua",
        "address": "Prol. Progreso 176, Nagua 33003"
    }
        
    });
    return data;
}
function TutorialList(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "✅ Selecciona un sistema"
            },
            "footer": {
                "text": "Selecciona una de las opciones "
            },
            "action": {
                "button": "Ver opciones",
                "sections": [
                    {
                        "title": "Sistemas Sadge",
                        "rows": [
                            {
                                "id": "main-pymes",
                                "title": "Tutorial pymes",
                                "description": "Tutoriales para pymes"
                            },
                            {
                                "id": "main-express",
                                "title": "Tutorial  express",
                                "description": "Tutoriales para express"
                            }
                            ,
                            {
                                "id": "main-poss",
                                "title": "Tutorial pos",
                                "description": "Tutoriales para Pos"
                            },
                            {
                                "id": "main-prestamos",
                                "title": "Tutorial prestamos",
                                "description": "Tutoriales para Prestamos"
                            },
                            {
                                "id": "main-celulares",
                                "title": "Tutorial celulares",
                                "description": "Tutoriales para Celulares"
                            }, {
                                "id": "main-motos",
                                "title": "Tutorial motos",
                                "description": "Tutoriales para Motos"
                            }, {
                                "id": "main-restaurante",
                                "title": "Tutorial restaurante",
                                "description": "Tutoriales para Restaurante"
                            },
                             {
                                "id": "main-farmacia",
                                "title": "Tutorial farmacia",
                                "description": "Tutoriales para Farmacia"
                            },
                           
                        
                        ]
                    },
                    
                ]
            }
        }
    });
    return data;
}
function SoportelList(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "✅ Selecciona un sistema"
            },
            "footer": {
                "text": "Elige una de las opciones "
            },
            "action": {
                "button": "Ver opciones",
                "sections": [
                    {
                        "title": "Sistemas Sadge",
                        "rows": [
                            {
                                "id": "main-pymes",
                                "title": "Soporte Pymes",
                                "description": "Soporte para pymes"
                            },
                            {
                                "id": "main-express",
                                "title": "Soporte  Express",
                                "description": "Soporte para express"
                            }
                            ,
                            {
                                "id": "main-poss",
                                "title": "Soporte Pos",
                                "description": "Soporte para Pos"
                            },
                            {
                                "id": "main-prestamos",
                                "title": "Soporte Prestamos",
                                "description": "Soporte para Prestamos"
                            },
                            {
                                "id": "main-celulares",
                                "title": "Soporte Celulares",
                                "description": "Soporte para Celulares"
                            }, {
                                "id": "main-motos",
                                "title": "Soporte Motos",
                                "description": "Soporte para Motos"
                            }, {
                                "id": "main-restaurante",
                                "title": "Soporte Restaurante",
                                "description": "Soporte para Restaurante"
                            },
                             {
                                "id": "main-farmacia",
                                "title": "Soporte Farmacia",
                                "description": "Soporte para Farmacia"
                            },
                           
                        
                        ]
                    },
                    {
                        "title": "Otro",
                        "rows": [
                            {
                                "id": "main-otro",
                                "title": "Otro",
                                "description": "Otro"
                            }
                        ]
                    },

                    
                ]
            }
        }
    });
    return data;
}
function PymesTutorial(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "✅ Selecciona un modulo"
            },
            "footer": {
                "text": "Selecciona una de las opciones "
            },
            "action": {
                "button": "Ver opciones",
                "sections": [
                    {
                        "title": "Modulos",
                        "rows": [
                            {
                                "id": "main-compania",
                                "title": "crear compañia",
                                "description": "Datos de la compañia"
                            },
                            {
                                "id": "main-inventario",
                                "title": "Inventario",
                                "description": "Administra tu inventario"
                            }
                            ,
                            {
                                "id": "main-proveedores",
                                "title": "Proveedores",
                                "description": "Administra los proveedores"
                            },
                            {
                                "id": "main-clientes",
                                "title": "Clientes",
                                "description": "Administra los clientes"
                            },
                            {
                                "id": "main-facturacion",
                                "title": "Facturacion",
                                "description": "Factura tus productos"
                            }, 
                            

                           
                        
                        ]
                    },
                    // {
                    //     "title": "Modulos",
                    //     "rows": [
                    //         {
                    //             "id": "main-reportes",
                    //             "title": "Reportes",
                    //             "description": "Reportes de ventas"
                    //         },
                    //         {
                    //             "id": "main-ingreso",
                    //             "title": "Ingresos",
                    //             "description": "Administra tus ingresos"
                    //         }
                    //         ,
                    //         {
                    //             "id": "main-compras",
                    //             "title": "Compras",
                    //             "description": "Administra tus compras"
                    //         },
                    //         {
                    //             "id": "main-cxp",
                    //             "title": "CxC y CxP",
                    //             "description": "Administra CxC y CxP"
                    //         },
                    //         {
                    //             "id": "main-bancos",
                    //             "title": "Bancos",
                    //             "description": "Administra tus bancos"
                    //         }, 
                    //         {
                    //             "id": "main-contabilidad",
                    //             "title": "Contabilidad",
                    //             "description": "Contabilidad"
                    //         }, 
                            

                           
                        
                    //     ]
                    // },
                    
                ]
            }
        }
    });
    return data;
}

function SampleVideoInventario(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
         "text": {
            "preview_url": true,
            "body": "https://www.youtube.com/watch?v=kPzUAI1WWJ8&t=650s"
        },       
    });
    return data;
}
function SampleVideoProvedores(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
         "text": {
            "preview_url": true,
            "body": "https://www.youtube.com/watch?v=F2BZvuHfpQ4&list=PLwuaqsOcD3JHhjZGWgeQU7XFjaJnB9gMP&index=8"
        },       
    });
    return data;
}
function IssuesList(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "✅ Selecciona un modulo"
            },
            "footer": {
                "text": "Selecciona una de las opciones "
            },
            "action": {
                "button": "Ver opciones",
                "sections": [
                    {
                        "title": "Modulos",
                        "rows": [
                            {
                                "id": "main-inicio",
                                "title": "Inicio de sesion",
                                "description": "No puedo iniciar sesion"
                            },
                            {
                                "id": "main-Clientes",
                                "title": "Clientes y proveedores",
                                "description": "No puedo agregar clientes o proveedores"
                            }
                            ,
                            {
                                "id": "main-inventario",
                                "title": "Inventario",
                                "description": "No puedo agregar productos"
                            },
                            {
                                "id": "main-facturacion",
                                "title": "facturacion",
                                "description": "No puedo facturar"
                            },
                            {
                                "id": "main-reporte",
                                "title": "Reportes",
                                "description": "No puedo ver los reportes"
                            }, 
                            {
                                "id": "main-impresion",
                                "title": "Impresion",
                                "description": "No puedo imprimir"
                            }, 
                            

                           
                        
                        ]
                    },
                   
                 
                ]
            }
        }
    });
    return data;
}



module.exports = {
MessageText,
MessageList,
MessageComprar,
MessageLocation,
TutorialList,
PymesTutorial,
SampleVideoInventario,
SoportelList,
SampleVideoProvedores,
IssuesList



};

