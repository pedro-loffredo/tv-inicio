# Início · tela inicial da TV da Neno's House

## O que é
Tela inicial própria para uma Samsung UN50AU7700 (Tizen 6, 2021), carregada como módulo de app do TizenBrew. Substitui, no uso diário, a Smart Hub da Samsung: abre os apps de streaming com o mínimo de cliques e mostra só o que é útil.

## Quem usa e onde
A casa, no sofá, à noite na maior parte do tempo, a uns 3 metros de uma tela de 50". Controle remoto de setas e OK, sem mouse nem toque. Uso: só streaming (Netflix, Prime Video com canais como HBO, Disney+, YouTube; também HBO Max, Apple TV, Spotify instalados). Sem antena, sem TV a cabo.

## Decisões do dono (Pedro, 19/10/2026)
- Direção visual: **Cinema noturno**. Se ficar ruim, a alternativa é **Janela** (foto do dia em tela cheia).
- Informação útil: **só o clima**, de **Araraquara**.
- Saudação: **"Neno's House, boa noite!"**, com o período do dia variando.
- Pedido literal: "perfeito, lindo, maravilhoso, personalizado", "funcional e muito bonito", não precisa ser igual à Apple TV.

## Restrições técnicas
- Motor web do Tizen 6 ≈ Chromium 76: sem optional chaining, `:has`, container queries, `gap` em flex só a partir do 84 (usar margem).
- Processador fraco: nada de blur pesado animado, nada de vídeo de fundo, poucas camadas compostas.
- Abre apps por `tizen.application.launch(id)`; os ids foram medidos na TV.
- Tem que funcionar sem rede no boot: fonte local, clima entra quando a rede chega.

## Próxima versão (pedido do Pedro, 19/10/2026)
- ~~Fumê na frente dos vizinhos~~: resolvido na 0.2.0 (sombra curta, só embaixo do cartão).
- Limpar os dois módulos "Unknown Module" no TizenBrew (`gh/pedro-loffr` e `npm/pedro-loffredo/tv-inicio`), com o Pedro olhando a TV.

## Como publicar uma versão
1. Editar `launcher/home.html`, conferir em `http://localhost:8765/launcher/home.html` (servidor: `uv run python -m http.server 8765` na raiz).
2. Pedro roda `git add launcher && git commit -m "..." && git push origin main` (o push é dele).
3. Limpar o cache: `https://purge.jsdelivr.net/gh/pedro-loffredo/tv-inicio/launcher/home.html`.
4. Reabrir o TizenBrew na TV: `DELETE` e depois `POST` em `http://192.168.15.10:8001/api/v2/applications/xvvl3S1bvH.TizenBrewStandalone`.

## Pegadinha do cache (medido em 19/10/2026)
O jsDelivr guarda o arquivo da tela pelo caminho sem versão (`x-jsd-version: HEAD`) e, às vezes, o purge não derruba a cópia velha por horas. `?v=` na URL não adianta, o CDN ignora. Saída usada: **arquivo da tela com nome novo** + `appPath` novo no `package.json` (o manifesto atualizou com purge nas duas vezes). Se travar de novo, renomear `launcher/home.html`.
