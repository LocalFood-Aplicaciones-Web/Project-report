document.addEventListener("DOMContentLoaded", () => {
  // Botón "Olvidaste tu contraseña?" en login.html
  const forgotLink = document.getElementById("forgot-link");
  if (forgotLink) {
    forgotLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "forgot-password.html";
    });
  }

  // Botón "Siguiente" en forgot-password.html
  const nextBtn = document.getElementById("next-btn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      // 🚨 Aquí en el futuro deberías validar el código
      window.location.href = "reset-password.html";
    });
  }

  // Botón "Guardar contraseña" en reset-password.html
  const saveBtn = document.getElementById("save-btn");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      // 🚨 Aquí en el futuro deberías guardar la contraseña
      alert("¡Contraseña restablecida con éxito!");
      window.location.href = "login.html";
    });
  }
});
