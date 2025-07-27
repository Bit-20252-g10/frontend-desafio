Aplicación CRUD de Usuarios con Angular y Express
Esta es una aplicación web completa que permite la gestión de usuarios (CRUD: Crear, Leer, Actualizar, Eliminar) e incluye funcionalidades de registro e inicio de sesión. El frontend está desarrollado con Angular y el backend con Node.js (Express) y MongoDB como base de datos.

🚀 Características
Registro de Usuarios: Permite a nuevos usuarios crear una cuenta con email y contraseña.

Inicio de Sesión: Autenticación de usuarios existentes para acceder a funcionalidades protegidas.

Gestión de Usuarios (CRUD):

Crear: Añadir nuevos usuarios.

Leer: Listar todos los usuarios o ver detalles de un usuario específico.

Actualizar: Modificar la información de un usuario existente.

Eliminar: Borrar un usuario de la base de datos.

Validación: Validación de entrada tanto en el frontend como en el backend.

Autenticación JWT: Uso de JSON Web Tokens para asegurar las rutas de la API.

Base de Datos NoSQL: Persistencia de datos con MongoDB.

🛠️ Tecnologías Utilizadas
Frontend (Angular)
Angular CLI: Para la estructura y desarrollo del proyecto.

TypeScript: Lenguaje de programación.

Angular HttpClient: Para realizar solicitudes HTTP al backend.

RxJS: Para programación reactiva.

Session Storage: Para almacenar el token JWT del usuario.

## Estructura del proyecto

.
├── src/
│   ├── app/
│   │   ├── auth/           # Módulo de autenticación (componentes de login/registro)
│   │   ├── services/       # Servicios (ej. AuthService)
│   │   ├── components/     # Otros componentes de la UI
│   │   ├── interfaces/     # Definiciones de interfaces TypeScript
│   │   └── app.module.ts
│   ├── environments/
│   │   ├── environment.ts  # Variables de entorno para desarrollo
│   │   └── environment.prod.ts # Variables de entorno para producción
│   └── main.ts
├── angular.json
├── package.json
└── README.md# frontend-desafio
