const formCategoria = document.getElementById("form-categoria");
const tbody = document.getElementById("tbody");

const printData = (categorias) => {
  tbody.innerHTML = "";

  for (let category of categorias) {
    tbody.innerHTML += `<tr>
    <td>${category.id}</td>
    <td>${category.nombre}</td>
    <td></td>
    </tr>`;
  }
};

const fetchCategorias = () => {
  axios
    .get("http://localhost:3000/categorias")
    .then((res) => {
      const categoriesDB = res.data.categorias;
      printData(categoriesDB);
    })
    .catch((err) => console.log(err));
};

const categoria = {
  nombre: "",
};

formCategoria.addEventListener("change", (e) => {
  const { value } = e.target;
  if (value && value.length > 0) {
    categoria.nombre = value;
  } else {
    categoria.nombre = "";
  }
});

formCategoria.addEventListener("submit", (e) => {
  e.preventDefault();

  if (categoria.nombre !== "") {
    axios
      .post("http://localhost:3000/categorias", { ...categoria })
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Categoría creada con éxito",
          showConfirmButton: false,
          timer: 1500,
        });

        formCategoria.reset();
        fetchCategorias();
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
      title: "El nombre es obligatorio",
      showConfirmButton: false,
      timer: 1500,
    });
  }
});

addEventListener("DOMContentLoaded", () => {
  fetchCategorias();
});
