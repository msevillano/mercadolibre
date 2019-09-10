# MercadoLibre hiring challenge

## Consigna 

En una galaxia lejana, existen tres civilizaciones. Vulcanos, Ferengis y Betasoides. Cada civilización vive en paz en su respectivo planeta.

Dominan la predicción del clima mediante un complejo sistema informático.

## Premisas:

  - El planeta Ferengi se desplaza con una velocidad angular de 1 grados/día en sentido horario. Su distancia con respecto al sol es de 500Km.
  - El planeta Betasoide se desplaza con una velocidad angular de 3 grados/día en sentido horario. Su distancia con respecto al sol es de 2000Km.
  - El planeta Vulcano se desplaza con una velocidad angular de 5 grados/día en sentido anti­horario, su distancia con respecto al sol es de 1000Km.
  - Todas las órbitas son circulares.
  - Cuando los tres planetas están alineados entre sí y a su vez alineados con respecto al sol, el sistema solar experimenta un período de sequía.
  - Cuando los tres planetas no están alineados, forman entre sí un triángulo. Es sabido que en el momento en el que el sol se encuentra dentro del triángulo, el sistema solar experimenta un período de lluvia, teniendo éste, un pico de intensidad cuando el perímetro del triángulo está en su máximo.
  - Las condiciones óptimas de presión y temperatura se dan cuando los tres planetas están alineados entre sí pero no están alineados con el sol.
  - Las condiciones óptimas de presión y temperatura se dan cuando los tres planetas están alineados entre sí pero no están alineados con el sol.

## Realizar un programa informático para poder predecir en los próximos 10 años:
  1. ¿Cuántos períodos de sequía habrá?
  2. ¿Cuántos períodos de lluvia habrá y qué día será el pico máximo de lluvia?
  3. ¿Cuántos períodos de condiciones óptimas de presión y temperatura habrá?
  
## Bonus

Para poder utilizar el sistema como un servicio a las otras civilizaciones, los Vulcanos requieren tener una base de datos con las condiciones meteorológicas de todos los días y brindar una API REST de consulta sobre las condiciones de un día en particular.

  1. Generar un modelo de datos con las condiciones de todos los días hasta 10 años en adelante utilizando un job para calcularlas.
  2. Generar una API REST la cual devuelve en formato JSON la condición climática del día consultado.
  3. Hostear el modelo de datos y la API REST en un cloud computing libre (como APP Engine o Cloudfoudry) y enviar la URL para consulta: `Ej: GET → http://....../clima?dia=566 → Respuesta: {“dia”:566, “clima”:”lluvia”}`

## Resolución

Para la resolución de este ejercicio, me plantié 2 posibles soluciones. El approach 100% matemático basandome en análisis de funciones(derivada 1ra y 2da) para estudiar el triángulo, y si validar si el perímetro de este crece o decrece.

No conforme con el resultado de esto (la alineación entre puntos, cuando no estan alineados con el sol no implica un mínimo), opte por un approach comparativo entre varios parámetros(perímetro, y ratio entre lados del triángulo) para decidir que tipo de clima ocurrirá en el día dado.

El perímetro del triangulo se obtiene con la ley del coseno, y para decidir si estan alineados o no se calcula si la suma de los 2 lados de menor lado son iguales al tercero (caso en el cual, el triángulo se convierte en línea).

Si la suma de los ángulos de los 3 planetas(uno con respecto a otro), da 360 grados, significa que el sol esta dentro del triángulo. Para el caso de la alineación planetas con sol, se basó en el mismo concepto, teniendo en cuenta que si todos estan alineados, el valor puede ser tanto 360 como 0.

## Especificaciones técnicas

El challenge se hizo con JS, Serverless y MongoDB para la base de datos. Para ejecutarlo se debe descargar el código `git clone`, instalar las dependencias `npm install` y setear los parametros en `./config/local.yml`. Luego de esto se puede ejecutar con `npm start`.

Debido a un constraint con AWS(cuenta suspendida por falta de uso), no pude subir una versión online del challenge, de desear subirlo, pueden generar un archivo nuevo en la carpeta de config con el nombre que le quieran poner al stage a subir, cargar los parámetros en el mismo y ejecutar `sls deploy -s ${nombre del file}`. Tener en cuenta que se puede utilizar parameterStore de AWS, con lo que se podría apuntar a parametros allí alocados.
