function mostrar(usuarios) {
    for (usuarios of usuarios) {
        console.log(`O ${usuarios.nome} possui as habilidades: ${usuarios.habilidades.join(", ")}`);
    }
}

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];



mostrar(usuarios);