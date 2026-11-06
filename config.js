// ====== ÚNICO ARCHIVO QUE TIENES QUE EDITAR UNA VEZ ======
const CONFIG = {
  marca: "JS Software",
  whatsapp: "58XXXXXXXXXX", // tu número con código de país, sin + ni espacios

  // Pega aquí los datos de Supabase (Project Settings → API).
  // Si los dejas vacíos, la tienda muestra los productos de ejemplo de abajo.
  supabaseUrl: "",
  supabaseKey: "",

  demo: [
    { id: 1, categoria: "Bots", nombre: "Bot de Telegram para negocios", descripcion: "Inventario, atención a clientes y cobros dentro de Telegram.", precio: 25 },
    { id: 2, categoria: "Scripts", nombre: "Optimizador de PCs lentas", descripcion: "Limpia y acelera PCs de pocos recursos con un solo archivo.", precio: 8 },
    { id: 3, categoria: "Excel", nombre: "Control de inventario", descripcion: "Entradas, salidas y existencias con alerta de poco stock.", precio: 5 },
    { id: 4, categoria: "Excel", nombre: "Ventas y gastos", descripcion: "Registra lo que vendes y gastas y mira tu ganancia del mes.", precio: 6 }
  ]
};
