const formregister = document.getElementById("form-register")

const data = {
    nombre: "",
    apellido: "",
    email: "",
    contraseña: "",
    cedula: "",
    fecha_nacimiento: "",
    sexo: ""
}


formregister.addEventListener("submit",(e) => {
    e.preventDefault()

    if(!Object.values(data).some(current => current == "")){
        console.log("entraif")
        

        axios.post("http://127.0.0.1:3000/usuarios",{...data}).then((res) => {
            console.log(res)
        }).catch(console.log)

    }
})


formregister.addEventListener("change",(e) => {
    const {name,value} = e.target
    if(value && value.length > 0){
        data[name] = value
    }
    else{
        data[name] = ""
    }

    console.log(data)

})