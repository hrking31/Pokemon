// const { Router } = require("express");
// const cors = require("cors");
// // Importar todos los routers;
// // Ejemplo: const authRouter = require('./auth.js');
// const pokemonsRouter = require("./pokemonsRouter");
// const typesRouter = require("./typesRouter");

// const router = Router();
// router.use(
//   cors({
//     origin: "http://192.168.1.18:3000",
//   })
// );

// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);
// router.use("/pokemons", pokemonsRouter).use("/types", typesRouter);

// module.exports = router;
const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonsRouter = require("./pokemonsRouter");
const typesRouter = require("./typesRouter");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", pokemonsRouter).use("/types", typesRouter);

module.exports = router;
