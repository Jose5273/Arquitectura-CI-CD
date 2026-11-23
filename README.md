Proyecto Full-Stack: Arquitectura y CI/CD

Este repositorio contiene una aplicación web profesional desarrollada para presentar un proyecto de arquitectura de software, integrando diseño, documentación y despliegue continuo (CI/CD) en múltiples plataformas.

Descripción General

La aplicación es una Single Page Application (SPA) construida con **React**, **Vite** y **Tailwind CSS**, que consume una API REST desarrollada en **Node.js** y **Express**. El proyecto está diseñado para mostrar de forma interactiva:
1.  **Inicio:** Estado de conexión con el backend en tiempo real.
2.  **Arquitectura:** Diagrama y explicación de la estructura del proyecto.
3.  **Documento:** Visualización incrustada de un informe en PDF.
4.  **Diapositivas:** Vista previa de la presentación del proyecto.
5.  **Figma:** Integración de un prototipo de diseño (opcional según la vista).

Tecnologías Utilizadas

*   **Frontend:** React 18, TypeScript, Vite, Tailwind CSS v4, React Router.
*   **Backend:** Node.js, Express, CORS.
*   **CI/CD:** GitHub Actions (GitHub Pages) y GitLab CI/CD (GitLab Pages).
*   **Hosting Backend:** Render.
*   **Control de Versiones:** Git.

Despliegue en Vivo

*   **GitHub Pages:** [https://Jose5273.github.io/Arquitectura-CI-CD/](https://Jose5273.github.io/Arquitectura-CI-CD/)
*   **GitLab Pages:** [https://arquitectura-ci-cd-133ce9.gitlab.io/Arquitectura-CI-CD/](https://arquitectura-ci-cd-133ce9.gitlab.io/Arquitectura-CI-CD/)
*   **Backend (API):** [https://arquitectura-ci-cd.onrender.com](https://arquitectura-ci-cd.onrender.com)

*(Nota: El backend en Render usa el plan gratuito, por lo que puede tardar hasta 60 segundos en "despertar" tras un periodo de inactividad).*

Instalación y Uso Local

Sigue estos pasos para ejecutar el proyecto en tu computadora.

Requisitos Previos
*   Node.js (v20 o superior)
*   Git

Clonar el repositorio
```bash
git clone https://github.com/Jose5273/Arquitectura-CI-CD.git
cd Arquitectura-CI-CD
