# Sistema de Gestión Veterinaria - VetCare

## 👥 Información del Equipo Desarrollador
* **Institución:** Instituto Superior de Formación Técnica Leopoldo Marechal
* **Carrera:** Tecnicatura Superior en Desarrollo de Software
* **Asignatura:** Prácticas Profesionalizantes I
* **Profesor:** Alexander Seling
* **Ayudante de Cátedra:** Jorge Marinoni

### Integrantes:
* **Santiago di Virgilio** - GitHub: [santy789](https://github.com/santy789)
* **Francisco Gonzalez de Almeida** - GitHub: [emanresufran](https://github.com/emanresufran)

---

## 📌 Descripción del Sistema
**VetCare** es una plataforma web desarrollada para la gestión integral de una clínica veterinaria. El sistema permite administrar la atención médica de los pacientes (mascotas), la agenda de turnos, el historial clínico y el acceso de los clientes a la información de sus mascotas. 

El sistema cuenta con un control de acceso según el rol del usuario conectado (Veterinario/Administrador vs. Cliente/Dueño de mascota).

---

## 🖥️ Pantallas Desarrolladas
1. **`index.html` (Inicio / Login):** 
   * Formulario de inicio de sesión simulado.
   * Presentación general de la veterinaria y accesos principales.
2. **`pages/turnos.html` (Gestión de Turnos):** 
   * **Cliente:** Formulario para solicitar nuevos turnos para sus mascotas.
   * **Veterinario:** Vista general de los turnos programados del día y opción para cambiar su estado.
3. **`pages/mis-mascotas.html` (Mis Mascotas / Pacientes):** 
   * **Cliente:** Listado de sus mascotas registradas con ficha básica.
   * **Veterinario:** Ficha clínica de los pacientes atendidos e historial de consultas.
4. **`pages/historial.html` (Historial Clínico / Consultas):** 
   * Muestra de atenciones previas, diagnósticos y tratamientos asignados por el profesional.

---

## ⚙️ Funcionalidades Implementadas (Hito 3)
* **Modelado de Datos JSON (`data/datos.json`):** Estructura que almacena usuarios (médicos y clientes), mascotas (pacientes) y turnos asignados[cite: 1].
* **Inicio de Sesión Simulado:** Autenticación por correo y contraseña validada contra `datos.json`[cite: 1].
* **Persistencia con `localStorage`:** Modificación y creación de turnos guardados directamente en el almacenamiento local del navegador[cite: 1].
* **Renderizado Dinámico mediante JS:** Generación dinámica de tablas de turnos y fichas de mascotas manipulate el DOM con `fetch()` y Web APIs[cite: 1].
* **Adaptación de Interfaz según Rol:** Vistas diferenciadas dependiendo de si ingresa un profesional veterinario o un cliente[cite: 1].
