const formUsuario = document.getElementById("form-usuario");
const tbody = document.getElementById("tbody");

const printData = (usuarios) => {
  tbody.innerHTML = "";

  for (let usuario of usuarios) {
    tbody.innerHTML += `<tr>
    <td>${usuario.id}</td>
    <td>${usuario.nombre}</td>
    <td>${usuario.email}</td>
    <td></td>
    </tr>`;
  }
};

const fetchUsuarios = () => {
  axios
    .get("http://localhost:3000/usuarios")
    .then((res) => {
      const usuariosDB = res.data.usuarios;
      printData(usuariosDB);
    })
    .catch((err) => console.log(err));
};

const usuario = {
  nombre: "",
  email: "",
  contraseña: "",
};

formUsuario.addEventListener("change", (e) => {
  const { name, value } = e.target;
  if (value && value.length > 0) {
    usuario[name] = value;
  } else {
    usuario[name] = "";
  }
});

formUsuario.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!Object.values(usuario).some((data) => data == "")) {
    axios
      .post("http://localhost:3000/usuarios", { ...usuario })
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Usuario creado con éxito",
          showConfirmButton: false,
          timer: 1500,
        });

        formUsuario.reset();
        fetchUsuarios();
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: err.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  } else {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Todos los datos son obligatorios",
      showConfirmButton: false,
      timer: 1500,
    });
  }
});

addEventListener("DOMContentLoaded", () => {
  fetchUsuarios();
});
