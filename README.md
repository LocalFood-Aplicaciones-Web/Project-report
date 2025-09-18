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

A continuación, mostramos algunos de los principales competidores identificados para nuestro proyecto. En esta sección se ofrece una breve visión para conocer a nuestros competidores.

# Panorama de análisis competitivo

**¿Por qué llevar a cabo este análisis?**  

Este análisis resulta fundamental para comprender el mercado, las necesidades de los usuarios y la manera en que nuestro grupo puede brindar soluciones innovadoras y efectivas para diferenciarse de otras empresas y optimizar el producto.


| Características              | LocalFoods                                                                                                                          | MeetWays                                                                 | Between.us                                                           |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Perfil - Overview**        | Aplicación que ayuda a parejas o grupos a encontrar el punto medio ideal para reunirse, con foco en restaurantes y comida.           | Herramienta web que encuentra un punto intermedio entre dos direcciones y sugiere lugares cercanos.             | App enfocada en parejas que buscan un punto de encuentro intermedio. |
| **Ventaja competitiva**      | Pensada para grupos grandes, con recomendaciones personalizadas de restaurantes y filtros según tipo de comida (ej. pizza, sushi).   | Simple y directa, permite encontrar puntos medios de forma rápida.        | Muy sencilla y romántica, diseñada para uso en pareja.                |
| **Mercado objetivo**         | Amigos, parejas o grupos que desean reunirse para comer en un lugar accesible para todos y dueños de restaurantes o gerentes que buscan atraer más clientes. | Personas que necesitan un punto intermedio rápido entre dos direcciones.  | Parejas que quieren compartir citas en un lugar a mitad de camino.   |
| **Estrategias de marketing** | Campañas en redes sociales, colaboración con foodies e influencers gastronómicos, marketing de experiencias y SEO local.             | Presencia web básica, posicionamiento SEO para búsquedas de “meet halfway”.| Difusión en comunidades enfocadas en parejas y lifestyle romántico.  |
| **Precios & Costos**         | Modelo freemium: uso gratuito básico con publicidad, opción premium para recomendaciones exclusivas y sin anuncios.                  | Gratuito, modelo sencillo sin planes destacados.                          | Gratuito, con funciones limitadas.                                   |
| **Productos & Servicios**    | Recomendaciones de restaurantes en el punto medio, filtros por tipo de comida, reseñas integradas, mapas interactivos y chat seguro. | Búsqueda de puntos medios, direcciones y listado de lugares cercanos.     | Encuentro intermedio entre dos ubicaciones, opciones limitadas.      |
| **Canales de distribución**  | App móvil (iOS y Android), plataforma web.                                                                                          | Principalmente web app.                                                   | App móvil (iOS y Android).                                           |


## Análisis FODA

| Elemento          | LocalFoods                                                                                                      | MeetWays                                                                       | Between.us                                                           |
| ----------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| **Fortalezas**    | Enfoque en grupos y parejas; especializado en comida; recomendaciones personalizadas; beneficios para restaurantes y gerentes. | Herramienta rápida y sencilla para encontrar un punto intermedio.              | Aplicación clara y simple, orientada a parejas.                      |
| **Oportunidades** | Alianzas con restaurantes locales; expansión a más ciudades; integrar IA para recomendaciones y experiencias sociales. | Expandirse a más ubicaciones y añadir filtros básicos de lugares.              | Ampliar funciones para grupos o añadir recomendaciones de restaurantes. |
| **Debilidades**   | Requiere mayor adopción inicial; necesita generar confianza en la calidad de las recomendaciones; competencia de apps genéricas como Google Maps. | Limitado casi siempre a dos direcciones; sin integración de reseñas ni filtros avanzados. | Nicho muy reducido (solo parejas); poca versatilidad para otros usos. |
| **Amenazas**      | Competidores más grandes que integren funciones similares (ej. Google Maps, Waze con restaurantes); baja fidelización si no ofrece valor diferencial. | Competidores que agreguen más funciones avanzadas; pérdida de usuarios frente a apps más completas. | Competidores sociales más completos que cubran citas y grupos.        |


### 2.1.2. Estrategias y tácticas frente a competidores.

Estas son las principales estrategias que aplicará nuestro grupo para diferenciar nuestro producto de sus competidores:

- Ofrecer recomendaciones personalizadas de restaurantes en el punto medio según las preferencias de comida de los usuarios (ej. pizza, sushi, vegetariano).

- Implementar campañas de marketing enfocadas en la experiencia social: compartir momentos con amigos, parejas o grupos en lugares justos y accesibles para todos.

- Incorporar reseñas verificadas y mapas interactivos que permitan a los usuarios explorar el lugar antes de reunirse.

- Establecer alianzas con restaurantes y gerentes locales, ofreciendo promociones exclusivas para los grupos que lleguen a través de la app.

De esta manera, el producto LocalFood se diferenciará al crear una experiencia más social, gastronómica y colaborativa que otras apps del rubro, generando valor tanto para los usuarios como para los restaurantes.


## 2.2. Entrevistas.

### 2.2.1. Diseño de entrevistas.

### Segmento 1: Comensales

Hola, gracias por participar en esta entrevista. Antes de empezar, me gustaría registrar algunos datos básicos. ¿Podrías decirme tu nombre y apellido completo? ¿Cuál es tu edad y en qué distrito resides actualmente? Además, si pudieras contarme brevemente tu ocupación principal.

1.¿Con qué frecuencia tienes dificultades para coordinar un lugar de encuentro con tu grupo?

2.¿Qué es lo que más te frustra al organizar una reunión (tiempo, distancia, elección del lugar, etc.)?

3.Cuando eliges un punto de encuentro con tu grupo, ¿qué pesa más en tu decisión: que todos recorran distancias similares, que el lugar sea rápido de alcanzar para la mayoría, o que cumpla con las preferencias del grupo (precio, tipo de local, ambiente)?

4.¿Has cancelado planes por no llegar a un acuerdo con tu grupo sobre dónde reunirse?

5.¿Qué valor tendría para ti que una aplicación recomiende lugares convenientes para todos? ¿Y qué factores serían decisivos para que realmente la uses (precisión en la ubicación, variedad de locales, promociones, confianza en la recomendación)?

6.¿Qué tan útil te resultaría poder aplicar filtros (tipo de local, rango de precios, cercanía, etc.) antes de elegir?

7.¿Qué tipo de locales prefieres para reunirte (cafés, restaurantes, bares, espacios culturales, otros)?

8.¿Qué canales digitales usas normalmente para coordinar reuniones con tu grupo (WhatsApp, redes sociales, llamadas, otras apps)?

9.¿Qué características personales influyen en tus decisiones al reunirte con tu grupo (ej. valorar la comodidad, el ahorro, la rapidez, el ambiente)?

10.¿Qué tan dispuesto estarías a recomendar o invitar a tus amigos a usar una aplicación que facilite la elección de un punto de encuentro?

### Segmento 2: Dueños de Locales/Gerentes

Hola, gracias por participar en esta entrevista. Antes de empezar, me gustaría registrar algunos datos básicos. ¿Podrías decirme tu nombre y apellido completo? ¿Cuál es tu edad y en qué distrito resides actualmente? Además, si pudieras contarme brevemente tu ocupación principal.

1.¿Qué tipo de clientes suele recibir tu local con mayor frecuencia (familias, turistas, grupos de amigos, ejecutivos, estudiantes, etc.)?

2.¿Qué principales dificultades enfrentas para atraer más clientes (baja visibilidad, falta de organización, cancelaciones, etc.)?

3.¿Qué tan importante es para tu negocio recibir reservas organizadas en lugar de llegadas imprevistas?

4.¿Qué impacto crees que tendría en tu facturación contar con clientes que lleguen de manera más organizada?

5.¿Qué tan dispuesto estarías a probar una plataforma que te ayude a gestionar reservas y aumentar la visibilidad de tu local?

6.¿Qué tipo de promociones o funciones (descuentos, publicidad destacada, control de capacidad) te motivarían a unirte a una aplicación como LocalFood?

7.¿Te interesaría pagar por mayor visibilidad dentro de la aplicación para destacar tu local frente a la competencia?

8.¿Qué herramientas digitales utilizas actualmente (redes sociales, apps de delivery, páginas web, WhatsApp)? ¿Qué tan útiles te resultan?

9.¿En qué temporadas, fechas especiales o días de la semana sueles tener mayor demanda? ¿Y en cuáles quisieras más apoyo digital para atraer clientes?

10.¿Qué valor adicional le darías a que no solo te traiga clientes, sino también datos (estadísticas de reservas, picos de demanda, preferencias de consumo)?

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

Los User personas se realizaron en base a las distintas personas que entrevistamos según nuestros segmentos objetivos.

**Comensal:**
![Maria Tasayco User Persona](Assets/Maria%20Alejandra%20Tasayco.png)
**Dueño de local:**
![Luis Fabricio Luzquiño Diaz](Assets/Luis%20Fabricio%20Luzquiño%20Diaz.png)

### 2.3.2. User Task Matrix.

En esta sección vamos a detallar las tareas que realizan los diferentes segmentos de usuarios representados por los User Personas de nuestra aplicación LocalFood.


**Comensal: María Tasayco**

| Actividades | Comensales | Frecuencia | Importancia |
|---------------------------------------------|-------------|----------------|-------------|
| Crear o unirse a un grupo de amigos | ✓ | Frecuentemente | Alta |
| Seleccionar tipo de comida deseada (ej. hamburguesa, pizza) | ✓ | Frecuentemente | Alta |
| Compartir ubicación con el grupo | ✓ | Frecuentemente | Alta |
| Ver la sugerencia de local más cercano para todos | ✓ | Frecuentemente | Alta |
| Filtrar opciones por precio, reseñas o promociones | ✓ | Ocasionalmente | Media |
| Guardar locales favoritos para futuras salidas | ✓ | Ocasionalmente | Media |
| Calificar y dejar reseña del local visitado | ✓ | Ocasionalmente | Media |
| Invitar a nuevos usuarios al grupo (enlace/invitación) | ✓ | Ocasionalmente | Baja |

**Dueño de local: Luis Luzquiños**

| Actividades | Dueños de locales | Frecuencia | Importancia |
|-----------------------------------------------|------------------|----------------|-------------|
| Registrar su local en la aplicación | ✓ | Una sola vez / Inicialmente | Alta |
| Agregar ubicación exacta del local en el mapa | ✓ | Una sola vez / Inicialmente | Alta |
| Describir el menú y categorías de comida (ej. hamburguesas, pizzas) | ✓ | Ocasionalmente | Alta |
| Actualizar precios, promociones y disponibilidad | ✓ | Frecuentemente | Alta |
| Ver estadísticas de visitas y recomendaciones del local | ✓ | Ocasionalmente | Media |
| Responder a reseñas o comentarios de clientes | ✓ | Ocasionalmente | Media |
| Destacar/promocionar el local en búsquedas (plan premium) | ✓ | Ocasionalmente | Media |
| Editar información general del local (horarios, contacto) | ✓ | Ocasionalmente | Alta |

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
Los wireframes de GastroGo han sido desarrollados aplicando principios clave de diseño centrado en el usuario, priorizando la claridad visual, el lenguaje no verbal mediante el uso de colores y la accesibilidad. Cada sección está estructurada con una navegación intuitiva y coherente entre el menú lateral, el encabezado fijo y los bloques de contenido, lo que refleja una arquitectura de información jerárquica y secuencial bien definida. Se han implementado elementos de diseño consistentes como tarjetas, iconos descriptivos, botones llamativos y funcionalidades bien distribuidas, facilitando una interacción fluida en dispositivos de distintos tamaños. Además, se ha incorporado un enfoque de diseño atractivo que apela a la intuición no verbal (tamaño de letras, imágenes explicativas, etc.), permitiendo que usuarios con diversos niveles de experiencia digital puedan navegar sin dificultades. Todo el diseño planteado busca lograr una experiencia coherente entre perfiles (comensales), enfocada en guiar a los usuarios hacia sus objetivos (elegir restaurante, agregar amigos, realizar cálculos) de forma eficiente y accesible.

https://www.figma.com/design/Iw07d6r56Nxk6swaIVWRw5/Untitled?node-id=0-1&p=f&m=draw 
<br><br>


+ **Iniciar Sesión / Registrarse**:

Permite a nuevos usuarios crear una cuenta para la aplicacion, y a usuarios existentes ingresar con sus correos para acceder a su perfil.

<p align="center">
  <img src="Assets/wireframes/sing_in.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframe Sing In - Elaboración propia
</p>


<p align="center">
  <img src="Assets/wireframes/Registerus.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframe User Register - Elaboración propia
</p>

+ **Pagina de inicio del usuario**:

Muestra el perfil del usuario, su codigo QR, y restaurante, el frecuente y el ultio de seleccion anterior. El inicio de la rica coordinacion.

<p align="center">
  <img src="Assets/wireframes/homepage.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframe User Homepage - Elaboración propia
</p>

+ **Mis Contactos**:

Apartado que permite agregar, ver y seleccionar contactos para el calculo respecto a un grupo

<p align="center">
  <img src="Assets/wireframes/Addcontact.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframe User Add Contact - Elaboración propia
</p>

<p align="center">
  <img src="Assets/wireframes/contact.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframe User Contactpage - Elaboración propia
</p>

<p align="center">
  <img src="Assets/wireframes/Selectcontact.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframe User selection Contact - Elaboración propia
</p>


+ **Restaurantes disponibles**:

Muestras los restaurantes disponibles de la aplicacion al usuario y permite su seleccion.

<p align="center">
  <img src="Assets/wireframes/Restaurant.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframe User Restaurantpage - Elaboración propia
</p>

<p align="center">
  <img src="Assets/wireframes/selectRestaurant.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframe User selection Restaurant - Elaboración propia
</p>

+ **Realizar Calculo**:

Formula el calculo respecto al restaurante mas cercano en proporcion a la hubicacion de las personas del grupo.

<p align="center">
  <img src="Assets/wireframes/Calculationpage.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframe User Calculationtpage - Elaboración propia
</p>

<p align="center">
  <img src="Assets/wireframes/RunCalculation.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframe User Run Calculation - Elaboración propia
</p>



<br><br>






### 4.4.2. Web Applications Wireflow Diagrams.

https://miro.com/welcomeonboard/WTlMa2lsTU0vVkMyM1Rsc1NYeUNuTURnaXIyV2E5Um43SEpLYmQzYkppOWQ1dzlLVTljQzlvYmxtc0pmWnJXb3E0TXJwU0FCckNtUCtrMll5M3Evb1ZtMFNpYUMwRGdmT1BoaEw2V0pmU2xWM1F0YUVmVmRwdEVzWVlFT2ZBd1FBd044SHFHaVlWYWk0d3NxeHNmeG9BPT0hdjE=?share_link_id=503529665227

<br><br>

+ **Wireflow 1: Login / Registrarse**

**User Goal:** Como nuevo usuario, quiero ingresar o crear una cuenta, para acceder a la plataforma y ustilizar sus herramientas.

**User Persona:** Comensales

**Flujo:** El usuario accede a la landing page y hace clic en “iniciar sesion” desde arriba del logotipo. Si ya tiene cuenta, introduce su correo y contraseña afiliada a esa cuenta. Si es nuevo, completa el formulario correspondiente con el nombre de usuario, correo y contraseña. Tras completar el proceso, es redirigido automáticamente a su pagina de perfil.

<p align="center">
  <img src="Assets/wireflows/Wframe4.png" alt="wireflow" width="1000">
</p>

<p align="center">
    Wireflow Login y Register - Elaboración propia
</p>

+ **Wireflow 2: Agregar a nueva persona**

**User Goal:** Como usuario, quiero agregar a una nueva persona de la plataforma de forma efectiva.

**User Persona:** Comensales

**Flujo:** Desde su perfil ingresa a la seccion de "Contactos" para luego buscar a la persona por medio de su nombre, codigo o para rapides, escaneo de QR y finalmente manda la solicitud.

<p align="center">
  <img src="Assets/wireflows/Wframe2.png" alt="wireflow" width="1000">
</p>

<p align="center">
    Wireflow Agregar a nueva persona  - Elaboración propia
</p>

+ **Wireflow 3: Cambiar Restaurante durante el calculo**

**User Goal:** Como usuario, quiero cambiar de restaurante tanto antes como durante el calculo para no volver a crear la lista.

**User Persona:** Comensales

**Flujo:** Desde su perfil ingresa a la seccion de "Contactos" para seleccionar a las personas para un grupo, luego ir a la seccion de "Restaurantes" para elegir a cual ir, luego van a la seccion de "Calculo" para proceder con el calculo, luego si se desea cambiar de restaurante, presione el boton 2 que le permitira editar el restaurante, para luego volver a la seccion de "Calculo" y seguir realizando su el procedimiento. 

<p align="center">
  <img src="Assets/wireflows/Wframe3.png" alt="wireflow" width="1000">
</p>

<p align="center">
    Wireflow Cambiar Restaurante durante el calculo  - Elaboración propia
</p>


+ **Wireflow 4: Aceptar o Denegar Calculos de otra personas**

**User Goal:** Como usuario, quiero aceptar o denegar las calculos realizados de otras personas que me involucren.

**User Persona:** Comensales

**Flujo:** Desde su perfil se le notificara si una persona de contectos lo puso en su lista de calculo, si presiona en el boton de si, lo llevara en la seccion de "Calculo" donde vera los resultados hecho por la persona para ir a un restaurante, en caso que presione el boton de no, no se le llevara a la seccion de "Calculo" como tampoco se le aparecera los datos de dicho calculo.

<p align="center">
  <img src="Assets/wireflows/Wframe4.png" alt="wireflow" width="1000">
</p>

<p align="center">
    Wireflow Aceptar o Denegar Calculos de otra personas - Elaboración propia
</p>




<br><br>





### 4.4.3. Web Applications Mock-ups.

A continuacion los siguientes Mock-ups fueron realizados en base a los wireframes anteriormente hechos. Representan fielmente la manera en la que
 nuestros usuarios podrán apreciar la aplicación web.

https://www.figma.com/design/Iw07d6r56Nxk6swaIVWRw5/Untitled?node-id=0-1&p=f&m=draw

<br><br>


+ **Iniciar Sesión / Registrarse**:

Permite a nuevos usuarios crear una cuenta para la aplicacion, y a usuarios existentes ingresar con sus correos para acceder a su perfil.

<p align="center">
  <img src="Assets/mockups/sing_in.png" alt="mockups" width="1000">
</p>

<p align="center">
     Web Applications Mock-ups Login - Elaboración propia
</p>


<p align="center">
  <img src="Assets/mockups/Registerus.png" alt="mockup" width="1000">
</p>

<p align="center">
    Web Applications Mock-ups User Register - Elaboración propia
</p>

+ **Pagina de inicio del usuario**:

Muestra el perfil del usuario, su codigo QR, y restaurante, el frecuente y el ultio de seleccion anterior. El inicio de la rica coordinacion.

<p align="center">
  <img src="Assets/mockups/homepage.png" alt="mockup" width="1000">
</p>

<p align="center">
    Web Applications Mock-ups User Homepage - Elaboración propia
</p>

+ **Mis Contactos**:

Apartado que permite agregar, ver y seleccionar contactos para el calculo respecto a un grupo

<p align="center">
  <img src="Assets/mockups/Addcontact.png" alt="mockup" width="1000">
</p>

<p align="center">
    Web Applications Mock-ups User Add Contact - Elaboración propia
</p>

<p align="center">
  <img src="Assets/mockups/contact.png" alt="mockup" width="1000">
</p>

<p align="center">
    Web Applications Mock-ups User Contactpage - Elaboración propia
</p>

<p align="center">
  <img src="Assets/mockups/Selectcontact.png" alt="mockup" width="1000">
</p>

<p align="center">
    Web Applications Mock-ups User selection Contact - Elaboración propia
</p>


+ **Restaurantes disponibles**:

Muestras los restaurantes disponibles de la aplicacion al usuario y permite su seleccion.

<p align="center">
  <img src="Assets/mockups/Restaurant.png" alt="mockup" width="1000">
</p>

<p align="center">
    Web Applications Mock-ups User Restaurantpage - Elaboración propia
</p>

<p align="center">
  <img src="Assets/mockups/selectRestaurant.png" alt="mockup" width="1000">
</p>

<p align="center">
    Web Applications Mock-ups User selection Restaurant - Elaboración propia
</p>

+ **Realizar Calculo**:

Formula el calculo respecto al restaurante mas cercano en proporcion a la hubicacion de las personas del grupo.

<p align="center">
  <img src="Assets/mockups/Calculationpage.png" alt="mockup" width="1000">
</p>

<p align="center">
    Web Applications Mock-ups User Calculationtpage - Elaboración propia
</p>

<p align="center">
  <img src="Assets/mockups/RunCalculation.png" alt="mockup" width="1000">
</p>

<p align="center">
    Web Applications Mock-ups User Run Calculation - Elaboración propia
</p>

<br><br>





### 4.4.4. Web Applications User Flow Diagrams.

Los siguientes User Flow Diagrams se elaboraron correspondientemente a los WireFlows previamente hechos y representan los pasos que seguirán
 nuestros usuarios a través de la aplicación.

https://miro.com/welcomeonboard/OW1Ea3dxNDdNSjVDQ3M0TGpsUUNwMUFnWkUrUU1ya1JyTkYzUEtwUG5aa3IzelFOTmYxcG1sdzRwT1M4cU44eFFVYzM2aFZrdEpFK1BkcjdiTmxxQmxtMFNpYUMwRGdmT1BoaEw2V0pmU2w5bzlsQmNia0UxUzNPV2wvdE91SjhzVXVvMm53MW9OWFg5bkJoVXZxdFhRPT0hdjE=?share_link_id=362530360227

<br><br>

+ **User Flow Diagram 1: Login / Registrarse**

**User Goal:** Como nuevo usuario, quiero ingresar o crear una cuenta, para acceder a la plataforma y ustilizar sus herramientas.

**User Persona:** Comensales

**Flujo:** El usuario accede a la landing page y hace clic en “iniciar sesion” desde arriba del logotipo. Si ya tiene cuenta, introduce su correo y contraseña afiliada a esa cuenta. Si es nuevo, completa el formulario correspondiente con el nombre de usuario, correo y contraseña. Tras completar el proceso, es redirigido automáticamente a su pagina de perfil.

<p align="center">
  <img src="Assets/userflows/Uflows1.png" alt="userflows" width="1000">
</p>

<p align="center">
    Web Applications User Flow Login y Register - Elaboración propia
</p>

+ **User Flow Diagram 2: Agregar a nueva persona**

**User Goal:** Como usuario, quiero agregar a una nueva persona de la plataforma de forma efectiva.

**User Persona:** Comensales

**Flujo:** Desde su perfil ingresa a la seccion de "Contactos" para luego buscar a la persona por medio de su nombre, codigo o para rapides, escaneo de QR y finalmente manda la solicitud.

<p align="center">
  <img src="Assets/userflows/Uflows2.png" alt="userflows" width="1000">
</p>

<p align="center">
    Web Applications User Flow Agregar a nueva persona  - Elaboración propia
</p>

+ **User Flow Diagram 3: Cambiar Restaurante durante el calculo**

**User Goal:** Como usuario, quiero cambiar de restaurante tanto antes como durante el calculo para no volver a crear la lista.

**User Persona:** Comensales

**Flujo:** Desde su perfil ingresa a la seccion de "Contactos" para seleccionar a las personas para un grupo, luego ir a la seccion de "Restaurantes" para elegir a cual ir, luego van a la seccion de "Calculo" para proceder con el calculo, luego si se desea cambiar de restaurante, presione el boton 2 que le permitira editar el restaurante, para luego volver a la seccion de "Calculo" y seguir realizando su el procedimiento. 

<p align="center">
  <img src="Assets/userflows/Uflows3.png" alt="userflows" width="1000">
</p>

<p align="center">
    Web Applications User Flow Cambiar Restaurante durante el calculo  - Elaboración propia
</p>


+ **User Flow Diagram 4: Aceptar o Denegar Calculos de otra personas**

**User Goal:** Como usuario, quiero aceptar o denegar las calculos realizados de otras personas que me involucren.

**User Persona:** Comensales

**Flujo:** Desde su perfil se le notificara si una persona de contectos lo puso en su lista de calculo, si presiona en el boton de si, lo llevara en la seccion de "Calculo" donde vera los resultados hecho por la persona para ir a un restaurante, en caso que presione el boton de no, no se le llevara a la seccion de "Calculo" como tampoco se le aparecera los datos de dicho calculo.

<p align="center">
  <img src="Assets/userflows/Uflows4.png" alt="userflows" width="1000">
</p>

<p align="center">
    Web Applications User Flow Aceptar o Denegar Calculos de otra personas - Elaboración propia
</p>




<br><br>


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

#### 5.2.1.1. Sprint Planning 1.

 

Descripción:

| Sprint                             | Sprint 1                                                                                                                                                                                     |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |


#### 5.2.1.2. Aspect Leaders and Collaborators.

Descripción: 

| Team Member (Last Name, First Name) | GitHub Username | Cuerpo de la Aplicación | Lista de Caracteristicas | Contacto con el Equipo | Beneficios | Testimonios de Usuario |
| ----------------------------------- | --------------- | ----------------------- | ------------------------ | ---------------------- | ---------- | ---------------------- |


#### 5.2.1.3. Sprint Backlog n.

Descripción

| **Sprint #**   | **Sprint 1**             |        |                                                  |                                                                        |                        |                                 |            |
| -------------- | ------------------------ | ------ | ------------------------------------------------ | ---------------------------------------------------------------------- | ---------------------- | ------------------------------- | ---------- |
| **User Story** | **Work-Item / Task**     |
| **Id**         | **Title**                | **Id** | **Title**                                        | **Description**                                                        | **Estimation (Hours)** | **Assigned to**                 | **Status** |


Link del Trello: 

#### 5.2.1.4. Development Evidence for Sprint Review.

Descripción:

| **Repository** | **Branch**              | **Commit Id**                            | **Commit Message**                         | **Commit Message Body**                               | **Commited on (Date)** |
| -------------- | ----------------------- | ---------------------------------------- | ------------------------------------------ | ----------------------------------------------------- | ---------------------- |


#### 5.2.1.5. Execution Evidence for Sprint Review.

Descripción:

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
