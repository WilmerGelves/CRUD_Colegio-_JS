//Contenedor general de la información de estudiantes. 
const estudiantes = [];

//Seleccionando los elementos del formulario, para obtener la información que suministre el usuario. 

const form = document.querySelector('#formPrincipal');

form.addEventListener('submit',(event) => {
    event.preventDefault();

    const datosForm = new FormData(form); //recibe los datos del formulario.

    //Creacion de variables para almacenar la información de FormData.
    const id = datosForm.get('id');
    const nombre =  datosForm.get('nombre');
    const apellido = datosForm.get('apellido');
    const grupo = datosForm.get('grupo');


    //llamado a la función crear nuevo estudiante para transformalo en un obejto.Esta fuction y retorna la info en una variable. 
    const nuevoEstudiante = crearEstudiante(id, nombre, apellido, grupo);  
    estudiantes.push(nuevoEstudiante);
    const data = JSON.stringify(nuevoEstudiante);
   
    //agregando la info al localStorage
    localStorage.setItem(id,data);
    console.log(localStorage);
    console.log(estudiantes);
});



function crearEstudiante(idE,nombreE,apellidoE,grupoE){
    const estudiante ={
        idE:{
            id:idE,
            nombre:nombreE,
            apellido:apellidoE,
            grupo:grupoE,
            notas:[]
        },
    };
    return estudiante;
};
