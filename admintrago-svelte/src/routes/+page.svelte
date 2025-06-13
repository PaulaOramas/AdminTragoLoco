<script>
  let cedula = '';
  let contrasena = '';

  async function validarYEnviar(e) {
    e.preventDefault();

    if (cedula.length < 10 || cedula.length > 13) {
      alert("⚠️ La cédula o RUC debe tener entre 10 y 13 caracteres.");
      return;
    }
    if (contrasena.length < 6) {
      alert("⚠️ La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      const res = await fetch(`https://eltragolocorest.runasp.net/api/Login/Usuario/${cedula}`);
      if (!res.ok) {
        alert("❌ Usuario no encontrado.");
        contrasena = '';
        return;
      }
      const data = await res.json();
      console.log("Respuesta de la API:", data);

      if (data.PASSWORD === contrasena && data.LOG_ROL === "ADM") {
        localStorage.setItem("isAdmin", "true");
        localStorage.setItem("adminCiRuc", cedula);
        window.location.href = "/dashboard";
      } else {
        alert("❌ Usuario, contraseña o rol incorrectos.");
        contrasena = '';
      }
    } catch (err) {
      console.error("Error en el fetch:", err);
      alert("❌ Error al autenticar. Verifique sus credenciales o conexión.");
      contrasena = '';
    }
  }
</script>

<!-- Bootstrap y Bootstrap Icons siguen funcionando si los dejas en app.html -->
<div class="login-card shadow-sm">
  <h3 class="text-center mb-4 fw-bold text-dark">
    <i class="bi bi-shield-lock-fill text-primary"></i> Login Administrador
  </h3>

  <form autocomplete="off" novalidate on:submit={validarYEnviar}>
    <div class="mb-3 input-group">
      <i class="bi bi-person-fill form-icon"></i>
      <input type="text" bind:value={cedula} class="form-control" placeholder="Cédula / RUC" maxlength="13" required aria-label="Cédula o RUC" />
    </div>

    <div class="mb-3 input-group">
      <i class="bi bi-key-fill form-icon"></i>
      <input type="password" bind:value={contrasena} class="form-control" placeholder="Contraseña" required aria-label="Contraseña" />
    </div>

    <button type="submit" class="btn btn-primary w-100 fw-bold mt-3">
      <i class="bi bi-box-arrow-in-right"></i> Entrar
    </button>
  </form>
</div>

