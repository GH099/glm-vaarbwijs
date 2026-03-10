// Klein Vaarbewijs I & II - Complete Content Data
// Based on official CBR examination requirements

export interface Topic {
  id: string;
  title: string;
  description: string;
  content: ContentSection[];
  keyPoints: string[];
  pitfalls?: string[];
  quizQuestions?: QuizQuestion[];
}

export interface ContentSection {
  title: string;
  text: string;
  image?: string;
  imageCaption?: string;
  items?: { title: string; description: string; image?: string }[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  image?: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

// KVB1 Domain A - Wettelijke bepalingen
export const kvb1DomainA: Topic = {
  id: "kvb1-a",
  title: "KVB1 Domein A: Wettelijke bepalingen",
  description: "Reglementen, definities, lichten, tekens en vaarregels voor binnenwateren",
  keyPoints: [
    "BPR geldt op rivieren, kanalen en meren (behalve RPR-gebied)",
    "RPR geldt op de Rijn en zijrivieren",
    "SRW geldt op de Westerschelde",
    "SRE/BVA geldt op Eems-Dollard",
    "Voorrang verlenen ≠ medewerking verlenen",
    "Kleine schepen moeten uitwijken voor grote schepen",
    "Stuurboord = rechts, bakboord = links (vanuit het schip gezien)"
  ],
  pitfalls: [
    "Antwoorden die in BPR kloppen, zijn in RPR of SRW niet automatisch juist",
    "Verwar 'voorrang verlenen' niet met 'medewerking verlenen'",
    "A.12 (klein schip zonder motor) is niet hetzelfde als A.1a of A.1"
  ],
  content: [
    {
      title: "Reglementenkaart Nederland",
      text: "In Nederland gelden verschillende scheepvaartreglementen afhankelijk van het vaargebied. Het is essentieel om te weten welk reglement waar geldt, omdat de regels per gebied kunnen verschillen.",
      items: [
        { title: "BPR (Binnenvaartpolitiereglement)", description: "Geldt op rivieren, kanalen, meren en de Gouwzee. Dit is het hoofdreglement voor binnenwateren." },
        { title: "RPR (Rijnvaartpolitiereglement)", description: "Geldt op de Rijn en zijrivieren. Let op: andere definities en regels dan BPR!" },
        { title: "SRW (Scheepvaartreglement Westerschelde)", description: "Geldt op de Westerschelde (KVB2)." },
        { title: "SRE/BVA", description: "Geldt op Eems-Dollardgebied (KVB2)." },
        { title: "SRKGT", description: "Scheepvaartreglement Kanaal van Gent naar Terneuzen." },
        { title: "SRGM", description: "Scheepvaartreglement Gelderse Meren." }
      ]
    },
    {
      title: "Basisdefinities",
      text: "De volgende definities zijn cruciaal voor het begrijpen van de vaarregels:",
      items: [
        { title: "Stuurboord", description: "De rechterzijde van het schip, gezien in de vaarrichting." },
        { title: "Bakboord", description: "De linkerzijde van het schip, gezien in de vaarrichting." },
        { title: "Opvarenden", description: "Alle personen die zich aan boord bevinden." },
        { title: "Schipper", description: "Degene die het feitelijke gezag over een schip voert." },
        { title: "Klein schip", description: "Een schip waarvan de lengte minder dan 20 meter bedraagt." },
        { title: "Groot schip", description: "Een schip van 20 meter of langer, of een sleep met die lengte." },
        { title: "Hoofdvaarwater", description: "Het vaarwater dat doorgaand vaarverkeer dient." },
        { title: "Nevenvaarwater", description: "Een vaarwater dat uitmondt in een hoofdvaarwater." },
        { title: "Opvaart", description: "Vanuit de hoofdvaarwater de nevenvaarwater invaren." },
        { title: "Afvaart", description: "Vanuit de nevenvaarwater de hoofdvaarwater invaren." }
      ]
    },
    {
      title: "Navigatielichten voor kleine schepen",
      text: "Kleine schepen moeten specifieke navigatielichten voeren afhankelijk van hun type en activiteit. Deze lichten zijn 's nachts en bij slecht zicht verplicht.",
      items: [
        { title: "Toplicht", description: "Wit licht dat over een hoek van 225° schijnt (van recht vooruit tot 22,5° achterlijker dan dwars aan beide zijden)." },
        { title: "Rijkleurig licht stuurboord", description: "Groen licht dat over 112,5° schijnt van recht vooruit tot 22,5° achterlijker dan dwars aan stuurboord." },
        { title: "Rijkleurig licht bakboord", description: "Rood licht dat over 112,5° schijnt van recht vooruit tot 22,5° achterlijker dan dwars aan bakboord." },
        { title: "Heklicht", description: "Wit licht dat over 135° schijnt (van 67,5° aan elke zijde recht achteruit)." },
        { title: "Rondomlicht", description: "Licht dat over 360° schijnt." }
      ]
    },
    {
      title: "Verlichting klein motorschip (< 20m)",
      text: "Een klein motorschip in beweging moet voeren: toplicht, heklicht en beide rijkleurige lichten. Bij lengte < 7m mag de toplicht gecombineerd worden met het heklicht.",
      items: [
        { title: "Lengte ≥ 7m", description: "Aparte toplicht (vooraan), heklicht (achteraan), en rijkleurige lichten." },
        { title: "Lengte < 7m", description: "Gecombineerde toplicht+heklicht toegestaan, plus rijkleurige lichten indien uitvoerbaar." },
        { title: "Maximumsnelheid ≤ 7 knopen", description: "Alleen een rondom wit licht nodig (voor zover uitvoerbaar)." }
      ]
    },
    {
      title: "Dagtekens voor kleine schepen",
      text: "Bij dag moeten kleine schepen soms dagtekens voeren om hun status aan te duiden.",
      items: [
        { title: "Ankerend schip", description: "Eén zwarte bal in het voorste deel van het schip." },
        { title: "Grondgeraakt schip", description: "Drie zwarte bollen verticaal achter elkaar." },
        { title: "Stuurboord-op-stuurboord", description: "Twee zwarte kegels met toppen naar elkaar toe op het dichtstbijzijnde want." }
      ]
    },
    {
      title: "Geluidsseinen",
      text: "Geluidsseinen worden gebruikt om intenties en situaties aan te duiden, vooral bij beperkt zicht.",
      items: [
        { title: "Eén korte stoot", description: "Ik vaar stuurboord uit." },
        { title: "Twee korte stoten", description: "Ik vaar bakboord uit." },
        { title: "Drie korte stoten", description: "Ik vaar achteruit." },
        { title: "Vijf korte stoten", description: "Ik begrijp uw intenties niet / gevaar voor aanvaring." },
        { title: "Één lange stoot", description: "Ik nader een bocht ofrijkade waar ik niet omheen kan kijken." },
        { title: "Lange stoot elke 2 min", description: "Onderweg bij slecht zicht (motorschip)." },
        { title: "Lange + 2 korte stoten elke 2 min", description: "Onderweg bij slecht zicht (zeilschip, vissend schip, of slecht manoeuvreerbaar)." }
      ]
    },
    {
      title: "Vaarregels - Basisprincipes",
      text: "De belangrijkste vaarregels bepalen wie voorrang heeft en wie moet uitwijken.",
      items: [
        { title: "Koerskruisen", description: "Schepen die koerskruisen: het schip dat de ander aan stuurboord ziet, moet uitwijken (soortgelijke schepen)." },
        { title: "Tegemoetkomen", description: "Beide schepen wijken uit naar stuurboord." },
        { title: "Oplopen", description: "Het oplopend schip moet voorrang verlenen en aan stuurboord voorbijlopen." },
        { title: "Hoofd- en nevenvaarwater", description: "Schepen op het hoofdvaarwater hebben voorrang op schepen op het nevenvaarwater." },
        { title: "Havens", description: "Uitvarend schip heeft voorrang op invarend schip." },
        { title: "Klein vs Groot", description: "Kleine schepen moeten uitwijken voor grote schepen." },
        { title: "Motor vs Zeil", description: "Motorschepen wijken uit voor zeilschepen (behalve grote motorschepen)." }
      ]
    },
    {
      title: "Voorrang vs Medewerking",
      text: "Dit is een cruciaal onderscheid dat vaak fout gaat in examens!",
      items: [
        { title: "Voorrang verlenen", description: "Het andere schip mag zijn koers en snelheid behouden. Jij moet tijdig en duidelijk uitwijken." },
        { title: "Medewerking verlenen", description: "Het andere schip heeft ook verplichtingen en moet zelf ook maatregelen nemen. Het mag zijn koers en snelheid NIET automatisch behouden." }
      ]
    },
    {
      title: "Bruggen en sluizen",
      text: "Bij bruggen en sluizen gelden specifieke regels en tekens.",
      items: [
        { title: "Brug gesloten", description: "Rood licht of twee rode lichten verticaal: niet doorvaren." },
        { title: "Brug openend", description: "Groen licht knipperend: langzaam naderen, brug gaat open." },
        { title: "Brug open", description: "Groen licht vast of wit licht: doorvaren toegestaan." },
        { title: "Sluis invaren", description: "Wacht op toestemming (sein of brugwachter). Rood = wachten, Groen = varen." },
        { title: "Brugtekens", description: "A.1 = verboden doorvaren, A.5 = verboden voor kleine schepen, B.1 = voorrang voor tegenliggers." }
      ]
    },
    {
      title: "Slecht zicht",
      text: "Bij zicht minder dan 1000 meter gelden speciale regels.",
      items: [
        { title: "Snelheid aanpassen", description: "Vaar met een veilige snelheid, aangepast aan de omstandigheden." },
        { title: "Geluidsseinen", description: "Geef de juiste geluidsseinen (lange stoot elke 2 min)." },
        { title: "Navigatorische verlichting", description: "Voer de verplichte lichten." },
        { title: "Marifoon", description: "Luister mee op het juiste kanaal en geef positie door indien nodig." },
        { title: "Radargebruik", description: "Gebruik radar indien beschikbaar." }
      ]
    },
    {
      title: "Stilliggen",
      text: "Regels voor het stilliggan en ankeren.",
      items: [
        { title: "Niet in vaargeul", description: "Mag niet in de vaargeul of vaarweg stilliggen." },
        { title: "Niet bij brug/sluis", description: "Minimale afstand tot bruggen en sluizen." },
        { title: "Ankerlicht", description: "Wit rondomlicht zichtbaar op 2 zeemijl." },
        { title: "Ankerteken", description: "Zwarte bal in de voorsteven bij dag." }
      ]
    },
    {
      title: "Snelle motorboten",
      text: "Speciale regels voor snelle motorboten (> 20 km/uur).",
      items: [
        { title: "Definitie", description: "Motorboot die harder kan varen dan 20 km/uur." },
        { title: "Voorrang", description: "Snelle motorboten moeten uitwijken voor alle andere schepen." },
        { title: "Verlichting", description: "Extra toplicht achteraan (gele driehoek naar beneden als dagteken)." },
        { title: "Waterski", description: "Alleen waar toegestaan (teken E.17)." }
      ]
    }
  ]
};

// KVB1 Domain B - Voortstuwing, veiligheid en milieu
export const kvb1DomainB: Topic = {
  id: "kvb1-b",
  title: "KVB1 Domein B: Voortstuwing, veiligheid en milieu",
  description: "Motorkennis, veiligheidsvoorzieningen, brandpreventie en reddingsmiddelen",
  keyPoints: [
    "Diesel is veiliger dan benzine (minder brandgevaarlijk)",
    "Koelsysteem: open = zeewater, gesloten = zoet water met antivries",
    "Branddriehoek: brandstof + zuurstof + temperatuur",
    "Brandklassen: A (vast), B (vloeistof), C (gas), D (metaal), F (frituurvet)",
    "Reddingsvest ≠ zwemvest - reddingsvest draait je op de rug",
    "100N = volwassenen, 150N = zee, 275N = zware kleding"
  ],
  pitfalls: [
    "Water en vuil in het brandstofsysteem kan de motor stil doen vallen",
    "Impeller controle is essentieel - zonder koelwater loopt de motor stuk",
    "Benzinedampen zwaarder dan lucht - verzamelen zich in het ruim"
  ],
  content: [
    {
      title: "Motorsoorten",
      text: "De drie belangrijkste types voortstuwing voor pleziervaartuigen:",
      items: [
        { title: "Dieselmotor", description: "Veilig (minder brandgevaarlijk), zuinig, hoog koppel, geen bougies, zwaarder. Brandstof wordt door compressie ontstoken." },
        { title: "Benzinemotor", description: "Lichter, stiller, meer pk per kg, maar brandgevaarlijker. Benzinedampen zijn zwaarder dan lucht en verzamelen zich in het ruim. Vereist ventilatie!" },
        { title: "Elektrische voortstuwing", description: "Stil, geen directe emissie, beperkte actieradius, lange laadtijd. Accucapaciteit bepaalt vaartijd." }
      ]
    },
    {
      title: "Koelsystemen",
      text: "Motoren moeten gekoeld worden om oververhitting te voorkomen.",
      items: [
        { title: "Open koelsysteem", description: "Zeewater wordt direct door de motor gepompt. Gevaar voor corrosie en verstopping. Bij vorst moet motor leeglopen." },
        { title: "Gesloten koelsysteem", description: "Zoet water met antivries circuleert door motor. Warmte wordt via warmtewisselaar aan zeewater afgegeven. Beter beschermd tegen vorst." },
        { title: "Gecombineerd systeem", description: "Combinatie van beide systemen." },
        { title: "Impeller", description: "Het pompwieltje dat koelwater rondpompt. Drooglopen vernielt de impeller - altijd controleren!" }
      ]
    },
    {
      title: "Aandrijflijn",
      text: "De componenten die de motor met de schroef verbinden.",
      items: [
        { title: "Keerkoppeling", description: "Maakt vooruit, achteruit en vrij mogelijk zonder de motor te stoppen." },
        { title: "Schroefas", description: "Verbindt de motor met de schroef. Vet-, olie- of watergesmeerd." },
        { title: "Breekpen/Slipslof", description: "Beschermt de aandrijflijn bij schokbelasting. Breekt bij overbelasting om schade te voorkomen." }
      ]
    },
    {
      title: "Stuurinrichtingen",
      text: "Verschillende systemen om het schip te sturen.",
      items: [
        { title: "Buitenboordmotor", description: "Helmstok of stuurwiel, motor draait mee voor sturing. Eenvoudig, directe controle." },
        { title: "Mechanisch stuurwiel", description: "Kabels of stangen verbinden het stuurwiel met het roer. Vereist onderhoud en correcte spanning." },
        { title: "Hydraulisch sturen", description: "Hydraulische vloeistof verbindt stuurwiel met roer. Soepeler, geen speling, maar periodieke controle nodig." },
        { title: "Stuurautomaat", description: "Automatische koershouder. Handig bij lange tochten, maar blijft sturing vereisen." }
      ]
    },
    {
      title: "Controles voor vertrek",
      text: "Controleer voor elke vaart systematisch de volgende punten:",
      items: [
        { title: "Oliepeil en oliedruk", description: "Controleer oliepeil met de peilstok. Let op oliekleur (melkachtig = koelwater in olie)." },
        { title: "Koeling", description: "Controleer koelvloeistofpeil en impeller. Test koelwateruitlaat bij start." },
        { title: "Brandstof", description: "Controleer brandstofpeil en filter op water/vuil. Waterafscheider controleren." },
        { title: "Accu's", description: "Controleer spannung en aansluitingen. Laadcontrole tijdens varen." },
        { title: "Luchttoevoer", description: "Zorg voor voldoende ventilatie bij benzinemotoren." }
      ]
    },
    {
      title: "Signalen tijdens varen",
      text: "Let op deze waarschuwingssignalen tijdens de vaart:",
      items: [
        { title: "Uitlaatgas kleur", description: "Blauw = olieverbranding, Wit = water in verbrandingsruimte, Zwart = onvolledige verbranding." },
        { title: "Koelwaterstraal", description: "Controleer of er koelwater uit de uitlaat komt. Geen water = koelingsprobleem!" },
        { title: "Temperatuur", description: "Stijgende temperatuur = koelingsprobleem, onmiddellijk onderzoeken." },
        { title: "Oliedruk", description: "Dalende druk = serieus probleem, motor stoppen." },
        { title: "Laadspanning", description: "Controleer dat de dynamo laadt (meestal 13.8-14.4V)." }
      ]
    },
    {
      title: "Brandpreventie",
      text: "Brandpreventie is essentieel aan boord. Begrijp de branddriehoek:",
      items: [
        { title: "Branddriehoek", description: "Brand ontstaat alleen als brandstof + zuurstof + temperatuur (ontsteking) samenkomen. Verwijder één factor en de brand dooft." },
        { title: "Gasinstallatie", description: "LPG is zwaarder dan lucht - lekkages zakken naar het laagste punt. Gasfles buiten of in geventileerd ruim. Afsluiten na gebruik!" },
        { title: "Benzinedampen", description: "Benzinedampen zijn zwaarder dan lucht en zeer ontvlambaar. Ventilatie voor start verplicht!" },
        { title: "Elektriciteit", description: "Niet overbelasten, correcte zekeringen, goede verbindingen. Warme kabels = gevaar!" }
      ]
    },
    {
      title: "Brandklassen en Blusmiddelen",
      text: "Verschillende soorten brand vereisen verschillende blusmiddelen:",
      items: [
        { title: "Klasse A (Vaste stoffen)", description: "Hout, papier, textiel. Blus met water, schuim of poeder." },
        { title: "Klasse B (Vloeistoffen)", description: "Benzine, olie, diesel. Blus met schuim, poeder of CO2. GEEN water!" },
        { title: "Klasse C (Gassen)", description: "Butaan, propaan. Eerst gas afsluiten, dan blussen." },
        { title: "Klasse D (Metalen)", description: "Magnesium, natrium. Speciaal bluspoeder." },
        { title: "Klasse F (Frituurvet)", description: "Kookvetbrand. Speciaal vetblusmiddel of blusdeken." }
      ]
    },
    {
      title: "Reddingsmiddelen",
      text: "Essentiële veiligheidsuitrusting aan boord:",
      items: [
        { title: "Reddingsvest", description: "Draait een bewusteloos persoon op de rug. Drijfvermogen in Newton (N). 100N minimum voor volwassenen, 150N voor zee, 275N voor zware kleding." },
        { title: "Zwemvest", description: "Niet geschikt voor bewustelozen - draait NIET op de rug. Alleen voor zwemmers, niet als reddingsmiddel!" },
        { title: "Reddingsboei", description: "Met lijn om naar een drenkeling te werpen. Must-have aan boord." },
        { title: "Joon", description: "Drijvende markeerder bij MOB (man overboord)." },
        { title: "MOB-functie GPS", description: "Druk op MOB-knop om positie vast te leggen bij man overboord." }
      ]
    },
    {
      title: "Overige veiligheidsvoorzieningen",
      text: "Andere belangrijke veiligheidsitems:",
      items: [
        { title: "Zeereling", description: "Beschermt tegen overboord vallen. Minimale hoogte vereist." },
        { title: "Vluchtluik", description: "Nooduitgang bij brand of zinken." },
        { title: "Lenspomp", description: "Verwijdert water uit het ruim. Controleer werking!" },
        { title: "Radarreflector", description: "Maakt klein schip zichtbaar op radar van grote schepen." },
        { title: "Vuilwatertank", description: "Wettelijk verplicht - geen vuil water overboord!" }
      ]
    }
  ]
};

// KVB1 Domain C - Waterwegen, vaarwater en meteorologie
export const kvb1DomainC: Topic = {
  id: "kvb1-c",
  title: "KVB1 Domein C: Waterwegen, vaarwater en meteorologie",
  description: "Betonning, verkeerstekens, peilen, kaartlezen en weerkunde",
  keyPoints: [
    "Signi-systeem: laterale markering toont vaarwaterzijde",
    "Rood = bakboord, Groen = stuurboord (vanuit zee komend)",
    "Cardinale markering: Noord, Oost, Zuid, West - wijst veilige kant",
    "NAP = Normaal Amsterdams Peil (referentiepunt)",
    "Beaufort-schaal: windkracht 0-12",
    "Hogedruk = mooi weer, Lagere druk = slecht weer"
  ],
  pitfalls: [
    "E.21 (snelle motorboot) betekent NIET automatisch dat waterskiën is toegestaan - daarvoor is E.17 nodig",
    "Betonningsrichting kan anders zijn dan stroomrichting"
  ],
  content: [
    {
      title: "Het Signi-systeem",
      text: "Het internationale betonningssysteem (IALA Region A) markeert vaargeulen en gevaren.",
      items: [
        { title: "Principe", description: "Betonning wijst de veilige vaarwateren en markeert gevaren. De betonningsrichting loopt meestal vanuit zee landinwaarts." },
        { title: "Laterale markering", description: "Geeft de zijde van het vaarwater aan. Rood = bakboord (links), Groen = stuurboord (rechts) vanuit betonningsrichting gezien." },
        { title: "Cardinale markering", description: "Markeert gevaar en geeft aan welke kant veilig is (Noord, Oost, Zuid, West)." },
        { title: "Winterbetonning", description: "Vereenvoudigde betonning in winterperiode." }
      ]
    },
    {
      title: "Laterale markering",
      text: "Markeert de zijden van een vaargeul. Kleur en vorm zijn belangrijk!",
      items: [
        { title: "Bakboord (rood)", description: "Rode ton (stompe top) of rode boei (cylindrisch). Toplicht: rood. Houd aan bakboord (links) bij varen." },
        { title: "Stuurboord (groen)", description: "Groene ton (spitse top) of groene boei (conisch). Toplicht: groen. Houd aan stuurboord (rechts) bij varen." },
        { title: "Betonningsrichting", description: "De richting waarin het vaarwater wordt betond, meestal vanuit zee landinwaarts." }
      ]
    },
    {
      title: "Cardinale markering",
      text: "Geeft aan waar gevaar ligt en welke kant veilig is. De naam wijst naar de veilige kant.",
      items: [
        { title: "Noord-kardinaal", description: "Veilig aan de NOORDzijde. Zwart-geel (boven zwart). Topkenmerken: twee zwarte kegels met punten omhoog. Lichtritme: continu flitsend." },
        { title: "Oost-kardinaal", description: "Veilig aan de OOSTzijde. Zwart-geel-zwart. Topkenmerken: twee zwarte kegels met punten van elkaar af. Lichtritme: 3 flitsen." },
        { title: "Zuid-kardinaal", description: "Veilig aan de ZUIDzijde. Geel-zwart (boven geel). Topkenmerken: twee zwarte kegels met punten omlaag. Lichtritme: 6 flitsen + lange flits." },
        { title: "West-kardinaal", description: "Veilig aan de WESTzijde. Geel-zwart-geel. Topkenmerken: twee zwarte kegels met punten naar elkaar toe. Lichtritme: 9 flitsen." }
      ]
    },
    {
      title: "Overige markering",
      text: "Andere soorten betonning:",
      items: [
        { title: "Afzonderlijk gevaar", description: "Markeert een geïsoleerd gevaar. Zwart-rood-zwart gestreept met twee zwarte ballen bovenop. Licht: 2 flitsen (groep)." },
        { title: "Veilig vaarwater", description: "Markeert het midden van een vaargeul of landinwaartse zijde. Rood-wit gestreept met rode bol bovenop. Licht: 1 lange flits elke 10 sec." },
        { title: "Bijzondere markering", description: "Markeert speciale gebieden (militair, recreatie, etc.). Geel met kruis bovenop. Licht: geel, ritme naar keuze." }
      ]
    },
    {
      title: "Verkeerstekens (BPR Bijlage 7)",
      text: "Verbods- en gebodstekens langs de vaarweg:",
      items: [
        { title: "A-tekens (Verbodstekens)", description: "Rond wit bord met rode rand. A.1 = Verboden doorvaren, A.5 = Verboden voor kleine schepen, A.12 = Verboden voor schepen zonder motor." },
        { title: "B-tekens (Gebodstekens)", description: "Rond blauw bord met wit symbool. B.1 = Voorrang verlenen, B.2 = Voorrang hebben." },
        { title: "E-tekens (Aanbevelingen/beperkingen)", description: "Vierkant blauw bord. E.1 = Maximumsnelheid, E.17 = Waterskiën toegestaan, E.21 = Snelle motorboten toegestaan." }
      ]
    },
    {
      title: "Peilen en hoogten",
      text: "Waterstanden en brughoogten worden uitgedrukt ten opzichte van referentiepeilen.",
      items: [
        { title: "NAP", description: "Normaal Amsterdams Peil. Het nationale referentievlak voor waterstanden en hoogten." },
        { title: "Kanaalpeil", description: "Het streefpeil in een kanaal, meestal constant gehouden door stuwen." },
        { title: "Stuwpeil", description: "Het waterpeil direct boven een stuw." },
        { title: "Zomerpeil/Winterpeil", description: "Seizoensgebonden streefpeilen. Winterpeil vaak lager voor waterberging." },
        { title: "Actuele waterstand", description: "De werkelijke waterstand op een bepaald moment. Af te lezen op peilschalen." }
      ]
    },
    {
      title: "Brughoogten en waterdiepten",
      text: "Berekeningen voor veilig doorvaren:",
      items: [
        { title: "Brughoogte", description: "Hoogte van brug tot wateroppervlak. Let op: dit is vaak bij een bepaald peil! Bij hoger water = minder doorvaarthoogte." },
        { title: "Hoogteschaal", description: "Schaal bij bruggen die de doorvaarthoogte aangeeft." },
        { title: "Waterdiepte", description: "Diepte ten opzichte van het referentievlak. Actuele diepte = kaartdiepte + actuele waterstand - referentiepeil." },
        { title: "Diepgang", description: "De afstand van de waterlijn tot het diepste punt van het schip. Onderwaterhoogte." }
      ]
    },
    {
      title: "Kaartlezen",
      text: "Basisvaardigheden voor het lezen van waterkaarten:",
      items: [
        { title: "Schaal", description: "De verhouding tussen kaart en werkelijkheid. 1:25.000 = 1 cm op kaart is 250 m in werkelijkheid." },
        { title: "Afstanden", description: "Meten met passer of lineaal, omrekenen via schaal." },
        { title: "Legenda", description: "De verklaring van alle kaarttekens en symbolen." },
        { title: "Nautische publicaties", description: "HP33 (stroomatlas), getijtafels, Berichten aan Zeevarenden." }
      ]
    },
    {
      title: "Meteorologie - Basis",
      text: "Elementaire weerkunde voor de watersporter:",
      items: [
        { title: "Windrichting", description: "De richting VANAF waar de wind komt. Noordenwind komt uit het noorden." },
        { title: "Windkracht", description: "Uitgedrukt in Beaufort (0-12). BF 0 = windstil, BF 4 = matig, BF 7 = hard, BF 10 = storm." },
        { title: "Ruimende wind", description: "Wind draait met de klok mee (bijv. van Oost naar Zuid)." },
        { title: "Krimpende wind", description: "Wind draait tegen de klok in (bijv. van West naar Zuid)." }
      ]
    },
    {
      title: "Druksystemen",
      text: "Hoge- en lagedrukgebieden bepalen het weer:",
      items: [
        { title: "Hogedrukgebied (H)", description: "Lucht daalt, wolken lossen op. Meestal mooi weer met weinig wind. Op de noordelijke halfrond draait de wind met de klok mee rond een H." },
        { title: "Lagedrukgebied (L)", description: "Lucht stijgt, wolken vormen. Vaak slecht weer met regen en wind. Op de noordelijke halfrond draait de wind tegen de klok in rond een L." },
        { title: "Isobaren", description: "Lijnen op een weerkaart die punten met gelijke luchtdruk verbinden. Dichte isobaren = veel wind." },
        { title: "Barometer", description: "Meet luchtdruk. Dalende druk = naderend slecht weer. Stijgende druk = beter weer." }
      ]
    },
    {
      title: "Weeralarm en waarschuwingen",
      text: "Let op officiële waarschuwingen:",
      items: [
        { title: "Windwaarschuwing", description: "Kan worden uitgegeven bij windkracht 6 of meer. Kleine schepen: zoek beschutting." },
        { title: "Weeralarm", description: "Officieel alarm voor gevaarlijk weer. Oranje = code oranje, rood = code rood." },
        { title: "Beperkt zicht", description: "Zicht < 1000m. Pas snelheid aan, voer correcte seinen." }
      ]
    }
  ]
};

// KVB1 Domain D - Varen en manoeuvreren
export const kvb1DomainD: Topic = {
  id: "kvb1-d",
  title: "KVB1 Domein D: Varen en manoeuvreren",
  description: "Schroefwerking, manoeuvres, zuiging, ankeren, schutten, MOB en slepen",
  keyPoints: [
    "Schroefwerking: het water wordt achteruit gestuwd, schip gaat vooruit",
    "Wieleffect: bij achteruit draait de hek naar stuurboord (bij rechtsdraaiende schroef)",
    "Zuiging: bij voorbijlopen van groot schip - groot overheerst klein",
    "Ankeren: 3x de waterdiepte aan lijn bij rustig weer",
    "MOB: Williamson turn of directe koerswijziging",
    "Schutten: goed vastzetten, let op zuiging"
  ],
  pitfalls: [
    "Kandidaten onderschatten de zuiging van een groot schip op een klein schip",
    "Bij boegschroefvragen: schipbeweging is tegengesteld aan het water dat weggeblazen wordt",
    "Manoeuvrevragen kunnen meerdere correcte antwoorden hebben"
  ],
  content: [
    {
      title: "Typen voortstuwing",
      text: "Verschillende voortstuwingssystemen en hun eigenschappen:",
      items: [
        { title: "Vaste schroefas", description: "Schroef is vast gemonteerd op een as die door de romp gaat. Betrouwbaar, weinig onderhoud." },
        { title: "Buitenboordmotor", description: "Motor, aandrijving en schroef in één eenheid buiten de boot. Draaibaar voor sturing." },
        { title: "Hekaandrijving (Stern drive)", description: "Motor binnenin, aandrijving buiten de boot. Combineert voordelen van binnen- en buitenboord." },
        { title: "Waterstraalaandrijving", description: "Geen externe schroef. Water wordt aangezogen en met hoge snelheid uitgestoten. Ondiepe vaart, wendbaar." },
        { title: "Boegschroef", description: "Transversale schroef in de boeg voor zijwaartse beweging. Ideaal voor aanleggen." },
        { title: "Klapschroef", description: "Schroefbladen kunnen inklappen. Minder weerstand bij zeilen, duurder." }
      ]
    },
    {
      title: "Schroefwerking en wieleffect",
      text: "Hoe de schroef het schip voortbeweegt en beïnvloedt:",
      items: [
        { title: "Schroefwerking vooruit", description: "De schroef duwt water achteruit, het schip gaat vooruit. Reactiekracht." },
        { title: "Schroefwerking achteruit", description: "De schroef zuigt water aan en duwt het vooruit, het schip gaat achteruit." },
        { title: "Wieleffect (vooruit)", description: "Bij een rechtsdraaiende schroef duwt de waterstroom tegen het roer. Gering effect." },
        { title: "Wieleffect (achteruit)", description: "De waterstroom komt tegen de romp. Bij rechtsdraaiende schroef gaat de hek naar stuurboord! De boeg gaat naar bakboord." },
        { title: "Spoed", description: "De afstand die de schroef aflegt bij één omwenteling in vaste stof." },
        { title: "Stopweg", description: "De afstand die een schip nodig heeft om te stoppen. Veel groter dan bij auto's!" }
      ]
    },
    {
      title: "Roerwerking",
      text: "Hoe het roer werkt bij verschillende snelheden en richtingen:",
      items: [
        { title: "Vooruit varen", description: "Roer werkt direct. Meer snelheid = meer roerwerking." },
        { title: "Achteruit varen", description: "Roer werkt tegenovergesteld! Stuurboord roer = hek naar bakboord = boeg naar stuurboord." },
        { title: "Geen vaart", description: "Roer werkt niet zonder waterstroming. Gebruik schroefwerking voor manoeuvreren." },
        { title: "Draaien op ruim water", description: "Vaart genoeg om te draaien. Ruimte om te keren." },
        { title: "Draaien op smal water", description: "Gebruik 'kort draaien' of 'keren over stuurboord/bakboord'." }
      ]
    },
    {
      title: "Aankomen en afvaren",
      text: "De basismanoeuvres voor aanleggen en vertrekken:",
      items: [
        { title: "Aankomen zonder wind/stroom", description: "Naderen onder kleine hoek, stapsgewijs afremmen, lijnen gereed." },
        { title: "Aankomen met wind van land", description: "Wind duwt schip van de kant af. Steviger aanleggen nodig." },
        { title: "Aankomen met wind van water", description: "Wind duikt schip naar de kant. Voorzichtig! Gebruik spring om te remmen." },
        { title: "Afvaren zonder wind/stroom", description: "Achteruit van de kant af, dan draaien en vertrekken." },
        { title: "Afvaren met wind", description: "Gebruik de wind: bij wind van land - laat schip afdrijven; bij wind van water - duw af en maak snel vaart." }
      ]
    },
    {
      title: "Meren en ontmeren",
      text: "Correct gebruik van lijnen en technieken:",
      items: [
        { title: "Voor-/achtertros", description: "Lijnen van de voor- en achtersteven naar de kant. Houden het schip op zijn plaats." },
        { title: "Spring", description: "Lijn die schuin loopt. Veenpring: van voorschip naar achteren. Achterspring: van achterschip naar voren. Gebruikt voor afremmen en sturen." },
        { title: "Stootwil", description: "Beschermt het schip tegen de kant. Altijd tussen schip en kant." },
        { title: "Stroom doodvaren", description: "Bij aanmeren met stroom: eerst de voorkant vast, laat het schip 'dood' varen op de stroom." },
        { title: "Krachten op lijnen", description: "Spanning moet gelijkmatig. Te strak = gevaar bij waterstandsverandering." }
      ]
    },
    {
      title: "Boegschroef manoeuvres",
      text: "Gebruik van de boegschroef voor nauwkeurig manoeuvreren:",
      items: [
        { title: "Principe", description: "De boegschroef blaast water naar één kant, de boeg gaat de andere kant op. Actie = reactie." },
        { title: "Naar bakboord draaien", description: "Boegschroef blaast water naar stuurboord, boeg gaat naar bakboord." },
        { title: "Naar stuurboord draaien", description: "Boegschroef blaast water naar bakboord, boeg gaat naar stuurboord." },
        { title: "Beperkingen", description: "Werkt alleen bij lage snelheid. Beperkte kracht. Accugebruik!" }
      ]
    },
    {
      title: "Zuiging en golfslag",
      text: "Belangrijke effecten bij het passeren van andere schepen:",
      items: [
        { title: "Zuiging", description: "Tussen passerende schepen ontstaat onderdruk door het snel stromende water. Schepen worden naar elkaar toe getrokken." },
        { title: "Groot vs Klein", description: "Groot schip overheerst: het kleine schip wordt naar het grote toe gezogen. Ontwijk effect met tegenroer." },
        { title: "Retourstroom", description: "Achter een passerend schip keert het water terug. Kan de hek van je schip naar zich toe trekken." },
        { title: "Volgstroom", description: "Water stroomt mee met een passerend schip. Kan je meenemen in de vaarrichting van het andere schip." },
        { title: "Golfslag", description: "Golven van passerende schepen kunnen gevaarlijk zijn. Overstag gaan op de top van de golf." },
        { title: "Factoren", description: "Diepte, breedte, natte doorsnede van de vaarweg en snelheid beïnvloeden de zuiging." }
      ]
    },
    {
      title: "Ankeren",
      text: "Technieken en veiligheid bij het ankeren:",
      items: [
        { title: "Ankerkeuze", description: "Danforth (zand/slik), Bruce (rots), Hall (algemeen). Elk type heeft zijn eigen bodem." },
        { title: "Ankerlijn lengte", description: "Minimaal 3x de waterdiepte bij rustig weer. Bij stroom of wind: meer lijn." },
        { title: "Ankerketting", description: "Ketting tussen anker en lijn. Voorkomt dat de lijn doorsnijdt en geeft gewicht." },
        { title: "Krabben", description: "Het anker sleept over de bodem. Niet gewenst! Meer lijn uitgeven." },
        { title: "Ankerboei", description: "Markeert de ankerpositie. Andere schepen kunnen zien waar je ligt." },
        { title: "Neuringlijn", description: "Extra lijn om het anker te bergen bij problemen." },
        { title: "Stromend water", description: "Ankeren met de stroom mee. Lijn lang genoeg voor keringsverloop." }
      ]
    },
    {
      title: "Schutten",
      text: "Veilig door sluizen gaan:",
      items: [
        { title: "Voorbereiding", description: "Lijnen gereed, stootwillen klaar, instructies van sluiswachter opvolgen." },
        { title: "Invaren", description: "Rustig invaren, plaats aanwijzen door sluiswachter. Met stroom: motor aan! Doorverticallijnen als ankerpunt." },
        { title: "Omhoog schutten", description: "Water stijgt, voer lijn uit. Let op zuiging bij binnenkomend water." },
        { title: "Omlaag schutten", description: "Water daalt, haal lijn in. Schip zakt mee." },
        { title: "Met beroepsvaart", description: "Geef voorrang aan beroepsvaart. Blijf uit de buurt van grote schepen (zuiging!)." },
        { title: "Dode hoek", description: "Het gebied rondom een groot schip dat de schipper niet kan zien. Blijf uit de dode hoek!" }
      ]
    },
    {
      title: "Man Overboord (MOB)",
      text: "Procedure bij iemand overboord:",
      items: [
        { title: "Onmiddellijk", description: "ROEP 'MAN OVERBOORD', wijs naar de drenkeling, gooi reddingsmateriaal." },
        { title: "Markeer positie", description: "Druk MOB-knop op GPS, gooi joon, noteer positie." },
        { title: "Williamson turn", description: "Stuurboord 60°, daarna bakboord tot koers 180° anders. Brengt je terug op eigen spoor." },
        { title: "Terugvinden", description: "Langzaam naderen tegen de wind/stroom in. Laat de drenkeling aan de kant van de wind liggen." },
        { title: "Aan boord nemen", description: "Gebruik zwemtrap, lier, of sleep de drenkeling over de achterkant. Pas op voor onderkoeling!" }
      ]
    },
    {
      title: "Slepen",
      text: "Principes van slepen en gesleept worden:",
      items: [
        { title: "Sleeplijn", description: "Voldoende lengte (minimaal 3x de lengte van het schip). Damping door elasticiteit." },
        { title: "Langszij gekoppeld", description: "Beide schepen naast elkaar. Gebruik stootwillen en meerdere lijnen." },
        { title: "Sturen door bocht", description: "Sleepboot stuurt, sleep volgt. Brede bocht maken, sleep heeft meer ruimte nodig." },
        { title: "Verantwoordelijkheid", description: "De schipper van het slepende schip is verantwoordelijk voor de hele sleep." }
      ]
    },
    {
      title: "Aan de grond lopen",
      text: "Wat te doen bij aanvaring met de bodem:",
      items: [
        { title: "Motor stoppen", description: "Voorkom verdere schade door de schroef." },
        { title: "Positie bepalen", description: "Waar zit je vast? Hoe diep is het daar?" },
        { title: "Getij gebruiken", description: "Bij opkomend tij: wachten tot er genoeg water is. Bij afgaand tij: snel actie!" },
        { title: "Lichteren", description: "Gewicht verplaatsen om diepgang te verminderen." },
        { title: "Hulp inschakelen", description: "Andere schepen, sleepdienst, of hulpdiensten." }
      ]
    }
  ]
};

// KVB2 Domain E - Wettelijke bepalingen ruime vaarwateren
export const kvb2DomainE: Topic = {
  id: "kvb2-e",
  title: "KVB2 Domein E: Wettelijke bepalingen ruime vaarwateren",
  description: "SRW, SRE/BVA en BPR op de Waddenzee, IJsselmeer en Oosterschelde",
  keyPoints: [
    "SRW = Scheepvaartreglement Westerschelde",
    "SRE/BVA = Eems-Dollard gebied",
    "Op ruime vaarwateren: herken eerst het reglement, pas dan de regels toe",
    "BPR geldt op Waddenzee, IJsselmeer, Markermeer, IJmeer en Oosterschelde",
    "Binnenvaren vaargeul: voorrang voor schepen in de vaargeul"
  ],
  content: [
    {
      title: "Toepassingsgebied SRW",
      text: "Het Scheepvaartreglement Westerschelde (SRW) geldt op de Westerschelde en de bijbehorende redegebieden.",
      items: [
        { title: "Westerschelde", description: "Het estuarium van de Schelde, van de Belgische grens tot Vlissingen." },
        { title: "Redegebied Vlissingen", description: "Speciale regels voor het redegebied bij Vlissingen." },
        { title: "Kleine vaartuigen", description: "Speciale bepalingen voor kleine schepen in het SRW-gebied." }
      ]
    },
    {
      title: "SRW Definities en verantwoordelijkheden",
      text: "Belangrijke definities in het SRW:",
      items: [
        { title: "Klein zeegaand schip", description: "Zeegaand schip waarvan de lengte minder dan 24 meter bedraagt." },
        { title: "Binnenwater", description: "Alle wateren binnen de basislijn." },
        { title: "Ruim vaarwater", description: "Water waar niet alleen de inlandse regels gelden maar ook rekening moet worden gehouden met maritieme regels." }
      ]
    },
    {
      title: "SRW Uitwijkbepalingen",
      text: "Uitwijkregels op de Westerschelde verschillen van BPR:",
      items: [
        { title: "Soortgelijke schepen", description: "Koerskruisen: schip dat ander aan stuurboord ziet wijkt uit." },
        { title: "Motor vs Zeil", description: "Motorschepen wijken uit voor zeilschepen." },
        { title: "Kleine vs Grote", description: "Kleine schepen wijken uit voor grote schepen." },
        { title: "Vaargeul", description: "Schepen in een vaargeul hebben voorrang op schepen die de vaargeul binnenvaren." }
      ]
    },
    {
      title: "SRW Lichten en dagmerken",
      text: "Speciale verlichtingseisen op de Westerschelde:",
      items: [
        { title: "Kleine schepen", description: "Zelfde basisverlichting als BPR, maar let op specifieke eisen voor zeegebied." },
        { title: "Ankerend", description: "Wit rondomlicht, plus ankerbal bij dag." },
        { title: "Varend", description: "Toplicht, heklicht en rijkleurige lichten zoals bij BPR." }
      ]
    },
    {
      title: "SRE/BVA - Eems-Dollard",
      text: "Het Scheepvaartreglement Eems-Dollard en Buitenstaatsrechtelijke Aanvaringsregels:",
      items: [
        { title: "Toepassingsgebied", description: "Eems-Dollard gebied aan de Nederlands-Duitse grens." },
        { title: "Relatie tot BVA", description: "BVA (internationale aanvaringsregels) geldt waar SRE niet voorziet." },
        { title: "Kleine schepen", description: "Specifieke regels voor pleziervaart in dit gebied." }
      ]
    },
    {
      title: "BPR op ruime vaarwateren",
      text: "BPR-regels voor de grote meren en de Waddenzee:",
      items: [
        { title: "Waddenzee", description: "BPR geldt, maar let op getij en betonde vaargeulen." },
        { title: "IJsselmeer", description: "BPR geldt. Let op speciale regels voor de betonde vaargeulen." },
        { title: "Markermeer", description: "BPR geldt. Veel recreatievaart." },
        { title: "IJmeer", description: "BPR geldt. Verbinding tussen IJsselmeer en Amsterdam." },
        { title: "Oosterschelde", description: "BPR geldt. Getijwater met sterke stroming." }
      ]
    },
    {
      title: "Binnenvaren vaargeul",
      text: "Speciale voorrangsregels bij het binnenvaren van vaargeulen:",
      items: [
        { title: "Schepen in vaargeul", description: "Hebben voorrang op schepen die de vaargeul binnenvaren." },
        { title: "Verlaten vaargeul", description: "Geef voorrang aan schepen die in de vaargeul blijven." },
        { title: "Oplopen in vaargeul", description: "Alleen waar toegestaan en veilig mogelijk." }
      ]
    },
    {
      title: "SRKGT - Kanaal Gent-Terneuzen",
      text: "Speciaal reglement voor het kanaal van Gent naar Terneuzen:",
      items: [
        { title: "Internationaal kanaal", description: "Verbindt Gent (België) met Terneuzen (Nederland)." },
        { title: "Speciale regels", description: "Eigen maximumsnelheden en voorrangsregels." },
        { title: "Kleine schepen", description: "Let op specifieke bepalingen voor pleziervaart." }
      ]
    }
  ]
};

// KVB2 Domain F - Navigatie
export const kvb2DomainF: Topic = {
  id: "kvb2-f",
  title: "KVB2 Domein F: Navigatie",
  description: "Meteorologie, zeekaarten, betonning, kompas, koers, getij en GPS",
  keyPoints: [
    "Hogedruk = mooi weer, Lagere druk = slecht weer",
    "Warmtefront: gestaag stijgende temperatuur, langdurige regen",
    "Koudefront: snelle temperatuursdaling, korte hevige regen/onweer",
    "LAT = Lowest Astronomical Tide (referentie voor zee)",
    "Springtij = volle/nieuwe maan, groot verschil hoog/laag",
    "Doodtij = eerste/laatste kwartier, klein verschil",
    "GPS: COG = Course Over Ground, SOG = Speed Over Ground"
  ],
  pitfalls: [
    "Constructie voor bovenstroomse koers in de Waddenzee wordt vaak fout gemaakt",
    "Let op het verschil tussen NAP en LAT als referentievlak"
  ],
  content: [
    {
      title: "Gevorderde meteorologie",
      text: "Diepgaande weerkunde voor navigatie op ruime vaarwateren:",
      items: [
        { title: "Ontstaan van wind", description: "Lucht stroomt van hoge naar lage druk. Corioliskracht doet lucht draaien rond druksystemen." },
        { title: "Warmtefront", description: "Warmere lucht schuift over koude lucht. Langzaam naderend, gestaag stijgende temperatuur, langdurige regen (uren)." },
        { title: "Koudefront", description: "Koudere lucht dringt onder warme lucht. Snel naderend, temperatuursdaling, korte hevige buien/onweer." },
        { title: "Occlusie", description: "Koudefront haalt warmtefront in. Complex front met kenmerken van beide." },
        { title: "Trog", description: "Uitstulping van lage druk. Vaakt slecht weer, kan onweer brengen." },
        { title: "Frontale depressie", description: "Lagedrukgebied met warmte- en koudefront. Beweegt meestal van west naar oost." }
      ]
    },
    {
      title: "Wolkentypen",
      text: "Herkenning van wolkenformaties:",
      items: [
        { title: "Stratus", description: "Laaghangend wolkendek, effen grijs. Kan mist/regen brengen." },
        { title: "Altostratus", description: "Middelhoog wolkendek, zon vaag zichtbaar. Voorloper van warmtefront." },
        { title: "Cirrostratus", description: "Hoge ijswolken, halo rond zon/maan. Eerste teken van naderend warmtefront." },
        { title: "Cumulus", description: "Wattenbolletjes, mooi weer. Kan uitgroeien tot onweerswolken." },
        { title: "Altocumulus", description: "Middelhoog, schapenwolkjes. Kan op buien duiden." },
        { title: "Cumulonimbus", description: "Grote onweerswolk met aambeeldvorm. Zwaar weer, onweer, windstoten." }
      ]
    },
    {
      title: "Mist en zicht",
      text: "Verschillende soorten mist en hoe ze ontstaan:",
      items: [
        { title: "Stralingsmist", description: "Ontstaat 's nachts bij afkoeling van de grond. Helder weer overdag, mist 's ochtends." },
        { title: "Advectionmist", description: "Warme lucht over koud water (zee). Kan lang aanhouden." },
        { title: "Frontmist", description: "Mist bij een front. Vaak met neerslag." },
        { title: "Beperkt zicht", description: "Zicht < 1000m. Speciale regels van kracht." }
      ]
    },
    {
      title: "Zeekaarten",
      text: "Lezen en gebruiken van officiële zeekaarten:",
      items: [
        { title: "Hydrografische Dienst", description: "Produceert officiële zeekaarten voor Nederlandse wateren." },
        { title: "Berichten aan Zeevarenden (BaZ)", description: "Wekelijkse updates van kaartgegevens. Controleren voor elke tocht!" },
        { title: "Kaartschaal", description: "Grote schaal (1:25.000) = veel detail, klein gebied. Kleine schaal = overzicht, weinig detail." },
        { title: "Kaartdatum", description: "Referentie voor positieberekening. WGS84 is standaard voor GPS." }
      ]
    },
    {
      title: "Kaarttekens - Overzicht",
      text: "Belangrijke symbolen op zeekaarten:",
      items: [
        { title: "Diepten", description: "In meters of decimeters. Getallen in het water. Dieptelijnen verbinden gelijke dieptes." },
        { title: "Droogvallingen", description: "Gebieden die bij laagwater droogvallen. Onderstreept of met stippen." },
        { title: "Wrakken", description: "Verschillende symbolen voor gevaarlijk/ongevaarlijk wrak." },
        { title: "Lichten", description: "Met dracht in zeemijlen, hoogte, en kleur/sectoren." },
        { title: "Betonning", description: "Positie en type ton/boei." },
        { title: "Kunstwerken", description: "Bruggen, kabels, leidingen met doorvaarthoogtes." }
      ]
    },
    {
      title: "IALA-A Betonning",
      text: "Het internationale betonningssysteem (Region A - Europa, Afrika, Azië):",
      items: [
        { title: "Lateraal", description: "Rood (bakboord) en Groen (stuurboord). Geeft vaargeul aan." },
        { title: "Cardinaal", description: "Noord (zwart-geel), Oost (zwart-geel-zwart), Zuid (geel-zwart), West (geel-zwart-geel)." },
        { title: "Afzonderlijk gevaar", description: "Zwart-rood-zwart, 2 ballen. Markeert geïsoleerd gevaar." },
        { title: "Veilig vaarwater", description: "Rood-wit gestreept, rode bol. Centrum vaargeul of veilig water." },
        { title: "Bijzondere markering", description: "Geel. Markeert speciale zones (militair, recreatie, etc.)." }
      ]
    },
    {
      title: "Kompassen",
      text: "Verschillende soorten kompassen en hun gebruik:",
      items: [
        { title: "Magnetisch kompas", description: "Wijst naar magnetisch noorden. Eenvoudig, betrouwbaar, geen stroom nodig. Beïnvloed door metaal aan boord." },
        { title: "Handpeilkompas", description: "Draagbaar kompas voor peilingen. Richt op object, lees koers af." },
        { title: "Verrekijker met kompas", description: "Gecombineerd instrument voor peilingen op afstand." },
        { title: "Fluxgate kompas", description: "Elektronisch kompas, nauwkeuriger dan magnetisch. Heeft stroom nodig." },
        { title: "Gyro kompas", description: "Wijst naar waar noorden (geografisch). Zeer nauwkeurig, duur, stroom nodig. Op grote schepen." }
      ]
    },
    {
      title: "Variatie en Deviatie",
      text: "Correcties op kompas Koersen:",
      items: [
        { title: "Variatie", description: "Verschil tussen waar noorden en magnetisch noorden. Verandert per plaats en jaar. Op kaart aangegeven." },
        { title: "Deviatie", description: "Verschil door magnetische invloeden aan boord (metaal, elektriciteit). Per schip anders, deviatiekaart maken." },
        { title: "Miswijzing", description: "Variatie + Deviatie = Miswijzing. Totale correctie." },
        { title: "Kompaskoers (KK)", description: "De koers die je op je kompas ziet." },
        { title: "Ware koers (WK)", description: "De koers ten opzichte van waar noorden." },
        { title: "Magnetische koers (MK)", description: "De koers ten opzichte van magnetisch noorden." }
      ]
    },
    {
      title: "Koersberekeningen",
      text: "Omrekenen tussen kompas en ware koers:",
      items: [
        { title: "KK naar WK", description: "KK + miswijzing = WK (bij variatie west en deviatie west: optellen)." },
        { title: "WK naar KK", description: "WK - miswijzing = KK (bij variatie west en deviatie west: aftrekken)." },
        { title: "Onthoud: 'West is best, East is least'", description: "West wordt opgeteld bij KK→WK, afgetrokken bij WK→KK." }
      ]
    },
    {
      title: "Drift en Stroom",
      text: "Effect van wind en stroom op je koers:",
      items: [
        { title: "Drift", description: "Verschuiving door wind. Niet te verwarren met stroom! Drift is aan de oppervlakte." },
        { title: "Stroom", description: "Bewegend water (getijstroom, zeestroom). Beweegt het hele waterlichaam." },
        { title: "Ware koers behouden", description: "Je stelt bij voor drift en stroom om op de gewenste koers te blijven." },
        { title: "Grondkoers (COG)", description: "De werkelijke koers over de grond, inclusief drift en stroom." },
        { title: "Bovenstroomse koers", description: "Stroom van opzij? Stuur bij INTO de stroom in om op koers te blijven." }
      ]
    },
    {
      title: "Getij - Basis",
      text: "Hoe getij ontstaat en wat het betekent:",
      items: [
        { title: "Ontstaan", description: "Aantrekkingskracht van maan en zon op het zeewater." },
        { title: "Dagelijks verschil", description: "Twee keer per etmaal hoog en laag water (semi-dagelijks getij)." },
        { title: "Springtij", description: "Bij volle en nieuwe maan. Zon en maan werken samen. Groot verschil hoog/laag." },
        { title: "Doodtij", description: "Bij eerste en laatste kwartier. Zon en maan werken tegen. Klein verschil." },
        { title: "Verval", description: "Het verschil tussen hoog en laag water." },
        { title: "Rijzing", description: "De tijd dat het water stijgt (ongeveer 6 uur)." }
      ]
    },
    {
      title: "Reductievlakken",
      text: "Referentiepunten voor diepten en hoogten:",
      items: [
        { title: "NAP", description: "Normaal Amsterdams Peil. Nationaal referentievlak voor binnenwateren." },
        { title: "LAT", description: "Lowest Astronomical Tide. Laagst mogelijke astronomische getijstand. Referentie voor zee." },
        { title: "Kaartdiepte", description: "Diepte t.o.v. LAT (zee) of NAP (binnenwater)." },
        { title: "Actuele diepte", description: "Kaartdiepte + actuele waterstand - referentiepeil." }
      ]
    },
    {
      title: "Getijtafels en Stroomatlassen",
      text: "Hulpmiddelen voor getijberekeningen:",
      items: [
        { title: "Getijtafels", description: "Tabel met hoogtes en tijden van hoog en laag water voor referentiehavens." },
        { title: "HP33", description: "Stroomatlas voor Nederlandse kustwateren. Toont stroomrichting en -snelheid per uur." },
        { title: "Berekening", description: "Actuele waterstand = voorspelde stand + correctie voor tijdstip + meteorologische correctie." }
      ]
    },
    {
      title: "GPS Navigatie",
      text: "Gebruik van GPS voor navigatie:",
      items: [
        { title: "Segmenten", description: "Ruimte (satellieten), Controle (grondstations), Gebruikers (ontvangers)." },
        { title: "Nauwkeurigheid", description: "Typisch 3-10 meter. Kan beïnvloed worden door atmosfeer, multipath, satellietgeometrie." },
        { title: "POS", description: "Positie - je huidige locatie in coördinaten." },
        { title: "COG (Track)", description: "Course Over Ground - je werkelijke koers over de grond." },
        { title: "SOG", description: "Speed Over Ground - je werkelijke snelheid over de grond." },
        { title: "BRG", description: "Bearing - de koers naar een waypoint." },
        { title: "DST", description: "Distance - afstand tot een waypoint." },
        { title: "TTG", description: "Time To Go - geschatte tijd tot waypoint." },
        { title: "ETA", description: "Estimated Time of Arrival - geschatte aankomsttijd." },
        { title: "XTE", description: "Cross Track Error - afwijking van de geplande route." },
        { title: "MOB", description: "Man Overboard - functie om direct positie vast te leggen." }
      ]
    }
  ]
};

// Quiz questions for all domains
export const allQuizQuestions: Record<string, QuizQuestion[]> = {
  "kvb1-a": [
    {
      id: "a1",
      question: "Welk reglement geldt op de Rijn?",
      options: [
        { id: "a", text: "BPR" },
        { id: "b", text: "RPR" },
        { id: "c", text: "SRW" },
        { id: "d", text: "SRE" }
      ],
      correctAnswer: "b",
      explanation: "Het RPR (Rijnvaartpolitiereglement) geldt op de Rijn en haar zijrivieren. Het BPR geldt op de meeste andere binnenwateren."
    },
    {
      id: "a2",
      question: "Wat betekent één korte stoot op de hoorn?",
      options: [
        { id: "a", text: "Ik vaar bakboord uit" },
        { id: "b", text: "Ik vaar stuurboord uit" },
        { id: "c", text: "Ik vaar achteruit" },
        { id: "d", text: "Ik anker" }
      ],
      correctAnswer: "b",
      explanation: "Eén korte stoot betekent: 'Ik vaar stuurboord uit'. Twee korte stoten = bakboord uit, drie = achteruit."
    },
    {
      id: "a3",
      question: "Wat is het verschil tussen 'voorrang verlenen' en 'medewerking verlenen'?",
      options: [
        { id: "a", text: "Geen verschil, het is hetzelfde" },
        { id: "b", text: "Bij voorrang mag het andere schip zijn koers behouden, bij medewerking moet ook het andere schip maatregelen nemen" },
        { id: "c", text: "Medewerking is alleen bij slecht zicht" },
        { id: "d", text: "Voorrang is alleen voor grote schepen" }
      ],
      correctAnswer: "b",
      explanation: "Bij voorrang verlenen mag het andere schip zijn koers en snelheid behouden. Bij medewerking verlenen moet ook het andere schip actie ondernemen - het mag zijn koers niet automatisch behouden."
    },
    {
      id: "a4",
      question: "Welk licht moet een klein motorschip (< 7m) voeren bij maximumsnelheid ≤ 7 knopen?",
      options: [
        { id: "a", text: "Alleen toplicht" },
        { id: "b", text: "Toplicht en heklicht" },
        { id: "c", text: "Een rondom wit licht (voor zover uitvoerbaar)" },
        { id: "d", text: "Alle navigatielichten" }
      ],
      correctAnswer: "c",
      explanation: "Bij een lengte < 7m en max. snelheid ≤ 7 knopen is alleen een rondom wit licht nodig (voor zover uitvoerbaar)."
    },
    {
      id: "a5",
      question: "Wie heeft voorrang: een klein motorschip of een groot zeilschip?",
      options: [
        { id: "a", text: "Het kleine motorschip" },
        { id: "b", text: "Het grote zeilschip" },
        { id: "c", text: "Het schip dat het andere aan stuurboord ziet" },
        { id: "d", text: "Ze moeten elkaar uitwijken" }
      ],
      correctAnswer: "b",
      explanation: "Grote schepen hebben altijd voorrang op kleine schepen. Dus het kleine motorschip moet wijken, ongeacht of het andere schip onder motor of zeil gaat."
    }
  ],
  "kvb1-b": [
    {
      id: "b1",
      question: "Welke brandklasse is benzine?",
      options: [
        { id: "a", text: "Klasse A (vaste stoffen)" },
        { id: "b", text: "Klasse B (vloeistoffen)" },
        { id: "c", text: "Klasse C (gassen)" },
        { id: "d", text: "Klasse D (metalen)" }
      ],
      correctAnswer: "b",
      explanation: "Benzine is een vloeistof en valt onder brandklasse B. Blus met schuim, poeder of CO2 - NOOIT met water!"
    },
    {
      id: "b2",
      question: "Wat is het grootste voordeel van een dieselmotor ten opzichte van een benzinemotor?",
      options: [
        { id: "a", text: "Lichter gewicht" },
        { id: "b", text: "Minder brandgevaarlijk" },
        { id: "c", text: "Stillere motor" },
        { id: "d", text: "Goedkoper onderhoud" }
      ],
      correctAnswer: "b",
      explanation: "Diesel is minder brandgevaarlijk dan benzine. Diesel ontsteekt minder gemakkelijk en produceert geen zware dampen die zich in het ruim kunnen verzamelen."
    },
    {
      id: "b3",
      question: "Hoeveel Newton (N) moet een reddingsvest minimaal hebben voor volwassenen?",
      options: [
        { id: "a", text: "50N" },
        { id: "b", text: "100N" },
        { id: "c", text: "150N" },
        { id: "d", text: "275N" }
      ],
      correctAnswer: "b",
      explanation: "Een reddingsvest moet minimaal 100N hebben voor volwassenen. 150N is aanbevolen voor zee, 275N voor zware kleding of extreme omstandigheden."
    },
    {
      id: "b4",
      question: "Wat betekent een witte rookpluim uit de uitlaat?",
      options: [
        { id: "a", text: "Olieverbranding" },
        { id: "b", text: "Water in verbrandingsruimte" },
        { id: "c", text: "Onvolledige verbranding" },
        { id: "d", text: "Normaal, geen probleem" }
      ],
      correctAnswer: "b",
      explanation: "Witte rook/rookpluim duidt op water in de verbrandingsruimte. Dit kan duiden op een defecte koppakking of andere koelwaterlek. Blauw = olie, zwart = onvolledige verbranding."
    }
  ],
  "kvb1-c": [
    {
      id: "c1",
      question: "Welke kleur heeft een bakboord-ton in het IALA-A systeem?",
      options: [
        { id: "a", text: "Groen" },
        { id: "b", text: "Rood" },
        { id: "c", text: "Geel" },
        { id: "d", text: "Zwart" }
      ],
      correctAnswer: "b",
      explanation: "In IALA Region A (Europa) is bakboord ROOD en stuurboord GROEN. Bakboord-tonnen zijn rood met een stompe top."
    },
    {
      id: "c2",
      question: "Wat geeft een Zuid-cardinaal boei aan?",
      options: [
        { id: "a", text: "Gevaar aan de zuidzijde" },
        { id: "b", text: "Veilig water aan de zuidzijde" },
        { id: "c", text: "Het zuidelijkste punt van de vaargeul" },
        { id: "d", text: "Stroom richting het zuiden" }
      ],
      correctAnswer: "b",
      explanation: "Een cardinale markering geeft altijd aan waar het VEILIG is. Een Zuid-cardinaal betekent: veilig aan de zuidzijde, dus het gevaar ligt ten noorden van de boei."
    },
    {
      id: "c3",
      question: "Wat betekent teken E.21 op een vaarweg?",
      options: [
        { id: "a", text: "Waterskiën toegestaan" },
        { id: "b", text: "Snelle motorboten toegestaan" },
        { id: "c", text: "Maximumsnelheid 21 km/uur" },
        { id: "d", text: "Alleen voor buitenboordmotoren" }
      ],
      correctAnswer: "b",
      explanation: "E.21 betekent dat snelle motorboten daar mogen varen. Voor waterskiën is E.17 nodig. Dit is een veelgemaakte examenfout!"
    },
    {
      id: "c4",
      question: "Wat gebeurt er met de wind bij een krimpende wind?",
      options: [
        { id: "a", text: "De wind draait met de klok mee" },
        { id: "b", text: "De wind draait tegen de klok in" },
        { id: "c", text: "De wind neemt toe" },
        { id: "d", text: "De wind wordt warmer" }
      ],
      correctAnswer: "b",
      explanation: "Bij krimpende wind draait de windrichting tegen de klok in (bijv. van west naar zuid). Ruimend = met de klok mee."
    }
  ],
  "kvb1-d": [
    {
      id: "d1",
      question: "Wat gebeurt er met de hek bij achteruitvaren met een rechtsdraaiende schroef?",
      options: [
        { id: "a", text: "De hek gaat naar bakboord" },
        { id: "b", text: "De hek gaat naar stuurboord" },
        { id: "c", text: "De hek blijft recht" },
        { id: "d", text: "De hek draait naar de wind" }
      ],
      correctAnswer: "b",
      explanation: "Bij achteruitvaren gaat de hek naar stuurboord (en dus de boeg naar bakboord) door het wieleffect. Dit is belangrijk bij manoeuvreren!"
    },
    {
      id: "d2",
      question: "Wat is de juiste actie bij zuiging van een passerend groot schip?",
      options: [
        { id: "a", text: "Meer afstand nemen en tegenroer geven" },
        { id: "b", text: "Afremmen en wachten" },
        { id: "c", text: "Naar het grote schip toe sturen" },
        { id: "d", text: "Motor in vrij zetten" }
      ],
      correctAnswer: "a",
      explanation: "Bij zuiging word je naar het grote schip toe getrokken. Geef tegenroer (weg van het grote schip) en neem meer afstand. Onthoud: groot overheerst klein!"
    },
    {
      id: "d3",
      question: "Hoeveel ankerlijn moet je minimaal uitgeven bij rustig weer?",
      options: [
        { id: "a", text: "1x de waterdiepte" },
        { id: "b", text: "2x de waterdiepte" },
        { id: "c", text: "3x de waterdiepte" },
        { id: "d", text: "5x de waterdiepte" }
      ],
      correctAnswer: "c",
      explanation: "Minimaal 3x de waterdiepte bij rustig weer. Bij wind of stroom meer. De lijn moet schuin lopen om het anker te laten 'bijten'."
    },
    {
      id: "d4",
      question: "Wat is de eerste stap bij een MOB (Man Overboord) situatie?",
      options: [
        { id: "a", text: "De MOB-knop op de GPS indrukken" },
        { id: "b", text: "Direct keren en terugvaren" },
        { id: "c", text: "ROEPEN en naar de drenkeling wijzen" },
        { id: "d", text: "De kustwacht bellen" }
      ],
      correctAnswer: "c",
      explanation: "De allereerste stap is: ROEP 'MAN OVERBOORD', wijs naar de drenkeling en gooi reddingsmateriaal. Dan pas: markeer positie (GPS MOB), gooi joon, begin manoeuvre."
    }
  ],
  "kvb2-e": [
    {
      id: "e1",
      question: "Welk reglement geldt op de Westerschelde?",
      options: [
        { id: "a", text: "BPR" },
        { id: "b", text: "RPR" },
        { id: "c", text: "SRW" },
        { id: "d", text: "SRE" }
      ],
      correctAnswer: "c",
      explanation: "SRW (Scheepvaartreglement Westerschelde) geldt op de Westerschelde. Dit is een speciaal reglement voor dit getijwater."
    },
    {
      id: "e2",
      question: "Wie heeft voorrang bij het binnenvaren van een betonde vaargeul?",
      options: [
        { id: "a", text: "Het schip dat de vaargeul binnenvaart" },
        { id: "b", text: "Het schip dat al in de vaargeul vaart" },
        { id: "c", text: "Het snelste schip" },
        { id: "d", text: "Het grootste schip" }
      ],
      correctAnswer: "b",
      explanation: "Schepen die al in de vaargeul varen hebben voorrang op schepen die de vaargeul binnenvaren. Dit is een belangrijke regel op ruime vaarwateren."
    }
  ],
  "kvb2-f": [
    {
      id: "f1",
      question: "Wat duidt op een naderend warmtefront?",
      options: [
        { id: "a", text: "Cumulonimbus wolken" },
        { id: "b", text: "Cirrostratus met halo rond de zon" },
        { id: "c", text: "Stratusbewolking" },
        { id: "d", text: "Heldere lucht" }
      ],
      correctAnswer: "b",
      explanation: "Cirrostratus (hoge ijswolken) met een halo rond zon of maan is vaak het eerste teken van een naderend warmtefront. Daarna volgen altostratus en nimbostratus."
    },
    {
      id: "f2",
      question: "Wanneer is springtij?",
      options: [
        { id: "a", text: "Bij eerste en laatste kwartier" },
        { id: "b", text: "Bij volle en nieuwe maan" },
        { id: "c", text: "Bij zonsverduistering" },
        { id: "d", text: "In de zomer" }
      ],
      correctAnswer: "b",
      explanation: "Springtij ontstaat bij volle en nieuwe maan, wanneer zon en maan in lijn staan en hun aantrekkingskracht combineren. Doodtij is bij eerste en laatste kwartier."
    },
    {
      id: "f3",
      question: "Wat is COG op een GPS?",
      options: [
        { id: "a", text: "Course Over Ground - de koers over de grond" },
        { id: "b", text: "Compass On GPS" },
        { id: "c", text: "Corrected Ocean Guidance" },
        { id: "d", text: "Current Ocean Graphics" }
      ],
      correctAnswer: "a",
      explanation: "COG betekent Course Over Ground. Dit is je werkelijke koers over de grond, inclusief de effecten van stroom en drift."
    },
    {
      id: "f4",
      question: "Wat betekent LAT op een zeekaart?",
      options: [
        { id: "a", text: "Latitude - de breedtegraad" },
        { id: "b", text: "Lowest Astronomical Tide - laagst mogelijke getijstand" },
        { id: "c", text: "Local Average Time" },
        { id: "d", text: "Large Area Transit" }
      ],
      correctAnswer: "b",
      explanation: "LAT staat voor Lowest Astronomical Tide. Dit is het referentievlak voor diepten op zee - de laagst mogelijke astronomische getijstand. Diepten op zeekaarten zijn t.o.v. LAT."
    }
  ]
};

// Get all topics
export const getAllTopics = (): Topic[] => [
  kvb1DomainA,
  kvb1DomainB,
  kvb1DomainC,
  kvb1DomainD,
  kvb2DomainE,
  kvb2DomainF
];

// Get topic by ID
export const getTopicById = (id: string): Topic | undefined => {
  return getAllTopics().find(topic => topic.id === id);
};

// Get quiz questions by topic ID
export const getQuizQuestions = (topicId: string): QuizQuestion[] => {
  return allQuizQuestions[topicId] || [];
};
