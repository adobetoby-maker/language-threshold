export interface MissionaryLesson {
  id: string
  lessonNumber: number
  title: string
  scenario: string
  vocab: Array<{ en: string; es: string; sw: string }>
  samplePhrase: { en: string; es: string; sw: string }
}

export interface MissionarySubsection {
  id: string
  emoji: string
  title: string
  tagline: string
  color: string
  lessons: MissionaryLesson[]
}

export const MISSIONARY_SUBSECTIONS: MissionarySubsection[] = [
  {
    id: "restoration",
    emoji: "📖",
    title: "Restoration & First Lessons",
    tagline: "Introduce the Restored Gospel with clarity and confidence from the first door.",
    color: "#7C3AED",
    lessons: [
      {
        id: "restoration-1", lessonNumber: 1, title: "Opening a Door Approach",
        scenario: "Two missionaries knock on a door and introduce themselves and their message in Swahili.",
        vocab: [{"en":"good afternoon","es":"buenas tardes","sw":"habari za mchana / karibu"},{"en":"we are missionaries","es":"somos misioneros","sw":"sisi ni wamisionari"},{"en":"Church of Jesus Christ","es":"Iglesia de Jesucristo","sw":"Kanisa la Yesu Kristo"},{"en":"may we share","es":"¿podemos compartir?","sw":"tunaweza kushiriki?"},{"en":"a message","es":"un mensaje","sw":"ujumbe"},{"en":"a few minutes","es":"unos minutos","sw":"dakika chache"},{"en":"about God","es":"sobre Dios","sw":"kuhusu Mungu"},{"en":"appointment","es":"cita","sw":"miadi / wakati wa kuonana"},{"en":"come back","es":"regresar","sw":"kurudi / kuja tena"},{"en":"thank you for your time","es":"gracias por su tiempo","sw":"asante kwa wakati wako"}],
        samplePhrase: {"en":"Hello! We are missionaries from the Church of Jesus Christ. May we share a brief message with you?","es":"¡Hola! Somos misioneros de la Iglesia de Jesucristo. ¿Podemos compartir un breve mensaje con usted?","sw":"Habari! Sisi ni wamisionari kutoka Kanisa la Yesu Kristo. Tunaweza kushiriki ujumbe mfupi nawe?"},
      },
      {
        id: "restoration-2", lessonNumber: 2, title: "The Great Apostasy",
        scenario: "Missionaries explain the loss of priesthood authority after the death of the original apostles.",
        vocab: [{"en":"apostasy","es":"apostasía","sw":"uasi wa dini / kupotoka kwa kanisa"},{"en":"original apostles","es":"apóstoles originales","sw":"mitume wa asili"},{"en":"priesthood authority","es":"autoridad del sacerdocio","sw":"mamlaka ya ukuhani"},{"en":"lost","es":"perdida","sw":"ilipotea / ilikosekana"},{"en":"darkness","es":"oscuridad","sw":"giza"},{"en":"incomplete truth","es":"verdad incompleta","sw":"ukweli usio kamili"},{"en":"reformers","es":"reformadores","sw":"waboreshe / waliofanya marekebisho"},{"en":"prepared the way","es":"prepararon el camino","sw":"walitengeneza njia"},{"en":"partial truth","es":"verdad parcial","sw":"ukweli wa sehemu"},{"en":"needed restoration","es":"se necesitaba la restauración","sw":"urejesho ulikuwa unahitajika"}],
        samplePhrase: {"en":"After the apostles died, priesthood authority was lost from the earth — but God prepared a way to restore it.","es":"Después de la muerte de los apóstoles, la autoridad del sacerdocio se perdió de la tierra — pero Dios preparó un camino para restaurarla.","sw":"Baada ya mitume kufa, mamlaka ya ukuhani ilipotea duniani — lakini Mungu alitayarisha njia ya kuirejesha."},
      },
      {
        id: "restoration-3", lessonNumber: 3, title: "Joseph Smith and the First Vision",
        scenario: "Missionaries teach the story of Joseph Smith's prayer in the Sacred Grove and the appearance of God and Jesus Christ.",
        vocab: [{"en":"Joseph Smith","es":"José Smith","sw":"Yosefu Smith"},{"en":"Sacred Grove","es":"Bosque Sagrado","sw":"Msitu Mtakatifu"},{"en":"prayed sincerely","es":"oró sinceramente","sw":"aloomba kwa moyo wote"},{"en":"appeared to him","es":"se le apareció","sw":"alimtokea"},{"en":"pillar of light","es":"pilar de luz","sw":"nguzo ya nuru / mti wa mwanga"},{"en":"vision","es":"visión","sw":"maono"},{"en":"fourteen years old","es":"catorce años","sw":"miaka kumi na minne"},{"en":"which church","es":"cuál iglesia","sw":"kanisa gani"},{"en":"confusion","es":"confusión","sw":"mkanganyiko / wasiwasi"},{"en":"testimony","es":"testimonio","sw":"ushuhuda"}],
        samplePhrase: {"en":"Joseph Smith knelt in the woods to pray and ask which church was true — and God the Father and Jesus Christ appeared to him.","es":"José Smith se arrodilló en el bosque para orar y preguntar cuál iglesia era verdadera — y Dios el Padre y Jesucristo se le aparecieron.","sw":"Yosefu Smith alipiga magoti msituni kuomba na kuuliza kanisa gani lilikuwa la kweli — na Mungu Baba na Yesu Kristo walimtokea."},
      },
      {
        id: "restoration-4", lessonNumber: 4, title: "The Book of Mormon",
        scenario: "Missionaries introduce the Book of Mormon as a companion scripture to the Bible and invite someone to read it.",
        vocab: [{"en":"Book of Mormon","es":"Libro de Mormón","sw":"Kitabu cha Mormoni"},{"en":"scripture","es":"escritura","sw":"maandiko matakatifu"},{"en":"companion","es":"compañero / complemento","sw":"mwenzake / ziada"},{"en":"ancient people","es":"pueblo antiguo","sw":"watu wa zamani"},{"en":"Americas","es":"las Américas","sw":"Amerika / Bara la Amerika"},{"en":"translated","es":"traducido","sw":"ilitafsiriwa"},{"en":"by the power of God","es":"por el poder de Dios","sw":"kwa nguvu ya Mungu"},{"en":"another testament","es":"otro testamento","sw":"ushuhuda mwingine"},{"en":"read and pray","es":"lee y ora","sw":"soma na uombe"},{"en":"witness","es":"testigo","sw":"shahidi"}],
        samplePhrase: {"en":"The Book of Mormon is another testament of Jesus Christ — we invite you to read it and pray to know if it is true.","es":"El Libro de Mormón es otro testamento de Jesucristo — le invitamos a leerlo y orar para saber si es verdadero.","sw":"Kitabu cha Mormoni ni ushuhuda mwingine wa Yesu Kristo — tunakukaribisha kusoma na kuomba kujua kama ni kweli."},
      },
      {
        id: "restoration-5", lessonNumber: 5, title: "Living Prophets Today",
        scenario: "Missionaries explain that God continues to call prophets today, just as in ancient times.",
        vocab: [{"en":"living prophet","es":"profeta viviente","sw":"nabii wa leo / nabii aliye hai"},{"en":"called of God","es":"llamado de Dios","sw":"aliyeitwa na Mungu"},{"en":"direct revelation","es":"revelación directa","sw":"ufunuo wa moja kwa moja"},{"en":"guide the church","es":"guiar la iglesia","sw":"kuongoza kanisa"},{"en":"same pattern","es":"el mismo patrón","sw":"mfumo ule ule"},{"en":"as in old times","es":"como en tiempos antiguos","sw":"kama ilivyokuwa zamani"},{"en":"continuing revelation","es":"revelación continua","sw":"ufunuo unaoendelea"},{"en":"President","es":"Presidente","sw":"Rais"},{"en":"Quorum of the Twelve","es":"Quórum de los Doce","sw":"Baraza la Mitume Kumi na Wawili"},{"en":"sustain","es":"sostener","sw":"kuunga mkono / kusimamia"}],
        samplePhrase: {"en":"God calls prophets today just as He did in ancient times — we have a living prophet to guide the Church.","es":"Dios llama profetas hoy igual que en tiempos antiguos — tenemos un profeta viviente para guiar la Iglesia.","sw":"Mungu anaita manabii leo kama alivyofanya zamani — tuna nabii wa leo kuongoza Kanisa."},
      },
      {
        id: "restoration-6", lessonNumber: 6, title: "Responding to Questions",
        scenario: "Missionaries practice responding to common questions and sincere objections about the Restoration.",
        vocab: [{"en":"great question","es":"gran pregunta","sw":"swali zuri / swali zito"},{"en":"I understand","es":"entiendo","sw":"ninaelewa"},{"en":"let me explain","es":"déjame explicar","sw":"niruhusu nifafanue"},{"en":"many people ask","es":"mucha gente pregunta","sw":"watu wengi wanauliza"},{"en":"that's understandable","es":"es comprensible","sw":"hiyo inaelewa / hiyo ni ya kawaida"},{"en":"the answer is","es":"la respuesta es","sw":"jibu ni"},{"en":"consider","es":"considerar","sw":"fikiria / angalia"},{"en":"evidence","es":"evidencia","sw":"ushahidi"},{"en":"pray about it","es":"ora al respecto","sw":"ombea hilo / uliza Mungu kwa njia ya sala"},{"en":"I know it's true","es":"sé que es verdadero","sw":"ninajua ni kweli"}],
        samplePhrase: {"en":"That's a great question — many people ask that. Let me share what I understand about it.","es":"Esa es una gran pregunta — mucha gente la hace. Déjame compartir lo que entiendo al respecto.","sw":"Hiyo ni swali zuri — watu wengi wanauliza hivyo. Niruhusu nishiriki ninachojua kuhusu hilo."},
      },
      {
        id: "restoration-7", lessonNumber: 7, title: "Bearing Testimony",
        scenario: "A missionary practices bearing a personal testimony of the Restoration in Swahili.",
        vocab: [{"en":"I know","es":"sé","sw":"ninajua"},{"en":"I believe","es":"creo","sw":"ninaamini"},{"en":"I feel","es":"siento","sw":"nahisi"},{"en":"the Holy Ghost confirmed","es":"el Espíritu Santo confirmó","sw":"Roho Mtakatifu alithibitisha"},{"en":"my testimony","es":"mi testimonio","sw":"ushuhuda wangu"},{"en":"without doubt","es":"sin duda","sw":"bila shaka"},{"en":"I am grateful","es":"estoy agradecido","sw":"ninashukuru"},{"en":"in the name of Jesus Christ","es":"en el nombre de Jesucristo","sw":"kwa jina la Yesu Kristo"},{"en":"amen","es":"amén","sw":"amina"},{"en":"share your testimony","es":"comparte tu testimonio","sw":"shiriki ushuhuda wako"}],
        samplePhrase: {"en":"I know that Joseph Smith was a prophet, and that the Book of Mormon is true — I have prayed and received that answer.","es":"Sé que José Smith fue un profeta y que el Libro de Mormón es verdadero — he orado y recibido esa respuesta.","sw":"Ninajua kwamba Yosefu Smith alikuwa nabii, na kwamba Kitabu cha Mormoni ni kweli — nimeomba na kupokea jibu hilo."},
      },
      {
        id: "restoration-8", lessonNumber: 8, title: "Extending a Baptismal Invitation",
        scenario: "Missionaries extend a sincere baptismal commitment invitation after teaching the first lesson.",
        vocab: [{"en":"baptism","es":"bautismo","sw":"ubatizo"},{"en":"we invite you","es":"te invitamos","sw":"tunakualika"},{"en":"baptized","es":"bautizarse","sw":"kubatizwa"},{"en":"a member","es":"un miembro","sw":"mwanachama"},{"en":"date","es":"fecha","sw":"tarehe"},{"en":"will you","es":"¿lo harás? / ¿estás dispuesto?","sw":"utafanya? / uko tayari?"},{"en":"prepared","es":"preparado","sw":"tayari"},{"en":"commitment","es":"compromiso","sw":"ahadi / wajibu"},{"en":"water baptism","es":"bautismo de agua","sw":"ubatizo wa maji"},{"en":"gift of Holy Ghost","es":"don del Espíritu Santo","sw":"kipawa cha Roho Mtakatifu"}],
        samplePhrase: {"en":"Will you follow the example of Jesus Christ and be baptized by someone holding God's authority?","es":"¿Seguirás el ejemplo de Jesucristo y serás bautizado por alguien con la autoridad de Dios?","sw":"Je, utafuata mfano wa Yesu Kristo na kubatizwa na mtu aliye na mamlaka ya Mungu?"},
      },
    ],
  },
  {
    id: "gospel-of-jesus-christ",
    emoji: "✝️",
    title: "Gospel of Jesus Christ",
    tagline: "Teach the five principles and ordinances that lead to salvation.",
    color: "#7C3AED",
    lessons: [
      {
        id: "gospel-1", lessonNumber: 1, title: "Teaching Faith in Jesus Christ",
        scenario: "Missionaries explain what it means to have faith and how it leads to action, using a Swahili-speaking investigator.",
        vocab: [{"en":"faith","es":"fe","sw":"imani"},{"en":"believe","es":"creer","sw":"kuamini"},{"en":"trust","es":"confianza","sw":"kutumaini / kuamini kwa moyo"},{"en":"action","es":"acción","sw":"kitendo"},{"en":"evidence","es":"evidencia","sw":"ushahidi"},{"en":"unseen","es":"lo invisible","sw":"lisiloonekana"},{"en":"seed of faith","es":"semilla de fe","sw":"mbegu ya imani"},{"en":"grow","es":"crecer","sw":"kukua"},{"en":"strengthen","es":"fortalecer","sw":"imarisha / ongeza nguvu"},{"en":"exercise faith","es":"ejercer la fe","sw":"tumia imani / fanya kwa imani"}],
        samplePhrase: {"en":"Faith is not just belief — it is belief that leads you to act, even before you have all the answers.","es":"La fe no es solo creer — es una creencia que te lleva a actuar, incluso antes de tener todas las respuestas.","sw":"Imani si tu kuamini — ni kuamini ambako kunakupelekea kutenda, hata kabla ya kupata majibu yote."},
      },
      {
        id: "gospel-2", lessonNumber: 2, title: "Repentance — True Change",
        scenario: "Missionaries explain repentance as a process of turning toward God, not just feeling sorry.",
        vocab: [{"en":"repentance","es":"arrepentimiento","sw":"toba"},{"en":"recognize","es":"reconocer","sw":"tambua / kukiri"},{"en":"feel sorry","es":"sentir pesar","sw":"huzunika / kujuta"},{"en":"stop sinning","es":"dejar de pecar","sw":"acha kutenda dhambi"},{"en":"make right","es":"corregir el error","sw":"rekebisha kosa"},{"en":"turn to God","es":"volverse a Dios","sw":"geuka kwa Mungu"},{"en":"change of heart","es":"cambio de corazón","sw":"mabadiliko ya moyo"},{"en":"forgiveness","es":"perdón","sw":"msamaha"},{"en":"start over","es":"empezar de nuevo","sw":"anza upya"},{"en":"continuous process","es":"proceso continuo","sw":"mchakato unaoendelea"}],
        samplePhrase: {"en":"Repentance is not just feeling sorry — it means turning away from sin and turning back to God.","es":"El arrepentimiento no es solo sentir pesar — significa alejarse del pecado y volver a Dios.","sw":"Toba si kujuta tu — inamaanisha kuacha dhambi na kugeuka kwa Mungu."},
      },
      {
        id: "gospel-3", lessonNumber: 3, title: "The Ordinance of Baptism",
        scenario: "Missionaries teach the purpose of baptism as an ordinance and covenant, not just a symbol.",
        vocab: [{"en":"ordinance","es":"ordenanza","sw":"sakramenti / tendo la kisheria la kanisa"},{"en":"covenant","es":"convenio","sw":"agano / kiapo"},{"en":"immersion","es":"inmersión","sw":"kuzamishwa / kuzama ndani ya maji"},{"en":"authority","es":"autoridad","sw":"mamlaka"},{"en":"necessary","es":"necesario","sw":"lazima / ya muhimu"},{"en":"take upon the name","es":"tomar sobre sí el nombre","sw":"kuchukua jina lake"},{"en":"witness","es":"testigo","sw":"shahidi"},{"en":"confirmed","es":"confirmado","sw":"kuthibitishwa / kutangazwa"},{"en":"renew covenants","es":"renovar convenios","sw":"kuhuisha agano / kurudia agano"},{"en":"worthy","es":"digno","sw":"stahili / ana hadhi"}],
        samplePhrase: {"en":"Baptism by immersion is required — it is an ordinance of God that cannot be changed or replaced.","es":"El bautismo por inmersión es necesario — es una ordenanza de Dios que no puede cambiarse ni reemplazarse.","sw":"Ubatizo kwa kuzamishwa ni lazima — ni tendo la Mungu ambalo haliwezi kubadilishwa wala kuachwa."},
      },
      {
        id: "gospel-4", lessonNumber: 4, title: "The Gift of the Holy Ghost",
        scenario: "Missionaries explain the difference between feeling the Holy Ghost and receiving it as a gift after baptism.",
        vocab: [{"en":"Holy Ghost","es":"Espíritu Santo","sw":"Roho Mtakatifu"},{"en":"gift","es":"don","sw":"kipawa"},{"en":"constant companion","es":"compañero constante","sw":"mwenzake wa kudumu / rafiki wa wakati wote"},{"en":"confirmation","es":"confirmación","sw":"uthibitisho / kuthibitishwa"},{"en":"laying on of hands","es":"imposición de manos","sw":"kuweka mikono juu"},{"en":"discern truth","es":"discernir la verdad","sw":"kutofautisha ukweli"},{"en":"comfort","es":"consuelo","sw":"faraja / kutulizwa"},{"en":"warn of danger","es":"advertir del peligro","sw":"onya kuhusu hatari"},{"en":"inspiration","es":"inspiración","sw":"msukumo wa kiroho / ilhamu"},{"en":"receive guidance","es":"recibir guía","sw":"kupokea mwongozo"}],
        samplePhrase: {"en":"After baptism, you receive the Gift of the Holy Ghost — a constant companion who guides, comforts, and teaches you.","es":"Después del bautismo, recibes el Don del Espíritu Santo — un compañero constante que te guía, consuela y enseña.","sw":"Baada ya ubatizo, unapokea Kipawa cha Roho Mtakatifu — mwenzako wa kudumu ambaye anakuongoza, kukufariji, na kukufundisha."},
      },
      {
        id: "gospel-5", lessonNumber: 5, title: "Enduring to the End",
        scenario: "Missionaries teach that salvation requires enduring faithfully throughout life, not just at baptism.",
        vocab: [{"en":"endure","es":"perseverar","sw":"vumilia / subiri hadi mwisho"},{"en":"to the end","es":"hasta el fin","sw":"hadi mwisho"},{"en":"trials","es":"pruebas","sw":"majaribu / matatizo"},{"en":"remain faithful","es":"permanecer fiel","sw":"kuendelea kuwa mwaminifu"},{"en":"renew covenants","es":"renovar convenios","sw":"rudia agano"},{"en":"sacrament","es":"sacramento","sw":"ekaristi / sakramenti"},{"en":"weekly","es":"semanalmente","sw":"kila wiki"},{"en":"keep commandments","es":"guardar los mandamientos","sw":"fuata amri"},{"en":"repent continuously","es":"arrepentirse continuamente","sw":"endelea kutubu"},{"en":"charity","es":"caridad","sw":"upendo wa kweli / hisani"}],
        samplePhrase: {"en":"Baptism is not the finish line — it is the starting line. Enduring to the end means staying faithful every day.","es":"El bautismo no es la meta — es la línea de salida. Perseverar hasta el fin significa mantenerse fiel cada día.","sw":"Ubatizo si mwisho wa safari — ni mwanzo. Kuvumilia hadi mwisho kunamaanisha kukaa mwaminifu kila siku."},
      },
      {
        id: "gospel-6", lessonNumber: 6, title: "The Atonement of Jesus Christ",
        scenario: "Missionaries teach the central role of Christ's atonement in the gospel plan and how it applies personally.",
        vocab: [{"en":"atonement","es":"expiación","sw":"upatanisho / sadaka ya Kristo"},{"en":"atone","es":"expiar","sw":"kulipa dhambi / kufuta makosa"},{"en":"suffer for sins","es":"sufrir por los pecados","sw":"kuteseka kwa ajili ya dhambi"},{"en":"Gethsemane","es":"Getsemaní","sw":"Gethsemane / bustani ya Gethsemane"},{"en":"resurrection","es":"resurrección","sw":"ufufuko"},{"en":"overcome death","es":"vencer la muerte","sw":"kushinda mauti"},{"en":"infinite","es":"infinito","sw":"isiyo na mipaka / ya milele"},{"en":"mercy","es":"misericordia","sw":"rehema"},{"en":"justice","es":"justicia","sw":"haki / uadilifu"},{"en":"personally applied","es":"aplicado personalmente","sw":"inayotumika kwake mwenyewe / inayomhusu yeye"}],
        samplePhrase: {"en":"Jesus Christ suffered for every sin and sorrow you have ever felt — the Atonement was personal and real.","es":"Jesucristo sufrió por cada pecado y pena que alguna vez hayas sentido — la Expiación fue personal y real.","sw":"Yesu Kristo aliteseka kwa kila dhambi na huzuni uliyowahi kuhisi — Upatanisho ulikuwa wa kibinafsi na wa kweli."},
      },
      {
        id: "gospel-7", lessonNumber: 7, title: "Discussing Concerns About Baptism",
        scenario: "An investigator raises concerns about being ready for baptism. Missionaries listen, respond, and reassure.",
        vocab: [{"en":"not ready","es":"no estoy listo","sw":"sijawa tayari"},{"en":"need more time","es":"necesito más tiempo","sw":"ninahitaji muda zaidi"},{"en":"questions","es":"preguntas","sw":"maswali"},{"en":"I understand","es":"entiendo","sw":"ninaelewa"},{"en":"that's normal","es":"es normal","sw":"ni ya kawaida / ni ya kawaida"},{"en":"pray about a date","es":"ora sobre una fecha","sw":"omba kuhusu tarehe"},{"en":"Heavenly Father will help","es":"el Padre Celestial te ayudará","sw":"Baba wa Mbinguni atasaidia"},{"en":"courage","es":"valentía","sw":"ujasiri"},{"en":"step of faith","es":"paso de fe","sw":"hatua ya imani"},{"en":"we will support you","es":"te apoyaremos","sw":"tutakusaidia / tutakuunga mkono"}],
        samplePhrase: {"en":"It is normal to feel unsure — but a baptismal date gives you something to work toward with God's help.","es":"Es normal sentirse inseguro — pero una fecha de bautismo te da algo hacia lo que trabajar con la ayuda de Dios.","sw":"Ni ya kawaida kuhisi wasiwasi — lakini tarehe ya ubatizo inakupa lengo la kufanyia kazi kwa msaada wa Mungu."},
      },
      {
        id: "gospel-8", lessonNumber: 8, title: "Preparing Someone for Baptism",
        scenario: "Missionaries walk through the baptismal interview questions with an investigator to help them prepare.",
        vocab: [{"en":"baptismal interview","es":"entrevista bautismal","sw":"mahojiano ya ubatizo"},{"en":"law of chastity","es":"ley de castidad","sw":"sheria ya usafi wa maadili"},{"en":"Word of Wisdom","es":"Palabra de Sabiduría","sw":"Neno la Hekima"},{"en":"willing to obey","es":"dispuesto a obedecer","sw":"tayari kutii"},{"en":"testimony of prophet","es":"testimonio del profeta","sw":"ushuhuda wa nabii"},{"en":"attendance","es":"asistencia","sw":"kuhudhuria kanisa"},{"en":"white clothing","es":"ropa blanca","sw":"nguo nyeupe"},{"en":"witnesses present","es":"testigos presentes","sw":"mashahidi waliopo"},{"en":"confirmation","es":"confirmación","sw":"uthibitisho"},{"en":"following Sunday","es":"domingo siguiente","sw":"Jumapili inayofuata"}],
        samplePhrase: {"en":"The baptismal interview is not a test to pass — it is a loving conversation to make sure you feel ready and prepared.","es":"La entrevista bautismal no es un examen que aprobar — es una conversación amorosa para asegurarse de que te sientes listo.","sw":"Mahojiano ya ubatizo si mtihani wa kupita — ni mazungumzo ya upendo kuhakikisha unajisikia tayari na umejitayarisha."},
      },
    ],
  },
  {
    id: "plan-of-salvation",
    emoji: "🌟",
    title: "Plan of Salvation",
    tagline: "Explain where we came from, why we are here, and where we are going.",
    color: "#7C3AED",
    lessons: [
      {
        id: "salvation-1", lessonNumber: 1, title: "Pre-Mortal Life",
        scenario: "Missionaries explain the doctrine that all people lived as spirit children of God before coming to earth.",
        vocab: [{"en":"pre-mortal life","es":"vida preterrenal","sw":"maisha ya kabla ya kuzaliwa"},{"en":"spirit children","es":"hijos espirituales","sw":"watoto wa roho"},{"en":"Heavenly Father","es":"Padre Celestial","sw":"Baba wa Mbinguni"},{"en":"Heavenly Mother","es":"Madre Celestial","sw":"Mama wa Mbinguni"},{"en":"council in heaven","es":"consejo en el cielo","sw":"mkutano mbinguni"},{"en":"agency","es":"albedrío","sw":"uhuru wa kuchagua"},{"en":"plan presented","es":"plan presentado","sw":"mpango uliwasilishwa"},{"en":"chose to come","es":"eligió venir","sw":"alichagua kuja"},{"en":"veil of forgetfulness","es":"velo del olvido","sw":"pazia la kusahau"},{"en":"purpose of earth life","es":"propósito de la vida terrenal","sw":"kusudi la maisha duniani"}],
        samplePhrase: {"en":"Before you were born, you lived with God as a spirit child — you chose to come to earth to grow and be tested.","es":"Antes de nacer, viviste con Dios como hijo espiritual — elegiste venir a la tierra para crecer y ser probado.","sw":"Kabla ya kuzaliwa, uliishi na Mungu kama mtoto wa roho — ulichagua kuja duniani kukua na kupimwa."},
      },
      {
        id: "salvation-2", lessonNumber: 2, title: "The Purpose of Mortality",
        scenario: "Missionaries explain why we are on earth: to gain a physical body, experience opposition, and exercise agency.",
        vocab: [{"en":"physical body","es":"cuerpo físico","sw":"mwili wa kimwili / mwili wa nyama"},{"en":"opposition","es":"oposición","sw":"upinzani / matatizo"},{"en":"experience","es":"experiencia","sw":"uzoefu / tajriba"},{"en":"agency","es":"albedrío","sw":"uhuru wa kuchagua"},{"en":"joy and sorrow","es":"alegría y tristeza","sw":"furaha na huzuni"},{"en":"mortality","es":"mortalidad","sw":"maisha ya duniani / kuwa wa kufa"},{"en":"growth","es":"crecimiento","sw":"ukuaji / maendeleo"},{"en":"become like God","es":"llegar a ser como Dios","sw":"kuwa kama Mungu"},{"en":"second estate","es":"segunda fase de vida","sw":"hatua ya pili ya maisha"},{"en":"veil","es":"velo","sw":"pazia"}],
        samplePhrase: {"en":"Mortality is not a punishment — it is a gift. We came here to gain a body and become more like our Heavenly Father.","es":"La mortalidad no es un castigo — es un regalo. Vinimos aquí para obtener un cuerpo y volvernos más como nuestro Padre Celestial.","sw":"Maisha ya duniani si adhabu — ni zawadi. Tulikuja hapa kupata mwili na kuwa zaidi kama Baba yetu wa Mbinguni."},
      },
      {
        id: "salvation-3", lessonNumber: 3, title: "Death and the Spirit World",
        scenario: "Missionaries explain what happens after death according to the plan of salvation.",
        vocab: [{"en":"physical death","es":"muerte física","sw":"kifo cha mwili"},{"en":"spirit world","es":"mundo espiritual","sw":"ulimwengu wa roho"},{"en":"paradise","es":"paraíso","sw":"paradiso / mahali pazuri pa kusubiri"},{"en":"spirit prison","es":"prisión de espíritus","sw":"gereza la roho / mahali pa kusubiri"},{"en":"missionary work","es":"obra misional","sw":"kazi ya kimisionari"},{"en":"wait","es":"esperar","sw":"subiri"},{"en":"resurrection","es":"resurrección","sw":"ufufuko"},{"en":"reunited with body","es":"reunirse con el cuerpo","sw":"kuungana tena na mwili"},{"en":"perfected body","es":"cuerpo perfecto","sw":"mwili kamili / mwili ulioboreshwa"},{"en":"judgment","es":"juicio","sw":"hukumu"}],
        samplePhrase: {"en":"When we die, our spirit goes to the spirit world — a place to wait for the resurrection and final judgment.","es":"Cuando morimos, nuestro espíritu va al mundo espiritual — un lugar para esperar la resurrección y el juicio final.","sw":"Tunapofa, roho yetu inakwenda ulimwengu wa roho — mahali pa kusubiri ufufuko na hukumu ya mwisho."},
      },
      {
        id: "salvation-4", lessonNumber: 4, title: "Kingdoms of Glory",
        scenario: "Missionaries explain the three degrees of glory and how our choices in mortality determine where we go.",
        vocab: [{"en":"celestial kingdom","es":"reino celestial","sw":"ufalme wa mbinguni wa juu / ufalme wa celeste"},{"en":"terrestrial kingdom","es":"reino terrestre","sw":"ufalme wa wastani / ufalme wa terrestre"},{"en":"telestial kingdom","es":"reino telestial","sw":"ufalme wa chini / ufalme wa teleste"},{"en":"degrees of glory","es":"grados de gloria","sw":"viwango vya utukufu"},{"en":"exaltation","es":"exaltación","sw":"kutukuzwa / kupandishwa"},{"en":"eternal families","es":"familias eternas","sw":"familia za milele"},{"en":"live with God","es":"vivir con Dios","sw":"kuishi na Mungu"},{"en":"our choices","es":"nuestras decisiones","sw":"maamuzi yetu"},{"en":"determine","es":"determinar","sw":"kuamua / kubainisha"},{"en":"glory of the sun","es":"gloria del sol","sw":"utukufu wa jua"}],
        samplePhrase: {"en":"God's plan includes three kingdoms of glory — and the highest, the celestial kingdom, is where eternal families live with God.","es":"El plan de Dios incluye tres reinos de gloria — y el más alto, el reino celestial, es donde las familias eternas viven con Dios.","sw":"Mpango wa Mungu unajumuisha ufalme tatu wa utukufu — na wa juu kabisa, ufalme wa celeste, ndipo familia za milele zinapoishi na Mungu."},
      },
      {
        id: "salvation-5", lessonNumber: 5, title: "Eternal Families",
        scenario: "Missionaries explain temple marriage and the doctrine that families can be sealed together forever.",
        vocab: [{"en":"eternal family","es":"familia eterna","sw":"familia ya milele"},{"en":"sealed","es":"sellado","sw":"imefungwa / imeshikamanishwa"},{"en":"temple","es":"templo","sw":"hekalu"},{"en":"sealing ordinance","es":"ordenanza de sellamiento","sw":"tendo la kuunganisha milele"},{"en":"husband and wife","es":"marido y esposa","sw":"mume na mke"},{"en":"death cannot separate","es":"la muerte no puede separar","sw":"kifo hakiwezi kutenganisha"},{"en":"worthy","es":"digno","sw":"stahili"},{"en":"temple recommend","es":"recomendación para el templo","sw":"ruhusa ya hekalu"},{"en":"covenant marriage","es":"matrimonio por convenio","sw":"ndoa ya agano"},{"en":"forever","es":"para siempre","sw":"milele / daima"}],
        samplePhrase: {"en":"Through temple ordinances, a husband and wife can be sealed together for time and all eternity — not just until death.","es":"A través de las ordenanzas del templo, un esposo y una esposa pueden ser sellados por el tiempo y toda la eternidad — no solo hasta la muerte.","sw":"Kupitia matendo ya hekalu, mume na mke wanaweza kushikamanishwa pamoja milele — si tu hadi kifo."},
      },
      {
        id: "salvation-6", lessonNumber: 6, title: "Answering: What About Non-Members?",
        scenario: "Missionaries address the common question of what happens to those who never heard the gospel in this life.",
        vocab: [{"en":"fair","es":"justo","sw":"sawa / wa haki"},{"en":"every person","es":"cada persona","sw":"kila mtu"},{"en":"opportunity","es":"oportunidad","sw":"nafasi / fursa"},{"en":"hear the gospel","es":"escuchar el evangelio","sw":"kusikia injili"},{"en":"spirit world","es":"mundo espiritual","sw":"ulimwengu wa roho"},{"en":"missionary work there","es":"obra misional allá","sw":"kazi ya kimisionari huko"},{"en":"temple work","es":"obra del templo","sw":"kazi ya hekalu"},{"en":"proxy ordinances","es":"ordenanzas por poder","sw":"matendo ya ukumbusho kwa waliokufa"},{"en":"choose","es":"elegir","sw":"chagua"},{"en":"no one is forgotten","es":"nadie es olvidado","sw":"hakuna anayesahauliwa"}],
        samplePhrase: {"en":"God is perfectly fair — no one is condemned for not hearing a gospel they never had the chance to receive.","es":"Dios es perfectamente justo — nadie es condenado por no escuchar un evangelio que nunca tuvo la oportunidad de recibir.","sw":"Mungu ni mwenye haki kamili — hakuna anayehukumiwa kwa kutosikia injili ambayo hakuwa na nafasi ya kupokea."},
      },
      {
        id: "salvation-7", lessonNumber: 7, title: "Where Did I Come From? Why Am I Here?",
        scenario: "Missionaries use the three-question framework to introduce the plan of salvation to someone new.",
        vocab: [{"en":"where did I come from","es":"¿de dónde vengo?","sw":"nilikuja wapi?"},{"en":"why am I here","es":"¿por qué estoy aquí?","sw":"kwa nini niko hapa?"},{"en":"where am I going","es":"¿a dónde voy?","sw":"ninaenda wapi?"},{"en":"universal questions","es":"preguntas universales","sw":"maswali ya watu wote"},{"en":"answers","es":"respuestas","sw":"majibu"},{"en":"God's plan","es":"el plan de Dios","sw":"mpango wa Mungu"},{"en":"meaningful life","es":"vida significativa","sw":"maisha yenye maana"},{"en":"clarity","es":"claridad","sw":"uwazi / ufahamu"},{"en":"hope","es":"esperanza","sw":"tumaini"},{"en":"purpose","es":"propósito","sw":"kusudi / madhumuni"}],
        samplePhrase: {"en":"There are three questions every person has asked: where did I come from, why am I here, and where am I going? The plan of salvation answers all three.","es":"Hay tres preguntas que toda persona ha hecho: ¿de dónde vengo?, ¿por qué estoy aquí? y ¿a dónde voy? El plan de salvación responde las tres.","sw":"Kuna maswali matatu ambayo kila mtu amewahi kuuliza: nilikuja wapi, kwa nini niko hapa, na ninaenda wapi? Mpango wa wokovu unajibu yote matatu."},
      },
      {
        id: "salvation-8", lessonNumber: 8, title: "Using Scripture in Lesson",
        scenario: "Missionaries practice finding and reading key plan of salvation scriptures in Swahili with an investigator.",
        vocab: [{"en":"scripture reference","es":"referencia de escritura","sw":"rejea ya maandiko"},{"en":"open your book","es":"abre tu libro","sw":"fungua kitabu chako"},{"en":"let's read together","es":"leamos juntos","sw":"hebu tusome pamoja"},{"en":"what does this mean to you","es":"¿qué significa esto para ti?","sw":"hii inamaanisha nini kwako?"},{"en":"verse","es":"versículo","sw":"mstari wa maandiko"},{"en":"chapter","es":"capítulo","sw":"sura"},{"en":"2 Nephi","es":"2 Nefi","sw":"2 Nefi"},{"en":"Alma","es":"Alma","sw":"Alma"},{"en":"Doctrine and Covenants","es":"Doctrina y Convenios","sw":"Mafundisho na Maagano"},{"en":"underline","es":"subrayar","sw":"pigia mstari chini / weka alama"}],
        samplePhrase: {"en":"Let's read this scripture together — then I'd love to hear what it means to you personally.","es":"Leamos esta escritura juntos — luego me gustaría escuchar qué significa para ti personalmente.","sw":"Hebu tusome maandiko haya pamoja — kisha ningependa kusikia yanakumaanisha nini wewe mwenyewe."},
      },
    ],
  },
  {
    id: "commandments",
    emoji: "📜",
    title: "Commandments & Commitments",
    tagline: "Explain the law of chastity, Word of Wisdom, Sabbath, and tithing clearly.",
    color: "#7C3AED",
    lessons: [
      {
        id: "commandments-1", lessonNumber: 1, title: "The Word of Wisdom",
        scenario: "Missionaries explain the Word of Wisdom health code and help an investigator prepare to follow it.",
        vocab: [{"en":"Word of Wisdom","es":"Palabra de Sabiduría","sw":"Neno la Hekima"},{"en":"alcohol","es":"alcohol","sw":"pombe / kileo"},{"en":"tobacco","es":"tabaco","sw":"tumbaku / sigara"},{"en":"coffee","es":"café","sw":"kahawa"},{"en":"tea","es":"té","sw":"chai ya kawaida"},{"en":"healthy foods","es":"alimentos saludables","sw":"vyakula vya afya"},{"en":"blessings","es":"bendiciones","sw":"baraka"},{"en":"strong body","es":"cuerpo fuerte","sw":"mwili imara"},{"en":"clear mind","es":"mente clara","sw":"akili safi"},{"en":"quit","es":"dejar / abandonar","sw":"acha / simamisha"}],
        samplePhrase: {"en":"The Word of Wisdom is God's health code — it blesses your body and mind when you follow it.","es":"La Palabra de Sabiduría es el código de salud de Dios — bendice tu cuerpo y mente cuando la sigues.","sw":"Neno la Hekima ni kanuni ya afya ya Mungu — inakubariki mwili na akili unapoifuata."},
      },
      {
        id: "commandments-2", lessonNumber: 2, title: "The Law of Chastity",
        scenario: "Missionaries explain sexual morality from a gospel perspective clearly and without embarrassment.",
        vocab: [{"en":"law of chastity","es":"ley de castidad","sw":"sheria ya usafi wa maadili"},{"en":"sexual relations","es":"relaciones sexuales","sw":"mahusiano ya ngono"},{"en":"between husband and wife","es":"entre esposo y esposa","sw":"kati ya mume na mke"},{"en":"legally married","es":"legalmente casados","sw":"waliooa kisheria"},{"en":"sacred","es":"sagrado","sw":"takatifu / chenye heshima"},{"en":"power of creation","es":"poder de creación","sw":"nguvu ya uumbaji"},{"en":"pornography","es":"pornografía","sw":"picha au filamu za uchokozi"},{"en":"avoid","es":"evitar","sw":"epuka"},{"en":"cohabitation","es":"convivir sin casarse","sw":"kuishi pamoja bila kuoa"},{"en":"purity","es":"pureza","sw":"usafi wa maadili"}],
        samplePhrase: {"en":"The law of chastity protects the sacred power of creation — it is a gift, not a restriction.","es":"La ley de castidad protege el sagrado poder de la creación — es un regalo, no una restricción.","sw":"Sheria ya usafi wa maadili inalinda nguvu takatifu ya uumbaji — ni zawadi, si kizuizi."},
      },
      {
        id: "commandments-3", lessonNumber: 3, title: "Sabbath Day Observance",
        scenario: "Missionaries help an investigator understand how to keep the Sabbath day holy in a practical way.",
        vocab: [{"en":"Sabbath day","es":"día de reposo / domingo","sw":"Siku ya Sabato / Jumapili"},{"en":"keep holy","es":"santificar","sw":"takasa / heshimu"},{"en":"attend church","es":"ir a la iglesia","sw":"hudhuria kanisa"},{"en":"rest","es":"descansar","sw":"pumzika"},{"en":"uplift","es":"elevar / edificar","sw":"kuinua roho"},{"en":"avoid work","es":"evitar el trabajo","sw":"epuka kazi"},{"en":"family time","es":"tiempo familiar","sw":"wakati wa familia"},{"en":"renew","es":"renovar","sw":"huisha / ongeza nguvu"},{"en":"blessings of the Sabbath","es":"bendiciones del día de reposo","sw":"baraka za Siku ya Sabato"},{"en":"sacrament meeting","es":"reunión sacramental","sw":"mkutano wa ekaristi"}],
        samplePhrase: {"en":"The Sabbath is a day to rest, worship, and renew your covenants through the sacrament — it recharges you for the week.","es":"El día de reposo es un día para descansar, adorar y renovar tus convenios por medio del sacramento — te recarga para la semana.","sw":"Sabato ni siku ya kupumzika, kuabudu, na kuhuisha agano lako kupitia ekaristi — inakupa nguvu kwa wiki nzima."},
      },
      {
        id: "commandments-4", lessonNumber: 4, title: "Tithing",
        scenario: "Missionaries explain the law of tithing and the blessings that follow faithful payment.",
        vocab: [{"en":"tithing","es":"diezmo","sw":"zaka"},{"en":"ten percent","es":"diez por ciento","sw":"asilimia kumi"},{"en":"increase","es":"aumento / ingresos","sw":"mapato / ongezeko"},{"en":"windows of heaven","es":"ventanas del cielo","sw":"madirisha ya mbinguni"},{"en":"pour out blessings","es":"derramar bendiciones","sw":"kumimina baraka"},{"en":"bishop","es":"obispo","sw":"askofu"},{"en":"tithing slip","es":"papeleta del diezmo","sw":"fomu ya zaka"},{"en":"honest tithe payer","es":"pagador honesto del diezmo","sw":"mlipaji wa zaka kwa uaminifu"},{"en":"fast offering","es":"ofrenda de ayuno","sw":"sadaka ya kufunga"},{"en":"financial sacrifice","es":"sacrificio financiero","sw":"dhabihu ya fedha"}],
        samplePhrase: {"en":"Tithing is ten percent of your increase — Malachi 3:10 promises God will open the windows of heaven to those who pay it faithfully.","es":"El diezmo es el diez por ciento de tus ingresos — Malaquías 3:10 promete que Dios abrirá las ventanas del cielo a quienes lo paguen fielmente.","sw":"Zaka ni asilimia kumi ya mapato yako — Malaki 3:10 inaahidi kwamba Mungu atafungua madirisha ya mbinguni kwa wanaolipa kwa uaminifu."},
      },
      {
        id: "commandments-5", lessonNumber: 5, title: "Prayer and Scripture Study",
        scenario: "Missionaries help an investigator build a daily habit of personal prayer and scripture reading.",
        vocab: [{"en":"personal prayer","es":"oración personal","sw":"sala binafsi / maombi ya mtu binafsi"},{"en":"kneel","es":"arrodillarse","sw":"piga magoti"},{"en":"address God","es":"dirigirse a Dios","sw":"mwambie Mungu / ongea na Mungu"},{"en":"give thanks","es":"dar gracias","sw":"shukuru"},{"en":"ask for needs","es":"pedir lo necesario","sw":"omba mahitaji yako"},{"en":"close in Christ's name","es":"cerrar en el nombre de Cristo","sw":"maliza kwa jina la Kristo"},{"en":"daily reading","es":"lectura diaria","sw":"kusoma kila siku"},{"en":"ponder","es":"meditar","sw":"tafakari / fikiria kwa kina"},{"en":"morning routine","es":"rutina matutina","sw":"ratiba ya asubuhi"},{"en":"spiritual habit","es":"hábito espiritual","sw":"tabia ya kiroho"}],
        samplePhrase: {"en":"A few minutes of prayer and scripture study each morning changes the whole day — it opens your heart to hear God.","es":"Unos minutos de oración y estudio de escrituras cada mañana cambia todo el día — abre tu corazón para escuchar a Dios.","sw":"Dakika chache za sala na kusoma maandiko kila asubuhi inabadilisha siku nzima — inafungua moyo wako kusikia Mungu."},
      },
      {
        id: "commandments-6", lessonNumber: 6, title: "Honesty and Integrity",
        scenario: "Missionaries teach the commandment to live honestly in all dealings — with God, others, and ourselves.",
        vocab: [{"en":"honesty","es":"honestidad","sw":"uaminifu / uadilifu"},{"en":"integrity","es":"integridad","sw":"uadilifu wa maadili"},{"en":"truthful","es":"veraz","sw":"mkweli"},{"en":"do not lie","es":"no mentiras","sw":"usiseme uongo"},{"en":"do not steal","es":"no robar","sw":"usiibe"},{"en":"keep promises","es":"cumplir promesas","sw":"weka ahadi"},{"en":"business dealings","es":"transacciones de negocio","sw":"shughuli za biashara"},{"en":"reputation","es":"reputación","sw":"sifa / heshima"},{"en":"consistent","es":"consistente","sw":"thabiti / wa kudumu"},{"en":"light and truth","es":"luz y verdad","sw":"nuru na ukweli"}],
        samplePhrase: {"en":"Being honest in all things — in business, with your family, with God — is a core commandment and a foundation of character.","es":"Ser honesto en todo — en los negocios, con la familia, con Dios — es un mandamiento fundamental y base del carácter.","sw":"Kuwa mkweli katika mambo yote — biashara, familia, na Mungu — ni amri ya msingi na nguzo ya tabia njema."},
      },
      {
        id: "commandments-7", lessonNumber: 7, title: "Attending Church After Baptism",
        scenario: "Missionaries explain the importance of consistent church attendance after baptism for spiritual growth and fellowship.",
        vocab: [{"en":"church attendance","es":"asistencia a la iglesia","sw":"kuhudhuria kanisa"},{"en":"sacrament","es":"sacramento","sw":"ekaristi / sakramenti"},{"en":"renew baptismal covenants","es":"renovar convenios bautismales","sw":"rudia agano la ubatizo"},{"en":"ward family","es":"familia de barrio","sw":"familia ya kata / familia ya kanisa"},{"en":"fellowship","es":"comunión / fraternidad","sw":"ushirika / undugu"},{"en":"Sunday meetings","es":"reuniones dominicales","sw":"mikutano ya Jumapili"},{"en":"home teachers","es":"maestros orientadores","sw":"walimu wa nyumbani"},{"en":"ministering","es":"ministerio","sw":"huduma / kutoa huduma"},{"en":"magnify calling","es":"magnificar el llamamiento","sw":"timiza wajibu wako kikamilifu"},{"en":"active member","es":"miembro activo","sw":"mwanachama anayehudhuria / mwanachama tendaji"}],
        samplePhrase: {"en":"Coming to church every Sunday keeps your covenants fresh and connects you to a ward family that will support you.","es":"Venir a la iglesia cada domingo mantiene frescos tus convenios y te conecta con una familia de barrio que te apoyará.","sw":"Kuja kanisani kila Jumapili kunaweka agano lako safi na kukuunganisha na familia ya kata ambayo itakusaidia."},
      },
      {
        id: "commandments-8", lessonNumber: 8, title: "Living the Gospel Every Day",
        scenario: "Missionaries help an investigator see how keeping the commandments is not a burden but a path to greater happiness.",
        vocab: [{"en":"lifestyle","es":"estilo de vida","sw":"mtindo wa maisha"},{"en":"habits","es":"hábitos","sw":"tabia"},{"en":"daily choices","es":"decisiones diarias","sw":"maamuzi ya kila siku"},{"en":"joy","es":"gozo","sw":"furaha ya kweli"},{"en":"peace","es":"paz","sw":"amani"},{"en":"burden","es":"carga","sw":"mzigo"},{"en":"light burden","es":"carga ligera","sw":"mzigo mwepesi"},{"en":"path to happiness","es":"camino a la felicidad","sw":"njia ya furaha"},{"en":"discipline","es":"disciplina","sw":"nidhamu"},{"en":"privilege not punishment","es":"privilegio no castigo","sw":"upendeleo si adhabu"}],
        samplePhrase: {"en":"The commandments are not a burden — they are the path God designed for us to find the greatest happiness and peace.","es":"Los mandamientos no son una carga — son el camino que Dios diseñó para que encontremos la mayor felicidad y paz.","sw":"Amri si mzigo — ni njia ambayo Mungu alituunda ili tupate furaha na amani ya juu kabisa."},
      },
    ],
  },
  {
    id: "church-service",
    emoji: "⛪",
    title: "Serving in the Church",
    tagline: "Coordinate meetings, callings, ordinances, and rides for branch members.",
    color: "#7C3AED",
    lessons: [
      {
        id: "church-service-1", lessonNumber: 1, title: "Teaching Assignments on Sunday",
        scenario: "A branch leader asks a member to give a talk or teach a lesson on Sunday in the Twin Falls Swahili branch.",
        vocab: [{"en":"teach a lesson","es":"dar una lección","sw":"kufundisha somo"},{"en":"will you speak","es":"¿hablarás?","sw":"je, utazungumza?"},{"en":"Sunday","es":"el domingo","sw":"Jumapili"},{"en":"talk (speech)","es":"el discurso","sw":"hotuba"},{"en":"topic","es":"el tema","sw":"mada"},{"en":"lesson manual","es":"el manual de lecciones","sw":"kitabu cha masomo"},{"en":"prepare","es":"prepararse","sw":"jiandae / jitayarishe"},{"en":"speaker","es":"el orador","sw":"mzungumzaji"},{"en":"fifteen minutes","es":"quince minutos","sw":"dakika kumi na tano"},{"en":"class","es":"la clase","sw":"darasa"}],
        samplePhrase: {"en":"Will you give a talk on Sunday? The topic is faith.","es":"¿Darás un discurso el domingo? El tema es la fe.","sw":"Je, utatoa hotuba Jumapili? Mada ni imani."},
      },
      {
        id: "church-service-2", lessonNumber: 2, title: "Assigning Opening and Closing Prayers",
        scenario: "The meeting conductor assigns members to give the opening and closing prayers before the meeting begins.",
        vocab: [{"en":"opening prayer","es":"la oración de apertura","sw":"maombi ya ufunguzi"},{"en":"closing prayer","es":"la oración de cierre","sw":"maombi ya kufunga"},{"en":"will you pray","es":"¿orarás?","sw":"je, utaomba?"},{"en":"bow your head","es":"inclinar la cabeza","sw":"inamisha kichwa"},{"en":"fold your arms","es":"kunja mikono","sw":"kunja mikono"},{"en":"in the name of Jesus Christ","es":"en el nombre de Jesucristo","sw":"kwa jina la Yesu Kristo"},{"en":"amen","es":"amén","sw":"amina"},{"en":"invocation","es":"la invocación","sw":"sala ya mwanzo"},{"en":"benediction","es":"la bendición final","sw":"sala ya mwisho"},{"en":"assigned to pray","es":"asignado para orar","sw":"amepewa kazi ya kuomba"}],
        samplePhrase: {"en":"Will you say the opening prayer on Sunday?","es":"¿Podrías dar la oración de apertura el domingo?","sw":"Je, unaweza kusema maombi ya ufunguzi Jumapili?"},
      },
      {
        id: "church-service-3", lessonNumber: 3, title: "Rides to Church",
        scenario: "A ward member offers a ride or calls to coordinate transportation so everyone can attend sacrament meeting.",
        vocab: [{"en":"ride to church","es":"el aventón a la iglesia","sw":"lifti kwenda kanisani"},{"en":"pick you up","es":"recogerte","sw":"kukuchukua"},{"en":"what time","es":"¿a qué hora?","sw":"saa ngapi?"},{"en":"your address","es":"tu dirección","sw":"anwani yako"},{"en":"Sunday morning","es":"el domingo por la mañana","sw":"Jumapili asubuhi"},{"en":"transportation","es":"el transporte","sw":"usafiri"},{"en":"on the way","es":"de camino","sw":"njiani"},{"en":"I can take you","es":"te puedo llevar","sw":"naweza kukupeleka"},{"en":"church building","es":"el edificio de la iglesia","sw":"jengo la kanisa"},{"en":"meeting time","es":"la hora de la reunión","sw":"saa ya mkutano"}],
        samplePhrase: {"en":"Can I pick you up for church on Sunday morning?","es":"¿Puedo recogerte para ir a la iglesia el domingo por la mañana?","sw":"Je, naweza kukuchukua kwenda kanisani Jumapili asubuhi?"},
      },
      {
        id: "church-service-4", lessonNumber: 4, title: "Administering the Sacrament",
        scenario: "Priesthood holders prepare and pass the sacrament in the branch meeting, using Swahili to coordinate with deacons.",
        vocab: [{"en":"sacrament","es":"el sacramento","sw":"sakramenti"},{"en":"bless the bread","es":"bendecir el pan","sw":"kubariki mkate"},{"en":"bless the water","es":"bendecir el agua","sw":"kubariki maji"},{"en":"pass the sacrament","es":"pasar el sacramento","sw":"kusambaza sakramenti"},{"en":"deacon","es":"el diácono","sw":"diakoni"},{"en":"priest","es":"el sacerdote (aarónico)","sw":"kasisi wa kanisa"},{"en":"remember Him","es":"recordarlo a Él","sw":"mkumbuke yeye"},{"en":"renew covenants","es":"renovar convenios","sw":"huisha agano"},{"en":"sacred ordinance","es":"ordenanza sagrada","sw":"tendo takatifu"},{"en":"witnesses","es":"los testigos","sw":"mashahidi"}],
        samplePhrase: {"en":"The sacrament is passed each week to help us remember Jesus Christ and renew our covenants.","es":"El sacramento se pasa cada semana para ayudarnos a recordar a Jesucristo y renovar nuestros convenios.","sw":"Sakramenti inasambazwa kila wiki kutusaidia kukumbuka Yesu Kristo na kuhuisha agano letu."},
      },
      {
        id: "church-service-5", lessonNumber: 5, title: "Baptism and Confirmation Day",
        scenario: "Leaders and missionaries coordinate the baptism service and the following Sunday confirmation for a new convert.",
        vocab: [{"en":"baptism service","es":"el servicio de bautismo","sw":"ibada ya ubatizo"},{"en":"schedule a date","es":"programar una fecha","sw":"panga tarehe"},{"en":"font","es":"la pila bautismal","sw":"beseni la ubatizo"},{"en":"white clothing","es":"la ropa blanca","sw":"nguo nyeupe"},{"en":"confirmation","es":"la confirmación","sw":"uthibitisho"},{"en":"laying on of hands","es":"la imposición de manos","sw":"kuweka mikono juu"},{"en":"gift of the Holy Ghost","es":"el don del Espíritu Santo","sw":"kipawa cha Roho Mtakatifu"},{"en":"authorized holder","es":"poseedor autorizado","sw":"mwenye mamlaka"},{"en":"following Sunday","es":"el domingo siguiente","sw":"Jumapili inayofuata"},{"en":"membership record","es":"el registro de membresía","sw":"kumbukumbu ya uanachama"}],
        samplePhrase: {"en":"After baptism on Saturday, you will be confirmed and receive the Gift of the Holy Ghost the following Sunday.","es":"Después del bautismo el sábado, serás confirmado y recibirás el Don del Espíritu Santo el domingo siguiente.","sw":"Baada ya ubatizo Jumamosi, utathibitishwa na kupokea Kipawa cha Roho Mtakatifu Jumapili inayofuata."},
      },
      {
        id: "church-service-6", lessonNumber: 6, title: "Conducting a Meeting and Extending Callings",
        scenario: "The branch president conducts sacrament meeting, sustains new callings, and makes announcements in Swahili.",
        vocab: [{"en":"conduct the meeting","es":"presidir la reunión","sw":"kuongoza mkutano"},{"en":"welcome everyone","es":"dar la bienvenida a todos","sw":"karibisha wote"},{"en":"opening hymn","es":"el himno de apertura","sw":"wimbo wa ufunguzi"},{"en":"sustain","es":"sostener","sw":"kuunga mkono"},{"en":"calling","es":"el llamamiento","sw":"wito wa kanisa"},{"en":"extend a calling","es":"extender un llamamiento","sw":"toa wito"},{"en":"released","es":"relevado","sw":"kuachiliwa kutoka kwa wito"},{"en":"branch president","es":"el presidente de rama","sw":"rais wa tawi"},{"en":"announcements","es":"los anuncios","sw":"matangazo"},{"en":"closing hymn","es":"el himno de clausura","sw":"wimbo wa kufunga"}],
        samplePhrase: {"en":"We will now begin our sacrament meeting. Will you please stand to be sustained in your new calling?","es":"Comenzaremos ahora nuestra reunión sacramental. ¿Se ponen de pie para ser sostenidos en su nuevo llamamiento?","sw":"Tutaanza sasa mkutano wetu wa sakramenti. Je, simama ili uthibitishwe katika wito wako mpya?"},
      },
    ],
  },
]
