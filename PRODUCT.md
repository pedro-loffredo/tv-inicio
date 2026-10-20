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
