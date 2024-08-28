console.log('Trabalhando com listas');

console.log('Cidades que já visitei: ');

const saoPaulo = 'São Paulo';
const curitiba = 'Curitiba';
const joinville = 'Joinville';
const penha = 'Penha';
const fozDoIguaçu = 'Foz do Iguaçu';

console.log(saoPaulo, curitiba, joinville, penha, fozDoIguaçu);

const cidadesQueJaVisitei = new Array(
  'São Paulo',
  'Curitiba',
  'Joinville',
  'Penha',
  'Foz do Iguaçu'
)

cidadesQueJaVisitei.push('Pinhais');

console.log(cidadesQueJaVisitei);

console.log('A cidade mais linda:');
console.log(cidadesQueJaVisitei [4]);

console.log('Meus amigos me disseram que eu nunca fui a Joinville, eu estava muito bêbada e eles mentiram pra mim.');

cidadesQueJaVisitei.splice(2, 1);
// primeiro número no splice diz a posição do elemento que será excluído
//o segundo elemento informa quantos elementos seram excluídos
console.log(cidadesQueJaVisitei);