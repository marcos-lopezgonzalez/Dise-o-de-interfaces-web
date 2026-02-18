# Examen DIW - Diseño de Interfaces Web

## 📋 Descripción

Este repositorio contiene 4 ejercicios prácticos de diseño web para evaluar competencias en CSS y Tailwind CSS.

## 🎯 Objetivos

- Aplicar estilos CSS personalizados para crear layouts responsivos
- Utilizar Tailwind CSS con clases de utilidad
- Implementar diseños mobile-first
- Crear componentes visuales coherentes y accesibles

## 📂 Estructura del Proyecto

```
Examen DIW/
├── ej1-css-landing/          # Ejercicio 1: Landing page con CSS
│   ├── ej1-landing.html
│   └── ej1-landing.css
├── ej2-css-precios/          # Ejercicio 2: Página de precios con CSS
│   ├── ej2-precios.html
│   ├── ej2-precios.css
│   └── img/
│       ├── plan-basico.jpeg
│       ├── plan-pro.jpeg
│       └── plan-premium.jpeg
├── ej3-tailwind-landing/     # Ejercicio 3: Landing page con Tailwind
│   ├── ej3-landing-tailwind.html
│   └── tailwind.css
├── ej4-tailwind-precios/     # Ejercicio 4: Página de precios con Tailwind
│   ├── ej4-precios-tailwind.html
│   ├── tailwind.css
│   └── img/
│       ├── plan-basico.jpeg
│       ├── plan-pro.jpeg
│       └── plan-premium.jpeg
└── README.md
```

## 📝 Ejercicios

### Ejercicio 1: Landing Page con CSS

**Archivo:** `ej1-css-landing/ej1-landing.html`

Crea una página de inicio para la aplicación "Taskly" aplicando estilos CSS en el archivo `ej1-landing.css`.

**Requisitos:**

- Header con logo y menú de navegación horizontal
- Sección hero centrada y llamativa
- Sección de características con 3 tarjetas
- Footer con información del proyecto
- Diseño responsive (mobile y desktop)

---

### Ejercicio 2: Página de Precios con CSS

**Archivo:** `ej2-css-precios/ej2-precios.html`

Diseña una página de planes de precios con tarjetas que incluyen imágenes.

**Requisitos:**

- Cabecera de sección centrada
- 3 tarjetas de planes con imágenes
- La tarjeta "Pro" debe destacar visualmente
- Layout en columnas (desktop) y apilado (mobile)
- Botones de acción en cada tarjeta

**Imágenes incluidas:**

- `plan-basico.jpeg`
- `plan-pro.jpeg`
- `plan-premium.jpeg`

---

### Ejercicio 3: Landing Page con Tailwind

**Archivo:** `ej3-tailwind-landing/ej3-landing-tailwind.html`

Replica el diseño del Ejercicio 1 utilizando **solo clases de Tailwind CSS**.

**Importante:**
⚠️ Antes de comenzar, sustituye el archivo `tailwind.css` vacío por tu archivo de Tailwind CSS completo (el que usas en clase) o configura Tailwind con tu archivo descargado en clase.

**Requisitos:**

- Mismo diseño que el Ejercicio 1
- Usar únicamente clases de utilidad de Tailwind
- No escribir CSS personalizado

---

### Ejercicio 4: Página de Precios con Tailwind

**Archivo:** `ej4-tailwind-precios/ej4-precios-tailwind.html`

Replica el diseño del Ejercicio 2 utilizando **solo clases de Tailwind CSS**.

**Importante:**
⚠️ Antes de comenzar, sustituye el archivo `tailwind.css` vacío por tu archivo de Tailwind CSS completo (el que usas en clase) o configura Tailwind con tu archivo descargado en clase.

**Requisitos:**

- Mismo diseño que el Ejercicio 2
- Usar únicamente clases de utilidad de Tailwind
- La tarjeta "Pro" debe seguir destacando
- Imágenes responsive

---

## 📐 Consideraciones de Diseño

### Responsive Design

- **Mobile first:** Diseña primero para móvil
- **Breakpoint recomendado:** 768px para cambiar de mobile a desktop
- **Prueba en diferentes tamaños:** Usa las herramientas de desarrollo del navegador

### Espaciado y Layout

- Usa márgenes y padding consistentes
- Centra contenido para evitar líneas de texto muy largas
- Deja espacio entre elementos relacionados

### Colores y Contraste

- Asegura suficiente contraste para legibilidad
- Usa colores que destaquen los CTAs (Call To Action)
- Mantén coherencia en la paleta de colores

### Imágenes

- Las imágenes deben ser responsive (`width: 100%` o clases de Tailwind)
- Mantén las proporciones originales
- Usa `object-fit` `object-cover` si es necesario

---

## ✅ Criterios de Evaluación

| Criterio          | Peso | Descripción                                   |
| ----------------- | ---- | --------------------------------------------- |
| **Funcionalidad** | 30%  | El diseño cumple los requisitos especificados |
| **Responsive**    | 25%  | Funciona correctamente en mobile y desktop    |
| **Código limpio** | 20%  | CSS/HTML bien estructurado y comentado        |
| **Diseño visual** | 15%  | Estética, espaciado, alineación               |
| **Creatividad**   | 10%  | Aportes personales que mejoran el diseño      |

---

## 🛠️ Herramientas Recomendadas

- **Editor:** Visual Studio Code
- **Extensiones útiles:**
  - Live Server
  - Tailwind CSS IntelliSense
  - HTML CSS Support
  - Prettier
- **Navegador:** Chrome/Firefox con DevTools

---

## 🐛 Solución de Problemas

### Las imágenes no se cargan

- Verifica que las rutas sean correctas: `img/plan-basico.jpeg` (no `.jpg`)
- Comprueba que las carpetas `img/` existan
- Usa rutas relativas, no absolutas

### Tailwind no funciona

- Asegúrate de que el archivo `tailwind.css` no esté vacío
- Verifica que el `<link>` apunte al archivo correcto

### El diseño no es responsive

- Revisa que uses media queries en CSS (`@media`)
- En Tailwind, usa prefijos responsive (`md:`, `lg:`)
- Prueba en DevTools con diferentes tamaños de pantalla

---

## 👤 Información del Curso

**Curso:** Diseño de Interfaces Web (DIW)  
**Curso académico:** 2024/2025  
**Fecha del examen:** 27 de noviembre de 2025

---

## 📄 Licencia

Este material es parte de un examen académico y está destinado únicamente para fines educativos.

---

## 💬 Contacto

Si tienes dudas durante la realización del examen, consulta con el profesor/a.

---

**¡Buena suerte! 🚀**
