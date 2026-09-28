# Changelog

Todas as mudanças relevantes deste projeto são documentadas neste arquivo.

O formato segue o [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
e o projeto adota o [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [1.1.0] - 2026-09-28

### Adicionado

- Situação "Aprovado com distinção" para médias maiores ou iguais a 9,0.
- Função `formatarMedia`, que exibe a média com uma casa decimal e vírgula como separador.
- Testes para notas inválidas (negativas, maiores que 10 e valores que não são números).

### Alterado

- A média é exibida com uma casa decimal na linha de comando (ex.: `7,7`).
- Cálculo da média reescrito com métodos de array, sem o laço `for`.

### Corrigido

- Alunos com média exatamente 7,0 passam a ser classificados como "Aprovado".

## [1.0.0] - 2026-09-14

### Adicionado

- Cálculo da média aritmética das notas.
- Classificação da situação do aluno: Aprovado, Recuperação ou Reprovado.
- Execução pela linha de comando (`npm start -- <notas>`).
- Integração contínua com testes e verificação de Conventional Commits.
