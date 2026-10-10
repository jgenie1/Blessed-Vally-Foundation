# Plan — Blessed Vally Foundation

## Intention produit

Refondre complètement le site public de Blessed Vally Foundation en une expérience institutionnelle bilingue anglais/français, orientée vers l’éducation, la foi et la transformation durable. Le site doit permettre à une personne qui découvre la fondation de comprendre en moins d’une minute : qui elle sert, où elle agit, ce qu’elle construit et comment s’impliquer.

Le site public reste sans données bancaires visibles. Le projet possède maintenant un serveur Express et une base MySQL gérée pour le checkout Stripe et la conservation minimale des transactions. La provision Stripe native Manus n’étant pas disponible dans la région du compte, l’intégration utilise des secrets externes protégés `BVALLEY_STRIPE_SECRET_KEY`, `BVALLEY_STRIPE_WEBHOOK_SECRET` et `BVALLEY_STRIPE_PUBLISHABLE_KEY`; leurs valeurs restent à renseigner via le formulaire sécurisé. Le formulaire de contact utilise toujours une action mailto simple.

## Direction visuelle

- **Mouvement de design :** éditorial institutionnel contemporain, inspiré des rapports d’impact, des magazines d’éducation et de l’architecture civique tropicale. Le résultat doit être plus proche d’une maison de mission crédible que d’un site caritatif générique.
- **Principes :** 1) clarté avant décoration, 2) dignité et agency des enfants, 3) chaleur humaine maîtrisée, 4) preuve d’une vision qui avance.
- **Philosophie couleur :** un bleu nuit profond ancre la confiance et la foi ; un sable chaud rappelle le sol, la proximité et Haïti ; un vert feuille signale la croissance ; un corail discret crée des points d’énergie pour les appels à l’action. Le contraste reste accessible et le corail n’est jamais la seule information porteuse de sens.
- **Palette :** ink `#102A43`, ocean `#1C4966`, sand `#F5F0E8`, paper `#FCFBF8`, leaf `#507A62`, coral `#D97B5D`, gold `#D7A84A`.
- **Paradigme de mise en page :** compositions asymétriques à deux colonnes, grands titres alignés à gauche, rail latéral numéroté pour les piliers et bandeaux pleine largeur pour les messages clés. Éviter les grilles centrées uniformes ; les cartes peuvent s’imbriquer avec des hauteurs différenciées.
- **Signatures visuelles :** 1) le mot-symbole avec un petit cercle/halo et une croix abstraite dans le “O” de “Foundation”, 2) des numéros de sections en grand corps translucide, 3) des séparateurs en ligne fine avec point corail.
- **Interactions :** le sélecteur de langue est toujours visible ; le menu mobile s’ouvre sans perdre le contexte ; les cartes de piliers révèlent leur résumé au survol ou au focus ; les CTA restent explicites et non manipulateurs.
- **Animation :** apparitions douces de 500–700 ms sur les sections, translation verticale de 12 px maximum, aucune animation automatique de texte ; hover des cartes avec élévation légère et déplacement du point corail ; respect de `prefers-reduced-motion`.
- **Typographie :** `DM Sans` pour la navigation, les labels et le corps ; `Fraunces` pour les grands titres et les citations. Les titres utilisent une casse phrase, un interlettrage serré et beaucoup d’espace vertical.
- **Essence de marque :** une fondation chrétienne qui transforme l’aide d’aujourd’hui en opportunités éducatives et communautaires durables pour les enfants et les familles aux États-Unis et en Haïti. Personnalité : **ancrée, visionnaire, accueillante**.
- **Voix :** directe, digne, active, jamais misérabiliste. Les titres parlent d’avenir et de vocation ; les CTA disent exactement ce qui se passe.
  - Exemple 1 : « Nous ne nous contentons pas de répondre aux besoins. Nous construisons pour l’avenir. »
  - Exemple 2 : « Donnez de la force à une vision éducative qui s’enracine. »
- **Mot-symbole / logo :** wordmark “BLESSED VALLY” en petites capitales sobres, précédé d’un médaillon circulaire composé d’un soleil levant, d’une ligne de livre ouvert et d’une croix très simple. La version réalisée dans l’interface sera en SVG inline/CSS afin de rester nette et adaptable.
- **Couleur propriétaire :** `#D97B5D`, corail terre cuite, utilisé comme accent reconnaissable pour les points d’action, la ligne-signature et les micro-états.

## Architecture des pages

- `/` — Accueil / Home
- `/about` — À propos / About Us
- `/mission` — Notre mission / Our Mission
- `/education` — Éducation / Education
- `/faith` — Foi & évangélisation / Faith & Evangelism
- `/community` — Transformation communautaire / Community Transformation
- `/haiti` — Haïti / Haiti
- `/leadership` — Notre équipe dirigeante / Our Leadership
- `/partnerships` — Partenariats / Partnerships
- `/news` — Actualités & mises à jour / News & Updates
- `/get-involved` — Participer / Get Involved
- `/donate` — Faire un don / Donate
- `/contact` — Contact

Chaque route réutilise le même shell (barre d’annonce, header, sélecteur de langue, footer) et remplace le contenu par la langue active. Le sélecteur bascule entre les copies anglaise et française sans changer la route ni faire perdre la position de lecture.

## Implémentation

- `client/src/App.tsx` orchestre le shell, le routeur Wouter et la route active.
- `client/src/lib/site-content.ts` contient l’ensemble des contenus bilingues, les labels de navigation, les métadonnées et les données des cinq piliers.
- `client/src/components/SiteShell.tsx` contient topbar, header responsive, mobile nav, footer et sélecteur de langue.
- `client/src/components/LogoMark.tsx` contient le mot-symbole SVG/CSS.
- `client/src/components/SectionIntro.tsx`, `PillarCard.tsx`, `ImpactBand.tsx`, `PageHero.tsx` encapsulent les motifs éditoriaux réutilisables.
- `client/src/pages/SitePage.tsx` rend les pages par blocs de contenu ; `client/src/pages/Home.tsx` compose l’accueil avec ses cinq piliers et appels à l’action.
- `client/src/index.css` remplace le thème starter par les tokens de marque, la typographie, les effets de texture, les responsive breakpoints et les états de mouvement.
- `client/public/manus-routes.json` déclare les 13 routes publiques.
- `client/public/images/` réutilise les photos déjà publiées sur le site actuel, téléchargées dans le projet afin de préserver la continuité des enfants et des communautés représentés.
- `index.html` porte les méta-tags de base. Le titre et la description sont synchronisés côté client par route pour l’expérience et le partage ; l’absence de serveur signifie que le site reste une SPA statique dans cette première livraison.

## Contenu et garde-fous

- La direction affichée est strictement : Dr. Vally Jean-Louis Legouté, Fondatrice et Présidente ; M. Jean-Ronald Legouté, Vice-Président ; M. Pierre, Conseiller.
- Les anciennes coordonnées bancaires et les anciens ratios 50/40/10 ne sont pas repris.
- Les actualités existantes sont traitées comme archives de démonstration éditoriales et clairement étiquetées ; aucun contenu obsolète n’est présenté comme une action actuelle.
- La page Contact utilise `Blessedvallyfoundation@gmail.com` en anglais et signale que l’adresse française doit être harmonisée avant publication.
- Le site est livré comme version de relecture : aucun appel à publication automatique ni paiement n’est activé.

## Structure du projet

```text
bvally/
├── client/
│   ├── index.html
│   └── src/
│       ├── components/       # Shell, logo, sections et cartes
│       ├── lib/              # Contenus bilingues, helpers et métadonnées
│       ├── pages/            # Accueil, pages éditoriales et 404
│       ├── App.tsx           # Routes et orchestration
│       └── index.css         # Système visuel responsive
├── client/public/            # Images, shells SEO par route et manifeste public
│   ├── images/               # Photos réutilisées du site actuel
│   └── manus-routes.json     # Routes publiques déclarées
├── server/stripe.ts          # Checkout Stripe, signature webhook et idempotence
├── drizzle/                  # Schéma et migrations donations/events
├── app.config.ts             # Métadonnées de logo Manus
├── plan.md
└── TODO.md
```

## Dépendances et service

Le starter React/Vite est conservé avec `stripe` côté serveur. Le serveur Express écoute sur le port 3000, la base gérée contient `donations` et `processedStripeEvents`, et le checkout crée une session Stripe hébergée dans un nouvel onglet. Le webhook `/api/stripe/webhook` vérifie la signature sur le corps brut et ignore les événements déjà traités.
