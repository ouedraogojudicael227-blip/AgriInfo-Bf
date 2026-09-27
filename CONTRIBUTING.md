# Contribuer à AgriInfo BF

Merci. Le projet est volontairement simple : HTML, CSS, JavaScript, pas de framework.

## Règle importante : pas de push sur `main`

La branche `main` est protégée.

- Tu ne pousses **jamais** directement sur `main`.
- Tu crées une branche, tu commites, tu ouvres une **pull request**.
- Un responsable relit puis fusionne vers `main`.

Branches du dépôt :

| Branche | Rôle |
|---|---|
| `main` | Version stable. Interdite aux push directs. |
| `develop` | Travail en cours, tests avant fusion. |
| `i18n/langues-locales` | Traductions mooré, dioula, fulfuldé, etc. |

## Priorité n°1 : langues locales

C’est la contribution la plus utile pour l’instant.

L’app parle aujourd’hui **français** et **anglais**. On veut surtout :

1. **Mooré** (`mos`)
2. **Dioula / Jula** (`dyu`)
3. **Fulfuldé** (`ff`)
4. ensuite d’autres langues du Burkina si tu les parles vraiment

Fichier à modifier : `js/i18n.js`.

Comment faire :

```bash
git clone https://github.com/ouedraogojudicael227-blip/AgriInfo-Bf.git
cd AgriInfo-Bf
git checkout i18n/langues-locales
git checkout -b i18n/moore   # ou i18n/dioula, i18n/fulfulde
```

Dans `js/i18n.js` :

- copie le bloc `fr:` ;
- crée un bloc `mos:`, `dyu:` ou `ff:` ;
- traduis **toutes** les clés (même texte, autre langue) ;
- écris comme on parle au champ, pas comme un dictionnaire scolaire ;
- n’invente pas de termes techniques : garde le mot français si le mot local n’est pas clair (zaï, ZAT, mil, sorgho…).

Puis ouvre une pull request vers `i18n/langues-locales` (ou `develop`).

## Autres contributions (après les langues)

- photos réelles niébé et sésame (licence libre, crédit dans `PHOTOS.md`)
- numéros DPARAH / ZAT vérifiés sur place
- corrections de conseils d’après fiches INERA / DGPV

## Avant de coder

1. Ouvre une **issue** pour dire ce que tu veux faire.
2. Pars de `develop` (ou de `i18n/langues-locales` pour une traduction) :
   `git checkout -b feat/nom-court`
3. Teste en local : `python3 -m http.server 8080`
4. Envoie une **pull request**. Pas de commit direct sur `main`.

## Où modifier quoi

| Besoin | Fichier |
|---|---|
| Traduction FR / EN / langues locales | `js/i18n.js` |
| Texte d’une fiche culture | `js/data.js` |
| Contact / ZAT / ministère | `js/data.js` |
| Comportement (PWA, forum, cookies) | `js/app.js` |
| Apparence | `css/style.css` |
| Nouvelle page | fichier `.html` + entrée dans `sw.js` |

Après un changement important, augmente le nom du cache dans `sw.js`.

## Photos

- Uniquement des photos **réelles**.
- Pas d’image générée par IA.
- Licence libre et crédit dans `PHOTOS.md`.

## Conseils agricoles

Indique la source (INERA, DGPV, agriculture.bf, observation de terrain).
