import express from 'express';
import productRouter from "./routes/products.router.js";
import cartRouter from "./routes/cart.router.js";


const app = express();
const PORT = 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("hola mundo");
  });

app.use("/api/productos", productRouter)
app.use("/api/cart", cartRouter);

app.listen(PORT, () => {
  console.log(`Servidor está corriendo en el puerto ${PORT}`);
});