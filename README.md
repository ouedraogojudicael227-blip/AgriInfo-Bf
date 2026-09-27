# AgriInfo BF

Conseils agricoles simples pour le Burkina Faso.

Site web classique + application mobile (PWA à installer).
Pas de compte. Pas de mot de passe. Open source.

> Version de travail. Les conseils aident au champ ; ils ne remplacent pas le ZAT, la Direction provinciale de l’Agriculture ni les bulletins ANAM.

## Ce que fait le projet

- Fiches cultures (mil, sorgho, maïs, riz, arachide, coton, niébé, sésame, oseille, tomate, voandzou…)
- Techniques : zaï, demi-lunes, compost, paillage, associations
- 3 actions de la période + alertes selon le mois et la zone
- Météo 7 jours (chiffres Open-Meteo) + liens officiels ANAM
- ZAT / services : chaîne UAT → ZAT → DPARAH → DRARAH → MAERAH
- Contacts ministère, INERA, UNPS-B, SOFITEX, FAO…
- Forum anonyme local (`anonyme007`) — messages dans le navigateur seulement
- Langues : français et anglais
- Hors-ligne après la première ouverture (service worker)

## Lancer en local (pas d’hébergement requis)

```bash
git clone https://github.com/ouedraogojudicael227-blip/AgriInfo-Bf.git
cd AgriInfo-Bf
python3 -m http.server 8080
```

Ouvre `http://localhost:8080` (site) ou `http://localhost:8080/index.html?shell=app` (vue application).

## Sources officielles

- Ministère : https://www.agriculture.bf/
- Structures : https://www.agriculture.bf/les-structures/
- Météo d’État : https://meteoburkina.bf/
- Saison Sahel : https://agrhymet.cilss.int/
- Recherche : https://www.inera.bf/

## Contribuer

Lis [CONTRIBUTING.md](CONTRIBUTING.md).

On cherche surtout : photos réelles niébé et sésame, numéros DPARAH/ZAT vérifiés, traductions, corrections INERA/DGPV.

## Auteur

**Judicaël Ouedraogo** — [ouedraogojudicael227-blip](https://github.com/ouedraogojudicael227-blip)

## Licence

[MIT](LICENSE)
