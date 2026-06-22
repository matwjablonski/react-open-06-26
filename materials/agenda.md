## Agenda

1. Wprowadzenie
- Charakterystyka i zasada działania biblioteki
- Konfiguracja środowiska i narzędzi deweloperskich
- JavaScript / TypeScript w kontekście React
- Zasada działania Virtual DOM
2. Podstawy React
- Wprowadzenie do składni JSX
- Tworzenie, konfigurowanie i renderowanie komponentów
- Zarządzanie stanem i jego współdzielenie
- Obsługa zdarzeń
- Cykl życia komponentów
- Debugowanie błędów i rozwiązywanie problemów
3. React Hooks
- Omówienie mechanizmu działania hooków
- Dobre praktyki Hooks i typowe pułapki
- Niemutowalne zarządzanie stanem z useState i useReducer
- Przykłady prawidłowego użycia useEffect w StrictMode
- Praca z mutowalnym stanem z useRef - dobre praktyki
- Optymalizacja wydajności dzięki hookom useMemo, useCallback, itp.
- Nowe hooki React 19: useActionState, useFormStatus, useDeferredValue
- use() - odczyt Promise i kontekstu podczas renderowania
4. React w praktyce
- Budowanie złożonych widoków
- Stylowanie - przegląd rozwiązań, implementacja motywów
- Praca z formularzami
- Routing
- Dobre praktyki
- Komunikacja z backend
- Strategie zarządzania stanem
5. Zaawansowany React
- Routing, Meta-Frameworki i Next.js
- Form Hooks - stan i walidacja formularzy
- Server Components, Server Actions i useOptimistic
- Memoizacja i optymalizacja
- Suspense i lazy
- React Compiler i dyrektywy `"use memo"` / `"use no memo"`
- React Performance Tracks
- ViewTransition jako temat Canary
- Activity i zachowanie stanu ukrytych komponentów
6. Praca z wybranym mechanizmem zarządzania stanem aplikacji
- React Context
  - Tworzenie dostawcy kontekstu i jego konsumpcja
  - Optymalizacja i dobre praktyki
- Redux Toolkit Store (opcja)
  - Omówienie założeń architektury
  - Modelowanie niemutowalnego stanu, Reduktory
  - Actions oraz action creators
  - Integracja z React, Re-selektory
  - Kiedy Redux a kiedy Context?
  - Praca z Redux Dev Tools
- MobX Observable (opcja)
  - Omówienie zasady działania MobX State Tree
  - Praktyczne zastosowania
  - Praca z DevTools
- Przegląd alternatyw
  - Jotai vs Zustand
  - Recoil jako przykład rozwiązania legacy
7. Testowanie (opcja)
- Konfiguracja Vitest/Jest z Testing Library
- Przykłady użycia selektorów RTL
- Mockowanie zależności i API
- Kiedy i co testować - omówienie
