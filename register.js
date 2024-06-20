const formregister = document.getElementById('form-register')

const data = {
  nombre: '',
  apellido: '',
  email: '',
  contraseña: '',
  cedula: '',
  fecha_nacimiento: '',
  sexo: '',
}

formregister.addEventListener('submit', (e) => {
  e.preventDefault()

  if (!Object.values(data).some((current) => current == '')) {
    axios
      .post('https://server-farmacy.onrender.com/usuarios', data)
      .then((res) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Usuario registrado éxito',
          showConfirmButton: false,
          timer: 1500,
        })

        formregister.reset()
      })
      .catch(console.log)
  }
})

formregister.addEventListener('change', (e) => {
  const { name, value } = e.target
  if (value && value.length > 0) {
    data[name] = value
  } else {
    data[name] = ''
  }

  console.log(data)
})
