<h1 align="center"> UNIVERSIDAD PERUANA DE CIENCIAS APLICADAS </h1>

<h2 align="center"> INGENIERIA DE SOFTWARE</h2>
<h2 align="center"> Periodo 202520</h2>

<div align="center">
    <img src="./Assets/logo-upc.png">
</div>

<br>
<h3 align="center"> 1ASI0730 Aplicaciones Web </h3>
<h3 align="center"> NRC: 7470</h3>
<h3 align="center"> Profesor del Curso: Rafael Oswaldo Castro Veramendi </h3>
<h3 align="center"> "INFORME DE TRABAJO FINAL"</h3>
<h3 align="center"> Nombre de Startup: Location   </h3>
<h3 align="center"> Nombre del Producto: LocalFood  </h3>
<h3 align="center"> Lider: Walter Luis  </h3>
<div align="center">

| Miembro                         |   Código   |
| :------------------------------ | :--------: |
| Fajardo Monrroy, Walter Luis    | U202221632 |
| Poma Muñoz, Ariadna Geraldine   | U20221D382 |
| Pariona Chacca, Angel Jose      | U202314734 |
| Ivan Fernando, Sanchez Guevara  | U202218181 |
|                                 |            |

</div>
<h3 align="center"> Noviembre- 14 - 2025   </h3>

## REGISTRO DE VERSIONES

| Versión | Fecha    | Autor       | Descripción de Modificación            |
| ------- | -------- | ----------- | -------------------------------------- |
| 0.1     | 04/09/25 | Walter Fajardo   | Desarrollo de la Estructura del informe |
| 0.1    | 13/09/25 | Ariadna Poma | Desarrollo de la Estructura del informe|
| 0. 1    | 15/09/25 | Fernando Sanchez | Desarrollar de la estructura del informe |
| 0.1    | 18/09/25 | Angel Pariona | Desarrollo de la Estructura del informe|

## PROJECT REPORT COLLABORATION INSIGHTS

URL del repositorio del project Report : https://github.com/LocalFood-Aplicaciones-Web/Project-report.git
URL del repositorio del Frontend : https://github.com/LocalFood-Aplicaciones-Web/Frontend-v2.git
URL del repositorio del Backend : https://github.com/LocalFood-Aplicaciones-Web/Backend-v1.git 
 

**_TB1_**
Entregrable 1 o TB1 : (19/09/25)

![commit-report](Assets/commit%20report.png)

![branch-report](Assets/branch%20report.png)

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
    - [5.2.2. Sprint 2](#522-sprint-1)
            - [5.2.2.1. Sprint Planning 1](#5221-sprint-planning-1)
            - [5.2.2.2. Sprint Backlog 1](#5222-sprint-backlog-1)
            - [5.2.2.3. Development Evidence for Sprint Review](#5223-development-evidence-for-sprint-review)
            - [5.2.2.4. Testing Suite Evidence for Sprint Review](#5224-testing-suite-evidence-for-sprint-review)
            - [5.2.2.5. Execution Evidence for Sprint Review](#5225-execution-evidence-for-sprint-review)
            - [5.2.2.6. Services Documentation Evidence for Sprint Review](#5226-services-documentation-evidence-for-sprint-review)
            - [5.2.2.7. Software Deployment Evidence for Sprint Review](#5227-software-deployment-evidence-for-sprint-review)
            - [5.2.2.8. Team Collaboration Insights during Sprint](#5228-team-collaboration-insights-during-sprint)
        - [5.2.3. Sprint 3](#523-sprint-3)
            - [5.2.3.1. Sprint Planning 3](#5231-sprint-planning-3)
            - [5.2.3.2. Sprint Backlog 3](#5232-sprint-backlog-3)
            - [5.2.3.3. Development Evidence for Sprint Review](#5233-development-evidence-for-sprint-review)
            - [5.2.3.4. Testing Suite Evidence for Sprint Review](#5234-testing-suite-evidence-for-sprint-review)
            - [5.2.3.5. Execution Evidence for Sprint Review](#5235-execution-evidence-for-sprint-review)
            - [5.2.3.6. Services Documentation Evidence for Sprint Review](#5236-services-documentation-evidence-for-sprint-review)
            - [5.2.3.7. Software Deployment Evidence for Sprint Review](#5237-software-deployment-evidence-for-sprint-review)
            - [5.2.3.8. Team Collaboration Insights during Sprint](#5238-team-collaboration-insights-during-sprint)
        - [5.3. Validation Interviews](#524-validation-interviews)
          - [5.3.1. Diseño de Entrevistas](#5241-diseño-de-entrevistas)
          - [5.3.2. Registro de Entrevistas](#5242-registro-de-entrevistas)
          - [5.3.3. Evaluaciones según heurísticas](#5243-evaluaciones-según-heurísticas)
        - [5.4. Video About-the-Product](#525-video-about-the-team)
        - [5.5. Video About-the-Team](#526-video-about-the-product)
- [Conclusiones](#conclusiones)
- [Bibliografía](#bibliografía)
- [Anexos](#anexos)


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
        Ivan Fernando Sanchez Guevara <br> 
        TB1: Elabore los wireframe, wireflows, el mockups, userflows tambien realice la seccion 5.2. desde Sprint 1 hasta Sprint Backlog n
        <br><br>
        Walter Luis Fajardo Monrroy <br>
        TB1: Realicé aportes en el <b>capítulo 2</b> (desarrollo del marco teórico y estructura del documento), en el <b>capítulo 3</b> (identificación de la problemática y definición de objetivos), además participé en el <b>capítulo 5</b> (descripción técnica y apoyo en la elaboración de diagramas).
       <br> <br>
        Angel Jose Pariona chacca <br>
        TB1: Participe activamente dentro del grupo y elabore la landing Page aportando tambien dentro del capitulo 5 y desarrollando parte del figma de la LP. <br>
        TP1: Me centre en actualizar los fallos que hubo dentro del anterior entregable
</td>
        <td>
        TB1: El equipo trabajado de manera homogénea, repartiéndose responsabilidades desde las primeras etapas del proyecto. 
        Todos los miembros asumieron liderazgo en tareas fundamentales del desarrollo del sistema, generando entregables integrados y coherentes. 
        La toma de decisiones fue hecha en grupo y orientada al cumplimiento de objetivos comunes. 
        Walter aportó con una visión estructurada en capítulos claves, reforzando el liderazgo colaborativo.
        <br>
        </td>
    </tr>
    <tr>
        <th>Crea un entorno colaborativo e inclusivo, establece metas, planifica tareas y cumple objetivos</th>
        <td>
        Ivan Fernando Sanchez Guevara <br> 
        TB1: Aporte en la búsqueda de una problemática para el proyecto, ayudé a mis compañeros en dificultades y también implementé los segmentos objetivos.
        <br><br>
        Walter Luis Fajardo Monrroy <br>
        TB1: Contribuí en el <b>capítulo 2</b> y <b>capítulo 3</b> coordinando con mis compañeros para que la redacción y los enfoques fueran consistentes. 
        También participé en el <b>capítulo 5</b>, organizando la integración de los diagramas y apoyando en la planificación de entregables.
        <br><br>        
        Angel Jose Pariona Chacca <br>
        TB1: Ayude en la eleccion de la problematica de nuestro proyecto, consultando a los compañeros y decidiendo el aspecto qeu tendria nuestra Landing Page.
</td>
        <td>
        TB1: El grupo consiguió preparar un entorno colaborativo donde se siguieron roles, tiempos y responsabilidades de cada miembro. 
        Se establecieron metas alcanzables, se mantuvo comunicación constante y se cumplieron los objetivos de la primera entrega mediante un trabajo organizado y comprometido. 
        Walter fortaleció la organización en los capítulos técnicos y teóricos, asegurando que las metas se cumplieran con calidad.
        <br>
        </td>
    </tr>
</table>



# Capítulo I: Introducción

## 1.1. Startup Profile

### 1.1.1. Descripción de la Startup
En una ciudad como Lima, donde el tráfico es uno de los principales problemas diarios y los desplazamientos suelen ser largos y agotadores, las reuniones sociales suelen verse limitadas por las distancias. Frente a esta realidad surge Location, una startup creada por estudiantes de la Facultad de Ingeniería de la Universidad Peruana de Ciencias Aplicadas (UPC). Reconocemos que, muchas veces, cuando un grupo de amigos, colegas o familiares busca reunirse, surge la dificultad de elegir un punto de encuentro justo y accesible para todos, lo que genera largos desplazamientos y pérdida de tiempo.

Con nuestra aplicación LocalFood, utilizamos geolocalización inteligente para analizar la ubicación de varios usuarios y los posibles puntos de encuentro (restaurantes, cafés u otros lugares), recomendando aquel sitio óptimo al que todos puedan llegar con la menor distancia o tiempo de viaje posible. Nuestro enfoque se centra en hacer que las reuniones sean más equitativas, prácticas y convenientes, reduciendo el esfuerzo de coordinación y fomentando experiencias compartidas de manera más eficiente.

**Misión:** Nuestra misión es facilitar los encuentros sociales y profesionales en Lima mediante tecnología de geolocalización inteligente, optimizando el tiempo de traslado y ofreciendo puntos de encuentro justos y convenientes para todos los usuarios. Estamos comprometidos con ayudar a las personas a aprovechar mejor su tiempo, brindando una experiencia sencilla, práctica y confiable que reduzca el impacto del tráfico en la vida diaria.

**Visión:** Convertirnos en la plataforma líder en Perú para la planificación de encuentros sociales y profesionales, destacándonos por optimizar el tiempo de traslado, reducir el impacto del tráfico y ofrecer soluciones innovadoras y equitativas para reunir personas. Aspiramos a escalar nuestra solución a nivel global, conectando a millones de usuarios con sus puntos de encuentro de manera rápida, justa y sencilla.

**Valores:** Defendemos la equidad, la eficiencia y la innovación como pilares de nuestro trabajo. Aseguramos precisión y confiabilidad en cada recomendación, optimizando el tiempo de nuestros usuarios en una ciudad marcada por el tráfico. Promovemos conexiones humanas más prácticas y convenientes, facilitando encuentros justos que fortalezcan los lazos sociales y profesionales.

### 1.1.2. Perfiles de integrantes del equipo

|  Nombres y Apellidos |    Codigo   | Descripción | Foto | 
|----------------------|-------------|-------------|------|
| Ariadna Geraldine Poma Muñoz | U20221D382 | Estudio la carrera de Ingeniería de Software, tengo 19 años y me considero una persona comprometida, curiosa y optimista, con pasión por el aprendizaje continuo en diversos temas relacionados con la tecnología y otros intereses personales. Cuento con una buena capacidad de adaptación al cambio constante, que se complementa con habilidades blandas como trabajo en equipo, resolución creativa de problemas y ser proactiva. Mi objetivo es aplicar lo aprendido para desarrollar soluciones innovadoras que aporten valor. Actualmente me interesa el desarrollo de software, la inteligencia artificial y la ciberseguridad. |  <p align="center"><img width="auto" height="auto" src="Assets/commons/Foto_presentacion.jpg"></p>   | 
| Ivan Fernando Sanchez Guevara | U202218181 | Mi Nombre es Fernando Sanchez Guevara, tengo 21 años, actualmente estudiando la carrera de Ingeniería de Software. Me considero alguien disiplinado respecto con la puntualidad y desarrollar de la mejor manera las asignaciones de trabajo. Ademas, me preocupo por mi equipo, tratando de que no tengan ningun problema respecto al trabajo, y darles la mano para poder ayudar cuando lo necesiten. Por medio de mi compromiso, eh logrado realizar los proyectos en grupo de forma excelente y sin problemas en percanses | <p align="center"><img width="auto" height="auto" src="Assets/commons/Fernandoprofile.png"></p> |    
| Angel Jose Pariona Chacca | U202314734 | Mi nombre es Angel Pariona, tengo 20 años y actualmente curso el 5to ciclo de la carrera de Ingeniería de Software. Me considero una persona responsable, perseverante y con muchas ganas de seguir aprendiendo en el ámbito tecnológico. Disfruto trabajar en equipo, aportar ideas y asumir retos que me permitan mejorar tanto a nivel académico como personal. En mis tiempos libres practico básquet y me gusta salir a pasear en bicicleta, actividades que me ayudan a mantener el equilibrio entre estudio y recreación. Tengo un interés especial en el desarrollo de software, la innovación tecnológica y la inteligencia artificial, áreas en las que me gustaría seguir creciendo profesionalmente. | ![fotito](/Assets/commons/XD.jfif) |
| Walter Luis Fajardo Monrroy | U202221632 | Soy Walter Luis Fajardo Monrroy, cuento con 20 años y por motivos de estudio resido en Lima. Soy estudiante de la carrera de ingeniería de software, en mi formación como estudiante durante estos ciclos adquirí conocimientos en programación principalmente con lenguaje C++ y Python. También cuento con conocimientos en patrones de software al momento de realizar mis proyectos, además de experiencia realizando diagramas de clases y empleando el DDD (Diseño orientado a objetos). Las habilidades primarias para resaltar serían la responsabilidad y resiliencia frente a las adversidades. Cuento con experiencia en organización y trabajo grupal lo cual emplearé para beneficio del equipo. | ![Walter Luis Fajardo Monrroy](Assets/Walter%20Luis%20Fajardo%20Monrroy.png) |
| Sebastian Augusto Gutierrez Santillan | U202310708 | Mi nombre es Sebastian Gutierrez,  tengo 19 años y actualmente estudio la carrera de Ingeniería de Software. Me considero una persona responsable y constante, especialmente en lo que respecta a la puntualidad y al cumplimiento de mis tareas de la mejor manera posible. Además, en mi tiempo libre disfruto de los videojuegos, una afición que me ayuda a relajarme y a mantener un equilibrio entre mis responsabilidades y mis pasatiempos. |![fotito](Assets/file.jpg) |


## 1.2. Solution Profile

### 1.2.1 Antecedentes y problemática
### What (¿Qué?)
- ¿Cuál es el problema? <br>
La dificultad de coordinar un punto de encuentro justo para reuniones grupales, lo que resulta en que al menos una persona realice un desplazamiento desproporcionadamente largo, generando pérdida de tiempo, mayor exposición al tráfico y frustración.
- ¿Cuál es la relación con la persona en cuestión? <br>
La relación con los usuarios se basa en ofrecerles una herramienta que simplifica la coordinación de encuentros, reduciendo la complejidad y el tiempo invertido en decidir dónde reunirse.
### When (¿Cuándo?)
- ¿Cuándo sucede el problema? <br>
El problema ocurre antes del encuentro, al momento de decidir dónde reunirse, y puede repetirse cada vez que se organiza una reunión en la ciudad, generando pérdida de tiempo y esfuerzo innecesario en cada ocasión.
- ¿Cuándo utiliza el cliente el producto? <br>
El usuario utiliza LocalFood en dos momentos clave: 1) En la planificación inicial, para definir el lugar de la reunión, y 2) Inmediatamente antes de desplazarse, para reajustar el punto de encuentro en base a la ubicación en tiempo real de los participantes.
### Where (¿Donde?)
- ¿Dónde está el cliente cuando utiliza el producto? <br>
Desde cualquier lugar con conexión a internet: su hogar, su lugar de trabajo, o en movimiento.
- ¿A dónde se dirige? <br>
El usuario se dirige a un punto de encuentro, como restaurantes, cafés u otros lugares públicos.
- ¿Dónde surge el problema? <br>
El problema se origina en la fase de planificación y toma de decisiones previa a cualquier reunión grupal. Si bien se manifiesta físicamente en los desplazamientos urbanos, su verdadero origen es la falta de coordinación inteligente entre los participantes. Surge específicamente en el vacío que existe entre la intención de reunirse y la elección de un lugar que equilibre las necesidades de todos, agravado por la ausencia de una herramienta que procese variables clave como ubicaciones en tiempo real, condiciones del tráfico y preferencias colectivas. 
### Who (¿Quienes?)
- ¿Quiénes están involucrados? <br>
Los principales involucrados son los usuarios que desean organizar encuentros con amigos, familiares o colegas, los lugares de reunión como restaurantes, cafés u otros espacios públicos, y la propia aplicación LocalFood, que facilita la coordinación y optimización de los desplazamientos.
- ¿A quiénes les sucede el problema? <br>
El problema afecta principalmente a dos grupos: por un lado, a los usuarios que buscan reunirse, quienes enfrentan pérdida de tiempo en discusiones para elegir un lugar, trayectos desiguales donde algunos asumen siempre mayores desplazamientos. Por otro lado, impacta en los establecimientos como restaurantes y cafés, que pierden clientela potencial cuando los grupos no logran ponerse de acuerdo.
- ¿Quién lo utiliza? <br>
La plataforma LocalFood sera utilizada por cualquier persona que valore su tiempo y busque equidad en la planificación de encuentros. Principalmente, adultos jóvenes y profesionales de 18 a 45 años en entornos urbanos, así como los establecimientos que desean atraer a este público de manera eficaz.
### Why (¿Por qué?)
- ¿Cuál es la causa del problema? <br>
La falta de una herramienta centralizada que procese de forma inteligente las variables clave (ubicación de todos los participantes, tráfico en tiempo real y opciones de locales) para calcular una solución óptima y objetiva.
### How (¿Cómo?)
- ¿En qué condiciones nuestros clientes usan el producto? <br>
Los clientes usan LocalFood cuando necesitan organizar un encuentro con varias personas y buscan minimizar los desplazamientos de todos. Esto ocurre tanto en la fase de planificación previa, desde casa u oficina, cuando quieren confirmar o ajustar el punto de encuentro según la ubicación actual de los participantes.
- ¿Cómo nos conocieron nuestros compradores? <br>
Los usuarios conocen LocalFood principalmente a través de marketing digital enfocado en estilo de vida y planificación de encuentros, colaboraciones con blogs y comunidades locales que comparten recomendaciones de restaurantes y cafés, menciones en redes sociales de usuarios satisfechos, y recomendaciones en plataformas de reseñas y directorios de locales cuando buscan nuevas opciones para reunirse.
- ¿Cómo prefieren nuestros consumidores acceder a nuestro producto? <br>
Los usuarios accederán a LocalFood mediante un sitio web responsive para planificar sus encuentros de manera detallada, complementado con notificaciones personalizadas que les sugieran opciones relevantes según sus preferencias y patrones de uso.
- ¿Qué llevó a la persona a esa situación? <br>
El creciente deseo de las personas por reunirse de manera práctica, equitativa y eficiente, junto con la frustración que genera coordinar encuentros sin herramientas adecuadas, lleva a los usuarios a buscar soluciones que optimicen el tiempo y faciliten la elección de un punto de encuentro justo para todos. Al mismo tiempo, los locales y espacios de reunión se ven motivados a integrarse a la plataforma para atraer grupos de manera más organizada y mejorar la experiencia de sus clientes.
### How much (¿Cuánto?)
En Lima, los residentes pierden un promedio de 68 horas al año atrapados en el tráfico vehicular, especialmente durante las horas pico, lo que se traduce en una pérdida significativa de productividad y calidad de vida. Además, la congestión vehicular genera costos económicos estimados en S/2 mil millones anuales, afectando tanto a individuos como a empresas (Infobae, 2024). La dificultad para coordinar puntos de encuentro equitativos y eficientes amplifica este problema, ya que los participantes deben recorrer distancias desproporcionadas, aumentando el tiempo y esfuerzo invertido en cada reunión. LocalFood busca reducir este impacto al optimizar la planificación de encuentros, minimizando los desplazamientos y, por ende, el tiempo perdido en el tráfico. Al ofrecer recomendaciones basadas en geolocalización inteligente, nuestra plataforma facilita la elección de puntos de encuentro que sean justos y convenientes para todos los participantes, contribuyendo a una mejor gestión del tiempo y reducción de costos asociados al transporte.
### 1.2.2 Lean UX Process.

#### 1.2.2.1. Lean UX Problem Statements.
Nuestro servicio ofrece una plataforma digital que permite a los usuarios coordinar encuentros mediante un análisis de la ubicación de todos los participantes y los posibles puntos de encuentro, como restaurantes, cafés u otros lugares públicos. Al mismo tiempo, facilita a estos lugares la oportunidad de atraer grupos de manera organizada, optimizando la ocupación y la experiencia del cliente.
Hemos identificado un factor crítico que afecta a los usuarios: la dificultad para decidir un punto de encuentro justo y conveniente para todos, lo que genera trayectos desproporcionados, pérdida de tiempo y esfuerzo adicional al planificar reuniones. Esta desconexión entre la ubicación de los participantes y la elección del lugar provoca frustración y desmotivación para reunirse, limitando la frecuencia y calidad de los encuentros sociales y profesionales.
¿Cómo optimizar la coordinación de encuentros entre múltiples usuarios, minimizando sus tiempos y distancias de desplazamiento mediante geolocalización inteligente, a la vez que se permite a los establecimientos gestionar la afluencia de grupos de manera eficiente y organizada?
#### 1.2.2.2. Lean UX Assumptions.

**Business Assumptions**
- Creo que nuestros clientes necesitan una manera fácil y confiable de coordinar encuentros, encontrando puntos de reunión justos y convenientes para todos los participantes, sin tener que calcular manualmente distancias ni tiempos de traslado.
- Estas necesidades se pueden resolver con una plataforma digital que utilice geolocalización inteligente para analizar las ubicaciones de todos los participantes, recomendar automáticamente el punto de encuentro óptimo y ofrecer información sobre los lugares (restaurantes, cafés u otros espacios públicos).
- Mis clientes inciales seran grupos de amigos, familiares y colegas que organizan reuniones de manera recurrente, así como establecimientos de comida y entretenimiento que buscan atraer clientela grupal y optimizar la gestión de su capacidad.
- El valor principal que mis clientes esperan de mi servicio es simplificar la coordinación de encuentros, garantizando un punto de reunión conveniente para todos los participantes sin complicaciones ni pérdida de tiempo.
- El cliente también puede obtener estos beneficios adicionales: Ahorro de tiempo adicional en la planificación, reducción de desplazamientos innecesarios, recomendaciones confiables de lugares, posibilidad de ajustar la ubicación en tiempo real según la posición de cada participante, y una experiencia más cómoda y agradable al reunirse.
- Voy a adquirir la mayoría de mis clientes a través de campañas de marketing digital segmentadas en redes sociales (Instagram y Tiktok), colaboraciones estratégicas con influencers de estilo de vida, gastronomía y ocio urbano para aumentar la visibilidad de la plataforma, alianzas comerciales con restaurantes y cafés para promociones conjuntas, y participación en eventos urbanos y ferias relevantes para generar adopción directa y reconocimiento de marca.
- Haré dinero a través de publicidad localizada en la app, alianzas con establecimientos participantes y servicios premium que ofrezcan análisis avanzados de optimización de rutas y reservas priorizadas en lugares populares.
- Mi competencia principal en el mercado serán aplicaciones de mapas y planificación de reuniones como Google Maps, Waze, Glympse y MapQuest, que los usuarios suelen utilizar actualmente para coordinar encuentros.
- Los venceremos debido a nuestro enfoque integral que combina geolocalización inteligente, recomendaciones confiables de lugares, personalización de encuentros y herramientas de gestión para los establecimientos, ofreciendo una experiencia más eficiente, equitativa y práctica que las soluciones actuales. Priorizamos la coordinación justa entre participantes y la optimización de desplazamientos, diferenciándonos de aplicaciones de mapas tradicionales que no ofrecen estas funcionalidades integradas.
- Mi mayor riesgo de producto es que los usuarios no adopten la plataforma de forma constante o que los establecimientos no actualicen su información sobre disponibilidad y horarios, lo que podría afectar la confiabilidad de las recomendaciones y disminuir la satisfacción del usuario.
- Resolveremos esto a través de un tutorial dentro de la aplicación que guíe a los usuarios y establecimientos en cómo registrar y actualizar información, coordinar encuentros y aprovechar al máximo las funcionalidades de LocalFood, asegurando un uso sencillo y efectivo de la plataforma.


**User Assumptions**
- ¿Quiénes son nuestros usuarios? <br>
  Personas que desean reunirse con amigos, familiares o colegas de manera equitativa y práctica, y locales como restaurantes y cafés que buscan atraer grupos de manera organizada.
- ¿Cómo se integra nuestro producto en su vida cotidiana? <br>
  Para los usuarios, facilita planificar reuniones reduciendo desplazamientos y tiempos; para los locales, ayuda a gestionar reservas y promociones de manera eficiente.
- ¿Qué desafíos enfrenta el producto y cómo pueden solucionarse? <br>
  Los desafíos incluyen la adopción constante por parte de usuarios y locales, y la precisión de las recomendaciones; se solucionan mediante tutoriales dentro de la app, notificaciones para actualizar información.
- ¿Cuándo y de qué manera se utiliza la plataforma? <br>
  Se utiliza durante la planificación de reuniones y justo antes de salir, permitiendo confirmar o ajustar el punto de encuentro según la ubicación de cada participante.
- ¿Qué funcionalidades son esenciales? <br>
  Recomendación automática del punto de encuentro, filtros de lugar, geolocalización en tiempo real, gestión de locales, reseñas verificadas y notificaciones.
- ¿Cómo debe lucir y comportarse la plataforma? <br>
  Debe ser intuitiva, visualmente clara, rápida, confiable y respondive, ofreciendo información precisa y herramientas fáciles de usar tanto para usuarios como para locales.
  
#### 1.2.2.3. Lean UX Hypothesis Statements.

- **Creemos que** para usuarios que están planificando una reunión grupal, implementar una "Recomendación Automática con un Solo Clic" (que calcule y muestre instantáneamente el lugar óptimo al crear un grupo) aumentará significativamente la finalización exitosa de la planificación.<br>
  **Sabremos que hemos tenido éxito**
  **Cuando veamos** que el 50% de los grupos creados que tienen más de 2 integrantes utilizan la función de recomendación automática para visualizar la opción óptima en sus primeras dos semanas de uso.
- **Creemos que** ofrecer opciones de filtros de lugares (tipo de restaurante, rango de precio, distancia máxima) mejorará la satisfacción del usuario.<br>
  **Sabremos que hemos tenido éxito**<br>
  **Cuando veamos que** las sesiones donde se aplica al menos un filtro tienen una tasa de conversión (definida como "reserva confirmada" o "lugar seleccionado") un 25% mayor que las sesiones sin uso de filtros, medido en el primer mes tras el lanzamiento.
- **Creemos que** permitir que los locales gestionen su disponibilidad y promociones dentro de la app incrementará su participación.
  **Sabremos que hemos tenido éxito**<br>
  **Cuando veamos que** el 45% de los locales activos publican al menos una promoción por semana y estas promociones generan un aumento del 15% en las reservas provenientes de LocalFood para ese local.
- **Creemos que** la visualización en tiempo real de la ubicación de cada participante reducirá el tiempo de planificación de reuniones.
  **Sabremos que hemos tenido éxito**<br>
  **Cuando veamos que** los grupos que usan la función en tiempo real tardan en promedio un 30% menos en decidir el punto de encuentro en comparación con quienes no la usan.


#### 1.2.2.4. Lean UX Canvas.
![Lean Ux Canvas](https://github.com/Local-Food-Aplicaciones-Web/Project-report-localfood/blob/patch-1/Assets/Lean%20UX%20Canvas%20(2).png?raw=true)

## 1.3. Segmentos objetivo.
**Segmento #1: Comensales** <br>
Este segmento está formado por personas que buscan encuentros eficientes y cómodos, donde cada participante pueda llegar con facilidad y sin complicaciones. Incluye estudiantes, jóvenes profesionales y personas con un estilo de vida activo que valoran la organización, la practicidad y el aprovechamiento del tiempo en sus reuniones.
- Aspectos demográficos:
  - Sexo: Masculino y femenino
  - Edades: Entre 18 y 45 años
- Aspectos psicográficos:
- Motivaciones: Ahorrar tiempo, minimizar desplazamientos, facilitar la coordinación de reuniones y aprovechar al máximo cada encuentro.
- Intereses: Descubrir nuevos restaurantes y cafés, disfrutar de experiencias gastronómicas y sociales, participar en actividades culturales y de ocio en la ciudad, y además optimizar su tiempo, valorando cada minuto de manera eficiente.
- Comportamiento: Son personas activas que organizan su tiempo con cuidado, suelen planificar reuniones con amigos, familiares o colegas con antelación, y buscan lugares accesibles y convenientes comparando diferentes opciones antes de decidir.

**Segmento #2: Dueños de locales y gerentes** <br>
Este segmento está conformado por propietarios y administradores de restaurantes, cafés y otros espacios de encuentro que buscan atraer clientes de manera más eficiente y organizar mejor la llegada de grupos. Incluye tanto negocios pequeños como medianos, con interés en optimizar la ocupación y brindar una experiencia conveniente para sus clientes.
- Aspectos demográficos:
  - Sexo: Masculino y femenino
  - Edades: Entre 25 y 55 años
- Aspectos psicográficos:
  - Motivaciones: Maximizar la eficiencia del espacio, evitar conflictos o sobrecupo durante la llegada de grupos, facilitar la organización interna del personal y asegurar que los clientes tengan una experiencia agradable que los haga volver.
  - Intereses: Innovación en servicios, gestión eficiente de reservas, fidelización de clientes y optimización de la experiencia del cliente.
  - Comportamiento: Activos en redes sociales, atentos a la demanda de clientes y abiertos a adoptar soluciones tecnológicas sencillas que faciliten la organización de grupos y la gestión del local.

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

Estas son las principales estrategias que aplicará LocalFood para diferenciarse de sus competidores:

- Ofrecer recomendaciones personalizadas de restaurantes en el punto medio según las preferencias de comida de los usuarios (ej. pizza, sushi, vegetariano).

- Implementar campañas de marketing enfocadas en la experiencia social: compartir momentos con amigos, parejas o grupos en lugares justos y accesibles para todos.

- Incorporar reseñas verificadas y mapas interactivos que permitan a los usuarios explorar el lugar antes de reunirse.

- Establecer alianzas con restaurantes y gerentes locales, ofreciendo promociones exclusivas para los grupos que lleguen a través de la app.

De esta manera, LocalFood se diferenciará al crear una experiencia más social, gastronómica y colaborativa que otras apps del rubro, generando valor tanto para los usuarios como para los restaurantes.


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

#### Segmento 1:Comensales

## Entrevista N°1: 
- Nombre: Andrea Roncal Vargas
- Sexo: femenino
- Edad:25
- tiempo de duracion: 6:54
- Ubicación: Lima, Independencia

#### Entrevista:
<div align="center">
    <img src="./Assets/entevista_1.png">
</div>

link: https://upcedupe-my.sharepoint.com/:v:/g/personal/u202218181_upc_edu_pe/EeIVi6Md2ulKquZNDKN7dmsB_HYS9hgtXhf8RXEsrMiZYQ?e=JRSFH5 

**Resumen**

Andre Roncal es ingeniera en Gestión Empresarial y actualmente trabaja en una consultoría enfocada en distritos privados. Ella comenta que ha tenido complicaciones para coordinar agendas con amigos y familiares, especialmente al momento de organizar salidas a restaurantes.
Considera importante que el lugar elegido esté cerca y que los precios sean accesibles. Además, destaca que suele asistir a restaurantes para cenar y conversar, valorando la importancia de los canales de comunicación para gestionar estas reuniones. En ese sentido, WhatsApp es su herramienta principal.
También resalta que la incorporación de filtros en aplicaciones de búsqueda de restaurantes facilita la selección de opciones adecuadas. Para Andre, esto representa una mejora significativa, ya que desea aumentar la frecuencia de sus reuniones, y considera que el uso de aplicaciones es la mejor forma de lograrlo.

## Entrevista N°2: 
- Nombre: Piero Vargas Licetti y Cotrina Chipana Ñuñes
- Sexo: Masculino y Femenino
- Edad: 30 y 27
- tiempo de duracion: 7:00
- Ubicación: Lima, San Borja

#### Entrevista:
<div align="center">
    <img src="./Assets/entevista_2.png">
</div>

link: https://upcedupe-my.sharepoint.com/:v:/g/personal/u202218181_upc_edu_pe/EfrNhsxxD-tFtfL0wKcNYpwB_AwxCRHV8Xefx0XbP_M3Mw?e=lbcaQk

**Resumen:**

Piero Varas y Cotrina Chipana trabajan juntos en el área de ingeniería industrial con enfoque en arquitectura. Ambos enfrentan dificultades para concretar reuniones con sus amigos, principalmente porque viven lejos de ellos, lo que convierte la coordinación en una verdadera odisea.
El tiempo también representa un factor decisivo para la pareja al momento de planear encuentros en restaurantes. Como dato adicional, Piero comenta que la ubicación del local puede ser un problema: lo que para algunos resulta cercano, para él puede estar lejos, y viceversa.
Cotrina valora positivamente las cualidades que pueden facilitar la organización de salidas grupales con sus amigas. Ambos coinciden en que contar con filtros para seleccionar restaurantes sería muy beneficioso, ya que permitiría elegir lugares adecuados según sus necesidades.
En cuanto a herramientas de comunicación, Piero utiliza WhatsApp para coordinar con su grupo de amigos, mientras que Cotrina también lo emplea, además de TikTok, donde encuentra opciones de restaurantes que guarda como referencia para futuras reuniones.
Respecto a sus preferencias personales, ambos priorizan la rapidez en el servicio y un ambiente agradable.

## Entrevista N°3: 
- Nombre: Anthony Yovera
- Sexo: Masculino 
- Edad: 23 años
- tiempo de duracion: 3:17
- Ubicación: Lima, San Martin de Porres

#### Entrevista:
<div align="center">
    <img src="./Assets/imagen de video.png">
</div>

link: https://upcedupe-my.sharepoint.com/:v:/g/personal/u202221632_upc_edu_pe/ESdjM7va9wVPmepF75nPWGsBuKglaXXEAzqkDo_1dBeWag?e=kt9kOM

**Resumen:**

El entrevistado es un estudiante que reside en el distrito de San Martín de Porres. Menciona que sus principales dificultades para organizar una reunión son la distancia del punto de encuentro y las cancelaciones de último momento. Generalmente busca un lugar céntrico para todos, aunque ha cancelado planes con frecuencia debido a la dificultad de llegar al lugar acordado. No obstante, le resulta atractivo contar con una aplicación que le muestre múltiples opciones de puntos de encuentro.


#### Segmento 2:Dueños de locales

## Entrevista N°4: 
- Nombre: Enrique Suarez Castillo
- Sexo: Masculino 
- Edad: 26 años
- tiempo de duracion: 6:13
- Ubicación: Lima, Jesus Maria

#### Entrevista:
<div align="center">
    <img src="./Assets/imagen3.png">
</div>

link: https://upcedupe-my.sharepoint.com/:v:/g/personal/u20221d382_upc_edu_pe/EfQ6SfYkkoZKhzGfk1EinWgBglLpvJtFyufBnsWZtPhx1w?e=1zYSmD&

**Resumen:**

 El entrevistado es dueño de una sanguchería y actualmente vive en el distrito de Jesús María. Indicó que suelen recibir más grupos de estudiantes durante la semana y, los fines de semana, más grupos familiares. Asimismo, mencionó que su principal dificultad es la baja visibilidad y la fuerte competencia en la zona. Usa WhatsApp para promocionar su negocio, pero desearía contar con una aplicación que le ayude a aumentar su visibilidad y ventas frente a la competencia. Le resultaría atractiva una aplicación con un precio accesible, pero que ofrezca funciones que brinden estadísticas para gestionar a su personal y promociones.



### 2.2.3. Análisis de entrevistas.

**Segmento 1: Comensales**

**Entrevista 1:**  
Andrea Roncal Vargas  

**Análisis de la entrevista:**  
Andrea expresa una problemática recurrente entre los comensales jóvenes con agendas ocupadas: la dificultad de coordinar salidas grupales debido al tiempo y la distancia. Su principal criterio para elegir un restaurante es la cercanía y accesibilidad económica, lo que refleja la necesidad de una herramienta que optimice la ubicación del punto de encuentro. Valora la eficiencia en la comunicación, usando principalmente WhatsApp para organizar reuniones, y reconoce que los filtros en aplicaciones de búsqueda son esenciales para ahorrar tiempo al seleccionar opciones. Su disposición a utilizar una aplicación que simplifique la coordinación indica una actitud abierta hacia soluciones tecnológicas que mejoren la frecuencia y calidad de sus interacciones sociales.

**Entrevista 2:**  
Piero Vargas Licetti y Cotrina Chipana Ñuñes  

**Análisis de la entrevista:**  
Piero y Cotrina reflejan las dificultades logísticas comunes entre grupos que viven en distintos distritos: la distancia y la falta de consenso sobre el punto de encuentro. El tiempo y la ubicación se convierten en factores determinantes para concretar salidas.  
Ambos consideran que los filtros de búsqueda por ubicación, tipo de restaurante o ambiente serían altamente útiles para reducir el esfuerzo de planificación. Además, su uso de WhatsApp y TikTok demuestra la importancia de integrar herramientas digitales populares en el proceso de decisión y coordinación. También valoran la rapidez en el servicio y la buena ambientación, lo que evidencia un interés no solo por la conveniencia geográfica, sino también por la experiencia del lugar. Su testimonio subraya la necesidad de una aplicación que centralice información, distancias y preferencias para facilitar la toma de decisiones grupales.

**Entrevista 3:**  
Anthony Yovera  

**Análisis de la entrevista:**  
Anthony identifica los mismos retos logísticos que los otros entrevistados: la distancia y las cancelaciones como principales obstáculos para concretar reuniones. Prefiere puntos céntricos y equitativos para todos los asistentes, lo cual coincide directamente con el propósito de la aplicación propuesta. Su interés por una herramienta que muestre opciones de encuentro óptimas para todos los miembros del grupo refuerza la validación de la idea. La entrevista demuestra que existe una necesidad clara y latente de soluciones que optimicen la ubicación grupal y reduzcan el esfuerzo de organización manual.

**Segmento 2: Dueños de locales**

**Entrevista 4:**  
Enrique Suárez Castillo  

**Análisis de la entrevista:**  
Enrique, propietario de una sanguchería en Jesús María, describe un entorno competitivo donde la visibilidad del negocio es su principal desafío. A pesar de contar con una clientela variada grupos de estudiantes entre semana y familias los fines de semana, enfrenta dificultades para destacar frente a otros locales similares en la zona. Actualmente utiliza WhatsApp como canal de promoción, lo que evidencia un uso limitado de herramientas digitales y la ausencia de una plataforma más integral para gestionar la presencia de su negocio. Expresa interés en una aplicación accesible en costo, pero con funciones avanzadas como estadísticas de ventas, control del personal y promoción de ofertas. Su testimonio refleja una necesidad clara de soluciones tecnológicas que potencien la visibilidad y la gestión de su negocio, especialmente aquellas que le permitan conectarse con nuevos clientes y aprovechar los flujos de grupos que buscan lugares convenientes para reunirse.


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

![Journey Map 1](Assets/Comensales%20journey%20map%202.png)
El viaje de María, una estudiante universitaria que suele salir a comer con sus amigos, comienza con la necesidad de encontrar un lugar cercano para todos sin perder tiempo; al usar la app siente curiosidad y cierta duda sobre si funcionará, pero al ver rutas claras y opciones confiables experimenta entusiasmo y alivio al coordinar fácilmente con su grupo; al elegir compara precios, distancias y reseñas, lo que le da seguridad y confianza, y finalmente, tras disfrutar la comida y terminar satisfecha, siente tranquilidad y disposición a volver a usar la app en futuras salidas, reforzada por la posibilidad de dejar reseñas y recibir recomendaciones personalizadas.

**USER PERSONA: Luis Luzquiños**
![Journey Map 2](Assets/Dueño%20de%20Local%20journey%20map.png)
El viaje de Luis, un emprendedor de 30 años dueño de un puesto de comida, inicia con cierto escepticismo sobre si una app realmente puede atraerle más clientes, pero al registrarse y ver lo sencillo que es mostrar su local comienza a sentir confianza; al usar la plataforma para subir fotos, precios y horarios experimenta entusiasmo al notar que más grupos llegan gracias a que su negocio aparece como punto cercano en las rutas compartidas, lo que refuerza su motivación para mantenerse activo; al recibir reseñas positivas y datos sobre el flujo de clientes, Luis gana seguridad y satisfacción, y finalmente, al ver que su negocio crece con apoyo de la app, siente tranquilidad y disposición a seguir utilizándola como una herramienta clave para impulsar su emprendimiento.

### 2.3.4. Empathy Mapping.

**USER PERSONA: María Tasayco**
![Empathy Map 1](Assets/Empathy%20map%20Comensales.png)

**USER PERSONA: Luis Luzquiños**
![Empathy Map 2](Assets/Empathy%20map%20Dueño%20de%20local.png)

### 2.3.5. As-is Scenario Mapping.

**USER PERSONA: María Tasayco**
![Scenario Mapping 1](Assets/As%20is%20Scenario%20Mapping%20-%20Comensales.jpg)
El proceso de coordinar una salida a comer con sus amigos resulta desgastante para María. Aunque al inicio se emociona con la idea de reunirse, depende de grupos de WhatsApp donde surgen demasiadas propuestas de restaurantes y la conversación rápidamente se vuelve caótica. María dedica tiempo revisando Google Maps, calculando distancias desde su casa y compartiendo capturas en el chat, pero siente que sus sugerencias no siempre son tomadas en cuenta de manera justa. La decisión final suele inclinarse hacia locales más convenientes para algunos, obligándola a viajar más, gastar más en transporte y ajustarse a lo que el grupo define. Esto le genera frustración, inseguridad y una sensación de inequidad, que contrastan con el entusiasmo inicial de querer disfrutar una comida con sus amigos.

**USER PERSONA: Luis Luzquiños**
![Scenario Mapping 1](Assets/As%20is%20Scenario%20Mapping%20-%20Dueños%20de%20locales.jpg)
El proceso de atraer clientes a su restaurante resulta complejo y agotador para Luis. Aunque se esfuerza en publicar fotos en redes sociales y depender de recomendaciones de boca a boca, siente que su alcance es limitado frente a cadenas más grandes y visibles. Intenta posicionarse en Google Maps y en aplicaciones de delivery, pero se enfrenta a altas comisiones y a la sensación de que, si los clientes no lo buscan directamente, su local prácticamente no existe. A pesar de brindar buena atención y ofrecer promociones, Luis percibe que muchos clientes no regresan porque su restaurante no se encuentra en un punto de fácil acceso para ellos. Esto lo obliga a reiniciar constantemente la búsqueda de nuevos comensales, generándole cansancio, frustración e incertidumbre sobre la estabilidad de su negocio, pese a su motivación por crecer y destacar.

## 2.4. Ubiquitous Language.

El "Ubiquitous Language" será una herramienta esencial en nuestro trabajo, ya que nos permitirá establecer un lenguaje común y compartido entre todos los miembros del equipo.

**Ubiquitous Language – LOCALFOOD**

1. Comensal: Usuario que busca reunirse con amigos, familiares o grupos en un local accesible para todos.

2. Dueño/Gerente de Local: Usuario que administra un restaurante o negocio gastronómico y busca atraer clientes mediante la app.

3. Grupo: Conjunto de comensales que desean coordinar un punto de encuentro común.

4. Contacto: Persona agregada a la lista de amigos/usuarios dentro de la aplicación.

5. Cálculo: Proceso que determina el restaurante más conveniente para todos los integrantes del grupo según su ubicación.

6. Punto medio: Resultado geográfico que equilibra las distancias de los comensales para elegir un lugar justo.

7. Restaurante/Local: Negocio registrado en la app con ubicación, menú, precios y horarios.

8. Reserva: Acción de apartar un espacio en un local a través de la aplicación.

9. Promoción: Beneficio o descuento ofrecido por un local para atraer comensales.

10. Reseña: Comentario o calificación que los comensales dejan sobre un local después de su visita.

11. Favorito: Local guardado por un comensal para futuras salidas.

12. Visibilidad del local: Nivel de exposición que obtiene un restaurante en la aplicación (ej. destacarlo en búsquedas).

13. Estadísticas de consumo: Datos que reciben los dueños sobre reservas, picos de demanda y preferencias de clientes.

14. Filtros de búsqueda: Opciones que permiten refinar locales por precio, tipo de comida, promociones o cercanía.

15. Mapa interactivo: Visualización gráfica de los locales disponibles y su relación con la ubicación de los comensales.

16. Notificación de grupo: Aviso que reciben los comensales cuando otro integrante los incluye en un cálculo o invitación.

17. Plan freemium/premium: Modelo de negocio que ofrece funciones gratuitas con anuncios y beneficios adicionales de pago.

18. Perfil del usuario: Información personal de comensales o dueños (nombre, ubicación, historial, locales favoritos, etc.).

19. Experiencia social: Valor diferencial de la app que resalta la facilidad de organizar reuniones y compartir momentos.

20. Código QR: Medio para agregar contactos o acceder a perfiles dentro de la aplicación.

# Capítulo III: Requirements Specification

## 3.1. To-Be Scenario Mapping.

- Comensales

![comensales-to-be-scenario-map](Assets/Mapeo%20escenarios%20-%20Comensales%20(1).jpg )

- Dueños de locales

![dueños-de-locales-to-be-scenario-map](Assets/Mapeo%20escenarios%20-%20Dueños%20de%20locales%20(1).jpg)

## 3.2. User Stories.

| EPICA                               | ID EPICA |
| ----------------------------------- | -------- |
| Gestión de usuarios y grupos        | EP01     |
| Cálculo del punto de encuentro óptimo | EP02     |
| Búsqueda y filtrado de restaurantes | EP03     |
| Coordinación y comunicación grupal  | EP04     |
| Gestión de restaurantes y locales   | EP05     |
| Recomendaciones y personalización   | EP06     |
| Historias técnicas y administración | EP07     |


| ID Historia | Título | Descripción | Criterios de Aceptación | Relación con (Epic ID) |
|--------------|---------|--------------|--------------------------|-------------------------|
| **US01** | Ver restaurantes cercanos | Como comensal, quiero ver los restaurantes más cercanos a la ubicación de mi grupo, para elegir un punto equitativo. | Dado que los usuarios comparten sus ubicaciones, cuando accedo a la app, entonces se muestran restaurantes dentro del rango medio de distancia. | EP01 |
| **US02** | Filtros de búsqueda | Como comensal, quiero aplicar filtros (precio, tipo de comida, distancia), para encontrar opciones adecuadas. | Dado que busco un restaurante, cuando aplico filtros, entonces se muestran resultados que coincidan con mis criterios. | EP01 |
| **US03** | Mostrar mapa interactivo | Como usuario, quiero visualizar los restaurantes en un mapa, para comparar ubicaciones fácilmente. | Dado que estoy en la sección de mapa, cuando selecciono un punto, entonces se muestra información del restaurante. | EP01 |
| **US04** | Calcular punto medio del grupo | Como usuario, quiero que la app calcule el punto medio entre las ubicaciones de todos, para decidir un lugar justo. | Dado que compartimos nuestras ubicaciones, cuando presiono “calcular punto medio”, entonces se muestra el resultado en el mapa. | EP01 |
| **US05** | Ver detalles del restaurante | Como comensal, quiero acceder a la información del restaurante (menú, horario, reseñas), para decidir mejor. | Dado que selecciono un restaurante, cuando abro su ficha, entonces puedo ver su información completa. | EP02 |
| **US06** | Crear grupo de salida | Como usuario, quiero crear un grupo con mis amigos, para coordinar la elección del lugar. | Dado que inicio sesión, cuando creo un grupo, entonces puedo invitar a otros usuarios. | EP02 |
| **US07** | Invitar amigos al grupo | Como comensal, quiero invitar a mis amigos por enlace o código, para que se unan al grupo. | Dado que tengo un grupo creado, cuando envío el enlace, entonces mis amigos pueden unirse. | EP02 |
| **US08** | Compartir ubicación actual | Como usuario, quiero compartir mi ubicación con el grupo, para calcular un punto equitativo. | Dado que comparto mi ubicación, cuando todos lo hagan, entonces se calculará el punto medio. | EP02 |
| **US09** | Chat grupal | Como usuario, quiero tener un chat dentro del grupo, para coordinar en tiempo real. | Dado que entro al grupo, cuando abro el chat, entonces puedo enviar y recibir mensajes. | EP02 |
| **US10** | Votar por restaurante | Como usuario, quiero votar entre las opciones sugeridas, para decidir de forma grupal. | Dado que se muestran opciones, cuando emito mi voto, entonces la app muestra el restaurante más votado. | EP03 |
| **US11** | Confirmar asistencia | Como comensal, quiero confirmar mi asistencia al encuentro, para que el grupo sepa quién irá. | Dado que estoy en el grupo, cuando selecciono “Asistiré”, entonces mi estado se actualiza para todos. | EP03 |
| **US12** | Crear cuenta de usuario | Como nuevo usuario, quiero registrarme con correo o Google, para acceder a todas las funciones. | Dado que ingreso mis datos, cuando confirmo el registro, entonces mi cuenta queda creada. | EP04 |
| **US13** | Iniciar sesión | Como usuario registrado, quiero iniciar sesión, para acceder a mis grupos y preferencias. | Dado que ingreso mis credenciales, cuando las valido, entonces accedo a mi cuenta. | EP04 |
| **US14** | Recuperar contraseña | Como usuario, quiero recuperar mi contraseña si la olvido, para no perder acceso a mi cuenta. | Dado que olvido mi contraseña, cuando solicito recuperación, entonces recibo un enlace de restablecimiento. | EP04 |
| **US15** | Agregar restaurante | Como dueño de local, quiero registrar mi restaurante, para que los usuarios lo encuentren en el mapa. | Dado que tengo una cuenta de negocio, cuando registro mi local, entonces aparece en la app. | EP05 |
| **US16** | Editar información del restaurante | Como dueño, quiero actualizar mis datos (horarios, menú, promociones), para mantener mi perfil vigente. | Dado que edito la información, cuando guardo los cambios, entonces se actualiza en la app. | EP05 |
| **US17** | Ver estadísticas de visitas | Como dueño, quiero visualizar cuántos usuarios visitaron mi perfil, para medir el interés en mi local. | Dado que tengo un negocio registrado, cuando ingreso a mi panel, entonces veo estadísticas básicas. | EP05 |
| **US18** | Responder reseñas | Como dueño, quiero responder comentarios de los usuarios, para mejorar la interacción. | Dado que tengo reseñas, cuando respondo, entonces los usuarios pueden leer mi respuesta. | EP05 |
| **US19** | Publicar promociones | Como dueño, quiero crear promociones temporales, para atraer más clientes. | Dado que entro a mi panel, cuando publico una promoción, entonces se muestra a los usuarios cercanos. | EP05 |
| **US20** | Sistema de reseñas | Como usuario, quiero dejar una reseña y calificación del restaurante, para compartir mi experiencia. | Dado que visité un restaurante, cuando califico, entonces mi reseña se publica en su perfil. | EP06 |
| **US21** | Ver reseñas de otros usuarios | Como comensal, quiero leer las reseñas de otros, para decidir si vale la pena ir. | Dado que abro un restaurante, cuando ingreso a reseñas, entonces puedo leer las opiniones. | EP06 |
| **US22** | Guardar favoritos | Como usuario, quiero guardar restaurantes como favoritos, para acceder fácilmente después. | Dado que veo un restaurante, cuando selecciono “Guardar”, entonces aparece en mi lista. | EP06 |
| **US23** | Historial de visitas | Como usuario, quiero ver los lugares visitados anteriormente, para repetir experiencias. | Dado que visité un restaurante, cuando abro mi historial, entonces veo mis visitas pasadas. | EP06 |
| **US24** | Notificaciones de recordatorio | Como usuario, quiero recibir recordatorios antes de las reuniones, para no olvidar el encuentro. | Dado que tengo una salida programada, cuando se acerque la hora, entonces recibo una notificación. | EP06 |
| **US25** | Compartir restaurante | Como usuario, quiero compartir un restaurante con mis amigos fuera de la app, para invitarlos fácilmente. | Dado que encuentro un restaurante, cuando selecciono “Compartir”, entonces puedo enviarlo por redes o WhatsApp. | EP06 |
| **US26** | Gestionar usuarios | Como administrador, quiero ver la lista de usuarios registrados, para mantener el control de la plataforma. | Dado que accedo al panel de administración, cuando abro usuarios, entonces veo su información básica. | EP07 |
| **US27** | Gestionar locales registrados | Como administrador, quiero revisar y aprobar locales registrados, para mantener la calidad del servicio. | Dado que un dueño registra su local, cuando reviso los datos, entonces puedo aprobar o rechazarlo. | EP07 |
| **US28** | Supervisar reportes | Como administrador, quiero revisar reportes de usuarios o locales, para tomar acciones correctivas. | Dado que se genera un reporte, cuando lo abro, entonces puedo resolverlo o sancionar. | EP07 |
| **US29** | Ver estadísticas generales | Como administrador, quiero ver estadísticas globales de uso, para analizar el crecimiento de la app. | Dado que ingreso al panel, cuando abro estadísticas, entonces veo datos de usuarios, locales y visitas. | EP07 |
| **US30** | Gestionar promociones | Como administrador, quiero supervisar las promociones creadas por los locales, para evitar contenido inapropiado. | Dado que hay promociones activas, cuando las reviso, entonces puedo desactivarlas si incumplen normas. | EP07 |
| **US31** | Administrar contenido y reseñas | Como administrador, quiero eliminar comentarios ofensivos, para mantener un entorno seguro. | Dado que detecto una reseña inapropiada, cuando la elimino, entonces desaparece del sistema. | EP07 |

## 3.3. Impact Mapping.

![impact-mappig](./Assets/Impact%20map%20(1).png)

## 3.4. Product Backlog.

| # Orden | User ID | Título                                   | Descripción                                                                                                                                                          | Story Points |
| ------- | ------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1       | US01    | Ver restaurantes cercanos                 | Como comensal, quiero ver los restaurantes más cercanos a la ubicación de mi grupo, para elegir un punto equitativo.                                                | 5            |
| 2       | US02    | Filtros de búsqueda                       | Como comensal, quiero aplicar filtros (precio, tipo de comida, distancia), para encontrar opciones adecuadas.                                                       | 3            |
| 3       | US03    | Mostrar mapa interactivo                  | Como usuario, quiero visualizar los restaurantes en un mapa, para comparar ubicaciones fácilmente.                                                                  | 5            |
| 4       | US04    | Calcular punto medio del grupo            | Como usuario, quiero que la app calcule el punto medio entre las ubicaciones de todos, para decidir un lugar justo.                                                | 8            |
| 5       | US05    | Ver detalles del restaurante              | Como comensal, quiero acceder a la información del restaurante (menú, horario, reseñas), para decidir mejor.                                                       | 3            |
| 6       | US06    | Crear grupo de salida                      | Como usuario, quiero crear un grupo con mis amigos, para coordinar la elección del lugar.                                                                          | 5            |
| 7       | US07    | Invitar amigos al grupo                   | Como comensal, quiero invitar a mis amigos por enlace o código, para que se unan al grupo.                                                                         | 3            |
| 8       | US08    | Compartir ubicación actual                | Como usuario, quiero compartir mi ubicación con el grupo, para calcular un punto equitativo.                                                                       | 5            |
| 9       | US09    | Chat grupal                               | Como usuario, quiero tener un chat dentro del grupo, para coordinar en tiempo real.                                                                                | 5            |
| 10      | US10    | Votar por restaurante                      | Como usuario, quiero votar entre las opciones sugeridas, para decidir de forma grupal.                                                                             | 3            |
| 11      | US11    | Confirmar asistencia                       | Como comensal, quiero confirmar mi asistencia al encuentro, para que el grupo sepa quién irá.                                                                      | 2            |
| 12      | US12    | Crear cuenta de usuario                     | Como nuevo usuario, quiero registrarme con correo o Google, para acceder a todas las funciones.                                                                    | 3            |
| 13      | US13    | Iniciar sesión                             | Como usuario registrado, quiero iniciar sesión, para acceder a mis grupos y preferencias.                                                                          | 2            |
| 14      | US14    | Recuperar contraseña                        | Como usuario, quiero recuperar mi contraseña si la olvido, para no perder acceso a mi cuenta.                                                                      | 2            |
| 15      | US15    | Agregar restaurante                         | Como dueño de local, quiero registrar mi restaurante, para que los usuarios lo encuentren en el mapa.                                                               | 5            |
| 16      | US16    | Editar información del restaurante         | Como dueño, quiero actualizar mis datos (horarios, menú, promociones), para mantener mi perfil vigente.                                                            | 3            |
| 17      | US17    | Ver estadísticas de visitas                 | Como dueño, quiero visualizar cuántos usuarios visitaron mi perfil, para medir el interés en mi local.                                                             | 3            |
| 18      | US18    | Responder reseñas                           | Como dueño, quiero responder comentarios de los usuarios, para mejorar la interacción.                                                                             | 3            |
| 19      | US19    | Publicar promociones                        | Como dueño, quiero crear promociones temporales, para atraer más clientes.                                                                                          | 3            |
| 20      | US20    | Sistema de reseñas                           | Como usuario, quiero dejar una reseña y calificación del restaurante, para compartir mi experiencia.                                                               | 3            |
| 21      | US21    | Ver reseñas de otros usuarios               | Como comensal, quiero leer las reseñas de otros, para decidir si vale la pena ir.                                                                                  | 2            |
| 22      | US22    | Guardar favoritos                            | Como usuario, quiero guardar restaurantes como favoritos, para acceder fácilmente después.                                                                          | 2            |
| 23      | US23    | Historial de visitas                         | Como usuario, quiero ver los lugares visitados anteriormente, para repetir experiencias.                                                                           | 2            |
| 24      | US24    | Notificaciones de recordatorio              | Como usuario, quiero recibir recordatorios antes de las reuniones, para no olvidar el encuentro.                                                                   | 2            |
| 25      | US25    | Compartir restaurante                        | Como usuario, quiero compartir un restaurante con mis amigos fuera de la app, para invitarlos fácilmente.                                                          | 2            |
| 26      | US26    | Gestionar usuarios                            | Como administrador, quiero ver la lista de usuarios registrados, para mantener el control de la plataforma.                                                       | 5            |
| 27      | US27    | Gestionar locales registrados                | Como administrador, quiero revisar y aprobar locales registrados, para mantener la calidad del servicio.                                                          | 5            |
| 28      | US28    | Supervisar reportes                           | Como administrador, quiero revisar reportes de usuarios o locales, para tomar acciones correctivas.                                                               | 5            |
| 29      | US29    | Ver estadísticas generales                    | Como administrador, quiero ver estadísticas globales de uso, para analizar el crecimiento de la app.                                                              | 5            |
| 30      | US30    | Gestionar promociones                         | Como administrador, quiero supervisar las promociones creadas por los locales, para evitar contenido inapropiado.                                                 | 5            |
| 31      | US31    | Administrar contenido y reseñas               | Como administrador, quiero eliminar comentarios ofensivos, para mantener un entorno seguro.                                                                         | 5            |


link de Trello : https://trello.com/b/cWp7Hs0g/localfood

# Capítulo IV: Product Design

## 4.1. Style Guidelines.

En **LocalFood**, establecemos pautas de estilo sólidas para garantizar una experiencia visual coherente, profesional y centrada en el usuario. Estas directrices abarcan tanto el diseño general como los elementos específicos de la interfaz web, con el fin de proyectar una imagen de confianza, seguridad y calidez para los comensales y dueños de restaurantes que buscan eficiencia en sus viajes.

### 4.1.1. General Style Guidelines.

#### Brand Overview

En muchas ciudades, coordinar un punto de encuentro para grupos de personas es un reto. La falta de información clara sobre opciones accesibles para todos provoca que elegir un restaurante o café genere demoras, frustración y a veces hasta cancelaciones de reuniones. **LocalFood** surge como una solución a este problema: una plataforma que ayuda a encontrar el punto medio justo entre colegas, amigos o familiares, mostrando opciones de restaurantes y locales accesibles para todos los miembros del grupo.  

A través de geolocalización y un sistema inteligente de recomendación, LocalFood no solo facilita la elección del lugar ideal, sino que también mejora la experiencia social al reducir el tiempo de coordinación y garantizar un encuentro justo y equitativo para todos.

---

#### Brand Name

El nombre de nuestra solución, **LocalFood**, refleja la esencia del proyecto: **"Local"** representa la proximidad, accesibilidad y comunidad, mientras que **"Food"** enfatiza la experiencia compartida alrededor de la comida. La unión de ambos términos transmite de manera clara y directa el propósito central de la aplicación: facilitar reuniones en restaurantes y espacios gastronómicos cercanos al grupo de usuarios.  

La elección de un nombre en inglés responde a su carácter sencillo, universal y atractivo para un público amplio, lo que permite escalar la solución más allá de un mercado local.

---

#### Logo

A continuación, se presenta el logo de LocalFood:  

![Logo](/Assets/Logo-LocalFood.PNG)

#### Typography

La tipografía en **LocalFood** juega un papel crucial en la claridad y coherencia de la interfaz.  
Se han definido **dos fuentes principales** que aseguran jerarquía visual y legibilidad:

- **Nunito**  
  Utilizada para títulos, encabezados y botones. Su estilo redondeado y amigable transmite cercanía y frescura, alineándose con la identidad social del proyecto.  
  - Variantes: Bold (títulos principales), SemiBold (subtítulos y botones).

- **Lato**  
  Utilizada en párrafos, descripciones, enlaces y textos de apoyo. Su diseño limpio y moderno facilita la lectura en web y móvil.  
  - Variantes: Regular (texto general), Italic (notas).

**Niveles tipográficos definidos:**  
- Headings (Nunito) → jerarquía clara en títulos.  
- Body (Lato) → legibilidad en el texto base.  
- Buttons (Nunito SemiBold) → acciones destacadas.  
- Links (Lato Italic/Subrayado) → navegación secundaria. 

  ![Tipografia](/Assets/tipografia.png)

---

#### Colors
  
   La elección de colores es una parte esencial en el diseño de **LocalFood**. Una paleta bien definida no solo determina la estética de la marca, sino que también comunica los valores principales de frescura, accesibilidad y confianza.  

En nuestro sistema visual, se distinguen:  
- **Color primario**: el que guía la identidad de la marca y se utiliza en los elementos clave de interacción.  
- **Colores secundarios**: aquellos que complementan al primario y refuerzan la jerarquía visual.  
- **Colores de estado**: usados para indicar acciones específicas (éxito, alerta, error, etc.).  
- **Colores base/neutros**: blanco y negro, que aportan legibilidad y balance al diseño.  

---

### 🎨 Color Primario
- **Verde Lima**  
  Representa frescura, dinamismo y accesibilidad. Se usa en la navegación activa y elementos destacados de la interfaz.  

**Hex:** `#4FFF49`  
![Color Primario Verde](/Assets/verde.PNG)

---

### 🎨 Colores Secundarios
- **Naranja/Beige**  
  Utilizado en el fondo de la barra lateral, transmite calidez y cercanía.  
  **Hex:** `#FFB983`  
  ![Color Secundario Naranja](/Assets/naranjoso.PNG)

- **Morado/Violeta**  
  Resalta botones y cantidades, aportando energía visual.  
  **Hex:** `#F828FF`  
  ![Color Secundario Morado](/Assets/morao.PNG)

- **Azul**  
  Usado en fondos de QR y botones secundarios, transmite confianza.  
  **Hex:** `#5B58FE  
  ![Color Secundario Azul](/Assets/azul.PNG)

---

### 🎨 Colores Base / Neutros
- **Blanco**  
  Fondo principal, aporta claridad y legibilidad.  
  **Hex:** `#FFFFFF`  
  ![Color Base Blanco](/Assets/blanco.PNG)

- **Negro**  
  Utilizado en tipografía y detalles para alto contraste.  
  **Hex:** `#000000`  
  ![Color Base Negro](/Assets/negro.PNG)

### 4.1.2. Web Style Guidelines

**Landing Page:**  
La página principal está diseñada para ofrecer un resumen claro y conciso del servicio. Se destacan los beneficios de LocalFood, el proceso para conectar con comensales y dueños de locales, y los llamados a la acción para registrarse o buscar servicios. Desde el primer acceso, los usuarios deben sentir que han llegado a un espacio seguro, accesible y confiable.

**Diseño responsivo**  
El sitio web de **LocalFood** será totalmente adaptable a diferentes dispositivos y tamaños de pantalla. Desde computadoras de escritorio hasta smartphones, la experiencia del usuario se mantendrá siempre clara, intuitiva y visualmente atractiva. El diseño responsivo garantizará que los elementos principales (navegación, menús y botones de acción) estén accesibles en todo momento sin comprometer la usabilidad.

**Patrón de lectura (Patrón Z)**  
El diseño se basa en el patrón Z, guiando la mirada del usuario de forma natural:  
1. Comienza en la parte superior izquierda con el **logo de LocalFood** como punto de identidad.  
2. Se desplaza horizontalmente hacia la derecha, donde se ubican las **opciones principales de navegación**.  
3. Desciende verticalmente hacia el contenido general de la página (beneficios, funcionalidades y secciones informativas).  
4. Finalmente, se dirige hacia la parte inferior derecha, donde se encuentran los **medios de contacto, enlaces secundarios y CTA finales**.  

**Uso de colores**  
Los colores de la interfaz están diseñados para captar la atención de los usuarios y transmitir sensaciones de **frescura, confianza y accesibilidad**. Los botones principales y elementos de navegación emplean el **color primario verde**, mientras que los colores secundarios aportan contraste y refuerzan la jerarquía visual en el contenido.

**Espaciado y efectos visuales**  
El uso de espacios en blanco y separaciones claras permite que la interfaz sea limpia y ordenada. Además, se emplean efectos sutiles (resaltado de botones, cambios de color en hover) que guían al usuario en su recorrido, facilitando la comprensión del propósito de la plataforma: encontrar el punto de encuentro justo entre colegas y amigos.

![Patron_Z](/Assets/PatronZ.jpg)
--

## 4.2. Information Architecture

En esta sección se detallan las decisiones y fundamentos que guían la organización del contenido en las experiencias web y móvil de **LocalFood**, incluyendo tanto la Landing Page como la Aplicación Web. Estas propuestas buscan asegurar que los usuarios se adapten fácilmente a la funcionalidad de la plataforma y encuentren lo que necesitan sin esfuerzo. Las decisiones abarcan los sistemas de organización, etiquetado, SEO, búsqueda y navegación.

---

### 4.2.1. Organization Systems

Para estructurar la arquitectura de información de **LocalFood**, se ha adoptado un sistema **jerárquico** en la Landing Page y en la Aplicación Web. Esto permite a los usuarios identificar rápidamente las secciones principales y acceder a las funcionalidades clave.

### Landing Page

La Landing Page de **LocalFood** incluye las siguientes secciones:

- **Inicio (Home):** Presenta la propuesta de valor central de la aplicación, con un mensaje introductorio y botones de llamada a la acción (CTA) como *Iniciar Sesión* o *Registrarse*.  
- **Acerca de Nosotros:** Explica la misión, visión y valores de la startup, transmitiendo confianza y transparencia.  
- **Marcas Registradas:** Sección destinada a mostrar las alianzas o registros de propiedad intelectual vinculados a la aplicación.  
- **Países Hábiles:** Lista de los países en los que la plataforma puede operar o proyecta expandirse.  
- **Contáctanos:** Ofrece medios de comunicación, formulario de contacto y enlaces a redes sociales.

### Aplicación Web

La aplicación web está organizada en secciones diseñadas para guiar al usuario en la planificación de encuentros:

- **Inicio:** Vista general de las opciones y accesos directos a las principales funciones.  
- **Colegas:** Permite agregar, buscar y gestionar la lista de amigos/compañeros de reunión. Incluye opciones de búsqueda por usuario, código único o QR.  
- **Restaurantes:** Muestra la lista de locales sugeridos como puntos de encuentro, organizados por cercanía y accesibilidad para todos los participantes.  
- **Calculadora:** Herramienta que utiliza geolocalización para determinar el punto medio óptimo para los usuarios, minimizando tiempos de traslado.  

Cada sección está claramente diferenciada y jerarquizada, con encabezados visibles y botones de acción estratégicamente ubicados.

---

### 4.2.2. Labeling Systems

El sistema de etiquetado en **LocalFood** está diseñado para ser **claro, inclusivo y coherente**.  

- **Etiquetas textuales:**  
  - *Inicio*, *Colegas*, *Restaurantes*, *Calculadora*, *Cerrar Sesión*.  
  - Frases simples y directas, evitando ambigüedad.  

- **Etiquetas icónicas:**  
  - Ícono de **lupa** para búsqueda.  
  - Ícono de **usuario** para la sección de colegas.  
  - Ícono de **mapa/ubicación** en la calculadora.  
  - Ícono de **QR** para compartir o agregar usuarios rápidamente.  

Este etiquetado facilita la comprensión inmediata de las funciones, incluso para usuarios primerizos.

---

### 4.2.3. SEO Tags and Meta Tags

Se definen etiquetas SEO y meta tags para optimizar la visibilidad de la Landing Page y garantizar su correcta indexación en motores de búsqueda.

- **Title:**  

  ```html
     <title>LocalFood - Encuentra tu punto medio en Lima</title>
- **Description:**

  ```html
    <meta name="description" content="LocalFood es una aplicación que recomienda restaurantes y cafés equitativos para grupos de amigos y colegas en Lima, utilizando geolocalización inteligente."/>
- **Keywords:**

  ```html
    <meta name="keywords" content="LocalFood, punto medio, app reuniones, restaurantes accesibles, Lima"/>
- **Author:**

  ```html
  <meta name="author" content="© 2024 LocalFood. Todos los derechos reservados."/>
- **Viewport:**

  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>


### 4.2.4. Searching Systems

La aplicación ofrece distintos métodos de búsqueda para facilitar el acceso a la información:

- **Búsqueda por nombre de usuario:**  
  Permite encontrar y agregar colegas escribiendo directamente su nombre de usuario.  

- **Búsqueda por código único:**  
  Opción para ingresar un código corto que identifica a cada usuario.  

- **Búsqueda por QR:**  
  Escaneo de un código QR compartido para agregar colegas de forma rápida.  

- **Búsqueda de restaurantes:**  
  Filtrado de locales por nombre, categoría o ubicación.  
---

### 4.2.5. Navigation Systems

El sistema de navegación en **LocalFood** está diseñado para ser **intuitivo y consistente** en web y móvil:

- **Menú superior (Landing Page – Desktop):**  
  Incluye Inicio, Acerca de Nosotros, Marcas Registradas, Países Hábiles y Contacto.  

- **Menú lateral (Aplicación Web – Desktop):**  
  Accesos directos a Inicio, Colegas, Restaurantes, Calculadora y Cerrar Sesión.  

- **Navegación inferior (Mobile):**  
  Barra con íconos para Inicio, Colegas, Restaurantes y Perfil.  

- **CTA fijo:**  
  Botón destacado *“Encuentra tu punto medio”* disponible en la sección de calculadora.  

- **Footer (Landing Page):**  
  Enlaces a políticas de privacidad, términos de servicio y redes sociales. 

## 4.3. Landing Page UI Design.

**Introducción:**  
La landing page de LocalFood refleja los valores de equidad, frescura y eficiencia. La estructura guía al usuario de manera clara hacia los beneficios y el uso inmediato de la app.

---

### 4.3.1. Landing Page Wireframe.

**Versión Desktop**  

Los wireframes muestran la jerarquía de secciones, menús y CTA sin detalles visuales, priorizando la organización de contenido y navegación.

<p align="center">
  <img src="Assets/Wirelading1.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframes 1 - Elaboración propia
</p>

<br><br>

<p align="center">
  <img src="Assets/Wirelading2.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframes 2 - Elaboración propia
</p>

<br><br>

<p align="center">
  <img src="Assets/Wirelading3.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframes 3 - Elaboración propia
</p>

<br><br>

<p align="center">
  <img src="Assets/Wirelading4.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframes 4 - Elaboración propia
</p>

<br><br>
---

### 4.3.2. Landing Page Mock-up.

**Versión Desktop**  

<p align="center">
  <img src="Assets/Mocklading1.png" alt="mockup" width="1000">
</p>

<p align="center">
    Mock-up 1 - Elaboración propia
</p>

<br><br>

<p align="center">
  <img src="Assets/Mocklading2.png" alt="mockup" width="1000">
</p>

<p align="center">
    Mock-up 2 - Elaboración propia
</p>

<br><br>

<p align="center">
  <img src="Assets/Mocklading3.png" alt="mockup" width="1000">
</p>

<p align="center">
    Mock-up 3 - Elaboración propia
</p>

<br><br>

<p align="center">
  <img src="Assets/Mocklading4.png" alt="mockup" width="1000">
</p>

<p align="center">
    Mock-up 4 - Elaboración propia
</p>

<br><br>


## 4.4. Web Applications UX/UI Design.

### 4.4.1. Web Applications Wireframes.

Los wireframes de GastroGo han sido desarrollados aplicando principios clave de diseño centrado en el usuario, priorizando la claridad visual, el lenguaje no verbal mediante el uso de colores y la accesibilidad. Cada sección está estructurada con una navegación intuitiva y coherente entre el menú lateral, el encabezado fijo y los bloques de contenido, lo que refleja una arquitectura de información jerárquica y secuencial bien definida. Se han implementado elementos de diseño consistentes como tarjetas, iconos descriptivos, botones llamativos y funcionalidades bien distribuidas, facilitando una interacción fluida en dispositivos de distintos tamaños. Además, se ha incorporado un enfoque de diseño atractivo que apela a la intuición no verbal (tamaño de letras, imágenes explicativas, etc.), permitiendo que usuarios con diversos niveles de experiencia digital puedan navegar sin dificultades. Todo el diseño planteado busca lograr una experiencia coherente entre perfiles (comensales), enfocada en guiar a los usuarios hacia sus objetivos (elegir restaurante, agregar amigos, realizar cálculos) de forma eficiente y accesible.

https://www.figma.com/design/Iw07d6r56Nxk6swaIVWRw5/Untitled?node-id=0-1&p=f&m=draw 
<br><br>


+ **Iniciar Sesión / Registrarse**:

Permite a nuevos usuarios crear una cuenta para la aplicacion, y a usuarios existentes ingresar con sus correos para acceder a su perfil.

<p align="center">
  <img src="Assets/sing_in.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframe Sing In - Elaboración propia
</p>


<p align="center">
  <img src="Assets/Registerus.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframe User Register - Elaboración propia
</p>

+ **Pagina de inicio del usuario**:

Muestra el perfil del usuario, su codigo QR, y restaurante, el frecuente y el ultio de seleccion anterior. El inicio de la rica coordinacion.

<p align="center">
  <img src="Assets/homepage.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframe User Homepage - Elaboración propia
</p>

+ **Mis Contactos**:

Apartado que permite agregar, ver y seleccionar contactos para el calculo respecto a un grupo

<p align="center">
  <img src="Assets/Addcontact.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframe User Add Contact - Elaboración propia
</p>

<p align="center">
  <img src="Assets/Addcontact.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframe User Contactpage - Elaboración propia
</p>

<p align="center">
  <img src="Assets/Selectcontact.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframe User selection Contact - Elaboración propia
</p>


+ **Restaurantes disponibles**:

Muestras los restaurantes disponibles de la aplicacion al usuario y permite su seleccion.

<p align="center">
  <img src="Assets/Restaurant.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframe User Restaurantpage - Elaboración propia
</p>

<p align="center">
  <img src="Assets/selectRestaurant.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframe User selection Restaurant - Elaboración propia
</p>

+ **Realizar Calculo**:

Formula el calculo respecto al restaurante mas cercano en proporcion a la hubicacion de las personas del grupo.

<p align="center">
  <img src="Assets/Calculationpage.png" alt="wireframe" width="1000">
</p>

<p align="center">
    Wireframe User Calculationtpage - Elaboración propia
</p>

<p align="center">
  <img src="Assets/RunCalculation.png" alt="wireframe" width="1000">
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
  <img src="Assets/Wframe1.png" alt="wireflow" width="1000">
</p>

<p align="center">
    Wireflow Login y Register - Elaboración propia
</p>

+ **Wireflow 2: Agregar a nueva persona**

**User Goal:** Como usuario, quiero agregar a una nueva persona de la plataforma de forma efectiva.

**User Persona:** Comensales

**Flujo:** Desde su perfil ingresa a la seccion de "Contactos" para luego buscar a la persona por medio de su nombre, codigo o para rapides, escaneo de QR y finalmente manda la solicitud.

<p align="center">
  <img src="Assets/Wframe2.png" alt="wireflow" width="1000">
</p>

<p align="center">
    Wireflow Agregar a nueva persona  - Elaboración propia
</p>

+ **Wireflow 3: Cambiar Restaurante durante el calculo**

**User Goal:** Como usuario, quiero cambiar de restaurante tanto antes como durante el calculo para no volver a crear la lista.

**User Persona:** Comensales

**Flujo:** Desde su perfil ingresa a la seccion de "Contactos" para seleccionar a las personas para un grupo, luego ir a la seccion de "Restaurantes" para elegir a cual ir, luego van a la seccion de "Calculo" para proceder con el calculo, luego si se desea cambiar de restaurante, presione el boton 2 que le permitira editar el restaurante, para luego volver a la seccion de "Calculo" y seguir realizando su el procedimiento. 

<p align="center">
  <img src="Assets/Wframe3.png" alt="wireflow" width="1000">
</p>

<p align="center">
    Wireflow Cambiar Restaurante durante el calculo  - Elaboración propia
</p>


+ **Wireflow 4: Aceptar o Denegar Calculos de otra personas**

**User Goal:** Como usuario, quiero aceptar o denegar las calculos realizados de otras personas que me involucren.

**User Persona:** Comensales

**Flujo:** Desde su perfil se le notificara si una persona de contectos lo puso en su lista de calculo, si presiona en el boton de si, lo llevara en la seccion de "Calculo" donde vera los resultados hecho por la persona para ir a un restaurante, en caso que presione el boton de no, no se le llevara a la seccion de "Calculo" como tampoco se le aparecera los datos de dicho calculo.

<p align="center">
  <img src="Assets/Wframe4.png" alt="wireflow" width="1000">
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
  <img src="Assets/sing_in (1).png" alt="mockups" width="1000">
</p>

<p align="center">
     Web Applications Mock-ups Login - Elaboración propia
</p>


<p align="center">
  <img src="Assets/Registerus (1).png" alt="mockup" width="1000">
</p>

<p align="center">
    Web Applications Mock-ups User Register - Elaboración propia
</p>

+ **Pagina de inicio del usuario**:

Muestra el perfil del usuario, su codigo QR, y restaurante, el frecuente y el ultio de seleccion anterior. El inicio de la rica coordinacion.

<p align="center">
  <img src="Assets/homepage (1).png" alt="mockup" width="1000">
</p>

<p align="center">
    Web Applications Mock-ups User Homepage - Elaboración propia
</p>

+ **Mis Contactos**:

Apartado que permite agregar, ver y seleccionar contactos para el calculo respecto a un grupo

<p align="center">
  <img src="Assets/Addcontact (1).png" alt="mockup" width="1000">
</p>

<p align="center">
    Web Applications Mock-ups User Add Contact - Elaboración propia
</p>

<p align="center">
  <img src="Assets/contact (1).png" alt="mockup" width="1000">
</p>

<p align="center">
    Web Applications Mock-ups User Contactpage - Elaboración propia
</p>

<p align="center">
  <img src="Assets/Selectcontact (1).png" alt="mockup" width="1000">
</p>

<p align="center">
    Web Applications Mock-ups User selection Contact - Elaboración propia
</p>


+ **Restaurantes disponibles**:

Muestras los restaurantes disponibles de la aplicacion al usuario y permite su seleccion.

<p align="center">
  <img src="Assets/Restaurant (1).png" alt="mockup" width="1000">
</p>

<p align="center">
    Web Applications Mock-ups User Restaurantpage - Elaboración propia
</p>

<p align="center">
  <img src="Assets/selectRestaurant (1).png" alt="mockup" width="1000">
</p>

<p align="center">
    Web Applications Mock-ups User selection Restaurant - Elaboración propia
</p>

+ **Realizar Calculo**:

Formula el calculo respecto al restaurante mas cercano en proporcion a la hubicacion de las personas del grupo.

<p align="center">
  <img src="Assets/Calculationpage (1).png" alt="mockup" width="1000">
</p>

<p align="center">
    Web Applications Mock-ups User Calculationtpage - Elaboración propia
</p>

<p align="center">
  <img src="Assets/RunCalculation (1).png" alt="mockup" width="1000">
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
  <img src="Assets/Uflows1.png" alt="userflows" width="1000">
</p>

<p align="center">
    Web Applications User Flow Login y Register - Elaboración propia
</p>

+ **User Flow Diagram 2: Agregar a nueva persona**

**User Goal:** Como usuario, quiero agregar a una nueva persona de la plataforma de forma efectiva.

**User Persona:** Comensales

**Flujo:** Desde su perfil ingresa a la seccion de "Contactos" para luego buscar a la persona por medio de su nombre, codigo o para rapides, escaneo de QR y finalmente manda la solicitud.

<p align="center">
  <img src="Assets/Uflows2.png" alt="userflows" width="1000">
</p>

<p align="center">
    Web Applications User Flow Agregar a nueva persona  - Elaboración propia
</p>

+ **User Flow Diagram 3: Cambiar Restaurante durante el calculo**

**User Goal:** Como usuario, quiero cambiar de restaurante tanto antes como durante el calculo para no volver a crear la lista.

**User Persona:** Comensales

**Flujo:** Desde su perfil ingresa a la seccion de "Contactos" para seleccionar a las personas para un grupo, luego ir a la seccion de "Restaurantes" para elegir a cual ir, luego van a la seccion de "Calculo" para proceder con el calculo, luego si se desea cambiar de restaurante, presione el boton 2 que le permitira editar el restaurante, para luego volver a la seccion de "Calculo" y seguir realizando su el procedimiento. 

<p align="center">
  <img src="Assets/Uflows3.png" alt="userflows" width="1000">
</p>

<p align="center">
    Web Applications User Flow Cambiar Restaurante durante el calculo  - Elaboración propia
</p>


+ **User Flow Diagram 4: Aceptar o Denegar Calculos de otra personas**

**User Goal:** Como usuario, quiero aceptar o denegar las calculos realizados de otras personas que me involucren.

**User Persona:** Comensales

**Flujo:** Desde su perfil se le notificara si una persona de contectos lo puso en su lista de calculo, si presiona en el boton de si, lo llevara en la seccion de "Calculo" donde vera los resultados hecho por la persona para ir a un restaurante, en caso que presione el boton de no, no se le llevara a la seccion de "Calculo" como tampoco se le aparecera los datos de dicho calculo.

<p align="center">
  <img src="Assets/Uflows4.png" alt="userflows" width="1000">
</p>

<p align="center">
    Web Applications User Flow Aceptar o Denegar Calculos de otra personas - Elaboración propia
</p>

<br><br>

## 4.5. Web Applications Prototyping.

En esta sección se presentan los prototipos de interfaz de usuario desarrollados para la versión web en navegadores de escritorio, tanto para turistas como para agencias. Estos prototipos simulan la navegación e interacción con las principales funcionalidades, en base a los flujos definidos previamente en los Wireflow Diagrams.

Las decisiones de interacción se tomaron considerando principios de usabilidad, claridad visual, diseño inclusivo y una arquitectura de información coherente. Se priorizó una navegación intuitiva, adaptada al perfil y objetivos de cada usuario. El sistema de navegación, las jerarquías visuales y los tipos de interacción fueron diseñados para facilitar la experiencia del usuario, busqueda del punto de encuentro mas óptimo, entre otras actividades.

Los prototipos permiten visualizar el comportamiento del sistema ante las principales tareas definidas, asegurando una experiencia consistente y funcional. Se incluye una captura de pantalla y un enlace al video en Microsoft Stream donde se muestra la simulación de interacción correspondiente.

Link del video: https://upcedupe-my.sharepoint.com/:v:/g/personal/u20221d382_upc_edu_pe/EaYsa5nfvndIo1RI-sbj46QBDUjiMieUFCHpTinoa_49ig?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=INeT4Z

## 4.6. Domain-Driven Software Architecture.

### 4.6.1. Software Architecture Context Diagram.

![welp](Assets/contexto.png)


### 4.6.2. Software Architecture Container Diagrams.

![welp](Assets/contenedores.png)


### 4.6.3. Software Architecture Components Diagrams.
![welp](Assets/componentes.png)



## 4.7. Software Object-Oriented Design.

### 4.7.1. Class Diagrams.
```mermaid

classDiagram
  class Usuario {
    +uuid id
    +string nombre
    +string email
    +GeoPoint ubicacionActual
    +compartirUbicacion(GeoPoint): void
  }

  class Grupo {
    +uuid id
    +string nombre
    +Date fechaCreacion
    +agregarParticipante(Usuario): void
    +removerParticipante(Usuario): void
  }

  class Participacion {
    +uuid id
    +string rol
  }

  class Lugar {
    +uuid id
    +string nombre
    +string direccion
    +string tipo
    +float rating
    +bool esDisponible(DateTime): bool
    +cumplePreferencias(Preferencias): bool
  }

  class Preferencias {
    +float presupuestoMax
    +string cocina
    +float ratingMin
    +bool accesibilidad
  }

  class Ruta {
    +uuid id
    +GeoPoint origen
    +GeoPoint destino
    +int tiempoMin
    +float distanciaKm
  }

  class Encuentro {
    +uuid id
    +DateTime fecha
    +string modoEquidad  // "min-sum" | "min-max"
    +float metricaEquidad
    +calcularPuntoJusto(): Lugar
    +registrarDecision(Lugar): void
  }

  Usuario "1" -- "0..*" Participacion : participa
  Grupo "1" -- "0..*" Participacion : contiene
  Participacion "1" -- "1" Usuario
  Participacion "1" -- "1" Grupo

  Encuentro "1" -- "1" Grupo
  Encuentro "1" -- "1" Lugar : lugarSeleccionado
  Ruta "0..*" -- "1" Usuario
  Ruta "0..*" -- "1" Lugar
  Preferencias "1" -- "0..*" Usuario : define
```



### 4.7.2. Class Dictionary.

A continuación, se presenta una descripción de las 7 entidades principales que forman parte del sistema LocalFood:

Usuario: Entidad que representa a cualquier persona que utiliza la aplicación. Contiene los atributos comunes (id, nombre, email y ubicación actual opcional). Puede crear grupos, unirse a ellos y compartir su ubicación para el cálculo del punto de encuentro.

Grupo: Conjunto de usuarios que coordina una reunión. Mantiene organizador, participantes, fecha de creación y estado. Un grupo puede solicitar propuestas de encuentro y confirmar un lugar final.

Participacion: Clase de relación entre Usuario y Grupo que define el rol del usuario dentro del grupo (organizador o miembro) y su estado (invitado, aceptado). Garantiza unicidad por usuario–grupo y sirve de base para el control de permisos.

Preferencias: Conjunto de criterios aplicados al cálculo y filtrado de candidatos (presupuesto máximo, tipo de cocina, rating mínimo, accesibilidad y ventana horaria). Se asocian al grupo para producir propuestas relevantes.

Lugar: Establecimiento candidato o seleccionado (restaurante/cafetería). Registra nombre, dirección, geolocalización, tipo, rating, horarios y, opcionalmente, un identificador externo (p. ej., Google Places). Se valida su disponibilidad para la ventana horaria.

Ruta: Métrica de viaje entre un usuario y un lugar. Incluye tiempo estimado (min) y distancia (km), obtenidos desde la matriz N×M de rutas. Se utiliza para evaluar la función objetivo (suma de tiempos o máximo individual).

Encuentro: Proceso/resultado del cálculo del “punto justo” para un grupo. Conserva el modo de equidad elegido (MIN_SUM o MIN_MAX), la métrica de evaluación, el lugar seleccionado (si se confirmó), la fecha y la trazabilidad necesaria (rutas por usuario usadas en el cálculo).


## 4.8. Database Design.

### 4.8.1. Database Diagram.
```mermaid
erDiagram
  USUARIOS {
    string   id_usuario PK
    string   nombre
    string   email
    float    lat
    float    lng
    datetime creado_en
  }

  GRUPOS {
    string   id_grupo PK
    string   nombre
    datetime fecha_creacion
  }

  PARTICIPACIONES {
    string id_participacion PK
    string id_usuario FK
    string id_grupo   FK
    string rol
  }

  PREFERENCIAS {
    string   id_preferencia PK
    string   id_grupo FK
    float    presupuesto_max
    string   cocina
    float    rating_min
    boolean  accesibilidad
    string   ventana_desde      
    string   ventana_hasta      
  }

  LUGARES {
    string   id_lugar PK
    string   nombre
    string   direccion
    string   tipo
    float    rating
    float    lat
    float    lng
    datetime cacheado_en
  }

  ENCUENTROS {
    string   id_encuentro PK
    string   id_grupo  FK
    string   id_lugar  FK
    datetime fecha
    string   modo_equidad
    float    metrica_equidad
  }

  RUTAS {
    string   id_ruta PK
    string   id_usuario FK
    string   id_lugar   FK
    int      tiempo_min
    float    distancia_km
    datetime medido_en
  }

  %% Relationships
  USUARIOS ||--o{ PARTICIPACIONES : participa
  GRUPOS   ||--o{ PARTICIPACIONES : contiene
  GRUPOS   ||--o{ ENCUENTROS      : tiene
  LUGARES  ||--o{ ENCUENTROS      : seleccionado
  USUARIOS ||--o{ RUTAS           : viaja
  LUGARES  ||--o{ RUTAS           : destino
  GRUPOS   ||--o| PREFERENCIAS    : define


```



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

![Git-Flow](Assets/gitflow%20(1).png)

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

git clone https://github.com/LocalFood-Aplicaciones-Web/Project-report.git

2. **Desarrollo del sitio estático:**

- El desarrollo del Landing Page se realiza utilizando HTML, CSS, Tailwind.css , JavaScript y vue.js. Estos archivos deben estar en la raíz del repositorio o en la carpeta docs, dependiendo de la configuración elegida para GitHub Pages.

3. **Configuración de GitHub Pages:**

- Dirígete a la configuración del repositorio en GitHub:
  - Ir a la seccion Settings
  - Desplázate hacia abajo hasta la sección Pages.
  - En el menú desplegable "Source", selecciona la creada gh-pages y la carpeta raíz (/root) o docs/ si los archivos están organizados dentro de esa carpeta.
- Una vez seleccionado, GitHub Pages generará una URL para acceder a tu sitio web.

4. **Verificar el despliegue:**

   - En este caso, el Link del Landing Page desplegado del proyecto LocalFood es: https://localfood-aplicaciones-web.github.io/Project-report/

## 5.2. Landing Page, Services & Applications Implementation.

### 5.2.1. Sprint 1

#### 5.2.1.1. Sprint Planning 1.

Durante el desarrollo Sprint 1 del proyecto LocalFood, el equipo se enfocó en el diseño llamativo y construcción funcional de la Landing Page de la plataforma. Se implementaron las principales las fundamentales secciones informativas, eso incluye el mensaje de bienvenida, los botones de registro y navegación, la sección de amigos para un gruoi, informacion respecto a nosotros y funciones adaptada a cambio de planes.  Además, se trabajó en aspectos fundamentales de interacción como la fijación del encabezado al hacer scroll y la visualización atractiva del interface. El equipo logró realizae la mayoría de las tareas planteadas, dejando solo algunos cosas en proceso de checkeo. Todo el despliegue del Sprint 1 priorizó una navegación llamativa, accesibilidad y fluida en la comunicación hacia los nuevos usuarios.

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
            <td>Ver restaurantes cercanos</td>
            <td>UT01</td>
            <td>Implementar API de geolocalización</td>
            <td><strong>Como usuario</strong>, quiero ver los restaurantes más cercanos <strong>para poder decidir rápidamente dónde comer con mis amigos</strong>.</td>
            <td>
                <strong>Escenario 1:</strong> Given que ingreso a la aplicación, When activo mi ubicación, Then puedo visualizar una lista de restaurantes ordenados por distancia.<br>
            </td>
            <td>8</td>
            <td>Iván Fernando</td>
            <td>In-Process</td>
        </tr>
        <tr>
            <td>US02</td>
            <td>Crear grupo de decisión</td>
            <td>UT02</td>
            <td>Diseñar módulo de creación de grupos</td>
            <td><strong>Como usuario</strong>, quiero crear un grupo con mis amigos <strong>para decidir juntos a qué restaurante ir</strong>.</td>
            <td>
                <strong>Escenario 1:</strong> Given que estoy logueado, When selecciono “crear grupo”, Then puedo añadir amigos y asignarles permisos para participar en el cálculo.<br>
            </td>
            <td>6</td>
            <td>Ángel José</td>
            <td>In-Process</td>
        </tr>
        <tr>
            <td>US03</td>
            <td>Recibir notificaciones de grupo</td>
            <td>UT03</td>
            <td>Implementar sistema de notificaciones push</td>
            <td><strong>Como usuario</strong>, quiero recibir notificaciones cuando mis amigos creen un grupo o voten <strong>para mantenerme actualizado</strong>.</td>
            <td>
                <strong>Escenario 1:</strong> Given que tengo la app abierta, When un amigo me agrega a un grupo, Then recibo una notificación en tiempo real.<br>
            </td>
            <td>5</td>
            <td>Sebastián Augusto</td>
            <td>In-Process</td>
        </tr>
        <tr>
            <td>US04</td>
            <td>Votar por restaurante</td>
            <td>UT04</td>
            <td>Desarrollar sistema de votación</td>
            <td><strong>Como usuario</strong>, quiero votar por el restaurante que prefiero <strong>para llegar más rápido a un acuerdo con el grupo</strong>.</td>
            <td>
                <strong>Escenario 1:</strong> Given que estoy en un grupo activo, When visualizo las opciones de restaurantes, Then puedo votar y ver el progreso de la elección.<br>
            </td>
            <td>7</td>
            <td>Ariadna Geraldine</td>
            <td>In-Process</td>
        </tr>
        <tr>
            <td>US05</td>
            <td>Ver detalles del restaurante</td>
            <td>UT05</td>
            <td>Integrar vista de detalles</td>
            <td><strong>Como usuario</strong>, quiero ver el menú, horarios y reseñas <strong>para tomar una mejor decisión antes de votar</strong>.</td>
            <td>
                <strong>Escenario 1:</strong> Given que selecciono un restaurante, When accedo a su perfil, Then puedo ver detalles del menú, fotos y opiniones.<br>
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

![Primera](/Assets/1a.png)
![Segunda](/Assets/2a.png)
![Tercera](/Assets/3a.png)

Link del landing page desplegado: https://localfood-aplicaciones-web.github.io/Project-report/

#### 5.2.1.6. Services Documentation Evidence for Sprint Review.

Descripción: En este sprint 1 se desarrollo la landing page, por lo que no hay evidencias del empleo de web services.

#### 5.2.1.7. Software Deployment Evidence for Sprint Review.

Durante el primer sprint, desarrollamos y desplegamos la landing page del proyecto.

pasos para el despliegue:

1. Creación del Repositorio en GitHub: Iniciamos creando un repositorio dedicado en GitHub para nuestro proyecto de landing page.

2. Configuración de la Rama de despliegue: Aseguramos que la rama principal del repositorio se llamara gh-pages, ya que GitHub Pages toma esta rama como base para el despliegue automático.

3. Generación del Enlace de GitHub Pages: Navegamos a la sección "Pages" en la configuración del repositorio en GitHub. Configuramos la fuente de GitHub Pages para que tomara el contenido de la rama gh-pages.

4. Despliegue Automático: GitHub Pages automáticamente detectó los cambios en la rama gh-pages y desplegó la landing page en la URL proporcionada por GitHub Pages.

<p align="center">
  <img src="Assets/FF.png" alt="Register running - Captura de pantalla" width="800">
</p>

<p align="center">
  Figura 10. Register running – Captura de pantalla de LocalFood
</p>

<br><br>

#### 5.2.1.8. Team Collaboration Insights during Sprint.

Durante el Sprint 1, el equipo de desarrollo en implementar todas las funcionalidades de la landing page y la realización del documento.

#### Colaboración y Desarrollo de Actividades

1. **Asignación de Tareas**:

![evidencia-trello](https://trello.com/invite/b/68c7d580d1d41d4f3acf95c2/ATTIe6344c6d324fbbb059ac41bfddd60e6d7988396B/localfood)

2. **Evidencia de commits**:

Repositorio:

**Documento**
![commits-documento](Assets/aw.png)


3. **Evidencia de Nertwork**:

Repositorio:

**Documento**
![network-documento](Assets/asst.png)


4.**Contributions**

Repositorios:

**Documento**
![contributors-documento](Assets/contri.png)
## 5.2.2. Sprint 2
### 5.2.2.1. Sprint Planning 2

El Sprint Planning es la reunión que da inicio al sprint y define qué se va a construir y cómo se logrará. Reúne al equipo Scrum para establecer un objetivo claro (Sprint Goal), seleccionar las historias de usuario más relevantes y descomponerlas en tareas concretas. Esta planificación asegura un enfoque común, organiza el trabajo de forma eficiente y alinea al equipo con la entrega de valor al usuario.

A continuación se mostrará la tabla del Sprint Planning:

| **Sprint #** | Sprint 2 |
| :--- | :--- |
| **Sprint Planning Background** | |
| **Date** | 2025-10-04 |
| **Hour** | 04:00 PM |
| **Location** | Virtual |
| **Prepared By** | Walter Luis |
| **Attendees (to planning meeting)** | Ariadna Geraldine <br> Angel Jose <br> Ivan Fernando <br> Walter Luis |
| **Sprint n - 1 Review Summary** | Durante el Sprint 2, el equipo logró implementar exitosamente los cimientos de Localfood. Se desarrolló y desplegó una Landing Page completa que comunica efectivamente el valor de la plataforma para los usuarios que quieran planificar sus reuniones para ir a comer algun restaurante. En el frontend, se implementaron las funcionalidades core de calculo incluyendo la visualización de los restaurantes recomendados en tiempo real y los apartados de agregar colegas para el calculo en cuestion. El sistema de autenticación y perfiles de usuario fue integrado satisfactoriamente, permitiendo a los usuariosregistrarse y acceder a su dashboard personalizado. El equipo destacó la efectiva integración con los datos de restaurantes afiliados. |
| **Sprint n - 1 Retrospective Summary** | El equipo identificó como principales aciertos la buena coordinación entre los desarrolladores frontend, y la calidad del diseño de la interfaz de usuario que resultó intuitiva para el perfil de los usuarios. Como oportunidades de mejora, se señaló la necesidad de Mejorar y Disminuir la distribucion de informacion y establecer Un interfaces mas intituivo para el apatado de calculo. Se acordó implementar un sistema de caché para las imágenes y mejorar los mensajes de error para los usuarios finales en el próximo sprint. |
| **Sprint Goal & User Stories** | |
| **Sprint Goal** | Nuestro objetivo es establecer los fundamentos de LocalFood mediante el desarrollo de una Landing Page completa que comunique nuestro valor y las primeras funcionalidades core de la aplicación web. Creemos que esto permitirá a los usuarios entender los beneficios de nuestra plataforma y comenzar a planificar sus salidas para comer en grupo.<br><br>Esto se confirmará cuando:<br>1. Los visitantes puedan navegar por la landing page y comprender los servicios de LocalFood<br>2. Los usuarios registrados puedan visualizar su perfil y codigo QR para ser agregados a otros usuarios<br>3. El sistema pueda mostrar imágenes de los restaurantes como la cantidad de estos en el apartado de Restaurantes de la app<br>4. Los usuarios accedan a su lista de colegas y dashboard inicial |
| **Sprint Velocity** |  |
| **Sum of Story Points** |  |

### 5.2.2.2. Aspect Leaders and Collaborators

### 5.2.2.3. Sprint Backlog 2

# **5.2.1.3. Sprint Backlog 2**

Durante el Sprint 2, el objetivo principal fue desarrollar las funcionalidades core de la aplicación web LocalFood, enfocándose en el frontend para proporcionar a los Usuarios las herrmaientas principales para la integracion de la lista de amigos y Realizacion de Calculo de este. Se buscó implementar un dashboard integral que permita visualizar datos en tiempo real, identificar Agregar Restaurantes como Editarlo durante el Calculo, y ofrecer una interfaces sencilla y practica.

## **Tabla de Control de Estado - Sprint 2**

| User Story ID | Id | Title | Description | Estimation (Hours) | Assigned To | Status |
|---------------|-----|-------|-------------|-------------------|-------------|---------|
| **US-01** | **T-201** | **Ver restaurantes cercanos** | Desarrollar componente frontend para mostrar los restaurantes cercanos para un grupo luego del calculo | 10 | Development team | **Done** |
| **US-07** | **T-202** | **Invitar amigos al grupo** | Implementar componente para agregar a los colegas/amigos del usuario a la lista para el calculo | 8 | Development team | **Done** |
| **US-012** | **T-203** | **Crear cuenta de usuario** | Crear Funcion para crear y almacenar a nuevos usuarios al aplicacion | 6 | Development team | **Done** |
| **US-023** | **T-204** | **Historial de visitas** | Desarrollar sistema de muestre el restaurante que se uso en el anterior calculo | 7 | Development team | **Done** |
| **US-024** | **T-205** | **Notificaciones de recordatorio** | Implementar centro de notificaciones para alertas a los usuarios, respecto a solicitud de amista o que esten ingresados a una lista, sobre si desea aceptarla o no y luego se proceda hacer las funciones respecto a la decision | 6 | Development team | **Done** |

### 5.2.2.4. Development Evidence for Sprint Review

Esta sección presenta los principales avances en la implementación técnica del proyecto Local realizados durante el sprint 2, en función de los productos comprometidos: Aplicación Web LocalFood Se detalla el progreso alcanzado a través de los repositorios utilizados por el equipo, identificando los commits relevantes que evidencian el desarrollo de funcionalidades, corrección de errores, mejoras en la interfaz y configuración de servicios. Esta evidencia permite evaluar el cumplimiento de los objetivos del sprint y facilita la retroalimentación en la reunión de revisión.

> [!Note]
> Se ha enviado todo el desarrollo en un solo commit, debido a que para subir los cambios al repositorio remoto, los integrantes han presentado problemas con el activation token. No obstante, todos han aportado al desarrollo.

| Repository | Branch | Commit Id | Commit Message | Commit Message Body | Commited on (Date) |
|------------|---------|------------|----------------|---------------------|-------------------|
| https://github.com/LocalFood-Aplicaciones-Web/Frontend-v2 | main | c5881ef | feat: initialize project base structure | -- | 2025-10-10 |

### 5.2.2.5. Execution Evidence for Sprint Review

Durante el Sprint 2, se desarrollaron las funcionalidades core de la aplicación web LocalFood, con énfasis en el dashboard de monitoreo, el sistema de detección de plagas y las herramientas de gestión de cultivos. El equipo cumplió con la implementación de todas las interfaces planificadas para el frontend, logrando una experiencia de usuario intuitiva y responsive que permite a los usuarios organizar sus reuniones a restaurante de la mejor manera posible.

Se implementaron exitosamente los componentes de visualización de Colegas, Sistema de Restaurantes afiliados y EL apartado de Calculo de La distancia de los restaurantes como el preferido, estableciendo una base sólida para la integración con los servicios backend en sprints futuros.

Evidencia visual:

A continuación, se presentan capturas de pantalla de las vistas implementadas en este Sprint:

**Iniciar sesión**

**Dashboard de usuario**

**Perfil de usuario**

**Apartado de Colegas**

**Apartado de Restaurante**

**Apartado de Calculo**

### 5.2.2.6. Team Collaboration Insights during Sprint

**Colaboradores activos**

## 5.2.3. Sprint 3
### 5.2.3.1. Sprint Planning 3

El Sprint Planning es la reunión que da inicio al sprint y define qué se va a construir y cómo se logrará. Reúne al equipo Scrum para establecer un objetivo claro (Sprint Goal), seleccionar las historias de usuario más relevantes y descomponerlas en tareas concretas. Esta planificación asegura un enfoque común, organiza el trabajo de forma eficiente y alinea al equipo con la entrega de valor al usuario.

A continuación se mostrará la tabla del Sprint Planning:


| **Sprint #** | Sprint 3 |
| :--- | :--- |
| **Sprint Planning Background** | |
| **Date** | 2025-10-26 |
| **Hour** | 02:00 PM |
| **Location** | Virtual |
| **Prepared By** | Walter Luis |
| **Attendees (to planning meeting)** | Ariadna Geraldine <br> Angel Jose <br> Ivan Fernando <br> Walter Luis |
| **Sprint n - 3 Review Summary** | Durante el Sprint 3, el equipo implemento las secciones clave de la aplicación: Notificaciones, opciones extra en el apartado de Calculo y su diseño responsive. |
| **Sprint n - 3 Retrospective Summary** | Se identificó la necesidad de mejorar la navegación y optimizar el rendimiento en el landing page |
| **Sprint Goal & User Stories** | |
| **Sprint Goal** | Finalizar respecto a las funcionalidades pendientes, pulir y estelizar la interfaz de usuario, integrar servicios externos y preparar el producto para pruebas de validación con usuarios. |
| **Sprint Velocity** |  |
| **Sum of Story Points** |  |

### 5.2.3.2. Aspect Leaders and Collaborators
#### 5.2.3.3. Sprint Backlog 3
En el sprint backlog 3, enfocamos como prioridad nuestros esfuerzos para el desarrollo del backend del sistema. Utilizando la herramienta enseñada en el curso que es Rider,  avanzamos significativamente en la implementación de la lógica del servidor como la estructuración respecto de los varios *bounded contexts* definidos en la arquitectura del proyecto.

## **Tabla de Control de Estado - Sprint 3**

| sprint # | Sprint 3 | | | | | | |
|-|-|-|-|-|-|-|-|
| User<br>Story | | Work-Item / Task | | | | | |
| ID | Title | ID | Title | Description | Estimation<br>(Hours) | Assigned<br>To | Status<br>(To-do<br>/InProcess<br>/To-Review<br>/Done) |
| US04 | Calcular punto medio del grupo | *TA01* | Implementar un apartado de Calculo | Crear endpoint GET para que el usuario y la lista de sus colegas reciban la informacion de los restaurantes cercano | 6 horas | Walter Luis | Done |
| US13	 | Iniciar sesión | *TA02* | Implementar el apartado de Inicio de Sesión | Desarrollar endpoint POST para autenticación de usuarios| 5 horas | Fernando Sanchez | Done |
| US16 | Editar información del restaurante | *TA03* | Implementar un boton de editar restaurante | Desarrollar endpoint put que permita cambiar el restaurante en el apartado de calculo | 8 horas |  Angel Jose | To-Review |
| US24 | Notificaciones de recordatorio | *TA04* | Visualizacion de Alertas de Calculos agenos | Implementar endpoint GET para obtener información detallada respecto a calculos que se incluya a usuarios. | 10 horas | Ariadna Geraldine | Done |
| US02 | Filtros de búsqueda | *TA05* | Crear funcionalidad para Descartas restaurantes con una calificacion menor de 3 estrellas  | Implementar un PUT donde actualize los restaurantes a mejor valorados| 12 horas | Walter Luis | Done |

### 5.2.3.4. Development Evidence for Sprint Review

Durante el tercer sprint, se implementaron funcionalidades clave como el Seleccion de Restaurante, Buscar nuevo usuario, Filtro de calidad,Calculo de distancia, despliegue en Netlify, y configuración de infraestructura básica.


> [!Note]
> Se ha enviado todo el desarrollo en un solo commit, debido a que para subir los cambios al repositorio remoto, los integrantes han presentado problemas con el activation token. No obstante, todos han aportado al desarrollo.

| Repository | Branch | Commit Id | Commit Message | Commit Message Body | Commited on (Date) |
|------------|---------|------------|----------------|---------------------|-------------------|
| https://github.com/LocalFood-Aplicaciones-Web/Backend-v1 | main | SRT0808 | doc: add first version of Backend | -- | 2025-10-29 |


### 5.2.3.4. Execution Evidence for Sprint Review

Durante el Sprint 3, se logró un gran progreso en la implementación del backend del sistema. Nos enfocamos en la creación de múltiples endpoints RESTful que permiten la gestión de entidades clave como monitoreo, usuarios, cultivos, etc. Todo el código fue desarrollado siguiendo una estetica de arquitectura limpiamy la persistencia adecuada de datos.

Además, se realizó el despliegue exitoso del backend en Netlify, lo que permitió validar el comportamiento del sistema en un entorno de producción. Para verificar la creación, edición y eliminación de datos, se utilizó MySQL workbench, accediendo directamente a la base de datos SQL vinculada al servicio de Render.

Evidencia visual:
<h3>Backend</h3>
- Datos en bounded context

- Datos en bounded context

- Datos en bounded context

- Datos en bounded context

- Capturas del Backend deployado

A continuacion se muestra la evidencia de despliegue del backend entrando al siguiente enlace:   


#### 5.2.3.6. Services Documentation Evidence for Sprint Review

En esta sección se incluye la relación de endpoints desarrollados como parte del alcance del Sprint 3. Se resumen los logros alcanzados en relación con la implementación y documentación de los servicios respecto del Backend.

#### Backend en Rider

En esta seccion el backend está desarrollado siguiendo el patrón **Domain-Driven Design (DDD)**, estructurando la lógica en **Bounded Contexts** perfectamentes definidos y separados. Cada contexto encapsula su propio modelo de dominio, comportamientos y reglas de negocio, lo que permite una arquitectura modular, mantenible y alineada con el negocio.

#### Bounded Contexts

- **Nombre** – 
- **Nombre** – 

####  Buenas Prácticas Aplicadas
- Separación clara de **entidades de dominio**.
- Control de errores centralizado.
- Arquitectura lista para pruebas, integración y ampliación.


###  "nombre" Bounded Context

### "nombre" Bounded Context

### 5.2.3.7. Software Deployment Evidence for Sprint Review

 En esta entrega se ha finalizado la implementación de la lógica de negocio restante, junto con la optimización y estilización de la experiencia visual (UI).

Se realizó la integración exitosa de servicios de terceros, consolidando una versión estable del producto que cumple con los requisitos necesarios para la ejecución de pruebas de aceptación y validación.

### Validación de Funcionalidades Desplegadas (Sprint 3)

A continuación se presenta el estado operativo de los módulos críticos en el entorno de producción (Netlify + Backend):

### 5.2.3.8. Team Collaboration Insights during Sprint

La colaboración del equipo durante el **Sprint 3** se orientó a la finalización de la lógica de negocio en el Backend y su integración total con la interfaz de usuario. El trabajo se distribuyó respetando la arquitectura de *Bounded Contexts*, asegurando que servicios críticos como IoT, alertas y consumo de APIs externas funcionaran armónicamente antes del despliegue final en producción.

| Integrante | Actividad Principal en Sprint 3 |
| :--- | :--- |
| **Poma Muñoz, Ariadna Geraldine** | Desarrollo de lógica para **Restaurantes**  y gestión de contenido para el módulo de Filtros de Calidad. |
| **Pariona Chacca, Angel Jose** | Implementación segura del **Inicio de Sesión (Login)** y validación de credenciales de usuario en el Backend. |
| **Sanchez Guevara, Ivan Fernando** | Integración de **APIs externas** para el pronóstico Imagenes de usuarios y imagenes de los restaurantes afiliados |
| **Fajardo Monrroy, Walter Luis** | Construcción del sistema de **¿ Notificaciones**, enfocándose en la solicitud de amistad como el aceptar o rechazar estar en un Grupo para el calculo. |

Observaciones del trabajo colaborativo:

- Se establecieron ramas de desarrollo separadas  por módulo para evitar conflictos de código.
- Se aplicó una política de pull requests y revisiones por pares antes de integrar a la rama principal.
- El uso de GitHub Projects permitió gestionar tareas y seguimiento del progreso en tiempo real.
- La comunicación constante facilitó la resolución de conflictos y el refinamiento del diseño UI/UX.

### 5.3. Validation Interviews

#### 5.3.1. Diseño de Entrevistas

## Pruebas de Usabilidad – Plataforma Web de Agricultura

### Preguntas para Agricultores

#### Diseño general y navegación

## Pruebas de Usabilidad – Plataforma Web de Localizacion y distancia de restaurantes

### Preguntas para Locales

### Preguntas para Comensales

#### 5.2.4.2. Registro de Entrevistas

**User Persona del Segmento Objetivo 1: Locales**
**User Persona del Segmento Objetivo 2: Comensales**

#### 5.3.3. Evaluaciones según heurísticas

## SITE o APP A EVALUAR
**Nombre:** LocalFood  
**Objetivo:** Identificar problemas de usabilidad en el sistema web de Gestion respecto a la Calculo de Restaurantes usando la Lista Heurística de Nielsen.

##  TAREAS A EVALUAR

## PROBLEMAS DETECTADOS 

## ESCALA DE SEVERIDAD

## ANÁLISIS HEURÍSTICO DETALLADO

### Problema #01:

---

### Problema #02:

---

<br>
<br>

# Video About-the-product

# Video About-the-team

## Conclusiones 

## Bibliografía

## Anexos

