const argu = process.argv;
const fs = require("fs");

let nombre = argu[3];
let comand = argu[2];

let json = { arrayN: [nombre] };

if (comand) {
  comand = comand.toLowerCase();
}
if (nombre && (comand === "add" || comand === "rm")) {
  nombre = nombre.toLowerCase();
}

switch (comand) {
  case "add":
    if (!fs.existsSync("packDB.json")) {
      if (!nombre) {
        console.log("please, enter a name");
        return process.exit(1);
      } else {
        fs.writeFileSync("packDB.json", JSON.stringify(json), "utf8");
      }
    } else {
      if (!names) {
        console.log("please, enter a name");
        return process.exit(1);
      } else {
        let datos = fs.readFileSync("packDB.json", "utf8");
        let pDatos = JSON.parse(datos);
        pDatos.arrayN.push(nombre);
        fs.writeFileSync("packDB.json", JSON.stringify(pDatos)), "utf8";
        console.log(pDatos);
      }
    }

    break;
  case "ls":
    if (nombre) {
      console.log(`remove  (${nombre}) from command`);
      process.exit(2);
    } else {
      let datos = fs.readFileSync("packDB.json", "utf8");
      let pDatos = JSON.parse(datos);
      for (let i = 0; i < pDatos.arrayN.length; i++) {
        console.log(`${i} ${pDatos.arrayN[i]}`);
      }
    }
    break;
  case "rm":
    if (!nombre) {
      console.log("Escriba EL Nombre");
      process.exit(1);
    } else {
      let datos = fs.readFileSync("packDB.json", "utf8");
      let pDatos = JSON.parse(data);
      let deletName = pDatos.arrayN.filter((name) => name !== nombre);
      console.log(pDatos);
      parseData.arrayN = deletName;
      fs.writeFileSync("packDB.json", JSON.stringify(pDatos)), "utf8";
      console.log(pDatos.arrayN);
    }
    break;
  case "reset":
    if (nombre) {
      console.log(`remove  (${nombre}) from command`);
      process.exit(2);
    } else {
      let datos = fs.readFileSync("packDB.json", "utf8");
      let pDatos = JSON.parse(datos);
      pDatos.arrayN = [];
      fs.writeFileSync("packDB.json", JSON.stringify(pDatos)), "utf8";
    }
    break;
  default:
    console.log("enter a comand");
    console.log("to add name: node practica6.js add francisco");
    console.log("list names: node index.js ls");
    console.log("delet name: rm javier");
    console.log("delete name list: reset");
    break;
}