
# SuperStudy (projekt inżynierski)

SuperStudy to platforma e-learningowa służąca jako pomoc w nauce. Użytkownik ma możliwość tworzenia fiszek i uczenia się ich kilkoma różnymi metodami. Ponadto, nauczyciele, po założeniu odpowiedniego konta, mogą tworzyć klasy dla swoich uczniów, gdzie udostępniane są zestawy fiszek oraz zadania domowe dla tej konkretnej grupy. Naszym celem jest jak najlepsza pomoc w nauce, dlatego wprowadziłyśmy system punktowy, na którym oparte są rankingi oraz dodatkowe funkcjonalności. Poprzez nagrody i zdrową konkurencję użytkownik motywowany jest do częstej oraz systematycznej pracy.

## Backend 

Wymagania do uruchomienia:
* node.js

### Aby uruchomić Backend należy wykonać następujące kroki:

Przejdź do odpowiedniego folderu:

```bash
  cd ProjektInzynierski/Backend
```

Skonfiguruj kod:

```bash
  npm install
```

Uruchom projekt poleceniem: 

```bash
  node server.js
```

## Frontend

Aby odpalić frontend lokalnie należy mieć zainstalowany node.js oraz Angular CLI (https://angular.io/guide/setup-local).

Sklonuj repozytorium projektu

```bash
  git clone https://github.com/llkor/ProjektInzynierski.git
```

Przejdź do folderu zawierającego frontend

```bash
  cd ProjektInzynierski\frontend\superstudy
```

Zainstaluj dependencies

```bash
  npm install
```

Wywołaj poniższą komendę

```bash
  ng serve --port 8081
```
Teraz frontend jest dostępny pod adresem http://localhost:8081/
