# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Estructura de carpetas
```
src/
├── components/
│   ├── shared/
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Table/
│   │   └── ...
│   ├── docentes/
│   │   └── SpecificComponentForDirector/
│   ├── generaciones/
│   │   └── SpecificComponentForTeachers/
│   └── studiantes/
│       └── SpecificComponentForStudents/
├── pages/
│   ├── DC-docentesDashboard/
│   │   └── index.tsx
│   ├── DC-genracionesDashboard/
│   │   └── index.tsx
│   └── DC-estudiantesDashboard/
│       └── index.tsx
├── utils/
│   ├── validators.ts
│   └── helpers.ts
├App.tsx
├main.tsx

```

# Como ejecutar la app

1. Clonar el repositorio de github 
````
  git clone https://github.com/offeredelmo/StudentsAnalitycsUI.git
````
2. intalar dependencias 
```
  npm install
```
3. Ejecutar app
```
  npm run dev 
```