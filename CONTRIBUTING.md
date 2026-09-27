# Contribuer à AgriInfo BF

Merci. Le projet est volontairement simple : HTML, CSS, JavaScript, pas de framework.

## Avant de coder

1. Ouvre une **issue** pour dire ce que tu veux faire.
2. Travaille sur une branche : `git checkout -b feat/nom-court`
3. Teste en local : `python3 -m http.server 8080`
4. Envoie une **pull request** vers `main`.

## Où modifier quoi

| Besoin | Fichier |
|---|---|
| Texte d’une fiche culture | `js/data.js` |
| Contact / ZAT / ministère | `js/data.js` |
| Traduction FR / EN | `js/i18n.js` |
| Comportement (PWA, forum, cookies) | `js/app.js` |
| Apparence | `css/style.css` |
| Nouvelle page | fichier `.html` + entrée dans `sw.js` |

Après un changement important, augmente le nom du cache dans `sw.js`.

## Photos

- Uniquement des photos **réelles**.
- Pas d’image générée par IA.
- Licence libre et crédit dans `PHOTOS.md`.

Manque actuel : **niébé** et **sésame**.

## Conseils agricoles

Indique la source (INERA, DGPV, agriculture.bf, observation de terrain).
