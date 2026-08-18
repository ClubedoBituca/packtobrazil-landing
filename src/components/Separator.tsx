import { ShippingRoute } from './ShippingRoute'

/**
 * Marca a virada entre a apresentação (marca, promessa, vídeo) e a ação
 * (benefícios e CTA). Sem texto: a própria rota — origem, pacote em trânsito,
 * destino — já diz que a página mudou de assunto.
 *
 * É o mesmo ornamento que antes fechava o hero, agora no lugar onde ele explica
 * a composição em vez de apenas decorar.
 */
export function Separator() {
  return (
    <div className="flex justify-center px-5 py-10 sm:py-14">
      <ShippingRoute className="rise" />
    </div>
  )
}
