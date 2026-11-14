# Estudio Nodo — Sitio web

Sitio profesional para el estudio de arquitectura ficticio **Estudio Nodo**.

Diseño editorial, minimalista y contemporáneo. Construido con React + Vite.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación local

```bash
cd estudio-nodo
npm install
npm run dev
```

Abre la URL que muestra Vite (normalmente `http://localhost:5173`).

## Build de producción

```bash
npm run build
```

Los archivos generados quedan en `dist/`.

## Imágenes

Coloca las fotografías en `public/images/` con estos nombres exactos:

- `HERO_ARQUITECTURA.jpg`
- `PROYECTO_VIVIENDA.jpg`
- `PROYECTO_OFICINA.jpg`
- `PROYECTO_REFORMA.jpg`
- `ESTUDIO_EQUIPO.jpg`

Si no están presentes, el sitio muestra placeholders elegantes con el nombre del archivo.

## Despliegue en GitHub

1. Crea un repositorio nuevo en GitHub.
2. Desde la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Sitio Estudio Nodo"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/estudio-nodo.git
git push -u origin main
```

## Despliegue en Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión con GitHub.
2. Importa el repositorio.
3. Framework preset: **Vite**.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

No se requieren variables de entorno. El formulario de contacto es de demostración (sin backend).

## Estructura

```
estudio-nodo/
├── public/
│   └── images/          # Colocar aquí las 5 fotografías
├── src/
│   ├── components/      # Header, Footer, ImagePlaceholder
│   ├── data/            # Datos de proyectos
│   ├── pages/           # Home y detalle de proyecto
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Notas

- Rutas: `/` (inicio) y `/proyectos/:id` (detalle).
- Paleta: azul profundo `#172C3B`, beige `#D2BFA5`, blanco cálido `#F3F0E9`, verde grisáceo `#87958A`.
- Tipografía: Manrope (Google Fonts).
- Iconos: Material Symbols Outlined.
