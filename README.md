# Site vitrine — PS GROUP SARL

Site statique HTML / CSS / JS (aucune dépendance, aucun build) pour PS GROUP SARL.

## Structure

- `index.html` — Accueil (slider + présentation + cartes des 6 entreprises)
- `a-propos.html` — À propos du groupe
- `contact.html` — Coordonnées + formulaire
- `entreprises/` — une page par entreprise du groupe (audiovisuel, infographie, formation, événementiel, digital, afrijeune-plus)
- `assets/css/style.css` — variables de couleurs (`:root`) et styles
- `assets/js/main.js` — menu mobile + slider de la page d'accueil

## Lancer en local

```bash
python -m http.server 8124
```

Puis ouvrir http://localhost:8124

## À faire quand les éléments officiels arrivent

- Remplacer le logo texte (`.logo`) par le vrai logo (fichier à déposer dans `assets/img/`)
- Ajuster les couleurs `--color-primary` / `--color-accent` dans `assets/css/style.css` si la charte évolue (actuellement extraites de la bannière Facebook du groupe)
- Remplacer les images placeholder du slider (`assets/img/slides/`) par de vraies photos
- Relire/ajuster les textes de présentation par entreprise (actuellement rédigés à partir des infos fournies, à valider)
- Mettre à jour les liens réseaux sociaux (Facebook/Instagram/TikTok/YouTube) avec les vraies URLs
