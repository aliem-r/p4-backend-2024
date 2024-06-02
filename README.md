# Backend en Typescript, Express y Prisma

Esta aplicación es un sistema de gestión de cuentos infantiles que permite almacenar y administrar información sobre autores, categorías y cuentos. Utiliza Prisma como ORMy PostgreSQL como base de datos.

El modelo de datos incluye las siguientes entidades: `Author`, `Category`, y `Story` relacionadas de la siguiente manera:

<img src="https://raw.githubusercontent.com/your-username/p4-backend-2024/main/prisma-erd.svg" width="500">

## Requisitos previos

-   Node.js (versión 14 o superior)
-   Bun (gestor de paquetes y entorno de ejecución)

## Instalación

**1. Instala las dependencias con Bun.**

```
bun install
```

**2. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno.**

```
DATABASE_URL #Url de la base de datos
PORT #Puerto para el servidor de desarrollo. Ej.: 8888
```

**3. Genera el cliente de Prisma**

```
bunx prisma generate
```

**4. Aplica el esquema de Prisma y siembra la base de datos con datos iniciales ejecutando el siguiente comando:**

```
bun seed
```

**5. Ejecuta el servidor de desarrollo para probar la aplicación:**

```
bun dev
```

**6. Importa la colección de requests `thunder-collection_p4-backend-2024.json` en Thunder Client.**

**7. Prueba los diferentes endpoints de la aplicación desde Thunder Client.**

<br><br><br><br>

# Enunciado de la práctica

Se trata de hacer un _backend_ usando Typescript, Express y Prisma. El _backend_ implementado en clase es el modelo a seguir. Para alumnos que lo hacen por primera vez y sienten algo de incomodidad, lo ideal es usar el modelo de guía y hacer un _backend_ cercano al original de tal manera que la práctica sea un repaso a fondo. Para los que estén más cómodos, lo ideal es innovar en algun aspecto y salirse parcialmente del modelo en ciertos momentos o explorar algún interés personal. El modelo de datos es directamente la práctica anterior.

Al usar Prisma, es quizás buena idea explorar proveedores de Prisma que no sean precisamente Postgres, ya que el coste de hacerlo es mínimo (aunque esto no es obligatorio para nada). Aparte de los proveedores locales alternativos a Postgres, existen también opciones en la nube equivalentes a Postgres como [PlanetScale](https://www.prisma.io/docs/guides/database/planetscale), [CockroachDB](https://www.prisma.io/docs/guides/database/cockroachdb) o [Supabase](https://www.prisma.io/docs/guides/database/supabase), bien explicadas en la documentación de Prisma.

## Entregable

Como anteriormente, para hacer esta práctica hay que:

-   Hacer un _fork_ de este repositorio.
-   Trabajar en el _fork_ haciendo commits regularmente (una práctica que aparece entera en un solo commit tendrá una nota muy baja o cero, hay que mostrar todo el proceso intermedio).
-   Al finalizar, se debe crear un `ZIP` del repositorio (que incluya el fichero `.env`!) y entregarlo en el [Campus Online de UPC School](https://talent.upc.edu) (habrá una tarea preparada para ello).

El entregable es el código del proyecto, incluyendo:

-   `docker-compose.yml` si la base de datos corre bajo Docker.
-   El código completo del servidor.
-   Un fichero exportado de [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) con la lista de _endpoints_ que se han probado. (Esto es **extremadamente** relevante porque la corrección del backend, de no tener este fichero, es un trabajo muchísimo más tedioso!).
-   Si se necesitan credenciales para acceder a servicios de cloud (o incluso localmente), es importante incluir en el ZIP del campus el fichero `.env` con éstas. Es muy importante no subir ese fichero en GitHub (es decir, incluirlo en `.gitignore`).
