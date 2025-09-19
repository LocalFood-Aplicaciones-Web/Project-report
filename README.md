<h1 align="center"> UNIVERSIDAD PERUANA DE CIENCIAS APLICADAS </h1>

<h2 align="center"> INGENIERIA DE SOFTWARE</h2>
<h2 align="center"> CICLO 2025-2</h2>

<div align="center">
    <img src="./Assets/logo-upc.png">
</div>

<br>
<h3 align="center"> Aplicaciones Web - WS51 </h3>
<h3 align="center"> Profesor del Curso: Rafael Oswaldo Castro Veramendi </h3>
<h3 align="center"> "INFORME DE TRABAJO FINAL"</h3>
<h3 align="center"> Nombre de Startup: Location   </h3>
<h3 align="center"> Nombre del Producto: LocalFood  </h3>

<div align="center">

| Miembro                         |   Código   |
| :------------------------------ | :--------: |
| Fajardo Monrroy, Walter Luis    | U202221632 |
|                                 |            |
|                                 |            |
|                                 |            |
|                                 |            |

</div>
<h3 align="center"> Agosto - 2025   </h3>

## REGISTRO DE VERSIONES

| Versión | Fecha    | Autor       | Descripción de Modificación            |
| ------- | -------- | ----------- | -------------------------------------- |
| 0.1     | 04/09/25 | Walter Fajardo   | Desarrollo de la Estructura del informe |
|         |          |                  |                                               |
|         |          |                  |                                               |

## PROJECT REPORT COLLABORATION INSIGHTS

URL del repositorio del project Report : 

**_TB1_**
Entregrable 1 o TB1 : (25/04/25)

![commit-report]()

![branch-report]( )

## CONTENIDO

### Tabla de contenido

- [Capítulo I: Introducción](#capítulo-i-introducción)
  - [1.1. Startup Profile](#11-startup-profile)
    - [1.1.1. Descripción de la Startup](#111-descripción-de-la-startup)
    - [1.1.2. Perfiles de integrantes del equipo](#112-perfiles-de-integrantes-del-equipo)
  - [1.2. Solution Profile](#12-solution-profile)
    - [1.2.1 Antecedentes y problemática](#121-antecedentes-y-problemática)
    - [What (¿Qué?)](#what-qué)
    - [When (¿Cuándo?)](#when-cuándo)
    - [Where (¿Donde?)](#where-donde)
    - [Who (¿Quienes?)](#who-quienes)
    - [Why (¿Por qué?)](#why-por-qué)
    - [How (¿Cómo?)](#how-cómo)
    - [How much (¿Cuánto?)](#how-much-cuánto)
    - [1.2.2 Lean UX Process.](#122-lean-ux-process)
      - [1.2.2.1. Lean UX Problem Statements.](#1221-lean-ux-problem-statements)
      - [1.2.2.2. Lean UX Assumptions.](#1222-lean-ux-assumptions)
      - [1.2.2.3. Lean UX Hypothesis Statements.](#1223-lean-ux-hypothesis-statements)
      - [1.2.2.4. Lean UX Canvas.](#1224-lean-ux-canvas)
  - [1.3. Segmentos objetivo.](#13-segmentos-objetivo) - [**a)Comensales:**](#comensales) - [Segmentación Geográfica:](#segmentación-geográfica) - [Segmentación Demográfica:](#segmentación-demográfica) - [Segmentación Psicográfica:](#segmentación-psicográfica) - [Segmentación Conductual:](#segmentación-conductual) - [**b) Gerentes/Dueños de Locales:**](#b-gerentesdueñoslocales) - [Segmentación Geográfica:](#segmentación-geográfica-1) - [Segmentación Demográfica:](#segmentación-demográfica-1) - [Segmentación Psicográfica:](#segmentación-psicográfica-1) - [Segmentación Conductual:](#segmentación-conductual-1)
- [Capítulo II: Requirements Elicitation \& Analysis](#capítulo-ii-requirements-elicitation--analysis)
  - [2.1. Competidores.](#21-competidores)
    - [2.1.1. Análisis competitivo.](#211-análisis-competitivo)
- [Panorama de análisis competitivo](#panorama-de-análisis-competitivo)
  - [Análisis FODA](#análisis-foda)
    - [2.1.2. Estrategias y tácticas frente a competidores.](#212-estrategias-y-tácticas-frente-a-competidores)
  - [2.2. Entrevistas.](#22-entrevistas)
    - [2.2.1. Diseño de entrevistas.](#221-diseño-de-entrevistas)
    - [Preguntas para comensales:](#preguntas-para-comensales)
    - [Preguntas para dueños de locales](#preguntas-para-para-dueños-de-locales)
    - [2.2.2. Registro de entrevistas.](#222-registro-de-entrevistas)
    - [Segmento 1:Comensales](#segmento-1comensales)
      - [Entrevista:](#entrevista-1)
      - [Entrevista:](#entrevista-2)
      - [Entrevista:](#entrevista-3)
      - [Segmento 2:Dueños de locales](#segmento-2dueños-de-locales)
      - [Entrevista:](#entrevista-4)
      - [Entrevista:](#entrevista-5)
      - [Entrevista:](#entrevista-6)
    - [2.2.3. Análisis de entrevistas.](#223-análisis-de-entrevistas)
  - [2.3. Needfinding.](#23-needfinding)
    - [2.3.1. User Personas.](#231-user-personas)
    - [2.3.2. User Task Matrix.](#232-user-task-matrix)
    - [2.3.3. User Journey Mapping.](#233-user-journey-mapping)
    - [2.3.4. Empathy Mapping.](#234-empathy-mapping)
    - [2.3.5. As-is Scenario Mapping.](#235-as-is-scenario-mapping)
  - [2.4. Ubiquitous Language.](#24-ubiquitous-language)
- [Capítulo III: Requirements Specification](#capítulo-iii-requirements-specification)
  - [3.1. To-Be Scenario Mapping.](#31-to-be-scenario-mapping)
  - [3.2. User Stories.](#32-user-stories)
  - [3.3. Impact Mapping.](#33-impact-mapping)
  - [3.4. Product Backlog.](#34-product-backlog)
- [Capítulo IV: Product Design](#capítulo-iv-product-design)
  - [4.1. Style Guidelines.](#41-style-guidelines)
    - [4.1.1. General Style Guidelines.](#411-general-style-guidelines)
    - [4.1.2. Web Style Guidelines](#412-web-style-guidelines)
  - [4.2. Information Architecture](#42-information-architecture)
  - [1. Página de Inicio](#1-página-de-inicio)
  - [2.                 ](#2-)
  - [                   ](#3-)
  - [4.                 ](#4-)
    - [4.2.1. Organization Systems](#421-organization-systems)
    - [4.2.2. Labeling Systems](#422-labeling-systems)
    - [4.2.3. SEO Tags and Meta Tags](#423-seo-tags-and-meta-tags)
    - [4.2.4. Searching Systems](#424-searching-systems)
    - [4.2.5. Navigation Systems](#425-navigation-systems)
  - [4.3. Landing Page UI Design.](#43-landing-page-ui-design)
    - [4.3.1. Landing Page Wireframe.](#431-landing-page-wireframe)
    - [4.3.2. Landing Page Mock-up.](#432-landing-page-mock-up)
  - [4.4. Web Applications UX/UI Design.](#44-web-applications-uxui-design)
    - [4.4.1. Web Applications Wireframes.](#441-web-applications-wireframes)
    - [4.4.2. Web Applications Wireflow Diagrams.](#442-web-applications-wireflow-diagrams)
    - [4.4.2. Web Applications Mock-ups.](#442-web-applications-mock-ups)
    - [4.4.3. Web Applications User Flow Diagrams.](#443-web-applications-user-flow-diagrams)
  - [4.5. Web Applications Prototyping.](#45-web-applications-prototyping)
  - [4.6. Domain-Driven Software Architecture.](#46-domain-driven-software-architecture)
    - [4.6.1. Software Architecture Context Diagram.](#461-software-architecture-context-diagram)
    - [4.6.2. Software Architecture Container Diagrams.](#462-software-architecture-container-diagrams)
    - [4.6.3. Software Architecture Components Diagrams.](#463-software-architecture-components-diagrams)
  - [4.7. Software Object-Oriented Design.](#47-software-object-oriented-design)
    - [4.7.1. Class Diagrams.](#471-class-diagrams)
    - [4.7.2. Class Dictionary.](#472-class-dictionary)
  - [4.8. Database Design.](#48-database-design)
    - [4.8.1. Database Diagram.](#481-database-diagram)
- [Capítulo V: Product Implementation, Validation \& Deployment](#capítulo-v-product-implementation-validation--deployment)
  - [5.1. Software Configuration Management.](#51-software-configuration-management)
    - [5.1.1. Software Development Environment Configuration.](#511-software-development-environment-configuration)
    - [5.1.2. Source Code Management.](#512-source-code-management)
    - [5.1.3. Source Code Style Guide \& Conventions.](#513-source-code-style-guide--conventions)
    - [5.1.4. Software Deployment Configuration.](#514-software-deployment-configuration)
  - [5.2. Landing Page, Services \& Applications Implementation.](#52-landing-page-services--applications-implementation)
    - [5.2.1. Sprint 1](#521-sprint-1)
      - [5.2.1.1. Sprint Planning 1.](#5211-sprint-planning-1)
      - [5.2.1.2. Aspect Leaders and Collaborators.](#5212-aspect-leaders-and-collaborators)
      - [5.2.1.3. Sprint Backlog n.](#5213-sprint-backlog-n)
      - [5.2.1.4. Development Evidence for Sprint Review.](#5214-development-evidence-for-sprint-review)
      - [5.2.1.5. Execution Evidence for Sprint Review.](#5215-execution-evidence-for-sprint-review)
      - [5.2.1.6. Services Documentation Evidence for Sprint Review.](#5216-services-documentation-evidence-for-sprint-review)
      - [5.2.1.7. Software Deployment Evidence for Sprint Review.](#5217-software-deployment-evidence-for-sprint-review)
      - [5.2.1.8. Team Collaboration Insights during Sprint.](#5218-team-collaboration-insights-during-sprint)
      - [Colaboración y Desarrollo de Actividades](#colaboración-y-desarrollo-de-actividades)


### Tabla de imagenes

## STUDENT OUTCOME

<table>
    <tr>
        <th>CRITERIO ESPECIFICO</th>
        <th>ACCIONES REALIZADAS</th>
        <th>CONCLUSIONES</th>
    </tr>
    <tr>
        <th>Trabaja en equipo para proporcionar liderazgo en forma conjunta</th>
        <td>
        </td>
        <td>
        </td>
    </tr>
    <tr>
        <th>Crea un entorno colaborativo e inclusivo, establece metas, planifica tareas y cumple objetivos</th>
        <td>
        </td>
    </tr>
</table>


# Capítulo I: Introducción

## 1.1. Startup Profile

### 1.1.1. Descripción de la Startup



### 1.1.2. Perfiles de integrantes del equipo

                                                                                                                                                                                                                                                       |

## 1.2. Solution Profile

### 1.2.1 Antecedentes y problemática



### What (¿Qué?)



### When (¿Cuándo?)


### Where (¿Donde?)



### Who (¿Quienes?)



### Why (¿Por qué?)



### How (¿Cómo?)



### How much (¿Cuánto?)



### 1.2.2 Lean UX Process.

#### 1.2.2.1. Lean UX Problem Statements.





#### 1.2.2.2. Lean UX Assumptions.

**Business Assumptions**



**User Assumptions**

¿Quiénes son nuestros usuarios?


¿Cómo se integra nuestro producto en su vida cotidiana?


¿Qué desafíos enfrenta el producto y cómo pueden solucionarse?


¿Cuándo y de qué manera se utiliza la plataforma?


¿Qué funcionalidades son esenciales?



¿Cómo debe lucir y comportarse la plataforma?



#### 1.2.2.3. Lean UX Hypothesis Statements.


#### 1.2.2.4. Lean UX Canvas.

<table>
  <tr>

  </tr>
</table>

## 1.3. Segmentos objetivo.

##### **a)Comensales:**


###### Segmentación Geográfica:

- **Región:** 
- **Distribución:** 

###### Segmentación Demográfica:

- **Edad:** 
- **Nivel Socioeconómico:** 
- **Ocupación:** 

###### Segmentación Psicográfica:

- **Estilo de Vida:** 
- **Valores y creencias:** 

###### Segmentación Conductual:

- **Beneficios Buscados:** 
- **Uso del Producto:** 

##### **b) Dueños de locales/Gerentes:**


###### Segmentación Geográfica:

- **Región:** 
- **Distribución:** 

###### Segmentación Demográfica:

- **Edad:**
- **Nivel Socioeconómico:**
- **Ocupación:** 

###### Segmentación Psicográfica:

- **Estilo de Vida:** 
- **Valores y creencias:** 

###### Segmentación Conductual:

- **Beneficios Buscados:** 
- **Uso del Producto:** 

# Capítulo II: Requirements Elicitation & Analysis

## 2.1. Competidores.

### 2.1.1. Análisis competitivo.



# Panorama de análisis competitivo

**¿Por qué llevar a cabo este análisis?**  


                         |


## Análisis FODA



### 2.1.2. Estrategias y tácticas frente a competidores.



## 2.2. Entrevistas.

### 2.2.1. Diseño de entrevistas.

### Preguntas para Comensales:

1. 

2. 

3. 

4. 

5. 

6. 

7. 

8. 

9. 

10. 

### Preguntas para Para Dueños de Locales/Gerentes

1. 

2. 

3. 

4. 

5. 

6. 

7. 

8. 

9. 

10. 

### 2.2.2. Registro de entrevistas.

#### Segmento 2:Comensales

![Entrevista 1]()

- Entrevista N°1: 
- Sexo: 
- Edad:

- Ubicación:

#### Entrevista:

link: 

**Resumen**


![Entrevista 2]()

- Entrevista N°2: 
- Sexo: 
- Edad: 

- Ubicación:

#### Entrevista:

link: 

**Resumen:**


#### Segmento 2:Dueños de locales

![Entrevista 3]()

- Entrevista N°3: 
- Sexo: 
- Edad: 

- Ubicación:

#### Entrevista:

link: 

**Resumen:**


![Entrevista 4]()

- Entrevista N°4: 
- Sexo: 
- Edad: 

- Ubicación:

#### Entrevista:

link: 

**Resumen**


### 2.2.3. Análisis de entrevistas.

**Segmento 1: Comensales**
**Entrevista 1:**
**Análisis de la entrevista:** 

**Entrevista 2:**
**Análisis de la entrevista:** 

**Segmento 2: Dueños de locales**

**Entrevista 1:**
**Análisis de la entrevista:** 

**Entrevista 2:**
**Análisis de la entrevista:** 

## 2.3. Needfinding.

### 2.3.1. User Personas.

Descripciòn: 

**Comensal:**
![ ]( )
**Dueño de local:**
![ ]( )

### 2.3.2. User Task Matrix.

Descripción:
**Comensal:(Nombre)**


**Dueño de local: (Nombre)**


### 2.3.3. User Journey Mapping.

**USER PERSONA: (Nombre)**
![Journey Map 1]()
Descripción:

**USER PERSONA: (Nombre)**
![Journey Map 2]()
Descripción:

### 2.3.4. Empathy Mapping.

**USER PERSONA: (Nombre)**
![Empathy Map 1]()

**USER PERSONA: (Nombre)**
![Empathy Map 2]()

### 2.3.5. As-is Scenario Mapping.

**USER PERSONA: (Nombre)**
![Scenario Mapping 1]()
Descripción:

**USER PERSONA: (Nombre)**
![Scenario Mapping 1]()
Descripción:

## 2.4. Ubiquitous Language.

Descripción:

**Ubiquitous Language – LOCALFOOD**

1. 

2. 

3. 

4. 

5. 

6. 

7. 

8. 

9. 

# Capítulo III: Requirements Specification

## 3.1. To-Be Scenario Mapping.

- Comensales

![comensales-to-be-scenario-map]( )

- Dueños de locales

![dueños-de-locales-to-be-scenario-map]( )

## 3.2. User Stories.

| EPICA                   | ID EPICA |
| ----------------------- | -------- |
|                         |          |
|                         |          |
|                         |          |
|                         |          |
|                         |          |
|                         |          |
|                         |          |
|                         |          |


| Epic/ Story ID | Titulo                                       | Description                                                                                                                                                                               | Criterios de Aceptacion                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Relacion con (Epic ID) |
| -------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |


## 3.3. Impact Mapping.

![impact-mappig](./assets/Impact-map.png)

## 3.4. Product Backlog.

| # Orden | User ID | Título                                   | Descripción                                                                                                                                                          | Story Points |
| ------- | ------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1       | US0X    |                 |     | 8            |


link de Trello : 

# Capítulo IV: Product Design

## 4.1. Style Guidelines.

Descripción:

### 4.1.1. General Style Guidelines.

**Task:**  

**LocalFood** Descripción:

**Insight:**  


**Branding:**  




**Typography:**  




**Íconos y Elementos Gráficos:**  


### 4.1.2. Web Style Guidelines

**Landing Page:**  
DSescripción:

**Diseño Responsivo:**  


**Espaciado y Alineación:**  


**Colores y Contraste:**  


**Imágenes y Fondos:**  


---

## 4.2. Information Architecture



## 1. Página de Inicio

- **XXXXX:**  


- **XXXXX:**  

- **XXXXX:**  


## 2. XXXXX

- **XXXXX:**  


- **XXXXX:**  


- **XXXXX:**  


## 3. XXXXX

- **XXXXX:**  


- **XXXXX:**  


- **XXXXX:**  


## 4. XXXXX

- **XXXXX:**  


- **XXXXX:**  


---

### 4.2.1. Organization Systems

1. **Categorización de la Información:**

   - **XXXXX:**  


   - **XXXXX:**  


2. **Filtros y Búsqueda:**

   - **XXXXX:**  
     Descripción:

   - **XXXXX:**  
     Descripción:

3. **Interfaz de Usuario Intuitiva:**

   - **XXXXX:**  
     Descripción:

   - **XXXXX:**  
     Descripción:

4. **Funcionalidades Específicas:**

   - **XXXXX:**  
     Descripción:

   - **XXXXX:**  
     Descripción:

---

### 4.2.2. Labeling Systems

Descripción:

- 
- 
- 
- 
- 
- 
- 

---

### 4.2.3. SEO Tags and Meta Tags

Cada página de la plataforma incluirá:

- 
- 
- 

---

### 4.2.4. Searching Systems

Descripción:

1. **XXXXX:**  
   Ej.: 

2. **XXXXX:**  
   Descripción:

   - 
   - 
   - 
   - 
   -  

---

### 4.2.5. Navigation Systems

Descripción:

1. **XXXXX:**  
   Descripción:

2. **XXXXX:**  
   Descripción:

3. **XXXXX:**  
   Descripción:

4. **XXXXX:**  
   Descripción:.

5. **XXXXX:**  
   Descripción:

## 4.3. Landing Page UI Design.

### 4.3.1. Landing Page Wireframe.

**XXXXX: Section**



**XXXXX: Section**



**XXXXX: Section**



**XXXXX: Section**



**XXXXX: Section**


**XXXXX: Section**



### 4.3.2. Landing Page Mock-up.

**XXXXX: Section**



**XXXXX: Section**



**XXXXX: Section**



**XXXXX: Section**



**XXXXX: Section**



**XXXXX: Section**



## 4.4. Web Applications UX/UI Design.

### 4.4.1. Web Applications Wireframes.

**XXXXX:**



**XXXXX:**



**XXXXX:**



**XXXXX:**


**XXXXX:**


**XXXXX:**



**XXXXX:**



**XXXXX:**



**XXXXX:**



**XXXXX:**



**XXXXX:**



**XXXXX:**



**XXXXX:**



**XXXXX:**



### 4.4.2. Web Applications Wireflow Diagrams.

### 4.4.2. Web Applications Mock-ups.

**XXXXX:**



**XXXXX:**



**XXXXX:**



**XXXXX:**



**XXXXX:**


**XXXXX:**



**XXXXX:**



**XXXXX:**



**XXXXX:**



**XXXXX:**



**XXXXX:**



**XXXXX:**



**XXXXX:**



**XXXXX:**



### 4.4.3. Web Applications User Flow Diagrams.

## 4.5. Web Applications Prototyping.



## 4.6. Domain-Driven Software Architecture.

### 4.6.1. Software Architecture Context Diagram.



### 4.6.2. Software Architecture Container Diagrams.



### 4.6.3. Software Architecture Components Diagrams.



## 4.7. Software Object-Oriented Design.

### 4.7.1. Class Diagrams.



### 4.7.2. Class Dictionary.

| Clase        | Descripción                                                                                                                                                 |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |


## 4.8. Database Design.

### 4.8.1. Database Diagram.



# Capítulo V: Product Implementation, Validation & Deployment

## 5.1. Software Configuration Management.

A continuación, se describe el proceso por el cual organizamos, gestionamos y controlamos los cambio de desarrollo de LocalFood.

### 5.1.1. Software Development Environment Configuration.

Gestión de las necesidades

- Trello: Herramienta utilizada para gestionar el flujo de trabajo de proyectos principalmente marcos en red de trabajos ágiles. El segmento para visualizar y actualizar el estado real de las tareas e historias de usuario pertenecientes al sprint a desarrollado.

  Ruta de referencia: https://trello.com/es

Diseño UX/UI

- Figma: Plataforma de elaboración de prototipos y edición gráfica, principalmente utilizada para el diseño digital. En el caso del proyecto, se utilizó para el prototipado de la aplicación y sus versiones de Desktop y Mobile Web Browser.

  Ruta de referencia: https://www.figma.com/login 

- Lucidchart: Aplicación para diagramar flujos. Será empleado para el diseño de flujos de cable, flujos de usuario y el diagrama de clases asociadas a la aplicación.

  Ruta de referencia: https://www.lucidchart.com/ 
  
Desarrollo de software

- Visual Studio Code: El equipo de trabajo seleccionó un entorno de desarrollo integrado (IDE) para la creación y compilación de los factores de control por dominio. Este IDE aporta valor al proyecto, ya que permite incorporar extensiones útiles, ofrece soporte para la edición de texto en diversos lenguajes de programación, es compatible con múltiples sistemas operativos y brinda otros beneficios adicionales.

  Ruta de referencia: https://code.visualstudio.com/ 

- HTML5: HyperText Markup Language, o siglas por sus HTML, es un lenguaje de etiquetado para páginas web. Será empleado en el desarrollo del proyecto para la presentación del contenido en la aplicación.

  Ruta de referencia: https://www.w3schools.com/html/html5-syntax.asp
  
- CSS: Hojas de estilo en cascada es un lenguaje que maneja el diseño y presentación de las páginas web, el que va de la mano con HTML.

  Ruta de referencia: https://google.github.io/styleguide/htmlcssguide.html 

Implementación de software

- Git: Una herramienta de control de versiones que facilitan el registro y la gestión de las versiones distintas del programa. Su propósito es mantener un historial de cambios y simplificar el corrección de errores. Los integrantes del equipo A través de la línea de comandos en sus sistemas locales.

  Ruta de referencia: https://git-scm.com/ 

  Documentación y gestión de proyectos de software

- Github: Una plataforma en la nube que hospedará los repositorios de código del proyecto. Permitir la colaboración en tiempo real y la revisión de las contribuciones de cada miembro del equipo. Los integrantes del equipo se puede acceder a través de sus navegadores web.

  Ruta de referencia:https://github.com/ 

### 5.1.2. Source Code Management.

El proyecto utiliza el flujo de trabajo GitFlow para la gestión de versiones y GitHub como plataforma de alojamiento y administración del código. A continuación, se presenta cómo se implementa este modelo.

**Flujo de trabajo GitFlow**

Flujo de Trabajo GitFlow para el Desarrollo de LocalFood

El proyecto adopta el modelo GitFlow, una estrategia de ramificación basada en Git diseñada para optimizar la colaboración y el control de versiones en equipos de desarrollo. Este enfoque organiza el trabajo en ramas específicas, una integración fluida de nuevas funcionalidades y una gestión eficiente de lanzamientos.


Ramas Principales

- main(principal)

  - Contiene el código estable y listo para la producción, correspondiente a las versiones oficiales de LocalFood

  - Cada release se marca con etiquetas semánticas (ej. v1) para facilitar el rastreo y la aplicación de las actualizaciones.

- develop(rama de desarrollo)

  - Alberga la versión más reciente en estado de preproducción, donde se integran todas las funcionalidades completadas.

  - Funciona como base para pruebas internas y ajustes previos a su fusión con main.

Ramas de Soporte

- chapter/\*(ramas de documentación)

  - Permite trabajar por secciones la documentación 

  - Al completarse un capítulo, la rama se fusiona con la rama develop para luego llegar a main


- feature/\*(ramas de características)

  - Cada nueva funcionalidad se desarrolla en un rama independiente (ej. feature/login), derivada de develop.

  - Perfilo trabajo paralelo sin afectar la base de los códigos principales hasta su revisión y aprobación.


- release/\*(ramas de lanzamiento)

  - Preparadas para versiones específicas, permiten pruebas finales y corrección de bugs antes de su despliegue en main.


- hotfix/\*(ramas de las urgencias)

  - Resuelven errores desprendentes en producción, derivando directamente de mainy fusión tanto en maincomo en develop.

![Git-Flow](Assets/gitflow.png)

### 5.1.3. Source Code Style Guide & Conventions.

Descripción:

1.  HTML
    Estructura básica

      <!DOCTYPE html>
      HTM lang = " es ">

 - Reglas generales:
    - Todos los elementos deben estar correctamente cerrados

           (ej. <img />, <div></div>).

     - Usar comillas dobles (" ") en atributos que contengan espacios.

     - Incluir atributos esenciales en imágenes.
              

2.  CSS

Formato:

- Sangría: 2 espacios (sin pestañas).

- Minúsculas en Selectores, propiedades y valores.

- Empiteación en blanco innecesarios y líneas vacías redundantes.

3.  vue.js

Reglas clave:

- Nombres de Compentes: PascalCase(Ej: UserProfile.vue)
- Props: Definir tipos y valores por defecto. 

### 5.1.4. Software Deployment Configuration.

Hemos seleccionado GitHub Pages como plataforma para alojar el sitio web estático del proyecto. A continuación se detalla el proceso completo:

1. **Creación del repositorio en GitHub:**

   - Primero, se debe crear un nuevo repositorio en GitHub. Asegúrate de que el repositorio sea público para que GitHub Pages pueda generar y alojar el sitio.

- Clona el repositorio a tu máquina local para realizar los desarrollos necesarios.
- **Ejemplo:**

git clone https://github.com/2025-1-AplicacionesWeb-QuantumSoft/project-report-childcard.git

2. **Desarrollo del sitio estático:**

- El desarrollo del Landing Page se realiza utilizando HTML, CSS, Tailwind.css , JavaScript y vue.js. Estos archivos deben estar en la raíz del repositorio o en la carpeta docs, dependiendo de la configuración elegida para GitHub Pages.

3. **Configuración de GitHub Pages:**

- Dirígete a la configuración del repositorio en GitHub:
  - Ir a la seccion Settings
  - Desplázate hacia abajo hasta la sección Pages.
  - En el menú desplegable "Source", selecciona la creada gh-pages y la carpeta raíz (/root) o docs/ si los archivos están organizados dentro de esa carpeta.
- Una vez seleccionado, GitHub Pages generará una URL para acceder a tu sitio web.

4. **Verificar el despliegue:**

   - En este caso, el Link del Landing Page desplegado del proyecto LocalFood es:  

## 5.2. Landing Page, Services & Applications Implementation.

### 5.2.1. Sprint 1

Durante el desarrollo Sprint 1 del proyecto LocalFood, el equipo se enfocó en el diseño llamativo y construcción funcional de la Landing Page de la plataforma. Se implementaron las principales las fundamentales secciones informativas, eso incluye el mensaje de bienvenida, los botones de registro y navegación, la sección de amigos para un gruoi, informacion respecto a nosotros y funciones adaptada a cambio de planes.  Además, se trabajó en aspectos fundamentales de interacción como la fijación del encabezado al hacer scroll y la visualización atractiva del interface. El equipo logró realizae la mayoría de las tareas planteadas, dejando solo algunos cosas en proceso de checkeo. Todo el despliegue del Sprint 1 priorizó una navegación llamativa, accesibilidad y fluida en la comunicación hacia los nuevos usuarios.

#### 5.2.1.1. Sprint Planning 1.

<table align="center">
  <tr>
    <td><strong>Sprint #</strong></td>
    <td>1</td>
  </tr>
  <tr>
    <td colspan="2"><strong>Sprint planning Backgroud</strong></td>
  </tr>
  <tr>
    <td><strong>Date</strong></td>
    <td>2025 - 09 -13</td>
  </tr>
  <tr>
    <td><strong>Time</strong></td>
    <td>9:00 am</td>
  </tr>
  <tr>
    <td><strong>Location</strong></td>
    <td>Virtual meet in Google Meet</td>
  </tr>
  <tr>
    <td><strong>Prepared by</strong></td>
    <td>Walter Luis</td>
  </tr>
  <tr>
    <td><strong>Attendes (to planning meeting)</strong></td>
    <td>Sebastian Augusto, Angel Jose, Ivan Fernando, Ariadna Geraldine</td>
  </tr>
  <tr>
    <td><strong>Sprint 0 Review Winter</strong></td>
    <td>No Realizamos una reunión previa debido a que este es nuestro primer sprint</td>
  </tr>
  <tr>
    <td><strong>Sprint 0 Retorspective Summary</strong></td>
    <td>No tuvimos una reunión previa debido a que este es nuestro primer sprint</td>
  </tr>
  <tr>
    <td colspan="2"><strong>Sprint Goal and User Stories</strong></td>
  </tr>
  <tr>
    <td><strong>Sprint 1 Goal</strong></td>
    <td>Entregar una landing page estática que comunique la propuesta de valor de GastroGo, con el objetivo de generar engagement inicial de los usuarios respecto a usar nuestro producto y ofrecer claridad a los comersales. Se considerará logrado cuando la página esté publicada y los visitantes puedan entender el propósito de la plataforma.</td>
  </tr>
  <tr>
    <td><strong>Sprint 1 Velocity</strong></td>
    <td>17</td>
  </tr>
</table>
<br>




#### 5.2.1.2. Aspect Leaders and Collaborators.


<table align="center">
  <tr>
    <td><strong>Team Member</strong></td>
    <td><strong>GitHub Username</strong></td>
    <td><strong>Contenido y mensajes</strong></td>
    <td><strong>Funcionalidades específicas</strong></td>
    <td><strong>Diseño y Navegación</strong></td>
    <td><strong>Deployment</strong></td>
  </tr>
  <tr>
    <td>Walter Luis, Fajardo Monrroy</td>
    <td>WalterFajardo</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
    <td>L</td>
  </tr>
  <tr>
    <td>Sebastian Augusto, Gutierrez Santillan</td>
    <td>Yeva</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
  </tr>
  <tr>
    <td>Ivan Fernando, Sanchez Guevara</td>
    <td>DonFernando1</td>
    <td>C</td>
    <td>C</td>
    <td>L</td>
    <td>C</td>
  </tr>
  <tr>
    <td>Ariadna Geraldine, Poma Muñoz</td>
    <td>InAsui</td>
    <td>L</td>
    <td>L</td>
    <td>C</td>
    <td>C</td>
  </tr>
  <tr>
    <td>Angel Jose Pariona Chacca</td>
    <td>angelitoso-opp</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
  </tr>
</table>
<br>


#### 5.2.1.3. Sprint Backlog n.

Descripción

Durante el primer sprint backlog, el equipo tuvo el deber de realizar y completar la landing page. La plataforma usada para la organización y gestiónar a los integrantes del equipo fue Trello. Ya quela plataforma nos permitió la división de todas las user stories en tareas manejables, para luego asi asignarlas a los diferentes miembros según sus diferentes habilidades. el objetivo principal del sprint era construir en su totalidad la landing page, logrando que sea llamativo y que se funcional.
<img src="Assets/Springtrello1.png" alt="wireflows" width="1000">
<p align="center">
  Sprint Backlog 1 Trello - Elaboración propia
</p>

<br>
link al trello: https://trello.com/invite/b/68c7d580d1d41d4f3acf95c2/ATTIe6344c6d324fbbb059ac41bfddd60e6d7988396B/localfood
<table border="1" cellspacing="0" cellpadding="5">
    <thead>
        <tr>
            <th>Sprint #</th>
            <th colspan="8">Sprint 1</th>
        </tr>
        <tr>
            <th colspan="2">User Story</th>
            <th colspan="7">WorkItem-Task</th>
        </tr>
        <tr>
            <th>US-ID</th>
            <th>Title</th>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Acceptance Criteria</th>
            <th>Estimation (Hours)</th>
            <th>Assigned To</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>US01</td>
            <td>Ver notificaciones de amigos/contactos</td>
            <td>UT01</td>
            <td>Crear mensaje saliente de las notificaciones</td>
            <td><strong>Como nuevo usuario</strong>, quiero cambiar de resturante durante el calculo <strong>para poder adecuar el destinos a cambios de planes</strong>.</td>
            <td>
                <strong>Escenario 1:</strong> Given que estoy en cualquier parte de la pagina, When veo las notificaciones, Then puedo ver el usuario de la persona respecto a calculos o me envie solicitud de amistad.<br>
            </td>
            <td>5</td>
            <td></td>
            <td>In-Process</td>
        </tr>
        <tr>
            <td>US02</td>
            <td>Cambiar de restaurante durante el calculo</td>
            <td>UT02</td>
            <td>Funcionalidad "Editar Restaurante de Comida"  </td>
            <td><strong>Como usuario</strong>, quiero cambiar de resturante durante el calculo<strong>para poder adecuar el destinos a cambios de planes</strong>.</td>
            <td>
                <strong>Escenario 1:</strong> Given que soy un usuario que coordina con si grupo cuando veo que deciden cambiar de restaurante luego de haber coordinado uno, When acceda a Restaurante o Calculo, Then se cambia el restaurante para el calculo en la seccion de restaurante o en su defecto se presiona un boton en la seccion de calculo donde te llevara a la seccion de restaurantes.<br>
                <strong>Escenario 2:</strong> Given que soy un usuario que ya empezo a calcular con un restaurante para mi grupo, When cambiamos de opinion, Then puedo presionar el boton de cambiar restaurante en cambio y sin forma de nuevo el grupo.
            </td>
            <td>9</td>
            <td>Ariadna Poma</td>
            <td>In-Process</td>
        </tr>
        <tr>
            <td>US03</td>
            <td>Ignorar los cálculos de otra gente</td>
            <td>UT03</td>
            <td>Boton denegar en las notificaciones</td>
            <td><strong>Como usuario</strong>, quiero poder ignorar o rechazar los calculos, <strong>no afectar el calculo de mis amigos como no tener muchas notificaciones </strong>.</td>
            <td>
                <strong>Escenario 1:</strong> Given que soy un usuario que recibe notificaciones de calculos que me incluyan,When acceda a la pagina con la notificacion ,Then presiono en el boton de denegar para que no me aparezca dicho calculo.<br>
            </td>
            <td>3</td>
            <td>Fernando Sanchez</td>
            <td>In-Process</td>
        </tr>
        <tr>
            <td>US04</td>
            <td>Implementar amigos a un lista ya creada</td>
            <td>UT04</td>
            <td>boton de "añadar a lista ya creada" </td>
            <td><strong>Como usuario</strong>, quiero poder implementar mas amigos en una lista ya creada,<strong>para no tener que volverla a crear</strong>.</td>
            <td>
                <strong>Escenario 1:</strong> Given este en el apartado de calculo con la lista ya creada,When este en el apartado de calculo con la lista ya creada ,Then presiono la opcion de incluir miembro a la lista ya creada y empiezo el calculo.<br>
            </td>
            <td>6</td>
            <td>Walter Fajardo</td>
            <td>In-Process</td>
        </tr>
        </tbody>
</table>




#### 5.2.1.4. Development Evidence for Sprint Review.

En esta sección, se presentan los commits realizados en el repositorio de la landing page en GitHub

| **Repository**   | **Branch** | **Commit Id**                               | **Commit Message**                                                        | **Usuario**        | **Commited on (Date)** |
| ---------------- | ---------- | ------------------------------------------- | ------------------------------------------------------------------------- | ------------------ | ---------------------- |
| project-report   | develop    | 2898421e20e874ff7161b86fd420330db68e3b5f    | Update README.md                                                           | angelitoso-opp     | yesterday              |
| project-report   | develop    | f10c28b841273428d25e17d789156e08b635627a    | Add files via upload                                                       | angelitoso-opp     | yesterday              |
| project-report   | develop    | 13326d51af42be2e5d5271ed91d51c0c763037bf    | Update README.md                                                           | angelitoso-opp     | yesterday              |
| project-report   | develop    | 56f0c41d88e8a8efd5e88aae0b3e496282ad8a9a    | doc: Implement data about a student and complete the StudentOutcome        | DonFernando1       | yesterday              |
| project-report   | develop    | 3321f4fd25202612fc53253ca687283a8d8842b0    | Merge pull request #7 from LocalFood-Aplicaciones-Web/docs/chapter2-v1     | WalterFajardo      | 2 days ago             |
| project-report   | develop    | 303b6eaad32b2b89178c82494bceb72e1ac1ec85    | docs: add user persona for food stall owner segment                        | WalterFajardo      | 2 days ago             |
| project-report   | develop    | 54738091ddf978c492e2df782582898626726eda    | docs: add user persona for customer segment                                | WalterFajardo      | 2 days ago             |
| project-report   | develop    | 7ca03b573370d85e64c22d7939c6cb934b20668d    | Update README.md                                                           | angelitoso-opp     | 3 days ago             |
| project-report   | develop    | a00ee47491013a5a03283f4a89587edc74eeb691    | Merge pull request #5 from LocalFood-Aplicaciones-Web/docs/chapter2-v1     | InAsui             | 5 days ago             |
| project-report   | develop    | 763ee43f369d81fef3cb9301997b5069c1dafaf2    | docs: update Section 2.2.1 - Interview design                              | InAsui             | 5 days ago             |
| project-report   | develop    | 4eca74e525972909a0206bc7bd5a4cb8f6c2e633    | docs: update Section 2.2.1 - Interview design                              | InAsui             | 5 days ago             |
| project-report   | develop    | 7b6ad8fafb7c5b1fde7719ea83dd5f75e4128c38    | docs: update 2.2.1 - Interview design                                      | InAsui             | 5 days ago             |
| project-report   | develop    | 2231b8800f9d274e9d2d794649a0d05d93c64b0e    | docs: update Section 2.2.1 - Interview design                              | InAsui             | 5 days ago             |
| project-report   | develop    | e0faab0a33598f1e50cd9e0bbe5ad6491c2e4331    | Merge pull request #4 from LocalFood-Aplicaciones-Web/docs/chapter1-v1     | InAsui             | 5 days ago             |
| project-report   | develop    | a5039fc63aec8cda91ebc942c41caa1121b66b00    | docs: update Section 1.3 - target segments                                 | InAsui             | 5 days ago             |
| project-report   | develop    | 2dd835bfc09cdd25631227806c9465045df49a62    | docs: update Section 1.2.2.4 - Lean UX Canvas.                             | InAsui             | 5 days ago             |
| project-report   | develop    | c8bfc792f6387c3905456adb4ae8df96bacdad5c    | Add files via upload                                                       | InAsui             | 5 days ago             |
| project-report   | develop    | 82fb2d0f91a6783a7584a0fab364a62c04107861    | docs: update Section 1.2.2.2 - Lean UX Assumptions.                        | InAsui             | 5 days ago             |
| project-report   | develop    | 6babe665824838ae8151e8680454b714765adfd4    | docs: update Section 1.2.2.1 - Lean UX Problem Statements                  | InAsui             | 5 days ago             |
| project-report   | develop    | 8babd6096fbd2be58fffaf90b9fb549630673f2c    | docs: update Section 1.2.1 - background and issues                         | InAsui             | 5 days ago             |
| project-report   | develop    | 21d171b2e2c0d21c9ad078c8bfe039a3137c66b0    | docs: update chapter 1                                                     | InAsui             | 5 days ago             |
| project-report   | develop    | 896e04acf708a94286feb4d7ba192c71021b797e    | Merge pull request #3 from LocalFood-Aplicaciones-Web/develop              | WalterFajardo      | last week              |
| project-report   | develop    | cc0440df631ee99fb3c4312a09b57d99bc1a7fa8    | Merge pull request #2 from LocalFood-Aplicaciones-Web/docs/chapter2-v1     | WalterFajardo      | last week              |
| project-report   | develop    | 9184f16b004075fddd9c6a92b65a928fd1be6f3d    | Merge pull request #1 from LocalFood-Aplicaciones-Web/docs/chapter2-v1     | WalterFajardo      | last week              |
| project-report   | develop    | c35eb7f3489f0057f3c0385871c39051b3f5c35f    | docs: Include interview design, strategies, and competitive analysis section | WalterFajardo    | last week              |
| project-report   | develop    | d237f106d27be286bfa1c4777b06139f0a0145ea    | docs: add university logo and create assets folder                         | WalterFajardo      | last week              |
| project-report   | develop    | 5ac6de5ca388fd704b19362199f7c4e1afad2b4e    | docs: add initial document template                                        | WalterFajardo      | last week              |
| project-report   | develop    | a1c81cb88b24584eb17855218dc9a766a7fa2ab3    | Initial commit                                                             | WalterFajardo      | last week              |



#### 5.2.1.5. Execution Evidence for Sprint Review.

Se logro desarrollar y desplegar la landing page del proyecto. A continuación, presentamos capturas de las vistas implementadas.

- **XXXXX:**:

  ![XXXXX:]( )

- **XXXXX:**:

  ![XXXXX:]( )

- **XXXXX:**:

  ![XXXXX:]( )

- **XXXXX:**:

  ![XXXXX:]( )

- **XXXXX:**:

  ![XXXXX:]( )

- **XXXXX:**:

  ![XXXXX:]( )

Link del landing page desplegado: 

#### 5.2.1.6. Services Documentation Evidence for Sprint Review.

Descripción: En este sprint 1 se desarrollo la landing page, por lo que no hay evidencias del empleo de web services.

#### 5.2.1.7. Software Deployment Evidence for Sprint Review.

Durante el primer sprint, desarrollamos y desplegamos la landing page del proyecto.

pasos para el despliegue:

1. Creación del Repositorio en GitHub: Iniciamos creando un repositorio dedicado en GitHub para nuestro proyecto de landing page.

2. Configuración de la Rama de despliegue: Aseguramos que la rama principal del repositorio se llamara gh-pages, ya que GitHub Pages toma esta rama como base para el despliegue automático.

3. Generación del Enlace de GitHub Pages: Navegamos a la sección "Pages" en la configuración del repositorio en GitHub. Configuramos la fuente de GitHub Pages para que tomara el contenido de la rama gh-pages.

4. Despliegue Automático: GitHub Pages automáticamente detectó los cambios en la rama gh-pages y desplegó la landing page en la URL proporcionada por GitHub Pages.

![Despliegue-landing-page]()


#### 5.2.1.8. Team Collaboration Insights during Sprint.

Durante el Sprint 1, el equipo de desarrollo en implementar todas las funcionalidades de la landing page y la realización del documento.

#### Colaboración y Desarrollo de Actividades

1. **Asignación de Tareas**:

![evidencia-trello](https://trello.com/invite/b/68c7d580d1d41d4f3acf95c2/ATTIe6344c6d324fbbb059ac41bfddd60e6d7988396B/localfood)

2. **Evidencia de commits**:

Repositorio:

**Documento**
![commits-documento](Assets/commits.png)


3. **Evidencia de Nertwork**:

Repositorio:

**Documento**
![network-documento](Assets/network.png)


4.**Contributions**

Repositorios:

**Documento**
![contributors-documento]( )

