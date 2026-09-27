const SEC = ["Reparer le grenier", "Preparer compost et outils", "Surveiller les stocks"];
const HIV = ["Sarcler tot", "Surveiller ravageurs et oiseaux", "Garder un oeil sur la pluie"];
window.AGRI = {
  regions: [
    { id: "sahel", nom: "Sahel", zone: "sahel", ville: "Dori", lat: 14.03, lon: -0.03, service: "Direction regionale / provinciale — Dori", tel: "+226 24 46 00 35" },
    { id: "nord", nom: "Nord", zone: "sahel", ville: "Ouahigouya", lat: 13.58, lon: -2.42, service: "Direction regionale — Ouahigouya ; DPA Titao", tel: "+226 24 55 70 03" },
    { id: "centre-nord", nom: "Centre-Nord", zone: "sahel", ville: "Kaya", lat: 13.09, lon: -1.08, service: "Direction regionale — Kaya", tel: "+226 25 46 82 16" },
    { id: "centre", nom: "Centre", zone: "centre", ville: "Ouagadougou", lat: 12.37, lon: -1.53, service: "MAERAH / services provinciaux du Kadiogo", tel: "+226 25 49 99 00" },
    { id: "plateau-central", nom: "Plateau-Central", zone: "centre", ville: "Ziniare", lat: 12.58, lon: -1.30, service: "DPA Oubritenga — Ziniare", tel: "+226 25 30 97 33" },
    { id: "centre-est", nom: "Centre-Est", zone: "centre", ville: "Tenkodogo", lat: 11.78, lon: -0.37, service: "Direction regionale — Tenkodogo", tel: "+226 24 71 42 01" },
    { id: "centre-ouest", nom: "Centre-Ouest", zone: "centre", ville: "Koudougou", lat: 12.25, lon: -2.37, service: "DPA Boulkiemde — Koudougou", tel: "+226 25 44 05 87" },
    { id: "centre-sud", nom: "Centre-Sud", zone: "centre", ville: "Manga", lat: 11.66, lon: -1.07, service: "DPA Bazega — Kombissiri", tel: "+226 25 40 50 12" },
    { id: "est", nom: "Est", zone: "centre", ville: "Fada N Gourma", lat: 12.06, lon: 0.36, service: "DPA Gourma — Fada", tel: "+226 24 77 01 48" },
    { id: "boucle", nom: "Boucle du Mouhoun", zone: "centre", ville: "Dedougou", lat: 12.47, lon: -3.46, service: "Direction regionale — Dedougou", tel: "+226 20 52 00 03" },
    { id: "hauts-bassins", nom: "Hauts-Bassins", zone: "sud", ville: "Bobo-Dioulasso", lat: 11.18, lon: -4.30, service: "DPA Houet — Bobo-Dioulasso", tel: "+226 20 98 48 80" },
    { id: "cascades", nom: "Cascades", zone: "sud", ville: "Banfora", lat: 10.63, lon: -4.76, service: "Direction regionale — Banfora", tel: "+226 20 91 08 32" },
    { id: "sud-ouest", nom: "Sud-Ouest", zone: "sud", ville: "Gaoua", lat: 10.30, lon: -3.25, service: "DPA Poni — Gaoua", tel: "+226 20 90 03 60" }
  ],
  zones: {
    sahel: { nom: "Sahel / Nord", pluie: "Saison courte. Varietes precoces." },
    centre: { nom: "Centre / Est / Mouhoun", pluie: "Saison moyenne. Varietes de 90 a 120 jours." },
    sud: { nom: "Hauts-Bassins / Cascades / Sud-Ouest", pluie: "Saison plus longue. Mais et riz plus a l aise." }
  },
  cultures: [
    { id: "mil", nom: "Mil", eau: "Faible a moyen", associer: "Niebe", adapte: ["sahel","centre","sud"], regions: "Sahel, Nord, Centre-Nord", resume: "Cereale de base, resistante a la secheresse.", varietes: "Varietes precoces au Nord. Semences certifiees UNPS-B / service provincial.", densite: "5 a 8 kg/ha.", semis: { sahel: "Debut juillet a debut aout apres 20 mm", centre: "Mi-juin a mi-juillet", sud: "Debut juin a debut juillet" }, conseils: ["Semer apres une vraie pluie utile (20 mm).", "Varietes precoces au Sahel et au Nord.", "Compost au poquet. Zai utile en zone seche.", "Associer avec le niebe."], maladies: ["Mildou si trop dense.", "Oiseaux a maturite."] },
    { id: "sorgho", nom: "Sorgho", eau: "Faible a moyen", associer: "Niebe, arachide", adapte: ["sahel","centre","sud"], regions: "Centre, Est, Mouhoun", resume: "Cereale principale de beaucoup de villages.", varietes: "Kapelga, Sariaso, CSM 63-E selon la zone.", densite: "8 a 12 kg/ha. 2 plants par poquet.", semis: { sahel: "Debut juillet a fin juillet", centre: "Mi-juin a mi-juillet", sud: "Debut juin a debut juillet" }, conseils: ["Precedent : arachide ou niebe.", "Zai, demi-lunes ou cordons pierreux si terre degradee.", "Demarier au premier sarclage."], maladies: ["Charbon : ne pas resemer des grains attaques.", "Striga : rotation et compost."] },
    { id: "mais", nom: "Mais", eau: "Moyen a eleve", associer: "Arachide, niebe", adapte: ["centre","sud"], regions: "Hauts-Bassins, Cascades, Sud-Ouest", resume: "Demande plus d eau que le mil.", varietes: "Barka, Kabako, Bondofa.", densite: "80 cm x 40 cm, 2 grains par poquet.", semis: { sahel: "Risque. Tres precoce seulement.", centre: "Mi-juin a debut juillet", sud: "Fin mai a fin juin" }, conseils: ["Attendre des pluies regulieres.", "Uree quand le plant a la hauteur du genou.", "Secher avant le grenier."], maladies: ["Chenilles : inspecter le coeur le matin.", "Pourriture d epis si stock humide."] },
    { id: "riz", nom: "Riz", eau: "Eleve", associer: "Seul en bas-fond", adapte: ["centre","sud"], regions: "Bas-fonds, Cascades, Est, Mouhoun", resume: "Bas-fonds et perimetres.", varietes: "Riz pluvial ou de bas-fond selon le site.", densite: "Repiquage en lignes dans les casiers.", semis: { sahel: "Bas-fonds seulement, juillet", centre: "Juin-juillet", sud: "Juin" }, conseils: ["Niveler pour une lame d eau reguliere.", "Desherber tot.", "Secher le paddy avant stockage."], maladies: ["Pyriculariose si trop dense.", "Oiseaux a maturite."] },
    { id: "arachide", nom: "Arachide", eau: "Moyen", associer: "Mil, sorgho, mais", adapte: ["sahel","centre","sud"], regions: "Centre-Est, Est, Plateau-Central", resume: "Legumineuse de rente. Enrichit le sol.", varietes: "Semences certifiees selon la zone.", densite: "Graine peu enterree (3-5 cm).", semis: { sahel: "Debut juillet", centre: "Mi-juin a debut juillet", sud: "Debut juin a mi-juin" }, conseils: ["Sol leger, bien draine.", "Buter a la floraison.", "Secher vite pour eviter l aflatoxine."], maladies: ["Taches foliaires : rotation.", "Aflatoxine : sechage immediat."] },
    { id: "coton", nom: "Coton", eau: "Moyen a eleve", associer: "Rotation avec cereales", adapte: ["centre","sud"], regions: "Mouhoun, Hauts-Bassins, Cascades", resume: "Culture de rente. Suivre SOFITEX / encadrement local.", varietes: "Semences de l encadrement cotonnier.", densite: "Selon la fiche de campagne.", semis: { sahel: "Peu adapte", centre: "Juin, date officielle de la zone", sud: "Fin mai a juin" }, conseils: ["Respecter la date de semis de la zone.", "Produits homologues seulement.", "Rotation avec cereales."], maladies: ["Pucerons et chenilles des capsules."] },
    { id: "niebe", nom: "Niebe", eau: "Faible a moyen", associer: "Mil, sorgho, mais", adapte: ["sahel","centre","sud"], regions: "Tout le pays", resume: "Legumineuse. Proteines et couverture du sol.", varietes: "Varietes certifiees au service provincial.", densite: "Lignes entre les cereales ou poquets propres.", semis: { sahel: "Juillet", centre: "Juin-juillet", sud: "Juin" }, conseils: ["Ne pas noyer. Sol drainant.", "Recolter les gousses seches tot."], maladies: ["Pucerons et bruches au stockage."] },
    { id: "sesame", nom: "Sesame", eau: "Faible a moyen", associer: "Seul ou rotation", adapte: ["sahel","centre"], regions: "Est, Sahel, Centre-Est", resume: "Culture de rente. Cycle souvent court.", varietes: "Demander la variete locale certifiee.", densite: "Semis clair, ne pas trop serrer.", semis: { sahel: "Juillet", centre: "Juin-juillet", sud: "Juin" }, conseils: ["Sol leger.", "Recolter avant l eclatement des capsules."], maladies: ["Verse et pertes a la recolte si trop tard."] }
  ],
  techniques: [
    { id: "zai", nom: "Zai", type: "Eau / sol", resume: "Trous avec compost pour capter l eau au Sahel et au Nord.", etapes: ["Creuser en saison seche.", "Mettre du compost.", "Semer apres la premiere grosse pluie."], utile: "Mil, sorgho, terres croutees" },
    { id: "demi-lunes", nom: "Demi-lunes", type: "Eau / sol", resume: "Cuvettes en croissant pour retenir l eau de ruissellement.", etapes: ["Tracer suivant la pente.", "Butte en aval.", "Compost au fond."], utile: "Champs en pente, zone seche" },
    { id: "compost", nom: "Compost", type: "Fumure", resume: "Matiere organique decomposee pour le poquet.", etapes: ["Tas a l ombre.", "Melanger dechets et fumier.", "Arroser et retourner."], utile: "Toutes cultures" },
    { id: "paillage", nom: "Paillage", type: "Eau / sol", resume: "Couvrir le sol pour garder l humidite.", etapes: ["Laisser les residus.", "Couvrir entre les lignes."], utile: "Maraichage et cereales" }
  ],
  mois: [
    { nom: "Janvier", phase: "Saison seche", tache: "Grenier, compost, outils" },
    { nom: "Fevrier", phase: "Saison seche", tache: "Compost, reparations" },
    { nom: "Mars", phase: "Chaleur", tache: "Zai et demi-lunes" },
    { nom: "Avril", phase: "Chaleur", tache: "Finir les ouvrages anti-erosifs" },
    { nom: "Mai", phase: "Installation", tache: "Semences et premieres pluies au Sud" },
    { nom: "Juin", phase: "Hivernage", tache: "Semis au Centre et au Sud" },
    { nom: "Juillet", phase: "Hivernage", tache: "Semis au Sahel, sarclage ailleurs" },
    { nom: "Aout", phase: "Hivernage", tache: "Sarclage, ravageurs" },
    { nom: "Septembre", phase: "Fin pluies", tache: "Oiseaux, recolte precoce" },
    { nom: "Octobre", phase: "Recolte", tache: "Recolte et sechage" },
    { nom: "Novembre", phase: "Recolte", tache: "Grenier sec" },
    { nom: "Decembre", phase: "Saison seche", tache: "Stockage et bilan" }
  ],
  actions: {
    sahel: [SEC,SEC,SEC,SEC,SEC,HIV,HIV,HIV,HIV,SEC,SEC,SEC],
    centre: [SEC,SEC,SEC,SEC,HIV,HIV,HIV,HIV,HIV,SEC,SEC,SEC],
    sud: [SEC,SEC,SEC,HIV,HIV,HIV,HIV,HIV,HIV,SEC,SEC,SEC]
  },
  alertes: [
    { titre: "Oiseaux a maturite", texte: "Recolter des que les grains sont durs. Dates groupees au village.", quand: [8,9], zones: ["sahel","centre","sud"] },
    { titre: "Trou pluviometrique", texte: "Ne pas tout resemer apres une seule semaine seche. Paillage et zai aident.", quand: [6,7,8], zones: ["sahel","centre"] },
    { titre: "Grenier humide", texte: "Secher avant de stocker. Ecarter les grains moites.", quand: [9,10,11], zones: ["sahel","centre","sud"] }
  ],
  forumCats: [
    { id: "inquietude", nom: "Inquietudes" },
    { id: "ravageur", nom: "Ravageurs" },
    { id: "pluie", nom: "Pluie et saison" }
  ],
  forum: [
    { id: "f1", cat: "pluie", titre: "Trou pluviometrique : resemer ou attendre ?", auteur: "anonyme014", date: "12 sept. 2026", texte: "Les pluies se sont arrete 10 jours apres le semis du mil.", reponses: [{ auteur: "anonyme221", date: "12 sept. 2026", texte: "N arrache pas tout. Si les plants sont morts, reseme seulement les poquets vides." }] }
  ],
  contacts: {
    ministere: {
      nom: "Ministere de l Agriculture, de l Eau, des Ressources animales et halieutiques (MAERAH)",
      adresse: "Immeuble MAERAH, Ouaga 2000, 03 BP 7010 Ouagadougou 03",
      tel: "+226 25 49 99 00 a 09",
      site: "https://www.agriculture.bf/",
      facebook: "https://www.facebook.com/MAERAH.Burkina/",
      note: "Pour un conseil de champ : Direction regionale / provinciale ou ZAT de la commune."
    },
    partenaires: [
      { nom: "ANAM-BF — meteo officielle", role: "Previsions et alertes.", site: "https://meteoburkina.bf/", tel: "", email: "meteoburkina.dsi@gmail.com", adresse: "Ouagadougou" },
      { nom: "INERA", role: "Recherche agricole.", site: "https://www.inera.bf/", tel: "+226 25 34 02 70", email: "inera.direction@inera.bf", adresse: "04 BP 8645 Ouagadougou 04" },
      { nom: "UNPS-B", role: "Semences certifiees.", site: "https://www.unpsburkina.org/", tel: "+226 25 41 10 96", email: "", adresse: "Ouaga 2000" },
      { nom: "AGRHYMET / CILSS", role: "Prevision saisonniere PRESASS.", site: "https://agrhymet.cilss.int/", tel: "", email: "", adresse: "" }
    ]
  }
};
