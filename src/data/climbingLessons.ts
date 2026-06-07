export interface ClimbingLesson {
  id: string
  lessonNumber: number
  title: string
  scenario: string
  vocab: Array<{ en: string; es: string; sw: string }>
  samplePhrase: { en: string; es: string; sw: string }
}

export interface ClimbingSubsection {
  id: string
  emoji: string
  title: string
  tagline: string
  color: string
  lessons: ClimbingLesson[]
}

export const CLIMBING_SUBSECTIONS: ClimbingSubsection[] = [
  {
    id: "gear",
    emoji: "🪢",
    title: "Gear & Equipment",
    tagline: "Name every piece of gear, explain fit and function, and handle the gear room with confidence.",
    color: "#4CAF7D",
    lessons: [
      {
        id: "gear-1", lessonNumber: 1, title: "Ropes & Dynamic Systems",
        scenario: "A guide is explaining rope selection and dynamic fall absorption to a group of beginners.",
        vocab: [{"en":"dynamic rope","es":"cuerda dinámica","sw":"kamba ya kutanua / kamba ya nguvu"},{"en":"static rope","es":"cuerda estática","sw":"kamba ngumu / kamba ya kawaida"},{"en":"dry treatment","es":"tratamiento seco","sw":"matibabu ya kuzuia maji / mafunzo ya kukauka"},{"en":"rope diameter","es":"diámetro de la cuerda","sw":"unene wa kamba"},{"en":"fall factor","es":"factor de caída","sw":"kiwango cha kuanguka"},{"en":"elongation","es":"elongación","sw":"upanuzi / urefu zaidi"},{"en":"core","es":"alma / núcleo","sw":"msingi wa kamba"},{"en":"sheath","es":"funda","sw":"ganda la nje la kamba"},{"en":"single rope","es":"cuerda simple","sw":"kamba moja"},{"en":"half rope","es":"cuerda de medio","sw":"kamba ya nusu"}],
        samplePhrase: {"en":"A dynamic rope stretches to absorb the energy of a fall.","es":"Una cuerda dinámica se estira para absorber la energía de una caída.","sw":"Kamba ya kutanua inanyooshwa ili kupunguza nguvu ya kuanguka."},
      },
      {
        id: "gear-2", lessonNumber: 2, title: "Harness Fit & Check",
        scenario: "An instructor is fitting harnesses on new students and explaining each buckle and tie-in point.",
        vocab: [{"en":"waist belt","es":"cinturón de la cintura","sw":"ukanda wa kiuno"},{"en":"leg loop","es":"pernera","sw":"kitanzi cha mguu"},{"en":"belay loop","es":"anilla de aseguramiento","sw":"kitanzi cha kusimamia kamba"},{"en":"tie-in point","es":"punto de anclaje frontal","sw":"sehemu ya kufunga kamba"},{"en":"buckle","es":"hebilla","sw":"bako / kitufe cha kufunga"},{"en":"double back","es":"doble pasador","sw":"pinda maradufu"},{"en":"gear loop","es":"portamaterial","sw":"kitanzi cha kubeba vifaa"},{"en":"rise","es":"altura del arnés","sw":"urefu wa harness"},{"en":"fit snugly","es":"ajustar bien","sw":"kukaa vizuri / kukaa imara"},{"en":"two-finger test","es":"prueba de dos dedos","sw":"mtihani wa vidole viwili"}],
        samplePhrase: {"en":"Double back all buckles and check the two-finger test on the waist belt.","es":"Dobla todas las hebillas y comprueba la prueba de dos dedos en el cinturón.","sw":"Pinda maradufu vifungo vyote na angalia mtihani wa vidole viwili kwenye ukanda wa kiuno."},
      },
      {
        id: "gear-3", lessonNumber: 3, title: "Carabiners & Quickdraws",
        scenario: "A sport climber is explaining carabiner types and clipping technique to a partner.",
        vocab: [{"en":"locking carabiner","es":"mosquetón de seguridad","sw":"ndoano yenye kufuli / karabina ya kufunga"},{"en":"non-locking","es":"mosquetón simple","sw":"karabina ya kawaida"},{"en":"screwgate","es":"cierre de rosca","sw":"kufuli cha kuzungushwa"},{"en":"gate","es":"portezuela","sw":"mlango wa karabina"},{"en":"spine","es":"espina / espalda","sw":"mgongo wa karabina"},{"en":"nose","es":"nariz","sw":"ncha ya karabina"},{"en":"clip direction","es":"dirección de clipado","sw":"mwelekeo wa kushika kamba"},{"en":"back clip","es":"back-clip / error de clipado","sw":"kosa la kuweka kamba kinyume"},{"en":"cross-load","es":"carga transversal","sw":"mzigo wa pembeni / mzigo mbaya"},{"en":"carabiner rating","es":"resistencia del mosquetón","sw":"nguvu ya karabina / kiwango cha usalama"}],
        samplePhrase: {"en":"Always clip the rope from the inside of the carabiner to prevent back-clipping.","es":"Siempre clipa la cuerda desde el interior del mosquetón para evitar el back-clip.","sw":"Daima weka kamba kutoka ndani ya karabina kuzuia kosa la back-clip."},
      },
      {
        id: "gear-4", lessonNumber: 4, title: "Belay Devices",
        scenario: "A gym instructor is demonstrating different belay device types and proper setup.",
        vocab: [{"en":"tube device","es":"dispositivo tubular","sw":"kifaa cha bomba / belay device ya bomba"},{"en":"ATC","es":"ATC","sw":"ATC / kifaa cha kusimamia kamba"},{"en":"assisted-braking","es":"frenado asistido","sw":"kuzuia kwa msaada / freno otomatiki"},{"en":"Grigri","es":"Grigri","sw":"Grigri / kifaa cha freno otomatiki"},{"en":"brake hand","es":"mano de freno","sw":"mkono wa kuzuia / mkono wa usalama"},{"en":"guide mode","es":"modo guía","sw":"hali ya mwongozaji / mode ya kuongoza"},{"en":"lower off","es":"bajar desde arriba","sw":"kushuka taratibu kwa kamba"},{"en":"catch a fall","es":"retener una caída","sw":"zuia kuanguka / shika kuanguka"},{"en":"setup","es":"montaje","sw":"kuweka sawa / mpangilio"},{"en":"feed rope","es":"dar cuerda","sw":"toa kamba / ongeza kamba"}],
        samplePhrase: {"en":"Keep your brake hand on the rope at all times when belaying.","es":"Mantén la mano de freno en la cuerda en todo momento al asegurar.","sw":"Daima weka mkono wa kuzuia kwenye kamba wakati wa kusimamia."},
      },
      {
        id: "gear-5", lessonNumber: 5, title: "Chalk & Grip",
        scenario: "A gym staff member is explaining chalk use and cleaning requirements to new members.",
        vocab: [{"en":"liquid chalk","es":"magnesio líquido","sw":"chokaa ya kioevu"},{"en":"loose chalk","es":"magnesio suelto","sw":"chokaa ya unga"},{"en":"chalk ball","es":"bolsa de magnesio","sw":"mpira wa chokaa"},{"en":"chalking up","es":"aplicar magnesio","sw":"weka chokaa mikononi"},{"en":"friction","es":"fricción","sw":"msukumo / msuguano"},{"en":"sweat","es":"sudor","sw":"jasho"},{"en":"slippery hold","es":"presa resbaladiza","sw":"kipande cha kushikilia chenye usioegemea"},{"en":"grip strength","es":"fuerza de agarre","sw":"nguvu ya kushikilia"},{"en":"brush holds","es":"cepillar las presas","sw":"fua vipande vya kushikilia"},{"en":"chalk ban","es":"prohibición de magnesio","sw":"marufuku ya chokaa"}],
        samplePhrase: {"en":"Brush the holds before you try the problem to remove excess chalk.","es":"Cepilla las presas antes de intentar el problema para quitar el exceso de magnesio.","sw":"Fua vipande vya kushikilia kabla ya kujaribu tatizo ili kuondoa chokaa nyingi."},
      },
      {
        id: "gear-6", lessonNumber: 6, title: "Helmets & Head Protection",
        scenario: "A guide is explaining when and why to wear helmets, and how to adjust fit for each client.",
        vocab: [{"en":"foam liner","es":"forro de espuma","sw":"safu ya povu ndani ya helmeti"},{"en":"chin strap","es":"barboquejo","sw":"ukanda wa kidevu"},{"en":"side rails","es":"rieles laterales","sw":"mstari wa pembeni wa helmeti"},{"en":"falling rock","es":"caída de piedras","sw":"jiwe linaloanguka / mawe yanayoanguka"},{"en":"impact absorption","es":"absorción de impactos","sw":"kupunguza mgongano / kuzuia msongo"},{"en":"ventilation","es":"ventilación","sw":"uingizaji hewa"},{"en":"adjust fit","es":"ajustar el casco","sw":"rekebisha ukubwa wa helmeti"},{"en":"mandatory","es":"obligatorio","sw":"lazima / ya sharti"},{"en":"head protection","es":"protección de cabeza","sw":"kulinda kichwa"},{"en":"cracked helmet","es":"casco agrietado","sw":"helmeti iliyopasuka"}],
        samplePhrase: {"en":"Replace a helmet immediately if it has been dropped or shows any cracks.","es":"Reemplaza el casco inmediatamente si se ha caído o muestra alguna grieta.","sw":"Badilisha helmeti mara moja ikiwa imeanguka chini au inaonyesha nyufa yoyote."},
      },
      {
        id: "gear-7", lessonNumber: 7, title: "Shoes & Footwork Basics",
        scenario: "A gym instructor explains climbing shoe selection and the fundamentals of precise footwork.",
        vocab: [{"en":"climbing shoe","es":"pies de gato / zapatilla","sw":"kiatu cha kupanda"},{"en":"downturn","es":"inclinación","sw":"kiatu kilichoinama chini"},{"en":"neutral fit","es":"ajuste neutro","sw":"kiatu laini / kiatu cha kawaida"},{"en":"aggressive shoe","es":"zapatilla agresiva","sw":"kiatu kikali / kiatu cha ngumu"},{"en":"rubber","es":"goma","sw":"mpira wa kiatu"},{"en":"rand","es":"rand","sw":"ukanda wa mpira wa pembeni wa kiatu"},{"en":"heel hook","es":"gancho de talón","sw":"kukama kisigino"},{"en":"toe hook","es":"gancho de punta","sw":"kukama ncha ya mguu"},{"en":"smear","es":"apoyo de pie plano","sw":"kupiga nyayo ukutani"},{"en":"edge","es":"punto de pie / precisión","sw":"kuweka ncha ya kiatu kwenye hold"}],
        samplePhrase: {"en":"Stand on the tip of your shoe — precise footwork saves more energy than arm strength.","es":"Párate en la punta del pie — la técnica de pies ahorra más energía que la fuerza de los brazos.","sw":"Simama kwenye ncha ya kiatu chako — mbinu nzuri ya miguu inaokoa nguvu zaidi kuliko nguvu za mikono."},
      },
      {
        id: "gear-8", lessonNumber: 8, title: "Anchor Systems",
        scenario: "An instructor builds and explains a top-rope anchor at the top of a crag, naming each component.",
        vocab: [{"en":"master point","es":"punto maestro","sw":"sehemu kuu ya usalama / master point"},{"en":"sling","es":"eslinga","sw":"ukanda wa usalama / sling"},{"en":"cordelette","es":"cordeleta","sw":"kamba ndogo ya kuunda anchor"},{"en":"equalization","es":"ecualización","sw":"usawa wa nguvu"},{"en":"redundancy","es":"redundancia","sw":"usalama wa ziada / nguvu mbili"},{"en":"extension","es":"extensión","sw":"urefu wa ziada"},{"en":"non-extending","es":"sin extensión","sw":"isiyopanuka"},{"en":"solid anchor","es":"ancla sólida","sw":"anchor imara"},{"en":"station","es":"reunión","sw":"kituo cha anchor"},{"en":"SERENE","es":"SERENE","sw":"SERENE (kanuni za anchor)"}],
        samplePhrase: {"en":"Build your anchor with redundancy — two pieces of gear minimum for the master point.","es":"Construye tu ancla con redundancia — dos piezas de equipo como mínimo para el punto maestro.","sw":"Jenga anchor yako na usalama wa ziada — vifaa viwili angalau kwa master point."},
      },
    ],
  },
  {
    id: "safety",
    emoji: "🧗",
    title: "Safety Commands",
    tagline: "Belay communication, safety checks, and emergency calls — the words that keep your partner safe.",
    color: "#4CAF7D",
    lessons: [
      {
        id: "safety-1", lessonNumber: 1, title: "The BARK Safety Check",
        scenario: "Two climbers at the base of a route are completing the BARK pre-climb safety check before starting.",
        vocab: [{"en":"buckle","es":"hebilla","sw":"bako / kitufe cha kufunga"},{"en":"anchor","es":"anclaje","sw":"sehemu ya kufunga kamba / anchor"},{"en":"rope path","es":"trayecto de la cuerda","sw":"njia ya kamba"},{"en":"knot","es":"nudo","sw":"fundo"},{"en":"figure-eight","es":"ocho de guía","sw":"fundo la nane"},{"en":"rethread","es":"rethreading / volver a pasar","sw":"pita kamba tena"},{"en":"stopper knot","es":"nudo de seguridad","sw":"fundo la kuzuia"},{"en":"pre-climb check","es":"revisión previa a la escalada","sw":"ukaguzi wa kabla ya kupanda"},{"en":"partner check","es":"revisión del compañero","sw":"kukaguliwa na mwenzako"},{"en":"safety system","es":"sistema de seguridad","sw":"mfumo wa usalama"}],
        samplePhrase: {"en":"Complete the BARK check every time — buckle, anchor, rope, knot.","es":"Completa el chequeo BARK siempre — hebilla, anclaje, cuerda, nudo.","sw":"Fanya ukaguzi wa BARK kila wakati — bako, anchor, kamba, fundo."},
      },
      {
        id: "safety-2", lessonNumber: 2, title: "Climbing Calls & Responses",
        scenario: "A climber and belayer practice the standard command sequence at the base of a route.",
        vocab: [{"en":"On belay?","es":"¿Listo para asegurar?","sw":"Uko tayari kusimamia kamba?"},{"en":"Belay on","es":"Asegurado","sw":"Niko tayari / Kamba imesimamishwa"},{"en":"Climbing!","es":"¡Escalando!","sw":"Ninapanda! / Naanza kupanda!"},{"en":"Climb on","es":"¡Sube! / ¡Adelante!","sw":"Panda! / Endelea!"},{"en":"Take!","es":"¡Coge! / ¡Ténme!","sw":"Shika! / Nishike!"},{"en":"Off belay","es":"Desasegurado","sw":"Kamba imeachiwa / Siyo kwenye usalama"},{"en":"Belay off","es":"Fuera de aseguramiento","sw":"Simama kusimamia / Acha kusimamia"},{"en":"That's me","es":"Soy yo","sw":"Ni mimi / Namaanisha mimi"},{"en":"Slack","es":"¡Da cuerda!","sw":"Legeza kamba!"},{"en":"Up rope","es":"Tira cuerda","sw":"Vuta kamba / Chukua kamba zaidi"}],
        samplePhrase: {"en":"Always wait for your partner to say 'Belay on' before you start climbing.","es":"Siempre espera que tu compañero diga 'Asegurado' antes de empezar a escalar.","sw":"Daima subiri mwenzako kusema 'Niko tayari' kabla ya kuanza kupanda."},
      },
      {
        id: "safety-3", lessonNumber: 3, title: "Falling Protocol",
        scenario: "An instructor teaches beginners how to fall safely and communicate during a fall.",
        vocab: [{"en":"safe fall","es":"caída segura","sw":"kuanguka salama"},{"en":"tuck chin","es":"meter la barbilla","sw":"inamisha kichwa / weka kidevu kifuani"},{"en":"feet out","es":"pies hacia fuera","sw":"miguu mbele / weka miguu mbele"},{"en":"relax","es":"relajarse","sw":"pumzika / legea"},{"en":"do not grab rope","es":"no agarres la cuerda","sw":"usishike kamba kwa mikono"},{"en":"pendulum","es":"péndulo / balanceo","sw":"kuteleza pembeni / swing"},{"en":"swing out","es":"columpiarse","sw":"teleza mbali na ukuta"},{"en":"whipper","es":"caída larga / whipper","sw":"kuanguka mbali / kuanguka kwa nguvu"},{"en":"fall distance","es":"distancia de caída","sw":"umbali wa kuanguka"},{"en":"clip high","es":"clipar alto","sw":"shika bolt ya juu kabla ya kupanda zaidi"}],
        samplePhrase: {"en":"Stay relaxed in a fall — tense muscles cause more injuries than the impact itself.","es":"Mantente relajado en una caída — los músculos tensos causan más lesiones que el impacto.","sw":"Kaa laini unapoanguka — misuli iliyosimama inasababisha majeraha zaidi kuliko mgongano wenyewe."},
      },
      {
        id: "safety-4", lessonNumber: 4, title: "Emergency Calls at the Crag",
        scenario: "Climbers practice urgent communication for rockfall, injury, and calling for help at an outdoor cliff.",
        vocab: [{"en":"Rock!","es":"¡Piedra!","sw":"Jiwe! / Mawe yanakuja!"},{"en":"Cover your head","es":"Cubre la cabeza","sw":"Funika kichwa chako"},{"en":"Don't move","es":"No te muevas","sw":"Usisogee / Kaa kimya"},{"en":"Are you okay?","es":"¿Estás bien?","sw":"Uko sawa? / Hujaumia?"},{"en":"Call for help","es":"Pide ayuda","sw":"Omba msaada / Piga simu msaada"},{"en":"emergency services","es":"servicios de emergencia","sw":"huduma za dharura"},{"en":"location","es":"ubicación","sw":"mahali / eneo"},{"en":"injury","es":"lesión","sw":"jeraha / kuumia"},{"en":"lower to the ground","es":"bajar al suelo","sw":"teremsha chini"},{"en":"rescue","es":"rescate","sw":"uokoaji / kuokoa"}],
        samplePhrase: {"en":"If you hear 'Rock!' flatten against the wall and cover your head — never look up.","es":"Si escuchas '¡Piedra!' pégate a la pared y cubre la cabeza — nunca mires arriba.","sw":"Ukisikia 'Jiwe!' bonyeza mwili ukutani na funika kichwa — usitazame juu kamwe."},
      },
      {
        id: "safety-5", lessonNumber: 5, title: "Multi-Pitch Communication",
        scenario: "A guide teaches distance communication techniques for multi-pitch routes where voice commands may not be audible.",
        vocab: [{"en":"rope signal","es":"señal de cuerda","sw":"ishara ya kamba"},{"en":"out of earshot","es":"fuera del alcance del oído","sw":"mbali mno kusikika"},{"en":"pull rope twice","es":"jalar la cuerda dos veces","sw":"vuta kamba mara mbili"},{"en":"rope tugs","es":"jalones de cuerda","sw":"mivuto ya kamba"},{"en":"visual signal","es":"señal visual","sw":"ishara ya kuonekana"},{"en":"whistle signal","es":"señal de silbato","sw":"ishara ya filimbi"},{"en":"confirm","es":"confirmar","sw":"thibitisha"},{"en":"pitch complete","es":"largo terminado","sw":"sehemu imekamilika"},{"en":"rope fixed","es":"cuerda fija","sw":"kamba imefungwa"},{"en":"next pitch","es":"siguiente largo","sw":"sehemu inayofuata"}],
        samplePhrase: {"en":"Three rope tugs means 'off belay' when you can't hear each other on a multi-pitch.","es":"Tres jalones de cuerda significa 'desasegurado' cuando no pueden escucharse en un multilarguero.","sw":"Mivuto mitatu ya kamba inamaanisha 'kamba imeachiwa' unapoweza kusikia mwenzako kwenye multi-pitch."},
      },
      {
        id: "safety-6", lessonNumber: 6, title: "Rappel Safety",
        scenario: "An instructor walks students through the steps of setting up and executing a safe rappel.",
        vocab: [{"en":"rappel","es":"rápel","sw":"kushuka kwa kamba / rapel"},{"en":"rappel device","es":"dispositivo de rápel","sw":"kifaa cha kushuka"},{"en":"fireman's belay","es":"seguridad del bombero","sw":"usalama wa kushuka / msaada wa chini"},{"en":"prussik backup","es":"prusik de seguridad","sw":"msaada wa Prussik / fundo la usalama"},{"en":"backup knot","es":"nudo de seguridad","sw":"fundo la nyuma la kusalimisha"},{"en":"weight the rope","es":"cargar el descenso","sw":"beba uzito kwenye kamba"},{"en":"check anchor","es":"revisar el anclaje","sw":"angalia anchor kabla ya kushuka"},{"en":"dress the knot","es":"ordenar el nudo","sw":"rekebisha fundo vizuri"},{"en":"pull rope test","es":"prueba de tirón","sw":"jaribu kuvuta kamba"},{"en":"clear of edge","es":"alejado del borde","sw":"mbali na ukingo / nje ya hatari ya ukingo"}],
        samplePhrase: {"en":"Always use a backup prussik when rappelling — it stops your descent if you lose control.","es":"Siempre usa un prusik de seguridad al hacer rápel — detiene el descenso si pierdes el control.","sw":"Daima tumia Prussik ya usalama unaposhuka — inasimamisha kushuka kwako ukipoteza udhibiti."},
      },
      {
        id: "safety-7", lessonNumber: 7, title: "Weather & Go / No-Go",
        scenario: "A guide is walking a group through the decision to climb or bail based on incoming weather.",
        vocab: [{"en":"incoming storm","es":"tormenta entrante","sw":"dhoruba inayokuja"},{"en":"lightning risk","es":"riesgo de rayo","sw":"hatari ya umeme / hatari ya radi"},{"en":"wet rock","es":"roca mojada","sw":"mwamba wenye unyevu"},{"en":"turn around","es":"dar la vuelta / retirarse","sw":"rudi / geuka"},{"en":"safety margin","es":"margen de seguridad","sw":"nafasi ya usalama"},{"en":"exposed ridge","es":"cresta expuesta","sw":"kilima wazi / ukingo ulio wazi"},{"en":"abort climb","es":"abandonar la escalada","sw":"acha kupanda / sitisha kupanda"},{"en":"storm window","es":"ventana meteorológica","sw":"nafasi ya hewa nzuri"},{"en":"visibility","es":"visibilidad","sw":"uwezo wa kuona / mwanga wa kuona"},{"en":"weather window","es":"ventana de buen tiempo","sw":"kipindi cha hewa nzuri"}],
        samplePhrase: {"en":"If you see lightning within 10 miles, descend immediately — no summit is worth the risk.","es":"Si ves relámpagos a menos de 16 kilómetros, baja de inmediato — ninguna cima vale el riesgo.","sw":"Ukiona umeme ndani ya maili 10, shuka mara moja — kilima hakistahili hatari hiyo."},
      },
      {
        id: "safety-8", lessonNumber: 8, title: "Gym Floor Safety Rules",
        scenario: "A gym staff member is explaining safety rules to a first-time visitor at the member desk.",
        vocab: [{"en":"spotting zone","es":"zona de observación","sw":"eneo la kusimamia"},{"en":"fall zone","es":"zona de caída","sw":"eneo la kuangukia"},{"en":"no standing under","es":"no pararse debajo","sw":"usisimame chini ya mtu anayepanda"},{"en":"belay test","es":"prueba de aseguramiento","sw":"mtihani wa kusimamia kamba"},{"en":"auto-belay clip","es":"clip del auto-belay","sw":"shika auto-belay vizuri"},{"en":"check in","es":"registrarse","sw":"jiandikishe / tia sahihi"},{"en":"close-toed shoes","es":"zapatos cerrados","sw":"viatu vilivyofungwa kidole"},{"en":"waiver signed","es":"exención firmada","sw":"fomu ya kuacha haki imesainiwa"},{"en":"no phones on wall","es":"sin teléfono en la pared","sw":"simu hairuhusiwi ukutani"},{"en":"off the wall","es":"fuera de la pared","sw":"shuka ukutani"}],
        samplePhrase: {"en":"Never stand under a climber — always give them clear fall zone space.","es":"Nunca te pares debajo de un escalador — dale siempre espacio libre en la zona de caída.","sw":"Usisimame chini ya mpandaji — daima mpe nafasi ya wazi ya kuangukia."},
      },
    ],
  },
  {
    id: "routes",
    emoji: "🗺️",
    title: "Route Reading & Grades",
    tagline: "Describe sequences, explain grades, and communicate crux moves across languages.",
    color: "#4CAF7D",
    lessons: [
      {
        id: "routes-1", lessonNumber: 1, title: "Yosemite Decimal System",
        scenario: "A guide is explaining the YDS grading scale to a group preparing for their first outdoor route.",
        vocab: [{"en":"5.10","es":"5.10","sw":"gredi 5.10 / kiwango 5.10"},{"en":"5.11","es":"5.11","sw":"gredi 5.11"},{"en":"grade","es":"grado","sw":"gredi / kiwango"},{"en":"letter sub-grade","es":"subdivisión de letra","sw":"kiwango cha herufi"},{"en":"beginner route","es":"ruta para principiantes","sw":"njia ya wanaoanza"},{"en":"intermediate","es":"nivel intermedio","sw":"kiwango cha kati"},{"en":"advanced","es":"avanzado","sw":"ngumu / juu ya wastani"},{"en":"sandbag","es":"sandbag / ruta más difícil de lo indicado","sw":"gredi ya kudanganya / njia ngumu kuliko ilivyoandikwa"},{"en":"soft grade","es":"grado suave / fácil para su categoría","sw":"gredi laini / rahisi kuliko ilivyo"},{"en":"quality stars","es":"estrellas de calidad","sw":"nyota za ubora / alama za ubora"}],
        samplePhrase: {"en":"A 5.10a is the easiest of the 5.10 range — start there before trying the harder sub-grades.","es":"Un 5.10a es el más fácil del rango 5.10 — empieza ahí antes de intentar los subgrados más difíciles.","sw":"Gredi 5.10a ni rahisi zaidi katika kiwango 5.10 — anza hapo kabla ya kujaribu viwango vigumu zaidi."},
      },
      {
        id: "routes-2", lessonNumber: 2, title: "Reading a Route from Below",
        scenario: "A climber studies a route from the ground with their partner, planning the sequence before starting.",
        vocab: [{"en":"sequence","es":"secuencia","sw":"mfululizo / mpangilio wa hatua"},{"en":"rest spot","es":"punto de descanso","sw":"nafasi ya kupumzika"},{"en":"crux","es":"el crux","sw":"sehemu ngumu zaidi / crux"},{"en":"juggy section","es":"sección de jarros","sw":"sehemu ya vipande vikubwa vya kushikilia"},{"en":"pumpy","es":"bombeante / que cansa los brazos","sw":"inayochoshesha mikono"},{"en":"technical section","es":"sección técnica","sw":"sehemu ya kiteknolojia"},{"en":"line","es":"línea","sw":"mstari wa njia"},{"en":"start hold","es":"presa de inicio","sw":"kipande cha kushikilia cha kuanzia"},{"en":"top-out","es":"superar la cima","sw":"kufikia juu ya njia"},{"en":"beta spray","es":"dar beta sin pedir","sw":"kutoa maelekezo bila kuulizwa"}],
        samplePhrase: {"en":"Read the whole line from the ground before you start — plan your rest spots.","es":"Lee toda la línea desde el suelo antes de empezar — planifica tus puntos de descanso.","sw":"Soma njia nzima kutoka chini kabla ya kuanza — panga nafasi zako za kupumzika."},
      },
      {
        id: "routes-3", lessonNumber: 3, title: "Hold Types",
        scenario: "An indoor gym instructor identifies hold types on the wall to help students understand movement vocabulary.",
        vocab: [{"en":"jug","es":"jarro / maceta","sw":"kipande kikubwa rahisi cha kushikilia / jug"},{"en":"crimp","es":"presa de dedos","sw":"kushikilia kwa vidole / crimp"},{"en":"sloper","es":"rozón / sloper","sw":"kipande cha mviringo / sloper"},{"en":"pinch","es":"pellizco","sw":"kubana / pinch"},{"en":"pocket","es":"cavidad / agujero","sw":"shimo la kushikilia / pocket"},{"en":"sidepull","es":"lata lateral","sw":"kushikilia kwa upande / sidepull"},{"en":"undercling","es":"lata inferior","sw":"kushikilia chini / undercling"},{"en":"gaston","es":"gaston / empuje lateral","sw":"kushikilia kwa kueneza / gaston"},{"en":"mono","es":"mono / agujero de un dedo","sw":"shimo la kidole kimoja / mono"},{"en":"volume","es":"volumen","sw":"kipande kikubwa cha rangi / volume"}],
        samplePhrase: {"en":"Match your feet to the hold type — slap jugs, stand on your toe for crimps.","es":"Adapta tu técnica de pies al tipo de presa — palma los jarros, usa la punta del pie en los crimps.","sw":"Badilisha mbinu ya miguu kulingana na aina ya hold — tumia nyayo zote kwa jugs, tumia ncha kwa crimps."},
      },
      {
        id: "routes-4", lessonNumber: 4, title: "Movement Techniques",
        scenario: "A coach is narrating and demonstrating footwork and body positioning techniques on an indoor wall.",
        vocab: [{"en":"flagging","es":"flagging / bandera","sw":"uwekaji wa mguu pembeni / flagging"},{"en":"drop knee","es":"rodilla caída / drop knee","sw":"goti lililoshushwa / drop knee"},{"en":"hip rotation","es":"rotación de cadera","sw":"kuzungusha kiuno"},{"en":"high step","es":"paso alto","sw":"hatua ya mguu wa juu"},{"en":"lock off","es":"bloquear / lock-off","sw":"kuzuia mkono kwenye hold / lock off"},{"en":"deadpoint","es":"deadpoint","sw":"hatua ya apogee / deadpoint"},{"en":"momentum","es":"impulso / momentum","sw":"nguvu ya harakati / mwelekeo wa nguvu"},{"en":"body tension","es":"tensión corporal","sw":"msongo wa mwili"},{"en":"back step","es":"backstep / rotación exterior","sw":"hatua ya mguu wa nyuma / backstep"},{"en":"bicycle","es":"bicycle / bicicleta","sw":"mbinu ya baiskeli kwa miguu / bicycle"}],
        samplePhrase: {"en":"Drop your knee to open your hip and get closer to the wall on steep terrain.","es":"Baja la rodilla para abrir la cadera y acercarte a la pared en terreno pronunciado.","sw":"Shushia goti lako ili kufungua kiuno chako na kukaribia ukuta kwenye sehemu kali."},
      },
      {
        id: "routes-5", lessonNumber: 5, title: "Font Grades & Bouldering Scales",
        scenario: "A competition coach explains the Font and V-scale systems to a junior team preparing for their first comp.",
        vocab: [{"en":"Font scale","es":"escala Fontainebleau","sw":"kiwango cha Fontainebleau"},{"en":"V-scale","es":"escala V / Hueco scale","sw":"kiwango cha V"},{"en":"V0","es":"V0","sw":"V0 / gredi rahisi kabisa"},{"en":"V8","es":"V8","sw":"V8 / gredi ngumu"},{"en":"project grade","es":"grado de proyecto","sw":"gredi ya mradi"},{"en":"red point","es":"redpoint","sw":"kukamilisha njia vizuri / redpoint"},{"en":"flash","es":"flash","sw":"kukamilisha mara ya kwanza / flash"},{"en":"onsight","es":"a vista","sw":"kupanda bila kuona mtu mwingine / onsight"},{"en":"max grade","es":"grado máximo","sw":"gredi ya juu kabisa"},{"en":"benchmark problem","es":"problema de referencia","sw":"tatizo la kupima kiwango chako"}],
        samplePhrase: {"en":"The V-scale goes from V0 to V17 — most gym climbers work between V2 and V6.","es":"La escala V va de V0 a V17 — la mayoría de escaladores de gimnasio trabajan entre V2 y V6.","sw":"Kiwango cha V kinaenda kutoka V0 hadi V17 — wanapandaji wengi wa gym wanafanya kazi kati ya V2 na V6."},
      },
      {
        id: "routes-6", lessonNumber: 6, title: "Giving and Receiving Beta",
        scenario: "Two climbers at an outdoor crag are exchanging route beta — one has done the route, one is about to try it.",
        vocab: [{"en":"beta","es":"beta / información de la ruta","sw":"maelekezo ya njia / beta"},{"en":"sequence beta","es":"beta de secuencia","sw":"maelekezo ya mpangilio wa hatua"},{"en":"key move","es":"movimiento clave","sw":"hatua muhimu"},{"en":"foot beta","es":"beta de pies","sw":"maelekezo ya miguu"},{"en":"rest beta","es":"beta del reposo","sw":"maelekezo ya kupumzika"},{"en":"soft beta","es":"beta suave / pistas","sw":"maelekezo mazuri / beta laini"},{"en":"spoil the send","es":"arruinar el envío","sw":"haribu kukamilisha njia"},{"en":"figure it out","es":"descúbrelo tú mismo","sw":"jigundule mwenyewe"},{"en":"match the hold","es":"igualar la presa","sw":"weka mikono yote miwili kwenye hold moja"},{"en":"kneebar","es":"rodillera / kneebar","sw":"kutumia goti kama nguzo / kneebar"}],
        samplePhrase: {"en":"Ask before giving beta — some climbers prefer to figure out the sequence themselves.","es":"Pregunta antes de dar beta — algunos escaladores prefieren descubrir la secuencia solos.","sw":"Uliza kabla ya kutoa beta — baadhi ya wanapandaji wanajipenda kugundua mpangilio wenyewe."},
      },
      {
        id: "routes-7", lessonNumber: 7, title: "Projecting a Route",
        scenario: "A coach helps a climber break down and systematically work a difficult project route over multiple sessions.",
        vocab: [{"en":"project","es":"proyecto","sw":"mradi / njia inayofanyiwa kazi"},{"en":"link","es":"enlazar","sw":"unganisha sehemu za njia"},{"en":"hang dog","es":"colgar del equipo","sw":"pumzika ukishikilia gear"},{"en":"working moves","es":"trabajar movimientos","sw":"fanya mazoezi ya hatua ngumu"},{"en":"top section","es":"sección superior","sw":"sehemu ya juu ya njia"},{"en":"bottom section","es":"sección inferior","sw":"sehemu ya chini ya njia"},{"en":"burn","es":"intento","sw":"jaribio moja / kujaribu mara moja"},{"en":"rest day","es":"día de descanso","sw":"siku ya kupumzika"},{"en":"conditions","es":"condiciones","sw":"hali ya mwamba na hewa"},{"en":"send","es":"envío / conseguir la ruta","sw":"kukamilisha njia / send"}],
        samplePhrase: {"en":"Work the crux separately first — don't burn yourself out trying the full route every attempt.","es":"Trabaja el crux por separado primero — no te agotes intentando la ruta completa en cada intento.","sw":"Fanya mazoezi ya crux peke yake kwanza — usijichoshesha kwa kujaribu njia nzima kila wakati."},
      },
      {
        id: "routes-8", lessonNumber: 8, title: "Trad Gear Placements",
        scenario: "An instructor teaches a student to place and assess traditional gear in a crack.",
        vocab: [{"en":"crack system","es":"sistema de fisuras","sw":"mfumo wa mpasuko"},{"en":"placement","es":"colocación","sw":"kuweka gear kwenye mpasuko"},{"en":"bomber","es":"perfecto / sólido","sw":"salama kabisa / imara sana"},{"en":"sketchy","es":"dudoso / inestable","sw":"isiyo salama / ya kutia shaka"},{"en":"walk cam","es":"moverse el friend","sw":"cam inayotembea / cam isiyokaa imara"},{"en":"opposition","es":"oposición","sw":"nguvu zinazopingana"},{"en":"nut key","es":"llave de dados","sw":"ufunguo wa kuondoa gear"},{"en":"clean gear","es":"retirar el equipo","sw":"ondoa gear"},{"en":"pro","es":"protección","sw":"ulinzi / gear ya kulinda"},{"en":"solid protection","es":"protección sólida","sw":"ulinzi imara"}],
        samplePhrase: {"en":"Test every piece of gear with a sharp downward tug before you commit your weight to it.","es":"Prueba cada pieza de equipo con un jalón brusco hacia abajo antes de cargar tu peso.","sw":"Jaribu kila kipande cha gear kwa mvuto mkali chini kabla ya kubeba uzito wako juu yake."},
      },
    ],
  },
  {
    id: "gym",
    emoji: "🏟️",
    title: "Climbing Gym Staff",
    tagline: "Orientation, belay certification, safety briefings, and member communication.",
    color: "#4CAF7D",
    lessons: [
      {
        id: "gym-1", lessonNumber: 1, title: "New Member Orientation",
        scenario: "A gym staff member is walking a first-time visitor through the facility and explaining the rules.",
        vocab: [{"en":"welcome","es":"bienvenida","sw":"karibu"},{"en":"membership","es":"membresía","sw":"uanachama"},{"en":"day pass","es":"pase de día","sw":"tiketi ya siku moja"},{"en":"waiver","es":"exención de responsabilidad","sw":"fomu ya kuacha haki"},{"en":"shoe rental","es":"alquiler de zapatos","sw":"kukodisha viatu"},{"en":"bouldering area","es":"zona de boulder","sw":"eneo la bouldering"},{"en":"top rope area","es":"zona de top rope","sw":"eneo la top rope"},{"en":"lead wall","es":"pared de dificultad","sw":"ukuta wa kupanda kwa mbele"},{"en":"staff on duty","es":"personal de guardia","sw":"wafanyakazi waliopo"},{"en":"emergency exit","es":"salida de emergencia","sw":"mlango wa kutoka dharura"}],
        samplePhrase: {"en":"Sign the waiver at the front desk and we'll get you started with a quick orientation.","es":"Firma la exención en la recepción y te daremos una orientación rápida.","sw":"Tia sahihi fomu ya kuacha haki kwenye kaunta na tutakupa maelezo ya haraka ya mwanzo."},
      },
      {
        id: "gym-2", lessonNumber: 2, title: "Belay Certification Test",
        scenario: "A staff member conducts a belay certification test with a new member, observing each step.",
        vocab: [{"en":"belay test","es":"prueba de aseguramiento","sw":"mtihani wa kusimamia kamba"},{"en":"certified","es":"certificado","sw":"amehitimu / amepita mtihani"},{"en":"pass","es":"aprobar","sw":"pita mtihani"},{"en":"fail","es":"reprobar","sw":"shindwa / kupoteza mtihani"},{"en":"re-test","es":"volver a examinar","sw":"fanya mtihani tena"},{"en":"brake hand below","es":"mano de freno abajo","sw":"mkono wa kuzuia uko chini"},{"en":"PBUS technique","es":"técnica PBUS","sw":"mbinu ya PBUS ya kusimamia"},{"en":"catch the fall","es":"retener la caída","sw":"zuia kuanguka"},{"en":"lower","es":"bajar al escalador","sw":"teremsha mpandaji"},{"en":"observation","es":"observación","sw":"uchunguzi / kufuatilia"}],
        samplePhrase: {"en":"Keep your brake hand below the device at all times during the belay test.","es":"Mantén la mano de freno por debajo del dispositivo en todo momento durante la prueba.","sw":"Weka mkono wa kuzuia chini ya kifaa daima wakati wa mtihani wa kusimamia kamba."},
      },
      {
        id: "gym-3", lessonNumber: 3, title: "Route Setting Vocabulary",
        scenario: "A head routesetter briefs the setting crew on the new board configuration and hold replacement schedule.",
        vocab: [{"en":"route setter","es":"trazador de rutas","sw":"mwenye kuweka njia"},{"en":"setting hold","es":"colocar una presa","sw":"weka hold kwenye ukuta"},{"en":"strip","es":"desmontar","sw":"ondoa holds / futa holds"},{"en":"reset","es":"reiniciar las rutas","sw":"weka njia upya"},{"en":"feet only","es":"solo pies","sw":"miguu tu / panda kwa miguu tu"},{"en":"circuit","es":"circuito","sw":"mzunguko wa njia"},{"en":"color code","es":"código de color","sw":"rangi ya njia / alama ya rangi"},{"en":"tape mark","es":"marca de cinta","sw":"alama ya tepe"},{"en":"start holds","es":"presas de inicio","sw":"vipande vya kuanzia"},{"en":"top hold","es":"presa de meta","sw":"kipande cha mwisho / top"}],
        samplePhrase: {"en":"The orange circuit is for beginners — all holds are taped at the same height.","es":"El circuito naranja es para principiantes — todas las presas están marcadas a la misma altura.","sw":"Mzunguko wa machungwa ni kwa wanaoanza — holds zote zimewekwa alama kwa urefu sawa."},
      },
      {
        id: "gym-4", lessonNumber: 4, title: "Injury & Incident Response",
        scenario: "A gym staff member responds to a minor fall injury on the bouldering floor.",
        vocab: [{"en":"incident report","es":"reporte de incidente","sw":"ripoti ya tukio"},{"en":"first aid kit","es":"botiquín de primeros auxilios","sw":"begi la dawa ya kwanza"},{"en":"ice pack","es":"bolsa de hielo","sw":"mfuko wa barafu"},{"en":"call 911","es":"llamar al 911","sw":"piga simu ya 911 / piga simu ya dharura"},{"en":"sprained wrist","es":"muñeca torcida","sw":"kono lililokunjwa / kifundo cha mkono kilichoumia"},{"en":"pulley injury","es":"lesión de polea","sw":"jeraha la tendon ya kidole"},{"en":"rest and ice","es":"descanso y hielo","sw":"pumzika na tia barafu"},{"en":"do not climb","es":"no escales","sw":"usipande / acha kupanda"},{"en":"see a doctor","es":"ve al médico","sw":"tembelea daktari"},{"en":"witness statement","es":"declaración del testigo","sw":"taarifa ya shahidi"}],
        samplePhrase: {"en":"Fill out an incident report immediately after any injury — even minor ones.","es":"Llena un reporte de incidente inmediatamente después de cualquier lesión — incluso las menores.","sw":"Jaza ripoti ya tukio mara moja baada ya jeraha lolote — hata ndogo."},
      },
      {
        id: "gym-5", lessonNumber: 5, title: "Youth Program Communication",
        scenario: "A youth coach briefs parents and young climbers on the gym program structure and safety rules.",
        vocab: [{"en":"youth team","es":"equipo juvenil","sw":"timu ya vijana"},{"en":"coach","es":"entrenador / coach","sw":"kocha / mwalimu wa michezo"},{"en":"parent","es":"padre / madre","sw":"mzazi"},{"en":"guardian","es":"tutor / apoderado","sw":"mlezi"},{"en":"permission slip","es":"permiso firmado","sw":"barua ya ruhusa"},{"en":"drop-off","es":"dejar a los niños","sw":"wacha watoto / wasilishe watoto"},{"en":"pick-up","es":"recoger a los niños","sw":"chukua watoto"},{"en":"youth discount","es":"descuento juvenil","sw":"punguzo la bei kwa vijana"},{"en":"skill level","es":"nivel de habilidad","sw":"kiwango cha ujuzi"},{"en":"age requirement","es":"requisito de edad","sw":"umri unaohitajika"}],
        samplePhrase: {"en":"Youth climbers must have a signed permission slip on file before joining any program.","es":"Los escaladores jóvenes deben tener un permiso firmado archivado antes de unirse a cualquier programa.","sw":"Wanapandaji vijana lazima wawe na barua ya ruhusa iliyosainiwa kabla ya kujiunga na programu yoyote."},
      },
      {
        id: "gym-6", lessonNumber: 6, title: "Auto-Belay Safety",
        scenario: "Staff demonstrate auto-belay use and walk members through the clipping and unclipping protocol.",
        vocab: [{"en":"auto-belay","es":"asegurador automático","sw":"kifaa cha kujisimamia / auto-belay"},{"en":"clip in","es":"enganchar","sw":"shika / unganisha kwenye auto-belay"},{"en":"tug test","es":"prueba de jalón","sw":"jaribu kuvuta ili kuthibitisha"},{"en":"retracting cable","es":"cable retráctil","sw":"kamba inayorudi yenyewe"},{"en":"unclip only at bottom","es":"desenganchar solo abajo","sw":"kata unganisho tu chini"},{"en":"no hanging","es":"prohibido colgarse","sw":"kuruka haramu / usifanye swing"},{"en":"double check","es":"revisar dos veces","sw":"angalia mara mbili"},{"en":"malfunction","es":"fallo / avería","sw":"hitilafu / kutofanya kazi"},{"en":"report issue","es":"reportar el problema","sw":"ripoti tatizo"},{"en":"safety sticker","es":"etiqueta de seguridad","sw":"stika ya usalama / lebo ya usalama"}],
        samplePhrase: {"en":"Always give the auto-belay a firm tug before you climb to confirm it's loaded properly.","es":"Siempre dale un jalón firme al auto-belay antes de escalar para confirmar que está cargado correctamente.","sw":"Daima vuta auto-belay kwa nguvu kabla ya kupanda kuthibitisha imewekwa vizuri."},
      },
      {
        id: "gym-7", lessonNumber: 7, title: "Competition Day Management",
        scenario: "Staff coordinate the flow of a local climbing competition — check-in, isolation, judging, and results.",
        vocab: [{"en":"isolation zone","es":"zona de aislamiento","sw":"eneo la kutengwa / eneo la isolation"},{"en":"check-in","es":"registro","sw":"jiandikishe / tia jina"},{"en":"competitor","es":"competidor","sw":"mshindani"},{"en":"judge","es":"juez","sw":"hakimu / jaji"},{"en":"attempt","es":"intento","sw":"jaribio"},{"en":"score card","es":"hoja de puntuación","sw":"kadi ya alama"},{"en":"flash bonus","es":"bono de flash","sw":"bonasi ya flash / zawadi ya mara ya kwanza"},{"en":"podium","es":"podio","sw":"jukwaa la zawadi"},{"en":"category","es":"categoría","sw":"kundi / mkundi"},{"en":"results","es":"resultados","sw":"matokeo"}],
        samplePhrase: {"en":"Competitors must stay in isolation until their category is called to the wall.","es":"Los competidores deben permanecer en aislamiento hasta que su categoría sea llamada a la pared.","sw":"Washindani lazima wakae katika eneo la kutengwa hadi kundi lao litakapotangazwa kwenda ukutani."},
      },
      {
        id: "gym-8", lessonNumber: 8, title: "Membership & Billing",
        scenario: "A front desk staff member explains membership options, payment, and the cancellation policy.",
        vocab: [{"en":"monthly membership","es":"membresía mensual","sw":"uanachama wa kila mwezi"},{"en":"annual plan","es":"plan anual","sw":"mpango wa mwaka"},{"en":"day pass","es":"pase de día","sw":"tiketi ya siku moja"},{"en":"family plan","es":"plan familiar","sw":"mpango wa familia"},{"en":"student discount","es":"descuento estudiantil","sw":"punguzo la bei kwa wanafunzi"},{"en":"cancellation","es":"cancelación","sw":"kufuta uanachama"},{"en":"freeze","es":"congelar la membresía","sw":"kusimamisha uanachama kwa muda"},{"en":"billing cycle","es":"ciclo de facturación","sw":"mzunguko wa malipo"},{"en":"auto-renew","es":"renovación automática","sw":"kuhuishwa moja kwa moja"},{"en":"receipt","es":"recibo","sw":"risiti / hati ya malipo"}],
        samplePhrase: {"en":"You can freeze your membership for up to three months without canceling — just ask at the desk.","es":"Puedes congelar tu membresía hasta tres meses sin cancelarla — solo pregunta en recepción.","sw":"Unaweza kusimamisha uanachama wako hadi miezi mitatu bila kufuta — uliza tu kwenye kaunta."},
      },
    ],
  },
  {
    id: "outdoor",
    emoji: "⚡",
    title: "Outdoor Sport Climbing",
    tagline: "Clip bolts, read runout, communicate sends and falls at the crag.",
    color: "#4CAF7D",
    lessons: [
      {
        id: "outdoor-1", lessonNumber: 1, title: "Crag Etiquette",
        scenario: "Climbers arrive at a popular crag and navigate sharing routes with other parties.",
        vocab: [{"en":"crag","es":"peñasco / sector","sw":"mwamba wa kupanda / sehemu ya kupanda"},{"en":"queue","es":"cola / turno","sw":"foleni / mstari wa kusubiri"},{"en":"taking a lap","es":"hacer una vuelta","sw":"kufanya raundi moja"},{"en":"project","es":"proyecto","sw":"mradi"},{"en":"busy day","es":"día concurrido","sw":"siku ya watu wengi"},{"en":"share the route","es":"compartir la ruta","sw":"gawana njia na wengine"},{"en":"waiting turn","es":"esperar turno","sw":"subiri zamu yako"},{"en":"trash out","es":"llevar tu basura","sw":"toa takataka zako"},{"en":"dog on leash","es":"perro con correa","sw":"mbwa mfungwe / mbwa kwenye kamba"},{"en":"volume down","es":"bajar el volumen","sw":"punguza sauti / kelele kidogo"}],
        samplePhrase: {"en":"Ask before getting on a route someone else is projecting — crag etiquette matters.","es":"Pregunta antes de meterte en una ruta que otra persona está trabajando — el respeto en la roca importa.","sw":"Uliza kabla ya kupanda njia ambayo mtu mwingine anafanyia kazi — heshima kwenye mwamba ni muhimu."},
      },
      {
        id: "outdoor-2", lessonNumber: 2, title: "Setting Up a Toprope",
        scenario: "A guide sets up a top-rope system at the anchors for a group outing.",
        vocab: [{"en":"access the top","es":"acceder a la cima","sw":"fikia juu ya mwamba"},{"en":"rap in","es":"hacer rápel hasta el anclaje","sw":"kushuka kwa kamba hadi anchor"},{"en":"fixed anchor","es":"anclaje fijo","sw":"anchor iliyofungwa"},{"en":"bolted anchor","es":"anclaje de parabolt","sw":"anchor ya bolt"},{"en":"setup rope","es":"montar la cuerda","sw":"weka kamba"},{"en":"thread","es":"pasar la cuerda","sw":"pitisha kamba"},{"en":"lower off","es":"desplomar","sw":"shuka kwa kamba"},{"en":"top rope setup","es":"montaje de top rope","sw":"kuweka mpangilio wa top rope"},{"en":"directional","es":"pieza de dirección","sw":"kipande cha mwelekeo"},{"en":"rope drag","es":"fricción de la cuerda","sw":"mvutano wa kamba"}],
        samplePhrase: {"en":"Thread the rope through the fixed anchor rings and tie a figure-eight before lowering.","es":"Pasa la cuerda por las anillas del anclaje fijo y haz un ocho de guía antes de bajar.","sw":"Pitisha kamba kwenye pete za anchor iliyofungwa na fanya fundo la nane kabla ya kushuka."},
      },
      {
        id: "outdoor-3", lessonNumber: 3, title: "Lead Climbing Commands",
        scenario: "A lead climber and belayer are at the base of a sport route, running through lead-specific calls.",
        vocab: [{"en":"lead climbing","es":"escalada de dificultad","sw":"kupanda kwa mbele / lead climbing"},{"en":"lead fall","es":"caída de líder","sw":"kuanguka kwa mpandaji wa mbele"},{"en":"runout","es":"tramo sin protección","sw":"umbali mrefu bila bolt"},{"en":"clipping","es":"clipar","sw":"shika bolt / unganisha kamba kwenye bolt"},{"en":"clip stick","es":"clip stick","sw":"fimbo ya kushika bolt ya kwanza"},{"en":"Z-clip","es":"Z-clip","sw":"kosa la Z-clip"},{"en":"below the last bolt","es":"debajo del último bolt","sw":"chini ya bolt ya mwisho"},{"en":"long fall","es":"caída larga","sw":"kuanguka mbali"},{"en":"ground fall","es":"caída al suelo","sw":"kuanguka hadi chini"},{"en":"head point","es":"head point","sw":"kupanda baada ya kufanya mazoezi ya abseiling"}],
        samplePhrase: {"en":"Clip the bolt before you move above it — never climb more than a meter above an unclipped bolt.","es":"Clipa el bolt antes de subirte por encima — nunca escales más de un metro por encima de un bolt sin clipar.","sw":"Shika bolt kabla ya kupanda juu yake — usipande zaidi ya mita moja juu ya bolt ambayo haijashikwa."},
      },
      {
        id: "outdoor-4", lessonNumber: 4, title: "Lowering Off and Cleaning Routes",
        scenario: "A climber reaches the top anchors and must clean the route while being lowered by their belayer.",
        vocab: [{"en":"cleaning the route","es":"limpiar la ruta","sw":"ondoa gear / safisha njia"},{"en":"threading anchors","es":"pasar por las chapas","sw":"pitisha kamba kwenye anchors"},{"en":"lower off chains","es":"bajar de las chapas","sw":"shuka kutoka kwenye chains"},{"en":"cleaning draws","es":"retirar los express","sw":"ondoa quickdraws"},{"en":"pull through","es":"pasar la cuerda","sw":"vuta kamba"},{"en":"knot below anchor","es":"nudo debajo del anclaje","sw":"fundo chini ya anchor"},{"en":"check tie-in","es":"verificar el nudo","sw":"angalia fundo lako"},{"en":"communicate with belayer","es":"comunicarse con el asegurador","sw":"wasiliana na msimamizi wa kamba"},{"en":"safe to lower","es":"seguro para bajar","sw":"salama kushuka"},{"en":"gear retrieval","es":"recuperar el equipo","sw":"rejesha vifaa"}],
        samplePhrase: {"en":"Thread through both anchor rings before untying — never unclip your old knot until the new one is in.","es":"Pasa por los dos anillos del anclaje antes de desamarrar — nunca desenganchas el nudo viejo hasta que el nuevo esté hecho.","sw":"Pitisha kwenye pete zote mbili za anchor kabla ya kufungua fundo — usifungue fundo la zamani hadi jipya liwe tayari."},
      },
      {
        id: "outdoor-5", lessonNumber: 5, title: "Spotting for Bouldering",
        scenario: "A group works a highball problem at the crag while one climber spots and others manage crash pads.",
        vocab: [{"en":"spot","es":"observar / proteger","sw":"simamia / linda mpandaji"},{"en":"crash pad placement","es":"colocación del crash pad","sw":"weka crash pad mahali pabaya"},{"en":"highball","es":"boulder alto y peligroso","sw":"bouldering refu na hatari"},{"en":"spot the hips","es":"seguir las caderas","sw":"fuata kiuno cha mpandaji"},{"en":"guide the fall","es":"guiar la caída","sw":"ongoza kuanguka"},{"en":"communicate","es":"comunicar","sw":"wasiliana"},{"en":"pad gap","es":"espacio entre colchonetas","sw":"nafasi kati ya crash pads"},{"en":"roll out","es":"rodar al caer","sw":"viringana ukianguka"},{"en":"stand by","es":"estar listo","sw":"kuwa tayari"},{"en":"trust your spotter","es":"confiar en tu observador","sw":"amini msimamizi wako"}],
        samplePhrase: {"en":"Spot the hips, not the shoulders — guide the climber onto the pad, don't try to catch them.","es":"Observa las caderas, no los hombros — guía al escalador hacia la colchoneta, no intentes atraparlo.","sw":"Fuata kiuno, si mabega — ongoza mpandaji kwenda kwenye crash pad, usijaribu kumkamata."},
      },
      {
        id: "outdoor-6", lessonNumber: 6, title: "Leave No Trace",
        scenario: "A group prepares to leave the crag and reviews Leave No Trace principles for climbing areas.",
        vocab: [{"en":"pack out","es":"llevarse la basura","sw":"chukua takataka zako"},{"en":"toilet paper","es":"papel higiénico","sw":"karatasi ya choo"},{"en":"cat hole","es":"hoyo de gato","sw":"shimo la kuchimba"},{"en":"human waste","es":"desechos humanos","sw":"kinyesi cha binadamu"},{"en":"off trail","es":"fuera del sendero","sw":"nje ya njia"},{"en":"chalk marks","es":"marcas de magnesio","sw":"alama za chokaa kwenye mwamba"},{"en":"tick marks","es":"marcas de guía","sw":"alama za mwelekeo kwenye mwamba"},{"en":"brush tick marks","es":"borrar las marcas","sw":"fua alama za chokaa"},{"en":"restore site","es":"restaurar el lugar","sw":"rejesha hali ya asili ya mahali"},{"en":"access land","es":"acceso a la zona","sw":"ruhusa ya kuingia eneo la kupanda"}],
        samplePhrase: {"en":"Brush your tick marks before you leave — leave the rock as you found it.","es":"Borra tus marcas antes de irte — deja la roca como la encontraste.","sw":"Fua alama zako za chokaa kabla ya kuondoka — acha mwamba kama ulivyouona."},
      },
      {
        id: "outdoor-7", lessonNumber: 7, title: "Building a Ground Anchor",
        scenario: "A belayer sets up a ground anchor at the base of a steep route to prevent being pulled forward during a lead fall.",
        vocab: [{"en":"ground anchor","es":"anclaje de pie de vía","sw":"anchor ya chini"},{"en":"redirect","es":"redirección","sw":"kubadilisha mwelekeo"},{"en":"equalized","es":"ecualizado","sw":"usawa wa nguvu"},{"en":"bolt at the base","es":"bolt a pie de vía","sw":"bolt chini ya ukuta"},{"en":"anchor sling","es":"eslinga de anclaje","sw":"ukanda wa anchor"},{"en":"being pulled into wall","es":"ser jalado hacia la pared","sw":"kuvutwa kwenda ukutani"},{"en":"belay position","es":"posición de aseguramiento","sw":"nafasi ya kusimamia kamba"},{"en":"hip belay","es":"aseguramiento de cintura","sw":"kusimamia kamba kwa kiuno"},{"en":"load direction","es":"dirección de carga","sw":"mwelekeo wa mzigo"},{"en":"stance","es":"posición de pie","sw":"jinsi ya kusimama"}],
        samplePhrase: {"en":"Clip into the ground anchor so a hard fall doesn't yank you off your feet.","es":"Engancha al anclaje de pie de vía para que una caída fuerte no te arranque del suelo.","sw":"Unganisha kwenye anchor ya chini ili kuanguka kwa nguvu kusikusogeze mbali na nafasi yako."},
      },
      {
        id: "outdoor-8", lessonNumber: 8, title: "Descent Routes",
        scenario: "A guide briefs the group on the walk-off and rappel descent options after a successful summit or pitch.",
        vocab: [{"en":"walk off","es":"bajar caminando","sw":"shuka kwa miguu / tembea chini"},{"en":"descent route","es":"ruta de descenso","sw":"njia ya kushuka"},{"en":"rappel station","es":"punto de rápel","sw":"sehemu ya kushuka kwa kamba"},{"en":"fixed tat","es":"anclaje fijo de cuerda","sw":"kamba ya zamani iliyobaki"},{"en":"pull the rope","es":"jalar la cuerda","sw":"vuta kamba baada ya kushuka"},{"en":"stuck rope","es":"cuerda atascada","sw":"kamba iliyokwama"},{"en":"knot on end","es":"nudo en el extremo","sw":"fundo mwishoni mwa kamba"},{"en":"flake","es":"doblar la cuerda","sw":"panga kamba vizuri"},{"en":"trail","es":"sendero","sw":"njia ya miguu"},{"en":"summit","es":"cima","sw":"kilele / juu ya mwamba"}],
        samplePhrase: {"en":"Tie a knot in the end of your rope before rappelling to prevent running off the end.","es":"Haz un nudo en el extremo de la cuerda antes de hacer rápel para no llegar al final.","sw":"Fanya fundo mwishoni mwa kamba kabla ya kushuka ili usifike mwisho bila kuona."},
      },
    ],
  },
  {
    id: "training",
    emoji: "💪",
    title: "Training & Performance",
    tagline: "Hangboard, campus, core, and injury prevention — the gym vocabulary beyond climbing.",
    color: "#4CAF7D",
    lessons: [
      {
        id: "training-1", lessonNumber: 1, title: "Finger Strength Training",
        scenario: "A coach guides a student through a structured hangboard session, explaining each protocol.",
        vocab: [{"en":"hangboard","es":"hangboard / tabla de dedos","sw":"bao la mazoezi ya vidole / hangboard"},{"en":"half crimp","es":"semi-presión / medio crimp","sw":"kushikilia nusu ya crimp"},{"en":"open hand","es":"mano abierta","sw":"mkono wazi / kushikilia kwa mkono wazi"},{"en":"full crimp","es":"presión completa","sw":"kushikilia kwa nguvu zote"},{"en":"repeater","es":"serie de repeticiones","sw":"mfululizo wa mazoezi / repeater"},{"en":"hang time","es":"tiempo de colgado","sw":"muda wa kushikilia"},{"en":"rest interval","es":"intervalo de descanso","sw":"mapumziko kati ya mazoezi"},{"en":"edge depth","es":"profundidad del borde","sw":"kina cha edge"},{"en":"finger tendon","es":"tendón de dedo","sw":"tendoni ya kidole"},{"en":"pulley injury","es":"lesión de polea","sw":"jeraha la tendoni ya kidole"}],
        samplePhrase: {"en":"Train open-hand grips to strengthen tendons safely and reduce pulley injury risk.","es":"Entrena con agarres de mano abierta para fortalecer los tendones de forma segura.","sw":"Fanya mazoezi ya kushikilia kwa mkono wazi ili kuimarisha tendoni salama na kupunguza hatari ya majeraha."},
      },
      {
        id: "training-2", lessonNumber: 2, title: "Campus Board Work",
        scenario: "A coach introduces a climber to the campus board and explains basic contact strength exercises.",
        vocab: [{"en":"campus board","es":"campus board","sw":"bao la mazoezi ya nguvu / campus board"},{"en":"rung","es":"escalón","sw":"hatua ya campus board"},{"en":"1-3-5 ladder","es":"escala 1-3-5","sw":"ngazi ya 1-3-5"},{"en":"deadhang from top","es":"colgarse del rung superior","sw":"shikilia kutoka juu"},{"en":"contact strength","es":"fuerza de contacto","sw":"nguvu ya mara moja ya kushikilia"},{"en":"explosive movement","es":"movimiento explosivo","sw":"harakati ya haraka na nguvu"},{"en":"campus move","es":"movimiento de campus","sw":"hatua ya campus board"},{"en":"matching rungs","es":"igualar los escalones","sw":"weka mikono miwili kwenye hatua moja"},{"en":"lock off","es":"bloqueo","sw":"kuzuia mkono kwenye hold"},{"en":"core engagement","es":"activar el core","sw":"amilisha misuli ya msingi"}],
        samplePhrase: {"en":"Campus board training is advanced — only add it after 2 years of regular climbing.","es":"El entrenamiento en el campus board es avanzado — agréguelo solo después de 2 años de escalada regular.","sw":"Mazoezi ya campus board ni ya juu — yaacha baada ya miaka 2 ya kupanda kwa kawaida."},
      },
      {
        id: "training-3", lessonNumber: 3, title: "Core & Antagonist Training",
        scenario: "A coach prescribes a core and antagonist workout to complement climbing training and prevent imbalances.",
        vocab: [{"en":"core","es":"core / fuerza central","sw":"msingi wa mwili / misuli ya kiuno"},{"en":"hollow body","es":"cuerpo hueco","sw":"mwili wa ndani / hollow body position"},{"en":"front lever","es":"palanca frontal","sw":"nguzo ya mbele / front lever"},{"en":"antagonist","es":"antagonista","sw":"misuli inayopinga"},{"en":"push-up","es":"flexión / lagartija","sw":"push-up / mazoezi ya kusukuma"},{"en":"wrist extension","es":"extensión de muñeca","sw":"kunyoosha mkono wa kiwiko"},{"en":"rotator cuff","es":"manguito rotador","sw":"misuli ya bega inayozunguka"},{"en":"shoulder press","es":"press de hombro","sw":"kusukuma mkono juu"},{"en":"balance","es":"equilibrio","sw":"usawa / uwiano"},{"en":"injury prevention","es":"prevención de lesiones","sw":"kuzuia majeraha"}],
        samplePhrase: {"en":"Antagonist training balances the muscles overworked by climbing — skip it and get injured.","es":"El entrenamiento de antagonistas equilibra los músculos sobrecargados por la escalada — sin él, sufrirás lesiones.","sw":"Mafunzo ya misuli inayopinga inalinda usawa wa misuli — ukiacha, utapata majeraha."},
      },
      {
        id: "training-4", lessonNumber: 4, title: "Endurance & Capacity",
        scenario: "A coach runs a circuits session to build aerobic endurance and lactic acid tolerance for the arms.",
        vocab: [{"en":"aerobic capacity","es":"capacidad aeróbica","sw":"uwezo wa kupumua / nguvu ya muda mrefu"},{"en":"ARC training","es":"entrenamiento ARC","sw":"mafunzo ya ARC / mafunzo ya uvumilivu"},{"en":"pump","es":"bombeo / agotamiento de antebrazos","sw":"uchovu wa mikono / pump"},{"en":"recovery rate","es":"tasa de recuperación","sw":"kasi ya kupona"},{"en":"lactic acid","es":"ácido láctico","sw":"asidi ya lactic / uchovu wa kemikali"},{"en":"aerobic zone","es":"zona aeróbica","sw":"eneo la aerobiki"},{"en":"heart rate","es":"frecuencia cardíaca","sw":"kiwango cha mapigo ya moyo"},{"en":"mileage","es":"kilometraje","sw":"umbali wa kupanda / kiasi cha kupanda"},{"en":"continuous climbing","es":"escalada continua","sw":"kupanda bila kusimama"},{"en":"threshold","es":"umbral","sw":"kiwango cha mwisho / kiwango cha uvumilivu"}],
        samplePhrase: {"en":"ARC training at 20 minutes continuous climbing builds base endurance without taxing the tendons.","es":"El entrenamiento ARC con 20 minutos de escalada continua desarrolla la resistencia base sin sobrecargar los tendones.","sw":"Mafunzo ya ARC kwa dakika 20 za kupanda bila kusimama hujenga uvumilivu wa msingi bila kudhuru tendoni."},
      },
      {
        id: "training-5", lessonNumber: 5, title: "Mental Training & Fear",
        scenario: "A climbing coach leads a discussion on managing fear of falling and visualization techniques.",
        vocab: [{"en":"fear of falling","es":"miedo a caer","sw":"hofu ya kuanguka"},{"en":"visualization","es":"visualización","sw":"kufikiri kwa macho ya akili / taswira"},{"en":"breathing","es":"respiración","sw":"kupumua"},{"en":"focus","es":"enfoque","sw":"makini / umakini"},{"en":"commitment","es":"compromiso","sw":"uamuzi wa kufanya kitu / kujitolea"},{"en":"positive self-talk","es":"discurso interno positivo","sw":"kujisemea vizuri / maneno mazuri moyoni"},{"en":"fall practice","es":"práctica de caídas","sw":"mazoezi ya kuanguka"},{"en":"exposure","es":"exposición","sw":"kujizoeza hatari polepole"},{"en":"controlled environment","es":"entorno controlado","sw":"mazingira ya kudhibitiwa"},{"en":"mental rehearsal","es":"ensayo mental","sw":"kujizoeza akilini / mazoezi ya kifikira"}],
        samplePhrase: {"en":"Practice deliberate falling in a safe environment until the fear decreases — the skill is learnable.","es":"Practica caídas deliberadas en un entorno seguro hasta que el miedo disminuya — la habilidad se aprende.","sw":"Fanya mazoezi ya kuanguka kwa makusudi mahali salama hadi hofu ipungue — ujuzi huu unaweza kujifunzwa."},
      },
      {
        id: "training-6", lessonNumber: 6, title: "Recovery & Rest Protocols",
        scenario: "A coach explains the role of sleep, nutrition, and active recovery between climbing sessions.",
        vocab: [{"en":"recovery day","es":"día de recuperación","sw":"siku ya kupona / siku ya kupumzika"},{"en":"sleep","es":"sueño","sw":"usingizi / kulala"},{"en":"protein intake","es":"consumo de proteínas","sw":"kula protini"},{"en":"hydration","es":"hidratación","sw":"kunywa maji / kutunza mwili uwe na maji"},{"en":"active recovery","es":"recuperación activa","sw":"kupona kwa kufanya kitu kidogo"},{"en":"massage","es":"masaje","sw":"masaji / kupiga mwili"},{"en":"foam roller","es":"rodillo de espuma","sw":"roller ya povu / kifaa cha masaji"},{"en":"swelling","es":"inflamación","sw":"uvimbe"},{"en":"tendon health","es":"salud del tendón","sw":"afya ya tendoni"},{"en":"overtraining","es":"sobreentrenamiento","sw":"kufanya mazoezi kupita kiasi"}],
        samplePhrase: {"en":"Tendons take 48 to 72 hours to recover — two days of rest between hard finger sessions is minimum.","es":"Los tendones tardan 48 a 72 horas en recuperarse — dos días de descanso entre sesiones intensas de dedos es lo mínimo.","sw":"Tendoni zinahitaji saa 48 hadi 72 kupona — siku mbili za kupumzika kati ya mazoezi magumu ya vidole ni kiwango cha chini."},
      },
      {
        id: "training-7", lessonNumber: 7, title: "Goal Setting & Tracking",
        scenario: "A coach helps a climber set a seasonal training goal and build a simple training log.",
        vocab: [{"en":"training log","es":"diario de entrenamiento","sw":"jarida la mafunzo / rekodi ya mazoezi"},{"en":"season goal","es":"objetivo de temporada","sw":"lengo la msimu"},{"en":"benchmark","es":"punto de referencia","sw":"kigezo cha kupima maendeleo"},{"en":"progress","es":"progreso","sw":"maendeleo"},{"en":"plateau","es":"estancamiento","sw":"kukwama / kukosekana maendeleo"},{"en":"peak","es":"cima del rendimiento","sw":"kilele cha utendaji"},{"en":"taper","es":"reducción del volumen","sw":"kupunguza mafunzo kabla ya mashindano"},{"en":"volume","es":"volumen de entrenamiento","sw":"kiasi cha mafunzo"},{"en":"intensity","es":"intensidad","sw":"nguvu ya mafunzo"},{"en":"weekly plan","es":"plan semanal","sw":"mpango wa wiki"}],
        samplePhrase: {"en":"Write down every session — tracking progress is the fastest way to identify what is working.","es":"Anota cada sesión — registrar el progreso es la forma más rápida de identificar qué funciona.","sw":"Andika kila kikao cha mazoezi — kufuatilia maendeleo ni njia ya haraka zaidi ya kujua kinachofanya kazi."},
      },
      {
        id: "training-8", lessonNumber: 8, title: "Cross-Training for Climbers",
        scenario: "A trainer recommends cross-training activities that complement climbing without causing overuse injuries.",
        vocab: [{"en":"yoga","es":"yoga","sw":"yoga / mazoezi ya kunyoosha"},{"en":"flexibility","es":"flexibilidad","sw":"ulaini wa mwili / ubadilishaji wa nafasi"},{"en":"swimming","es":"natación","sw":"kuogelea"},{"en":"cycling","es":"ciclismo","sw":"baiskeli / kupanda baiskeli"},{"en":"running","es":"correr","sw":"kukimbia"},{"en":"shoulder stability","es":"estabilidad del hombro","sw":"utulivu wa bega"},{"en":"hip flexibility","es":"flexibilidad de cadera","sw":"ulaini wa kiuno"},{"en":"cross-training","es":"entrenamiento cruzado","sw":"mafunzo ya mbadala / aina nyingine za mazoezi"},{"en":"overuse injury","es":"lesión por uso excesivo","sw":"jeraha la kutumia zaidi ya kawaida"},{"en":"aerobic base","es":"base aeróbica","sw":"msingi wa aerobiki"}],
        samplePhrase: {"en":"Yoga and swimming complement climbing perfectly — they build flexibility and cardiovascular health without extra strain on tendons.","es":"El yoga y la natación complementan perfectamente la escalada — mejoran la flexibilidad y la salud cardiovascular sin sobrecargar los tendones.","sw":"Yoga na kuogelea vinasaidiana vizuri na kupanda — vinavyojenga ulaini na afya ya moyo bila mzigo zaidi kwenye tendoni."},
      },
    ],
  },
]
