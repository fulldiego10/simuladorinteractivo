bienvenido();
let producto = menu();
let precioProd = precio(producto);
cobrar(producto, precioProd);

function bienvenido() {
    alert("¡Bienvenido a  pizzería Leblon!");
    let nombre = prompt("Ingresa tu nombre por favor");
    while (nombre === "" || nombre === null) {
        nombre = prompt("Ingresa tu nombre");
    }
    alert("Hola " + nombre + ". Bienvenido.");
}

function menu() {
    let opcion;
    do {
        opcion = prompt("Estas son nuestras especialidades. Elija una opcion \n1) Muzzarella \n2) Fugazzetta \n3) Especial de la casa \n4) Empanada de pollo por 1 docena");
    } while (opcion != 1 && opcion != 2 && opcion != 3 && opcion != 4);

    switch (opcion) {
        case "1":
            return "Muzzarella";
        case "2":
            return "Fugazzetta";
        case "3":
            return "Especial";
        case "4":
            return "Empanadas de pollo por 1 docena";
    }
}

function precio(producto) {
    if (producto === "Muzzarella") {
        return 1100;
    } else if (producto === "Fugazzetta") {
        return 1400;
    } else if (producto === "Empanadas de pollo por 1 docena") {
        return 2000;
    } else {
        return 1800;
    }
}

function cobrar(producto, precioProd) {
    alert("Usted ha elegido nuestra especialidad de: " + producto + "\nPrecio $" + precioProd);
    let abonar = prompt("¿Con cuánto abona?");
    if (abonar > precioProd) {
        alert("Su vuelto es de $" + (abonar - precioProd));
        alert("Gracias por elegirnos, vuelva pronto!!");
    } else if (abonar == precioProd) {
        alert("Ha abonado con el precio exacto, no necesita vuelto.")
        alert("Gracias por elegirnos, vuelva pronto!!");
    } else {
        alert("No tiene dinero suficiente, por favor regrese en otro momento.");
    }
}