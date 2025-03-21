export default async function Home() {
  let message = "Cargando...";

  try {
    const res = await fetch("http://localhost:4000/api/hello", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Error en la respuesta del servidor");

    const data = await res.json();
    message = data.message;
  } catch (error) {
    console.error(error);
    message = "Error al obtener datos";
  }

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontend con Next.js 15 🚀</h1>
      <p>Respuesta del backend:</p>
      <strong>{message}</strong>
    </main>
  );
}
