# ANALIZADOR DE TEXTP

## INDICE

*  [1. Introucccon](#1-introduccion)
*  [2. Funcionalidad](#2-funcionalidad)
*  [3.  Decisiones de  diseño](#3-decisiones-de-diseño)






## 1. Introduccion 

El contador de texto es una aplicación que te permite analizar diferentes métricas de un texto, como el recuento de palabras, el recuento de caracteres, el recuento de números, la suma total de los números, la longitud media de las palabras, entre otras. Puede ingresar cualquier texto en el área de texto y ver los resultados actualizados en tiempo real.


## 2. Funcionalidad 

 La aplicación cuenta con las siguientes características:
1. Recuento de palabras: Calcula el número de palabras en el texto ingresado y muestra este recuento al usuario.
2. Recuento de caracteres: Calcula el número de caracteres en el texto ingresado, incluyendo espacios y signos de puntuación, y muestra este recuento al usuario.
3. Recuento de caracteres excluyendo espacios y signos de puntuación: Calcula el número de caracteres en el texto ingresado, excluyendo espacios y signos de puntuación, y muestra este recuento al usuario.
4. Recuento de números: Cuenta la cantidad de números presentes en el texto ingresado y muestra este recuento al usuario.
5. Suma total de números: Suma todos los números presentes en el texto ingresado y muestra el resultado al usuario
6. Longitud media de las palabras: Calcula la longitud media de las palabras en el texto ingresado y muestra este valor al usuario.

Para usar la aplicación, simplemente sigue estos pasos: 

1. Abre la aplicación del contador de texto en tu navegador web. 

2. Verás un encabezado que dice "Análisis de Texto" y un área de texto donde puedes ingresar tu texto. 

3. Escribe o pega el texto que deseas analizar en el área de texto. 

4. A medida que escribas o modifiques el texto, las métricas se actualizarán automáticamente en tiempo real. 

5. Observe las métricas que se muestran en forma de una lista debajo del área de texto. Cada métrica tiene su propia descripción. 

6. Si desea borrar el contenido del área de texto y restaurar todas las métricas, haga clic en el botón "Limpiar". 

7. Puedes repetir el proceso ingresando diferentes textos para obtener las métricas correspondientes. 



## 3. Decisiones de diseño

-  El diseño de la aplicación se ha mantenido simple y limpio, usando HTML semántico para una estructura clara y legible. 

- Se ha aplicado un estilo minimalista utilizando CSS para mejorar la apariencia y la legibilidad de la interfaz de usuario. 

- Las métricas se presentan en una lista ordenada, facilitando la lectura y comprensión. 

- Se ha agregado un botón "Limpiar" para permitir al usuario borrar el contenido del área de texto y restaurar las métricas. 

- Se han utilizado eventos del DOM para actualizar las métricas en tiempo real a medida que el usuario escribe en el área de texto. 

- Se han implementado funciones en JavaScript para calcular cada una de las métricas a partir del texto ingresado. 

- El código JavaScript está estructurado utilizando un objeto analyzer que contiene métodos para cada métrica, lo que facilita su mantenimiento y extensibilidad. 

Espero que esta información te ayude a entender cómo utilizar la aplicación y las decisiones de diseño que se tomaron. 



