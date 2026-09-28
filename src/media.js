import { MEDIA_APROVACAO, MEDIA_DISTINCAO, MEDIA_RECUPERACAO, NOTA_MAXIMA, NOTA_MINIMA } from './config.js';

/**
 * Indica se o valor é uma nota válida: um número entre NOTA_MINIMA e NOTA_MAXIMA.
 *
 * @param {unknown} nota
 * @returns {boolean}
 */
export function ehNotaValida(nota) {
  return typeof nota === 'number' && nota >= NOTA_MINIMA && nota <= NOTA_MAXIMA;
}

/**
 * Calcula a média aritmética de uma lista de notas.
 *
 * @param {number[]} notas
 * @returns {number}
 */
export function calcularMedia(notas) {
  if (!Array.isArray(notas) || notas.length === 0) {
    throw new Error('Informe ao menos uma nota.');
  }

  const indiceNotaInvalida = notas.findIndex(
    (nota) => !ehNotaValida(nota)
  );

  if (indiceNotaInvalida !== -1) {
    const notaInvalida = notas[indiceNotaInvalida];
    throw new Error(
      `Nota inválida: ${notaInvalida}. Use valores entre ${NOTA_MINIMA} e ${NOTA_MAXIMA}.`
    );
  }

  const soma = notas.reduce((total, nota) => total + nota, 0);

  return soma / notas.length;
}
/**
 * Retorna a situação do aluno de acordo com a média.
 *
 * @param {number} media
 * @returns {string} "Aprovado com distinção", "Aprovado", "Recuperação" ou "Reprovado"
 */
export function obterSituacao(media) {
  if (media >= MEDIA_DISTINCAO) {
    return 'Aprovado com distinção';
  }

  if (media >= MEDIA_APROVACAO) {
    return 'Aprovado';
  }

  if (media >= MEDIA_RECUPERACAO) {
    return 'Recuperação';
  }

  return 'Reprovado';
}

/**
 * Formata a média com uma casa decimal e vírgula como separador.
 *
 * @param {number} media
 * @returns {string} por exemplo, "7,7"
 */
export function formatarMedia(media) {
  return media.toFixed(1).replace('.', ',');
}
