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

- Trello: 

  Ruta de referencia:

Diseño UX/UI

- Figma: 

  Ruta de referencia: 

- Lucidchart: 
  Ruta de referencia: 

Desarrollo de software

- Visual Studio Code: 
  Ruta de referencia: 

- HTML5: 
  Ruta de referencia: 

- CSS: 
  Ruta de referencia: 

- Bootstrap: 
  Ruta de referencia: 

Implementación de software

- Git: 

  Ruta de referencia: 

  Documentación y gestión de proyectos de software

- Github: 
  Ruta de referencia:

### 5.1.2. Source Code Management.



**Flujo de trabajo GitFlow**



Ramas Principales

- main(principal)

  - 

  - 

- develop(rama de desarrollo)

  - 
  - 

Ramas de Soporte

- feature/\*(ramas de características)

  - 

  - 

- release/\*(ramas de lanzamiento)

  - 

- hotfix/\*(ramas de las urgencias)

  - 

![Git-Flow](   )

### 5.1.3. Source Code Style Guide & Conventions.

Descripción:

1.  HTML
    Estructura básica

              

         - Reglas generales:
            - 

             - 

             - 

1.  CSS

    Formato:

    - Sangría: 

    - 

    - 

1.  Tailwind

    Principios:

    - 

    - 

    - 

1.  vue.js

    Reglas clave:

    - Nombres de Compentes: 
    - Props: 

### 5.1.4. Software Deployment Configuration.

Descripción:

1. **Creación del repositorio en GitHub:**

   - 

- 
- **Ejemplo:**


2. **Desarrollo del sitio estático:**

- 

3. **Configuración de GitHub Pages:**

- 
  - 
  - 
  - 
- 

4. **Verificar el despliegue:**

   - 

## 5.2. Landing Page, Services & Applications Implementation.

### 5.2.1. Sprint 1

Durante el desarrollo Sprint 1 del proyecto GastroGo, el equipo se enfocó en el diseño llamativo y construcción funcional de la Landing Page de la plataforma. Se implementaron las principales las fundamentales secciones informativas, eso incluye el mensaje de bienvenida, los botones de registro y navegación, la sección de amigos para un gruoi, informacion respecto a nosotros y funciones adaptada a cambio de planes.  Además, se trabajó en aspectos fundamentales de interacción como la fijación del encabezado al hacer scroll y la visualización atractiva del interface. El equipo logró realizae la mayoría de las tareas planteadas, dejando solo algunos cosas en proceso de checkeo. Todo el despliegue del Sprint 1 priorizó una navegación llamativa, accesibilidad y fluida en la comunicación hacia los nuevos usuarios.

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

Descripción:

| **Repository** | **Branch**              | **Commit Id**                            | **Commit Message**                         | **Commit Message Body**                               | **Commited on (Date)** |
| -------------- | ----------------------- | ---------------------------------------- | ------------------------------------------ | ----------------------------------------------------- | ---------------------- |


#### 5.2.1.5. Execution Evidence for Sprint Review.

Descripción: hola

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

Descripción:

#### 5.2.1.7. Software Deployment Evidence for Sprint Review.

Descripción

pasos para el despliegue:

1. 
2. 
3. 
4. 

![Despliegue-landing-page]()
#### 5.2.1.8. Team Collaboration Insights during Sprint.

Descripción:

#### Colaboración y Desarrollo de Actividades

1. **Asignación de Tareas**:

![evidencia-trello]( )

2. **Evidencia de commits**:

Repositorio:

**Documento**
![commits-documento]()

**Landing Page**
![commits-sprint-1]( )

3. **Evidencia de Nertwork**:

Repositorio:

**Documento**
![network-documento]( )

**Landing Page**
![nerwortk-sprint-1]( )

4.**Contributions**

Repositorios:

**Documento**
![contributors-documento]( )

**Landing Page**
![contribution-sprint-1]( )