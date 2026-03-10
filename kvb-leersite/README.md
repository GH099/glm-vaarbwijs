# Klein Vaarbewijs I & II Leersite

Een interactieve en visuele leersite voor het voorbereiden op het Klein Vaarbewijs examen.

## Bestanden in deze map

- `page.tsx` - De hoofdpagina (React component)
- `kvb-content.ts` - Alle content data (tekst, quiz vragen, etc.)
- `images/` - Map met visuele afbeeldingen (betonning, lichten, etc.)

## Installatie

### Optie 1: Nieuw Next.js project maken

1. Maak een nieuw Next.js project:
```bash
npx create-next-app@latest kvb-leersite --typescript --tailwind --eslint
cd kvb-leersite
```

2. Installeer shadcn/ui:
```bash
npx shadcn@latest init
```

3. Installeer de benodigde componenten:
```bash
npx shadcn@latest add card tabs accordion badge button progress alert checkbox
```

4. Kopieer de bestanden:
   - `page.tsx` → `src/app/page.tsx`
   - `kvb-content.ts` → `src/lib/data/kvb-content.ts`
   - `images/` → `public/images/`

5. Start de server:
```bash
npm run dev
```

6. Open http://localhost:3000

### Optie 2: Bestaand project

Als je al een Next.js project hebt:

1. Zorg dat je React, Tailwind CSS en shadcn/ui hebt geïnstalleerd
2. Kopieer de bestanden naar de juiste locaties
3. De componenten die gebruikt worden:
   - Card, CardContent, CardHeader, CardTitle, CardDescription
   - Tabs, TabsContent, TabsList, TabsTrigger
   - Badge, Button, Progress, Alert, Checkbox
   - Check of deze beschikbaar zijn in je project

## Inhoud

### KVB1 - Binnenwateren
- **Domein A**: Wettelijke bepalingen (18 examenvragen)
- **Domein B**: Voortstuwing, veiligheid en milieu (5 examenvragen)
- **Domein C**: Waterwegen, vaarwater en meteorologie (9 examenvragen)
- **Domein D**: Varen en manoeuvreren (8 examenvragen)

### KVB2 - Ruime Vaarwateren
- **Domein E**: Wettelijke bepalingen ruime vaarwateren (8 examenvragen)
- **Domein F**: Navigatie (19 examenvragen)

## Functionaliteiten

- ✅ Voortgangsbewaking (localStorage)
- ✅ Interactieve quiz per domein
- ✅ Visuele afbeeldingen van betonning, lichten, tekens
- ✅ Kernpunten en struikelblokken
- ✅ Examenmatrix
- ✅ Responsive design

## Examen Info

| Examen | Vragen | Tijd | Slagingsgrens |
|--------|--------|------|---------------|
| KVB1 | 40 | 60 min | 56/80 punten |
| KVB2 | 27 | 90 min | 35/50 punten |

## Technologie

- Next.js 15 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui componenten

## License

Dit project is gemaakt voor educatieve doeleinden ter voorbereiding op het CBR Klein Vaarbewijs examen.
