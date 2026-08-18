/**
 * Conteúdo do material oficial "COMO FAZER SUA IMPORTAÇÃO" (identidade/).
 *
 * É a fonte de verdade do que a página expõe para crawlers e agentes de IA
 * (`/llms.txt`, `/llms-full.txt` e o JSON-LD). Nada aqui é renderizado na
 * landing page — ao atualizar o PDF, atualize este arquivo junto.
 */

export type GuideStep = {
  /** Número do passo no material original. */
  number: number
  name: string
  summary: string
  details: string[]
}

export const guideTagline = 'Conectando você às melhores marcas e ofertas nos EUA.'

export const guidePillars = [
  { title: 'Mais economia', text: 'Melhores preços e condições.' },
  { title: 'Mais praticidade', text: 'Processo simples e organizado.' },
  { title: 'Mais tranquilidade', text: 'Sua compra segura do início ao fim.' },
] as const

export const guideIntro =
  'Um guia simples para você comprar, enviar e receber seus produtos com segurança.'

export const guideSteps: GuideStep[] = [
  {
    number: 1,
    name: 'Compre pelo app ou no grupo ao vivo',
    summary: 'A compra pode ser feita de duas formas: pelo aplicativo ou pelo WhatsApp.',
    details: [
      'Pelo app: escolha a loja, filtre os produtos, monte seu carrinho e visualize os valores já convertidos.',
      'Pelo WhatsApp: publicamos oportunidades online e ofertas em tempo real.',
      'Para pedir no grupo, escreva "EU QUERO" na publicação desejada. No final do dia o pedido é lançado no app com o status "Aguardando".',
      'Os preços são divulgados em US$ e recebem 7,5% de Sales Tax (imposto americano) mais 25% de taxa de serviço. Depois disso, o valor é convertido automaticamente para pagamento no app.',
      'Importante: após a confirmação do pedido não é possível realizar trocas ou cancelamentos.',
    ],
  },
  {
    number: 2,
    name: 'Acompanhe o estoque (suíte)',
    summary: 'Após a compra, todos os seus produtos são cadastrados no seu Estoque (Suíte).',
    details: [
      'No estoque você visualiza os produtos recebidos, a foto e o peso de cada item e o peso total do seu estoque.',
      'Se a compra foi feita em um dos grupos do app, aguarde o encerramento do grupo: os produtos são cadastrados em até 48 horas após o fechamento, conforme forem recebidos e conferidos.',
      'É possível solicitar envios de até 20 kg, mas a recomendação é solicitar o envio sempre que o estoque atingir aproximadamente 10 kg.',
      'Enviar a cada ~10 kg melhora o manuseio durante o transporte, aumenta a segurança dos produtos, evita acúmulo excessivo no estoque e reduz o tamanho da caixa, tornando o envio mais discreto.',
      'Armazenamento gratuito por 60 dias. Depois disso é cobrado US$ 1 por dia para cada produto com o prazo expirado.',
      'Ao completar 90 dias, os produtos são considerados abandonados e descartados da suíte.',
    ],
  },
  {
    number: 3,
    name: 'Solicite seu envio',
    summary:
      'Quando quiser enviar seus produtos, acesse Envio → Solicitar Envio e peça a montagem da sua caixa.',
    details: [
      'Antes de solicitar o envio, você pode simular o valor do frete diretamente no app.',
      'Após a solicitação, a caixa fica com o status "Em Conferência" até a próxima segunda-feira, quando a equipe realiza a montagem.',
      'A sequência é: envio solicitado → pedido em conferência → montagem da caixa na segunda-feira seguinte → pedido liberado para pagamento, com o frete calculado.',
      'Produtos que ainda não estiverem cadastrados não entram na montagem da caixa: eles permanecem no Estoque (Suíte) e seguem na próxima remessa, após a conclusão do cadastro.',
    ],
  },
  {
    number: 4,
    name: 'Acompanhe o rastreio',
    summary: 'Depois que a caixa é enviada, o código de rastreio fica disponível no app.',
    details: [
      'Todas as caixas pagas são coletadas às quintas-feiras, e o rastreio é disponibilizado no app após a coleta.',
      'Com o código você acompanha todas as etapas da entrega até o recebimento.',
      'Caixas com pagamento pendente têm cobrança adicional de US$ 10 por semana até a regularização. Após quatro semanas de atraso, a caixa é descartada.',
    ],
  },
  {
    number: 5,
    name: 'Pague o tributo alfandegário',
    summary: 'Toda compra internacional está sujeita à tributação brasileira.',
    details: [
      'Os tributos correspondem a 60% mais ICMS.',
      'Os valores são calculados sobre o valor declarado pelo cliente, informado na declaração feita no app no momento da solicitação do envio.',
      'No frete pelos Correios, o pagamento é feito diretamente no portal dos Correios após a liberação da fiscalização.',
      'No frete pela FedEx, o pagamento é feito conforme as orientações da FedEx.',
      'Importante: o pagamento do tributo é de responsabilidade do importador.',
    ],
  },
]

export type GuideFaq = { question: string; answer: string }

/** Perguntas frequentes derivadas do mesmo material, para consulta por agentes. */
export const guideFaq: GuideFaq[] = [
  {
    question: 'Como faço uma compra com a Pack to Brazil?',
    answer:
      'De duas formas: pelo aplicativo, escolhendo a loja, filtrando os produtos e montando o carrinho com os valores já convertidos; ou pelo WhatsApp, escrevendo "EU QUERO" na publicação da oferta desejada. No final do dia o pedido aparece no app com o status "Aguardando".',
  },
  {
    question: 'Quais taxas incidem sobre o preço anunciado em dólar?',
    answer:
      'Sobre o preço em US$ incidem 7,5% de Sales Tax, referente ao imposto americano, e 25% de taxa de serviço. Em seguida o valor é convertido automaticamente para pagamento no app.',
  },
  {
    question: 'Posso trocar ou cancelar um pedido?',
    answer: 'Não. Após a confirmação do pedido não é possível realizar trocas ou cancelamentos.',
  },
  {
    question: 'Em quanto tempo meus produtos aparecem no estoque?',
    answer:
      'Compras feitas em grupos do app são cadastradas em até 48 horas após o encerramento do grupo, conforme os produtos forem recebidos e conferidos.',
  },
  {
    question: 'Por quanto tempo posso deixar os produtos armazenados?',
    answer:
      'O armazenamento é gratuito por 60 dias. Após esse prazo é cobrado US$ 1 por dia para cada produto com o prazo expirado. Ao completar 90 dias, os produtos são considerados abandonados e descartados da suíte.',
  },
  {
    question: 'Qual é o peso máximo e o peso recomendado por caixa?',
    answer:
      'É possível solicitar envios de até 20 kg, mas a recomendação é solicitar o envio sempre que o estoque atingir aproximadamente 10 kg — o manuseio fica melhor, a caixa fica menor e mais discreta e os produtos ficam mais seguros.',
  },
  {
    question: 'Como solicito o envio da minha caixa?',
    answer:
      'No app, acesse Envio → Solicitar Envio e peça a montagem da caixa. Você pode simular o frete antes. A caixa fica com o status "Em Conferência" até a segunda-feira seguinte, quando a equipe faz a montagem e libera o pedido para pagamento com o frete calculado.',
  },
  {
    question: 'Quando as caixas são coletadas e quando sai o rastreio?',
    answer:
      'Todas as caixas pagas são coletadas às quintas-feiras. O código de rastreio fica disponível no app logo após a coleta.',
  },
  {
    question: 'O que acontece se eu não pagar a caixa?',
    answer:
      'Caixas com pagamento pendente têm cobrança adicional de US$ 10 por semana até a regularização. Após quatro semanas de atraso, a caixa é descartada.',
  },
  {
    question: 'Quanto pago de imposto de importação?',
    answer:
      'Os tributos correspondem a 60% mais ICMS, calculados sobre o valor declarado pelo cliente no app no momento da solicitação do envio. O pagamento do tributo é de responsabilidade do importador: pelo portal dos Correios, após a liberação da fiscalização, ou conforme as orientações da FedEx.',
  },
]
