import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import { calcularMedia, formatarMedia, obterSituacao } from '../src/media.js';

describe('calcularMedia', () => {
  test('retorna a própria nota quando há apenas uma', () => {
    assert.equal(calcularMedia([8]), 8);
  });

  test('calcula a média de várias notas', () => {
    assert.equal(calcularMedia([6, 8, 10]), 8);
  });

  test('aceita notas decimais', () => {
    assert.equal(calcularMedia([7.5, 8.5]), 8);
  });

  test('lança erro quando nenhuma nota é informada', () => {
    assert.throws(() => calcularMedia([]), /Informe ao menos uma nota/);
  });

  test('lança erro quando uma nota é negativa', () => {
    assert.throws(() => calcularMedia([8, -1]), /Nota inválida: -1/);
  });

  test('lança erro quando uma nota é maior que 10', () => {
    assert.throws(() => calcularMedia([8, 10.5]), /Nota inválida: 10.5/);
  });

  test('lança erro quando uma nota é NaN', () => {
    assert.throws(() => calcularMedia([8, NaN]), /Nota inválida: NaN/);
  });

  test('lança erro quando uma nota é um texto', () => {
    assert.throws(() => calcularMedia([8, '8']), /Nota inválida: 8/);
  });

  test('aceita as notas 0 e 10', () => {
    assert.equal(calcularMedia([0, 10]), 5);
  });
});

describe('obterSituacao', () => {
  test('retorna "Aprovado com distinção" para média igual a 9', () => {
    assert.equal(obterSituacao(9), 'Aprovado com distinção');
  });

  test('retorna "Aprovado com distinção" para média igual a 10', () => {
    assert.equal(obterSituacao(10), 'Aprovado com distinção');
  });

  test('retorna "Aprovado" para média logo abaixo da média de distinção', () => {
    assert.equal(obterSituacao(8.9), 'Aprovado');
  });

  test('retorna "Aprovado" para média acima da média de aprovação', () => {
    assert.equal(obterSituacao(8.5), 'Aprovado');
  });

  test('retorna "Aprovado" para média igual a 7', () => {
    assert.equal(obterSituacao(7), 'Aprovado');
  });

  test('retorna "Recuperação" para média entre 5 e 7', () => {
    assert.equal(obterSituacao(6), 'Recuperação');
  });

  test('retorna "Recuperação" para média igual a 5', () => {
    assert.equal(obterSituacao(5), 'Recuperação');
  });

  test('retorna "Reprovado" para média abaixo de 5', () => {
    assert.equal(obterSituacao(4.9), 'Reprovado');
  });
});

describe('formatarMedia', () => {
  test('arredonda a média para uma casa decimal', () => {
    assert.equal(formatarMedia(7.666666666666667), '7,7');
  });

  test('exibe a casa decimal mesmo quando a média é inteira', () => {
    assert.equal(formatarMedia(7), '7,0');
  });

  test('formata a nota máxima', () => {
    assert.equal(formatarMedia(10), '10,0');
  });

  test('arredonda para cima quando a segunda casa é 5', () => {
    assert.equal(formatarMedia(5.25), '5,3');
  });
});
