# ANRED Mobile

### Objetivos
La idea trás la creación de esta app es estudiar las particularidades del desarrollo para móviles con React Native y conocer mejor las librerías y problemas que surgen al trabajar en este contexto en particular. Paralelamente, adquirir conocimientos sobre la creación de endpoints propios en la API REST de Wordpress.

### Entorno
- Windows 10
- VSCode
- npm y librerías en WSL
- Android Studio (Emulator) en Windows
- Chrome Dev Tools para debug de JS remoto
- WAMP para servir sitio en Wordpress

### Versión 0
#### Librerías
- axios
- react
- react-native
- react-native-elements

#### Funcionamiento
Un componente central(App) que funciona como wrapper para una action bar ubicada en la parte superior y una navigation bar ubicada en la parte inferior. Ambas barras creadas usando componentes de react-native dentro de App. Además, un componente aparte que (ListLatest) que utiliza FlatList(react-native) y ListItem(react-native-elements) para mostrar las últimas noticias. Los logos e íconos son imágenes que se importan usando el componente Image.

#### Balance
Como primera iteración fue bastante sencillo. No se presentaron problemas.

FlatList y ListItem son sencillos de usar y muy potentes.

StyleSheet hace bastante sencillo personalizar la presentación los componentes pero la organización de estilos por componente hace que sea difícil mantener una estética organizada. Probablemente sea mejor un módulo aparte con propiedades más genéricas, al estilo atomic css, del que tomen todos los componentes.

La forma de crear las barras de acción y navegación resultó sencilla pero definitivamente es necesario agregar una capa de abstracción que permita hacerlo de forma más sencilla y sin tanto copy paste.

La app tiene únicamente dos componentes pero ya se hace notar la falta de comunicación entre los mismos.

### Versión 1
#### Librerías
- axios
- react
- react-native
- react-native-elements
- react-redux
- redux
- redux-axios-middleware
- redux-thunk

#### Funcionamiento
Un componente central(App) que funciona como wrapper para dos componentes que cumplen función de action bar(ActionBar) ubicada en la parte superior y navigation bar(NavigationBar) ubicada en la parte inferior. Ambas barras creadas usando componentes de react-native. Además, otro componente aparte(Content) sirve como switcher entre las distintas pantallas con listados de noticias y secciones. Toda la comunicación entre componentes y con el módulo que consume la API se realiza con redux y thunk.

#### Balance
Por lo sencilla que es la app no surgieron problemas implementado redux. En este momento tengo la impresión de que más allá de una mejor organización del código fuente no me está aportando nada.

El entorno en el que estoy desarrollando está mostrando claras limitaciones. El no poder utilizar las react developer tools va a hacer que cualquier error tenga que ser seguido mediante banderas en consola. Tendría que volcarme completamente a Windows o a Linux.

Todavía queda pendiente mejorar la forma de trabajar con las barras, agregar algún tipo de transición entre pantallas y mostrar los artículos propiamente dichos.

### Version 2
#### Librerías
- axios
- react
- react-native
- react-native-elements
- react-native-gesture-handler
- react-native-render-html
- react-native-vector-icons
- react-navigation

#### Funcionamiento
El componente principal y las barras se crean usando react-navigation. Un StackNavigator para la barra superior y un TabNavigator para la inferior. En carpeta separada tengo los componentes que representan las pantallas. En su mayoría funcionan como interfaz para el componente ArticlesList que es el que realmente se encarga de mostrar los listados de artículos. El componente ArticleItem se encarga de mostrar cada artículo, la cabecera mediante componentes nativos y el resto utilizando react-native-render-html.

#### Balance
La documentación de react-navigation no está bien organizada, no resulta sencillo encontrar lo que se busca. Mientras te atengas a los ejemplos la información abunda, a partir del momento que necesitás realizar algo más complejo escasea. La documentación de la API es inconsistente, a veces te dice con lujo de detalles y ejemplos que espera recibir una propiedad y otras veces se queda en poco más que el nombre. La implementación tampoco fue de lo más sencilla incluso después de haber sacado redux de la ecuación.

Funciona perfectamente pero parte de la implementación de la navegación y los stacks y tabs anidados se sienten extremadamente hacky. Buscando en internet vi que es bastante común esta situación. A nivel estético le pasa el trapo a las versiones anteriores, las barras se ven bien y los cambios de pantalla son fluidos.

El renderizado de HTML a native views es bastante deficiente. Probé varias librerías y me terminé quedando con react-native-render-html porque es la que daba mejores resultados out-of-the-box pero para producción va a ser necesario una mejor solución. Hasta ahora venía pensandolo con Wordpress < 5.0 pero me parece que los bloques de gutenberg van a ser la solución ya que al fin de cuentas están hechos en react.

### Vista previa
<a href="http://www.youtube.com/watch?feature=player_embedded&v=WVWTY5UUqDs
" target="_blank"><img src="http://img.youtube.com/vi/WVWTY5UUqDs/0.jpg" 
alt="App ANRed" width="560" height="315" border="10" /></a>
