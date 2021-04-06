const fs = require('fs')
const Spinner = require('node-spintax')
const csv = require('csv-parser')
const builder = require('xmlbuilder')
const myArgs = process.argv.slice(2)
let xml = null

const nombreWeb = 'Todopiscinas.info'
const dominio = 'https://todopiscinas.info/'
const categoryPath = 'piscinas-desmontables/'
const textoOriginal =
  '<br/>## ¿Qué es una Piscina Desmontable?<br/><br/>{Una **piscina desmontable** es {aquella|la} piscina {la cual|que} no {necesita|requiere|le hace falta|le es imprescindible} una {obra|reforma|gran reforma} para {disfrutar|gozar} de ella, no {ocupa|toma|requiere de|necesita} {mucho|un gran} {tamaño|volumen}, (aunque las hay {muy grandes|enormes|muy voluminosas}) y te {permiten|dejan|posibilitan} guardarlas al {terminar|acabar|concluir|finalizar|rematar} el verano. {Hay piscinas desmontables {pequeñas|no muy grandes|medianas} {ideales|especiales|excelentes} para {niños|niñas|niñ@s} y pasar {tiempo|rato} en familia u otras más grandes para invitar a más {gente|amigos|compañeros|familiares}.| **KW**, una {opción|elección|alternativa} {genial|sobresaliente|magistral|estupenda|fantástica} para este **verano 2021** y a un {**precio**|**coste**|**importe**} {asequible|factible|posible|barato|económico|módico}.}|<br/><br/>{Para poder {disfrutar|gozar|entretenerse} al {máximo|100%} de tu piscina desmontable este verano {2021|} hay que {tener en cuenta|comprobar|vigilar|verificar|cerciorarse} {varios|distintos|múltiples} {aspectos|detalles} para que se {adapten|ajustes|amolden} a las necesidades tuyas y de tu {entorno|medio|contexto}.}|<br/><br/>{A continuación|Seguidamente|En seguida} os {explicaremos|enseñaremos|mostraremos|presentaremos} {con más detalle|en profundidad|minuciosamente} todos estos {puntos|detalles} que harán que comprar una piscina desmontable para {este verano 2021|verano|los meses de calor} sea {la mejor|una gran|una excelente|una magnífica|una insuperable} decisión del año.}$<br/><br/><br/>## ¿De qué {componente|material|} están {hechas|fabricadas}?<br/><br/>{Un aspecto|Un detalle|Un punto|Algo} {muy importante|esencial|a tener en cuenta|destacable} es {el material|la composición} con la que están {hechas|fabricadas|realizadas} las **piscinas** desmontables, ya que cada {material|componente|elemento} {aporta|contribuye|da|proporciona} unas ventajas y {conocerlas|saberlas|comprenderlas} {siempre|} será una **ventaja** para {decidir|determinar|elegir} tu piscina **ideal**.~<br/><br/><br/>### Piscina hinchable<br/><br/>{{Suelen ser|Normalmente son|En primera instancia son} {la opción|la elección|la alternativa} más {barata|económica} y la más {fácil|sencilla|cómoda} de **montar** y {almacenar|guardar|} al {terminar|finalizar|acabar} el verano.| {Actualmente|Hoy por hoy|En el presente|En nuestros días} {ofrecen|muestran|presentan} unas calidades {bastante buenas|muy buenas|excelentes|increíbles} para {disfrutar|recrearse} sin problemas.| {Se suelen|Normalmente se|La opción tradicional es} {fabricar|elaborar|crear} tanto en plástico como el liner y otros conjuntos de polímeros lo cual {hace|confiere} una piscina {muy recomendable|top|de primera opción}.}~<br/><br/><br/>### Piscina {tubular|} PVC<br/><br/>Las **piscinas tubulares** pvc son una {muy buena|gran|excelente} {opción|elección|alternativa|preferencia} para tu piscina desmontable o para {mantenerla|conservarla|preservarla} **todo el año**. {Tienen|Poseen|Cuentan|Disponen} una {estructura|configuración|forma} metálica lo que la hace más dura, {sólida|firme|dura|robusta} y {resistente|maciza|compacta}. {Se compone|Se forma|Se integra} con un liner de 3 capas de PVC lo cual le {da|otorga|confiere|proporciona} a toda la piscina una {gran|excelente|buena} {resistencia|firmeza|solidez|fuerza}. Muy {recomendable|aconsejable|adecuada|apropiada} para {largos periodos|muchos meses|largas estancias}.~<br/><br/><br/>### Piscina de madera<br/><br/>Las **piscinas de madera** son una {gran|buena|excelente} {opción|elección|alternativa|preferencia} para {sentir|apreciar|notar|experimentar} ese acabado {rústico|silvestre|agreste} y natural. La madera {viene|está} tratada **contra humedad y hongos** por lo que su {durabilidad|duración|vida} no corre {peligro|ninguna amenaza}. Esta {opción|alternativa|elección} de piscina se puede {enterrar|soterrar} o semienterrar.~<br/><br/><br/>### Piscina de acero<br/><br/>Las **piscinas de acero** son las piscinas con el {material|componente|elemento} más {resistente|firme|sólido|consistente|rígido}. Igual que {ocurre|pasa|sucede|se da} con las piscinas de madera, el acero {empleado|utilizado|aplicado|destinado} para la {construcción|obra} de las piscinas de acero está {tratado|cubierto} de tal {manera|forma} que {evita|impide|previene|elude} su **oxidación** y se {pueda|permita} dejar {a la intemperie|al aire|a fuera} {durante|en|a lo largo de} **todo el año**.~<br/><br/><br/>### Piscina de Composite<br/><br/>Las **piscinas de composite** se {componen|constituyen|fabrican} de madera, **resina** y {algunos modelos|algunos casos} de fibra de vidrio, carbono o cerámica. La {unión|conexión|convergencia} de todos estos {componentes|materiales|elementos} {hace|sirve para|desempeña|ofrece} que la piscina de **composite** sea muy {resistente|duradera|compacta|sólida|dura|rígida} al paso {del tiempo|de los meses|de los días|de los años} e inclemencias meteorológicas.~<br/><br/>Si {tienes|te surge|te viene|te incita|te suscita} {cualquier|alguna|una} {duda|cuestión|pregunta|interrogante} {sobre|acerca de|de|con respecto a|en relación con} **KW** que no hemos {podido|sido capaces de|sabido} {abordar|tratar|afrontar} en {detalle|concreto|profundidad|específicamente}, estaremos {atentos|listos|vigilantes} en {el apartado|la sección} de _Contacto_ para {resolver|aclarar|contestar} cualquier {duda|pregunta|cuestión|interrogante}.$<br/><br/><br/>## ¿Cuánto {resiste|aguanta|soporta} una Piscina Desmontable?<br/><br/>{Actualmente|Hoy en dia|Hoy por hoy|En nuestros días} la {mayoría|gran parte} de piscinas desmontables que {existen|tenemos|disponemos} en el mercado son de una **calidad** {suficiente|capaz|idónea} para {aguantar|resistir|tolerar} un verano y muchos más ({siempre|en todo momento|en cualquier caso} que se {sigan|obedezcan|mantengan} las recomendaciones del fabricante). {A continuación|Ahora|Seguido} vamos a {explicar|aclarar|clarificar|exponer|mostrar|presentar} varios {detalles|aspectos|puntos} a tener en cuenta para tu piscina:<br/><br/><br/>### Grosor del plástico del tanque<br/><br/>Si {pensamos|imaginamos} en una **piscina desmontable**, {pensamos|imaginamos} en una piscina en {un jardín|una parcela|un terreno} con {niños|niñas|niñ@s} saliendo y entrando, por lo que {sabes|tienes claro|tienes claro} que {deben|tienen que|han de} {soportar|aguantar|sobrellevar|resistir} {bastante|un gran} movimiento de {las personas|niños|familiares}. Es por eso que {actualmente|a día de hoy|en estos días} el tanque de la piscina está {creado|fabricado} con **vinilos** o **polivinilos** con un {grosor|espesor} {adecuado|idóneo} para {soportar|aguantar|resistir|tolerar} todo {este peso|esta carga} y **fuerzas**.<br/><br/>Lo único que {garantiza|asegura|avala|respalda} un	 buen {**mantenimiento**|cuidado|conservación} es seguir {las indicaciones|los pasos|las instrucciones} del fabricante y tener sentido común: no {arrojar|tirar|lanzar} objetos punzantes o {con mucho filo|afilados|cortantes} que puedan {perjudicar|dañar|estropear|romper|deteriorar|arruinar|**lastimar**} este material.<br/><br/><br/>### PUNTOS DE ANCLAJE<br/><br/>Los **puntos de anclaje** {suelen ser|a menudo son|con frecuencia son|muchas veces son} {olvidados|descuidados|relegados} {a la hora|en el momento} de {montar|ensamblar|acoplar} una piscina desmontable, pero {la verdad|en realidad|} es que es un {eje principal|punto clave} por el que {mantiene|sostiene|consigue} una {**buena**|**gran**|**excelente**} {estructura|constitución|forma} para todo el {conjunto|set|grupo}.| Estos puntos de anclaje es donde se {apoya|descansa|asienta|recuesta} {la superficie|el área} para {garantizar|asegurar|respaldar} una {buena|excelente|’optima|gran} base que de {estabilidad|firmeza|solidez|seguridad} y {distribuya|reparta} {correctamente|adecuadamente|apropiadamente} **todo el peso**.$<br/><br/><br/>## {Consejos|Trucos|Tips|Sugerencias|Recomendaciones|Puntos} antes de {instalar|colocar|poner|disponer|situar|posicionar|establecer} una piscina<br/><br/><br/><br/>*   **{Evite|Elude|Esconde|Quita} cables eléctricos {cercanos|próximos}**: es de **sentido común**, pero el agua y la electricidad no {se llevan muy bien|son amigos|se complementan ben}, ya que **corremos** {peligro|riesgo} de electrocución. Es por eso que la {ubicación|localización|posición|colocación} de nuestra piscina esté {situada|colocada|ubicada|instalada} lejos de cualquier **circuito eléctrico**. Si tu piscina {utiliza|usa|emplea|se sirve de} alguna depuradora o aparato eléctrico, {cuidar|atender|mantener|preservar} {muy bien|de manera estupenda|excelente} su instalación eléctrica para que no {haya|se produzca|salte|se provoque} ningún percance.<br/>*   **{Cuidado|Atención|Vigilar|Mirar} al {cavar|excavar|ahondar|perforar|profundizar|penetrar la} tierra:** {hay|existen|tenemos|podemos encontrar} ciertas **piscinas desmontables** que podemos enterrarlas {parcialmente|ligeramente} en la tierra. {Lo primero  que|Primeramente|Inicialmente|Previamente} tendríamos que hacer antes de empezar a {realizar|ejecutar|llevar a cabo|materializar} el **hueco** es {comprobar|verificar|confirmar|examinar|revisar|inspeccionar|chequear|cerciorarse} que no pasa **ningún cable eléctrico**, {tubería|conducto|cañería} o similar.<br/>*   No {colocar|situar|ubicar|instalar|emplazar|poner} {debajo de|bajo} árboles: Evitaremos que las {**hojas**|**ramas**|**ramitas**|**animales**|**excrementos** de animales|nidos de pájaros} {acaben|lleguen|finalicen} dentro de nuestras piscinas.$<br/><br/><br/>### Depuradora<br/><br/>El {**mantenimiento**|**cuidado**} y {limpieza|saneamiento|desinfección|higienización|lavado} del agua es algo {que tenemos que|a|que debemos} tener en cuenta para nuestra piscina desmontable si {queremos|deseamos|pretendemos} que {dure|perdure|prolongue|continúe} en {el tiempo|el año|los meses futuros}. Es un **aspecto** {muy importante|fundamental|esencial|elemental|clave|vital|crucial|determinante|indispensable|imprescindible} y {garantiza|asegura|respalda|certifica} su {correcto|perfecto|impecable|exacto} comportamiento y {evitemos|proveeremos} {problemas|disgustos} a medio y largo plazo.<br/><br/>{En el mercado|En la actualidad|A día de hoy|Hoy en día} hay dos tipos de depuradoras de agua, las **depuradoras con filtro de arena** y  las **depuradoras** **con filtro de cartucho.** Las marcas más {recomendadas|reconocidas|conocidas|renombradas|típicas} para las depuradoras son **Intex** y **Bestway**.$<br/><br/><stats-list :link1=link1 :link2=link2 :link3=link3 :link4=link4 :category=category></stats-list>$<br/><br/><brand-panel :title=product1_title :desc=product1_desc :img=product1_img :link=product1_link></brand-panel>$<br/><br/><external-banner></external-banner><br/>'

const totalArticulos = 20
const categoria = 'piscinas-desmontables'
const mainPicture =
  'https://images-na.ssl-images-amazon.com/images/I/61-uUQ3GR8L.jpg'

function textosUnicosPosibles() {
  var spinner = new Spinner(textoOriginal)
  var variationsCount = spinner.countVariations()
  return variationsCount
}

function generateSpintax() {
  var spinner = new Spinner(textoOriginal)
  return spinner.unspinRandom(totalArticulos, true)
}
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

async function generate() {
  const results = []
  fs.createReadStream('./data/' + myArgs[0])
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results.length)

      totalSpintax = generateSpintax()

      let urlset = builder
        .create('urlset', { encoding: 'utf-8' })
        .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')
      for (let i = 0; i < totalSpintax.length; i++) {
        console.log(`procesando: ${results[i].keyword}`)

        let myPriority = results[i].volume > 3000 ? 0.8 : 0.7
        if (results[i].volume < 200) {
          myPriority = 0.6
        }
        let hoy = new Date()
        let obj = {
          url: {
            loc: {
              '#text':
                dominio +
                categoryPath +
                results[i].keyword.replace(/\s+/g, '-').toLowerCase() +
                '/',
            },
            lastmod: {
              '#text': `${hoy.toISOString().split('T')[0]}`,
            },
            changefreq: {
              '#text': `monthly`,
            },
            priority: {
              '#text': myPriority,
            },
          },
        }
        urlset.ele(obj)

        const kwPrincipal = results[i].keyword
        const KW = /KW/g

        const meta_description = results[i].product_meta.replace(
          KW,
          kwPrincipal
        )
        const titleSeo = kwPrincipal
        const titleSeoCapitalized =
          titleSeo.charAt(0).toUpperCase() + titleSeo.slice(1)
        let atributos = `---\nkeyword: ${kwPrincipal}\ntitle: ${titleSeoCapitalized} | ${nombreWeb}\ndescription: ${meta_description}\nweb: ${nombreWeb}\ncategory: ${categoryPath}\nlink1: ${results[i].link1}\nlink2: ${results[i].link2}\nlink3: ${results[i].link3}\nlink4: ${results[i].link4}\npicture: ${mainPicture}\n`
        atributos += `product1_title: ${results[i].product1_title}\nproduct1_desc: ${results[i].product1_desc}\nproduct1_link: ${results[i].product1_link}\nproduct1_img: ${results[i].product1_img}\nproduct1_info: '${results[i].product1_info}'\n`
        atributos += `product2_title: ${results[i].product2_title}\nproduct2_desc: ${results[i].product2_desc}\nproduct2_link: ${results[i].product2_link}\nproduct2_img: ${results[i].product2_img}\nproduct2_info: '${results[i].product2_info}'\n`
        atributos += `product3_title: ${results[i].product3_title}\nproduct3_desc: ${results[i].product3_desc}\nproduct3_link: ${results[i].product3_link}\nproduct3_img: ${results[i].product3_img}\nproduct3_info: '${results[i].product3_info}'\n`
        atributos += `product4_title: ${results[i].product4_title}\nproduct4_desc: ${results[i].product4_desc}\nproduct4_link: ${results[i].product4_link}\nproduct4_img: ${results[i].product4_img}\nproduct4_info: '${results[i].product4_info}'\n---\n`

        let textoSpineado = totalSpintax[i]
        let newBloques = []
        let bloques = textoSpineado.split('$')
        //console.log(bloques.slice(1))

        //console.log(bloques.length)
        const bloquesAleatorios = shuffle(bloques)
        // console.log(bloquesAleatorios)

        for (
          let indexBloque = 0;
          indexBloque < bloquesAleatorios.length;
          indexBloque++
        ) {
          //let newSubBloque = []
          const element = bloquesAleatorios[indexBloque]
          const subBloqueAleatorio = element.split('~')
          console.log(subBloqueAleatorio.length)
          if (subBloqueAleatorio.length > 1) {
            //newSubBloque.push(subBloqueAleatorio[0])
            const subBloqueshuffle = shuffle(subBloqueAleatorio.slice(1))
            console.log(subBloqueshuffle)
            newBloques.push(subBloqueAleatorio[0] + subBloqueshuffle.join(''))
          } else {
            newBloques.push(element)
          }
        }
        //console.log(`newBloques`)
        //console.log(newBloques)
        textoSpineado = newBloques.join('')
        const saltosDeLinea = /<br\/>/g
        textoSpineado = textoSpineado.replace(saltosDeLinea, '\n')

        textoSpineado = textoSpineado.replace(KW, kwPrincipal)

        const whiteSpace = /\s/g
        const seoUrl = kwPrincipal.replace(whiteSpace, '-')

        const texto = atributos + textoSpineado
        fs.writeFile(
          './content/' + categoria + '/' + seoUrl + '.md',
          texto,
          function (err) {
            if (err) {
              return console.log(err)
            }
            // console.log(`Fichero ${kwPrincipal} creado`)
          }
        )
      }
      //var feed = builder.create(urlset, { encoding: 'utf-8' })
      const newSitemap = urlset.end({ pretty: true })
      fs.writeFile(
        './static/piscinas-desmontables.xml',
        newSitemap,
        function (errorXml) {
          if (errorXml) {
            return console.log(errorXml)
          }
          console.log(`sitemap generado correctamente`)
        }
      )
    })
}
console.log(`textosUnicosPosibles: ${textosUnicosPosibles()}`)
generate()

//TODO: generar sitemap.xml
//console.log(xml)
