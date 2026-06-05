# Prueba de Desempeño

Aplicación SPA para la gestión de reservas internos con autenticación basada en roles y backend simulado.

## Descripción

Esta aplicación permite administrar reservas desde una única interfaz:
- Login de usuario con sesión persistente en `localStorage`
- Roles diferenciados: `ADMIN` y `USUARIOS`
- CRUD de reservas: crear, editar, eliminar y ver detalles
- Filtros de búsqueda y estado, paginación local
- Modo claro/oscuro con preferencia guardada

## Tecnologías

- `tailwindcss/vite` como estilo
- JavaScript moderno con módulos ES
- `json-server` para backend RESTful simulado
- `concurrently` para ejecutar frontend y backend en paralelo
- CSS simple para diseño responsive

## Instalación

Clona el repositorio e instala dependencias:

```bash
npm install
```

## Ejecución

Ejecuta el backend y la app juntos:

```bash
npm run dev
```

Abre el navegador en:

```text
http://localhost:5173
```

## Credenciales de prueba

- Administrador
  - email: `admin@test.com`
  - password: `A123456`

- Usuarios
  - email: `user@test.com`
  - password: `cA123456`

    - email: `user2@test.com`
    - password: `cA123456`

## Funcionalidades

- Autenticación de usuario con validación en `json-server`
- Roles y permisos:
  - `ADMIN`: puede ver, crear, editar y eliminar reservas
  - `USER`: puede ver reservas asignados y modificar solo el estado de sus reservas
- Búsqueda en tiempo real por nombre o descripción
- Filtro por estado del proyecto
- Paginación local de resultados
- Detalle de proyecto en pantalla dedicada
- Modo claro/oscuro que se persiste para el usuario

## Arquitectura del proyecto

```text
PerformanceTestJS-PDM3-C5/
├── db.json
├── index.html
├── package.json
├── README.md
├── src
│   ├── api
│   │   └── http.js
│   ├── components
│   │   ├── ReservationCard.js
│   │   └── Sidebar.js
│   ├── controllers
│   │   ├── home.controller.js
│   │   └── login.controller.js
│   ├── main.js
│   ├── router
│   │   └── router.js
│   ├── services
│   │   └── reservation.service.js
│   ├── style.css
│   ├── utils.js
│   └── views
│       ├── homeView.js
│       ├── loginView.js
│       ├── notFound.js
│       └── reservasView.js
└── vite.config.js
```


## Backend simulado

El backend se ejecuta en `http://localhost:3001` y usa `db.json` como fuente de datos.
Contiene usuarios y reservas que se consultan desde `src/api/http.js`.

## Notas adicionales

- El login persiste en `localStorage` para mantener sesión entre recargas.
- Si cambias `db.json`, reinicia `json-server` para aplicar los cambios.
- El código está dividido en módulos claros para facilitar mantenimiento.