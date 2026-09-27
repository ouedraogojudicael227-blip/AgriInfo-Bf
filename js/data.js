window.AGRI = {
  regions: [
    { id: "sahel", nom: "Sahel", zone: "sahel", ville: "Dori", lat: 14.03, lon: -0.03, service: "Direction régionale / provinciale — Dori", tel: "+226 24 46 00 35" },
    { id: "nord", nom: "Nord", zone: "sahel", ville: "Ouahigouya", lat: 13.58, lon: -2.42, service: "Direction régionale — Ouahigouya ; DPA Titao", tel: "+226 24 55 70 03" },
    { id: "centre-nord", nom: "Centre-Nord", zone: "sahel", ville: "Kaya", lat: 13.09, lon: -1.08, service: "Direction régionale — Kaya", tel: "+226 25 46 82 16" },
    { id: "centre", nom: "Centre", zone: "centre", ville: "Ouagadougou", lat: 12.37, lon: -1.53, service: "MAERAH / services provinciaux du Kadiogo", tel: "+226 25 49 99 00" },
    { id: "plateau-central", nom: "Plateau-Central", zone: "centre", ville: "Ziniaré", lat: 12.58, lon: -1.30, service: "DPA Oubritenga — Ziniaré", tel: "+226 25 30 97 33" },
    { id: "centre-est", nom: "Centre-Est", zone: "centre", ville: "Tenkodogo", lat: 11.78, lon: -0.37, service: "Direction régionale — Tenkodogo ; DPA Boulgou", tel: "+226 24 71 42 01" },
    { id: "centre-ouest", nom: "Centre-Ouest", zone: "centre", ville: "Koudougou", lat: 12.25, lon: -2.37, service: "DPA Boulkiemdé — Koudougou ; DPA Sissili — Léo", tel: "+226 25 44 05 87" },
    { id: "centre-sud", nom: "Centre-Sud", zone: "centre", ville: "Manga", lat: 11.66, lon: -1.07, service: "DPA Bazèga — Kombissiri ; DPA Nahouri — Pô", tel: "+226 25 40 50 12" },
    { id: "est", nom: "Est", zone: "centre", ville: "Fada N’Gourma", lat: 12.06, lon: 0.36, service: "DPA Gourma — Fada ; DPA Gnagna — Bogandé ; DPA Tapoa — Diapaga", tel: "+226 24 77 01 48" },
    { id: "boucle", nom: "Boucle du Mouhoun", zone: "centre", ville: "Dédougou", lat: 12.47, lon: -3.46, service: "Direction régionale — Dédougou", tel: "+226 20 52 00 03" },
    { id: "hauts-bassins", nom: "Hauts-Bassins", zone: "sud", ville: "Bobo-Dioulasso", lat: 11.18, lon: -4.30, service: "DPA Houet — Bobo-Dioulasso", tel: "+226 20 98 48 80" },
    { id: "cascades", nom: "Cascades", zone: "sud", ville: "Banfora", lat: 10.63, lon: -4.76, service: "Direction régionale — Banfora", tel: "+226 20 91 08 32" },
    { id: "sud-ouest", nom: "Sud-Ouest", zone: "sud", ville: "Gaoua", lat: 10.30, lon: -3.25, service: "DPA Poni — Gaoua", tel: "+226 20 90 03 60" }
  ],
  zones: {
    sahel: { nom: "Sahel / Nord", pluie: "Saison courte. Variétés précoces." },
    centre: { nom: "Centre / Est / Mouhoun", pluie: "Saison moyenne. Variétés de 90 à 120 jours." },
    sud: { nom: "Hauts-Bassins / Cascades / Sud-Ouest", pluie: "Saison plus longue. Maïs et riz plus à l’aise." }
  },
  cultures: [
    { id: "mil", nom: "Mil", saison: "Hivernage", eau: "Faible à moyen", associer: "Niébé", adapte: ["sahel", "centre", "sud"], regions: "Sahel, Nord, Centre-Nord, Plateau-Central", resume: "Céréale de base, résistante à la sécheresse. Prioritaire au Sahel et au Nord.", varietes: "Variétés précoces (cycle court) au Nord. Demander les semences certifiées au service provincial ou à un producteur semencier (UNPS-B).", densite: "5 à 8 kg/ha. Lignes 80–100 cm, poquets 40–80 cm selon la zone.", semis: { sahel: "Début juillet → début août, après une pluie d’au moins 20 mm", centre: "Mi-juin → mi-juillet", sud: "Début juin → début juillet" }, conseils: ["Semer seulement après une vraie pluie utile (au moins 20 mm), pas après une averse isolée.", "Au Sahel et au Nord : variétés précoces. Au Centre : cycle moyen possible.", "Compost ou fumier décomposé au poquet (zaï utile en zone sèche).", "Premier sarclage et démariage vers 2 à 3 semaines.", "Associer avec le niébé (même poquet ou une ligne de niébé entre les lignes de mil).", "Les semences améliorées certifiées, avec fumure, peuvent augmenter le rendement d’environ 30 % selon les chercheurs de l’INERA."], maladies: ["Mildiou : éviter le semis trop dense et les bas-fonds trop humides.", "Oiseaux à maturité : récolter dès que les grains sont durs, dates groupées au village."] },
    { id: "sorgho", nom: "Sorgho", saison: "Hivernage", eau: "Faible à moyen", associer: "Niébé, arachide", adapte: ["sahel", "centre", "sud"], regions: "Centre, Est, Boucle du Mouhoun, Cascades", resume: "Céréale principale de beaucoup de villages. Bonne sur sols moyens.", varietes: "Exemples vulgarisés au Burkina : Kapelga (précoce), Sariaso, CSM 63-E. Demander la variété adaptée à ta zone au service agricole.", densite: "8 à 12 kg/ha. Souvent 80 cm × 40 cm. 2 plants par poquet après démariage.", semis: { sahel: "Début juillet → fin juillet", centre: "Mi-juin → mi-juillet (idéalement 10 juin–10 juillet)", sud: "Début juin → début juillet" }, conseils: ["Précédent conseillé : arachide ou niébé.", "Préparer le sol avant les grandes pluies. Zaï, demi-lunes ou cordons pierreux en terre dégradée.", "Fumure si possible : 2,5 à 5 t/ha de fumier/compost. NPK (souvent 14-23-14) environ 100 kg/ha 2 semaines après semis, urée 50 kg/ha à la montaison.", "Démarier à 2 plants/poquet au premier sarclage (vers 14–19 jours).", "Association recommandée : 2 lignes de sorgho + 1 ligne de niébé, ou 1 ligne / 1 ligne.", "Buter contre la verse. Ne pas laisser le striga grainer."], maladies: ["Charbon : ne pas resemer des grains attaqués.", "Striga : rotation, compost, association avec niébé.", "Verse : éviter trop d’azote tardif et buter."] },
    { id: "mais", nom: "Maïs", saison: "Hivernage", eau: "Moyen à élevé", associer: "Arachide, niébé", adapte: ["centre", "sud"], regions: "Hauts-Bassins, Cascades, Sud-Ouest, Centre-Ouest", resume: "Filière prioritaire de l’Offensive agropastorale (MAERAH). Demande plus d’eau qu’un mil.", varietes: "Barka (précoce, plus tolérante à la sécheresse), Kabako / AGRA 7, Bondofa. Semences certifiées via UNPS-B ou magasins agréés.", densite: "Souvent 80 cm × 40 cm. 2 grains par poquet. Ne pas semer trop dru.", semis: { sahel: "Risqué. Variété très précoce seulement si les pluies sont vraiment installées.", centre: "Mi-juin → début juillet", sud: "Fin mai → fin juin" }, conseils: ["Attendre que les pluies soient régulières. Le maïs souffre d’un trou pluviométrique après levée.", "Mieux adapté au Centre-Ouest, Mouhoun, Hauts-Bassins, Cascades, Sud-Ouest.", "Compost au poquet + NPK si disponible. Urée quand le plant a la hauteur du genou.", "Champ propre les 40 premiers jours. Association possible : 2 lignes de maïs + 1 ligne de niébé ou arachide.", "Récolter quand les grains sont durs et les spathes sèches. Sécher avant le grenier."], maladies: ["Chenilles (foreur, légionnaire) : inspecter le cœur tôt le matin.", "Pourriture d’épis : sécher, ne pas stocker humide."] },
    { id: "riz", nom: "Riz", saison: "Hivernage", eau: "Élevé", associer: "Seul en bas-fond", adapte: ["centre", "sud"], regions: "Bas-fonds, Cascades, Est, Boucle du Mouhoun", resume: "Filière stratégique nationale. Bas-fonds et périmètres.", varietes: "Variétés certifiées de riz pluvial ou de bas-fond selon le site. Demander au service provincial.", densite: "Repiquage en lignes dans les casiers. Semis direct possible en riz pluvial.", semis: { sahel: "Bas-fonds seulement, juillet", centre: "Juin–juillet selon l’eau du bas-fond", sud: "Juin, dès que le bas-fond a de l’eau" }, conseils: ["Choisir un bas-fond ou un casier aménagé. Niveler pour une lame d’eau régulière.", "Le ministère appuie l’aménagement de bas-fonds : se renseigner à la direction régionale.", "Désherber tôt. L’eau stagnante mal maîtrisée favorise les maladies.", "Sur périmètre : suivre le tour d’eau du groupement.", "Récolte groupée dans le village contre les oiseaux. Sécher le paddy avant stockage."], maladies: ["Pyriculariose si trop dense et trop d’azote.", "Oiseaux à maturité."] },
    { id: "arachide", nom: "Arachide", saison: "Hivernage", eau: "Moyen", associer: "Mil, sorgho, maïs", adapte: ["sahel", "centre", "sud"], regions: "Centre-Est, Est, Centre-Nord, Plateau-Central", resume: "Légumineuse de rente et d’alimentation. Enrichit le sol. Bon précédent pour céréales.", varietes: "Semences certifiées selon la zone. Éviter les graines trop vieilles ou trop abîmées.", densite: "Sol meuble. Graine peu enterrée (3–5 cm). Lignes assez aérées.", semis: { sahel: "Début juillet", centre: "Mi-juin → début juillet", sud: "Début juin → mi-juin" }, conseils: ["Sol léger, bien drainé. Pas d’eau stagnante.", "Buter à la floraison pour aider les gousses.", "Récolter dès que les fanes jaunissent.", "Sécher très vite au soleil, puis à l’ombre aérée. Les gousses moites donnent l’aflatoxine.", "Rotation avec mil ou sorgho l’année suivante."], maladies: ["Taches foliaires : rotation.", "Aflatoxine : séchage immédiat, écarter les gousses moites."] },
    { id: "coton", nom: "Coton", saison: "Hivernage", eau: "Moyen à élevé", associer: "Rotation avec céréales", adapte: ["centre", "sud"], regions: "Boucle du Mouhoun, Hauts-Bassins, Cascades, Centre-Ouest", resume: "Culture de rente. Dates et traitements : suivre SOFITEX ou encadrement local.", varietes: "Semences fournies ou conseillées par l’encadrement cotonnier de ta zone.", densite: "Selon la fiche de la campagne en cours. Ne pas semer trop tard.", semis: { sahel: "Peu adapté", centre: "Juin, date officielle de la zone", sud: "Fin mai → juin" }, conseils: ["Respecter la date de semis de la zone cotonnière.", "Observer feuilles et capsules chaque semaine.", "N’utiliser que les produits homologués, aux doses de l’encadrement.", "Rotation avec céréales. Ne pas brûler tous les résidus.", "Le coton n’est pas adapté au Sahel sec."], maladies: ["Pucerons et chenilles des capsules.", "Maladies du sol : rotation."] },
    { id: "niebe", nom: "Niébé", saison: "Hivernage", eau: "Faible à moyen", associer: "Mil, sorgho, maïs", adapte: ["sahel", "centre", "sud"], regions: "Tout le pays, surtout zones sèches", resume: "Protéines, revenu et plante qui enrichit le sol. Très souvent associé aux céréales au Burkina.", varietes: "Exemples INERA : Komcallé (KVX 442-3-25SH) et autres KVX. Semences certifiées.", densite: "Pur : 80 cm × 40 cm, 2 plants/poquet. Associé : 1 ligne de niébé entre les céréales.", semis: { sahel: "Juillet, après une pluie d’au moins 20 mm", centre: "Juin–juillet", sud: "Juin, ou relais en fin de saison" }, conseils: ["Semer après une pluie d’au moins 20 mm.", "Seul : sols sablo-limoneux, bien drainés.", "Associé : semer le niébé environ 2 semaines après la céréale.", "Fumure si possible : au moins 2,5 t/ha de fumier et 100 kg/ha de NPK en culture pure.", "Récolter gousse par gousse dès qu’elles sont sèches.", "Au grenier : bidons ou sacs hermétiques contre les bruches."] , maladies: ["Bruches : stock hermétique.", "Pucerons sur jeunes plants."] },
    { id: "sesame", nom: "Sésame", saison: "Hivernage", eau: "Faible", associer: "Seul ou après céréale", adapte: ["sahel", "centre"], regions: "Est, Centre-Est, Sahel, Nord", resume: "Culture de rente rustique. Filière appuyée dans plusieurs régions.", varietes: "Semences certifiées si disponibles. Sinon trier fortement les graines locales.", densite: "Semis clair. Trop dense = verse et maladies.", semis: { sahel: "Juillet", centre: "Fin juin → juillet", sud: "Juin–juillet" }, conseils: ["Sol léger, bien drainé. Éviter les bas-fonds.", "Souvent semé après une céréale (rotation).", "Ne pas semer trop dru.", "Récolter dès que les capsules du bas jaunissent, avant l’éclatement au champ.", "Sécher et battre sur aire propre."], maladies: ["Fonte des semis si eau stagnante."] },
    { id: "voandzou", nom: "Voandzou", saison: "Hivernage", eau: "Faible à moyen", associer: "Mil, sorgho", adapte: ["sahel", "centre"], regions: "Sahel, Nord, Centre-Nord, Plateau-Central", resume: "Pois de terre. Bonne réserve pour la famille, supporte mieux le sec que beaucoup de légumineuses.", semis: { sahel: "Juillet", centre: "Juin–juillet", sud: "Juin" }, conseils: ["Sol léger, pas d’eau stagnante.", "Ne pas trop serrer les poquets.", "Récolter quand les feuilles jaunissent."], maladies: ["Pourriture si récolte trop tard dans un sol humide."] },
    { id: "oseille", nom: "Oseille de Guinée (bissap)", saison: "Hivernage", eau: "Moyen", associer: "En bordure de parcelle", adapte: ["centre", "sud"], regions: "Centre, Est, Ouest", resume: "Calices pour la boisson et les sauces. Culture de case ou de champ.", semis: { sahel: "Juillet si pluies là", centre: "Juin–juillet", sud: "Juin" }, conseils: ["Semis en ligne ou en poquets.", "Éclaircir.", "Récolter les calices dès qu’ils sont charnus."], maladies: ["Pucerons sur jeunes plants. Sécher les calices à l’ombre."] },
    { id: "tomate", nom: "Tomate (maraîchage)", saison: "Saison sèche / hivernage", eau: "Élevé (arroser)", associer: "Oignon, laitue en rotation", adapte: ["centre", "sud"], regions: "Périmètres, bas-fonds, jardins de case", resume: "Maraîchage de saison sèche sur périmètre, puits ou bas-fond.", varietes: "Semences maraîchères homologuées. Demander au ZAT / service provincial.", densite: "Pépinière puis repiquage. Ne pas coller les plants.", semis: { sahel: "Pépinière dès qu’il y a de l’eau", centre: "Pépinière oct–nov ou mars–avril", sud: "Pépinière oct–nov" }, conseils: ["Pépinière d’abord (3–4 semaines), puis repiquage le soir.", "Pailler pour garder l’humidité. Arroser au pied, pas sur les feuilles.", "Fumure organique bien décomposée. Produits phytosanitaires homologués seulement.", "Tuteurer si les plants cassent. Récolter souvent.", "Rotation avec oignon, chou, maïs de saison sèche."], maladies: ["Mildiou si trop d’humidité sur le feuillage.", "Flétrissement : enlever les plants malades, ne pas trop arroser."] }
  ],
  techniques: [
    { id: "zai", nom: "Zaï", type: "Traditionnelle améliorée", resume: "Trous qui concentrent eau et compost.", etapes: ["Creuser en saison sèche.", "Compost au fond.", "Semer aux premières pluies.", "Entretenir les billons."], utile: "Zones sèches, mil et sorgho." },
    { id: "demi-lunes", nom: "Demi-lunes", type: "Conservation des eaux", resume: "Cuvettes pour l’eau de ruissellement.", etapes: ["Courbes de niveau.", "Terre en aval.", "Matière organique.", "Ligneux sur le bourrelet."], utile: "Pentes faibles." },
    { id: "compost", nom: "Compost de ferme", type: "Fertilité des sols", resume: "Déchets et fumier transformés en engrais.", etapes: ["Couches sèches et humides.", "Légèrement humide.", "Retourner toutes les 2-3 semaines.", "Prêt quand il sent la terre."], utile: "Toutes cultures." },
    { id: "association", nom: "Association de cultures", type: "Agroécologie", resume: "Pratique traditionnelle améliorée : céréale + niébé. Testée aussi à l’INERA (Saria).", etapes: ["Sorgho/mil + niébé : 2 lignes de céréale et 1 de niébé, ou 1/1.", "Maïs + niébé : 2 lignes de maïs + 1 de niébé.", "Semer le niébé environ 2 semaines après la céréale.", "Chaque culture garde sa densité. Récolte séparée."], utile: "Moins de risque, un peu de protéines et un sol moins fatigué." },
    { id: "paillage", nom: "Paillage", type: "Gestion de l’eau", resume: "Couvrir le sol pour garder l’humidité.", etapes: ["Garder les résidus.", "Étaler autour des plants.", "Ne pas étouffer le collet.", "Compléter après sarclage."], utile: "Jeunes plants." },
    { id: "grenier", nom: "Stockage au sec", type: "Après récolte", resume: "Les pertes sont souvent au grenier.", etapes: ["Sécher jusqu’au grain cassant.", "Trier.", "Fûts ou sacs propres.", "Surélever."], utile: "Mil, maïs, niébé, arachide." }
  ],
  mois: [
    { nom: "Janvier", phase: "Saison sèche", tache: "Outils, compost, zaï, demi-lunes." },
    { nom: "Février", phase: "Saison sèche", tache: "Poquets et matière organique." },
    { nom: "Mars", phase: "Saison sèche chaude", tache: "Finir l’aménagement. Trier les semences." },
    { nom: "Avril", phase: "Fin de saison sèche", tache: "Semences prêtes. Surveiller les pluies au Sud." },
    { nom: "Mai", phase: "Transition", tache: "Sud-Ouest et Cascades : premiers semis possibles." },
    { nom: "Juin", phase: "Début d’hivernage", tache: "Semis selon la zone. Premier sarclage." },
    { nom: "Juillet", phase: "Hivernage", tache: "Semis tardifs au Sahel. Sarclage, démariage." },
    { nom: "Août", phase: "Pic des pluies", tache: "Buttage, drainage, ravageurs." },
    { nom: "Septembre", phase: "Fin d’hivernage", tache: "Oiseaux. Récoltes précoces." },
    { nom: "Octobre", phase: "Récoltes", tache: "Récolte et séchage immédiat." },
    { nom: "Novembre", phase: "Stockage", tache: "Grenier, vente étalée si possible." },
    { nom: "Décembre", phase: "Saison sèche", tache: "Bilan et préparation de l’année suivante." }
  ],
  alertes: [
    { id: "secheresse", titre: "Sécheresse / trou pluviométrique", quand: [4, 5, 6, 7], zones: ["sahel", "centre", "sud"], texte: "Ne pas tout resemer après une seule pluie. Paillage, zaï, demi-lunes. Variétés précoces au Nord." },
    { id: "oiseaux", titre: "Oiseaux granivores", quand: [8, 9, 10], zones: ["sahel", "centre", "sud"], texte: "Récolter dès que c’est mûr. Dates groupées dans le village. Surveiller matin et soir." },
    { id: "mildiou", titre: "Mildiou du mil", quand: [6, 7, 8], zones: ["sahel", "centre"], texte: "Semis trop dense et bas-fonds humides augmentent le risque. Enlever les plants très atteints." },
    { id: "chenilles", titre: "Chenilles sur maïs", quand: [6, 7, 8], zones: ["centre", "sud"], texte: "Inspecter le cœur des jeunes plants. Intervenir tôt et de façon ciblée." },
    { id: "bruches", titre: "Bruches du niébé au grenier", quand: [9, 10, 11, 0], zones: ["sahel", "centre", "sud"], texte: "Sécher fort. Bidons hermétiques. Ne pas mélanger ancien et nouveau stock." },
    { id: "aflatoxine", titre: "Arachide mal séchée", quand: [9, 10, 11], zones: ["sahel", "centre", "sud"], texte: "Sécher vite. Écarter les gousses moites. Grenier aéré." },
    { id: "striga", titre: "Striga (herbe parasite)", quand: [6, 7, 8], zones: ["sahel", "centre"], texte: "Rotation, compost, ne pas laisser la plante grainer. Association avec niébé." }
  ],
  actions: {
    sahel: [
      ["Préparer compost et poquets de zaï.", "Réparer outils et grenier.", "Trier les semences précoces."],
      ["Creuser zaï et demi-lunes.", "Ramasser fumier.", "Protéger les semences."],
      ["Finir les poquets.", "Ne pas semer trop tôt.", "Eau des mares pour le bétail."],
      ["Semences prêtes.", "Surveiller les premières pluies.", "Ne pas tout semer après une seule averse."],
      ["Attendre les pluies utiles.", "Derniers aménagements.", "Prévoir niébé en association."],
      ["Si pluies instables : encore attendre.", "Composter.", "Préparer le sarclage."],
      ["Semer mil, sorgho, niébé, sésame.", "Sarcler dès la levée.", "Regarder le mildiou."],
      ["Sarcler et buter.", "Garder les allées propres.", "Préparer la surveillance des oiseaux."],
      ["Surveiller les oiseaux matin et soir, surtout mil et sorgho.", "Récolter dès que les grains sont durs.", "Sécher le jour même, pas en tas fermé."],
      ["Récolter.", "Sécher le jour même.", "Trier avant le grenier."],
      ["Stock hermétique.", "Séparer les grains attaqués.", "Planifier la vente."],
      ["Bilan de campagne.", "Réparer le grenier.", "Recommencer le compost."]
    ],
    centre: [
      ["Compost et outils.", "Zaï si sol dégradé.", "Plan des parcelles."],
      ["Poquets et billons.", "Fumier au champ.", "Contrôle des semences."],
      ["Semences triées.", "Réparer les bas-fonds.", "Ne pas brûler tous les résidus."],
      ["Premières pluies possibles au sud de la zone.", "Attendre l’installation.", "Préparer arachide et mil."],
      ["Surveiller l’installation des pluies.", "Maïs seulement si sol humide.", "Dernier compost."],
      ["Semis mil, sorgho, arachide, niébé.", "Maïs si pluies régulières.", "Premier sarclage."],
      ["Démariage.", "Association niébé.", "Chenilles et mildiou."],
      ["Buttage.", "Drainage des bas-fonds.", "Pas d’eau stagnante sur arachide."],
      ["Chasser et surveiller les oiseaux sur mil, sorgho et riz.", "Commencer les récoltes précoces sans attendre trop.", "Sécher tout de suite au soleil, puis à l’ombre aérée."],
      ["Grande récolte.", "Séchage.", "Grenier propre."],
      ["Niébé en bidon.", "Arachide bien sèche.", "Compte des sacs."],
      ["Entretien.", "Compost.", "Calendrier de l’année suivante."]
    ],
    sud: [
      ["Entretien des casiers et drains.", "Compost.", "Outils."],
      ["Préparer bas-fonds.", "Fumier.", "Semences de maïs et riz."],
      ["Nivellement.", "Réparer les diguettes.", "Trier semences."],
      ["Surveiller les pluies de mai.", "Ne pas semer trop sec.", "Préparer le maïs."],
      ["Premiers semis maïs / riz possibles.", "Paillage des jeunes plants.", "Sarclage précoce."],
      ["Semis principaux : maïs, riz, coton, arachide.", "Surveiller chenilles.", "Eau des casiers."],
      ["Sarcler.", "Buter le maïs.", "Lame d’eau régulière."],
      ["Drainer si trop d’eau.", "Ravageurs.", "Observer le coton."],
      ["Surveiller les oiseaux sur le riz.", "Récolter maïs et riz dès que c’est mûr.", "Sécher avant de mettre au grenier, jamais en tas humide."],
      ["Récolte maïs et riz.", "Sécher avant grenier.", "Ne pas empiler humide."],
      ["Stockage.", "Nettoyer casiers.", "Bilan."],
      ["Réparer drains.", "Compost.", "Plan de rotation."]
    ]
  },
  forumCats: [
    { id: "inquietude", nom: "Inquiétudes" },
    { id: "ravageur", nom: "Ravageurs et maladies" },
    { id: "pluie", nom: "Pluie et saison" },
    { id: "stockage", nom: "Récolte et grenier" },
    { id: "semence", nom: "Semences et matériel" }
  ],
  forum: [
    { id: "f1", cat: "pluie", titre: "Trou pluviométrique au Centre : resemer ou attendre ?", auteur: "anonyme014", date: "12 sept. 2026", texte: "Les pluies se sont arrêtées 10 jours après le semis du mil. Les plants jaunissent. Est-ce que je resème tout ou j’attends encore une pluie ?", reponses: [{ auteur: "anonyme221", date: "12 sept. 2026", texte: "N’arrache pas tout après une seule semaine sèche. Paillage et zaï aident. Si les plants sont vraiment morts, resème seulement les poquets vides avec une variété précoce." }, { auteur: "anonyme007", date: "13 sept. 2026", texte: "Chez nous au Nord on attend toujours une vraie pluie de 20 mm avant de tout resemer." }] },
    { id: "f2", cat: "ravageur", titre: "Oiseaux sur le mil presque mûr", auteur: "anonyme088", date: "20 sept. 2026", texte: "Les oiseaux vident les épis le matin. On n’arrive plus à garder le champ. Que faites-vous dans votre village ?", reponses: [{ auteur: "anonyme305", date: "20 sept. 2026", texte: "Récolter dès que les grains sont durs, même un peu tôt. Mieux un peu moins mûr que tout perdu." }, { auteur: "anonyme014", date: "21 sept. 2026", texte: "Si plusieurs champs du village mûrissent ensemble, les oiseaux se dispersent." }] },
    { id: "f3", cat: "stockage", titre: "Bruches dans le niébé au grenier", auteur: "anonyme162", date: "3 oct. 2025", texte: "J’ai ouvert un sac de niébé, il y a des trous et de la poussière. Comment sauver le reste sans produits chers ?", reponses: [{ auteur: "anonyme007", date: "3 oct. 2025", texte: "Sécher encore au soleil, trier, puis bidon hermétique bien fermé." }, { auteur: "anonyme441", date: "4 oct. 2025", texte: "Les sacs troués au sol prennent l’humidité. Surélever et aérer." }] },
    { id: "f4", cat: "semence", titre: "Où trouver du maïs Barka certifié ?", auteur: "anonyme273", date: "8 juin 2026", texte: "On m’a parlé de Barka pour les pluies courtes. Quelqu’un a déjà semé ça ? Où l’acheter sans se tromper ?", reponses: [{ auteur: "anonyme088", date: "8 juin 2026", texte: "Demander à l’UNPS-B ou au service provincial. Éviter les tas sans étiquette au marché." }, { auteur: "anonyme014", date: "9 juin 2026", texte: "Avec compost, ça a mieux tenu le sec que mon maïs local." }] },
    { id: "f5", cat: "inquietude", titre: "Le champ est loin, j’ai peur de tout perdre", auteur: "anonyme441", date: "18 août 2026", texte: "Je ne peux pas aller chaque jour. Herbes et chenilles avancent. Comment suivre un champ éloigné sans y dormir ?", reponses: [{ auteur: "anonyme221", date: "18 août 2026", texte: "Le premier mois est le plus important : sarclage tôt. Après 40 jours le maïs tient mieux." }, { auteur: "anonyme007", date: "19 août 2026", texte: "S’entendre avec un voisin du village d’à côté pour se prévenir." }] }
  ],
  contacts: {
    ministere: {
      nom: "Ministère de l’Agriculture, de l’Eau, des Ressources animales et halieutiques (MAERAH)",
      adresse: "Immeuble MAERAH, Ouaga 2000, avenue Sembène Ousmane, 03 BP 7010 Ouagadougou 03",
      tel: "+226 25 49 99 00 à 09",
      site: "https://www.agriculture.bf/",
      facebook: "https://www.facebook.com/MAERAH.Burkina/",
      note: "Pour un conseil de champ, commence par la Direction régionale ou provinciale de l’Agriculture, ou le ZAT de ta commune."
    },
    partenaires: [
      { nom: "ANAM-BF — météo officielle", role: "Agence Nationale de la Météorologie. Prévisions, alertes CAP, carte.", adresse: "Ouagadougou", tel: "", email: "meteoburkina.dsi@gmail.com", site: "https://meteoburkina.bf/" },
      { nom: "AGRHYMET / CILSS — saison au Sahel", role: "Prévision saisonnière PRESASS pour l’Afrique de l’Ouest.", adresse: "Niamey, couverture Burkina Faso", tel: "", email: "", site: "https://agrhymet.cilss.int/" },
      { nom: "INERA — recherche agricole", role: "Variétés et fiches techniques (institut public).", adresse: "04 BP 8645 Ouagadougou 04", tel: "+226 25 34 02 70 / 25 34 71 12", email: "inera.direction@inera.bf", site: "https://www.inera.bf/" },
      { nom: "UNPS-B — semences certifiées", role: "Union nationale des producteurs semenciers. Foire aux semences, magasins régionaux.", adresse: "Ouaga 2000, près du monument des Martyrs", tel: "+226 25 41 10 96", email: "unpsburkina1@yahoo.com", site: "https://www.unpsburkina.org/" },
      { nom: "SOBIMA — intrants et matériels (société d’État)", role: "Remplace l’ancienne CAIMA. Engrais et matériels subventionnés via les circuits officiels.", adresse: "Ouagadougou — se renseigner à la direction régionale de l’Agriculture", tel: "", email: "", site: "https://www.agriculture.bf/" },
      { nom: "SOFITEX — coton", role: "Encadrement coton, semences et consignes de zone.", adresse: "Avenue William Ponty, BP 147, Bobo-Dioulasso", tel: "Numéro vert 80 00 12 42 — DG +226 20 97 00 24/25 — Ouaga +226 25 30 42 30", email: "dg@sofitex.bf", site: "https://www.sofitex.bf/contacts/" },
      { nom: "Confédération Paysanne du Faso (CPF)", role: "Organisation paysanne nationale. Défense des producteurs.", adresse: "684, avenue Président Maurice Yaméogo, Ouagadougou", tel: "+226 25 30 18 44", email: "Confederationpaysannefaso@gmail.com", site: "https://www.cpf-bf.org/" },
      { nom: "FAO Burkina Faso", role: "Organisation des Nations Unies pour l’alimentation et l’agriculture.", adresse: "Ouagadougou", tel: "", email: "", site: "https://www.fao.org/burkina-faso/fr" },
      { nom: "PAM / WFP Burkina Faso", role: "Programme alimentaire mondial.", adresse: "Ouagadougou", tel: "", email: "", site: "https://fr.wfp.org/pays/burkina-faso" }
    ]
  }
};
