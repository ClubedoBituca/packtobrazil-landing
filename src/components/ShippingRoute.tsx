const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/**
 * Separador entre as duas telas: o pacote percorre a rota de um ponto ao outro e
 * é entregue no destino. É a página contando, em um gesto, o que a marca faz — e
 * o que marca a virada da apresentação para a ação.
 *
 * Linha tracejada em CSS + SVG inline: escala sem overflow e sem JS. O trajeto é
 * só `transform`/`opacity` (ver `.route-*` em globals.css), então nada reflui; a
 * distância exata entre os dois pinos sai de `100cqw`, com a pista como container
 * de consulta.
 */
export function ShippingRoute({ className = '' }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Rota do pacote: sai dos Estados Unidos e é entregue no Brasil"
      className={`flex w-full max-w-2xl items-center gap-2 text-ink-muted sm:gap-4 ${className}`}
    >
      <Pin />

      <span aria-hidden className="route-track relative h-6 flex-1 sm:h-7">
        <span className="absolute inset-x-0 top-1/2 border-t border-dashed border-hairline/45" />

        {/* Depois da linha no DOM e com a caixa pintada por dentro: a rota passa
            atrás do pacote, nunca por cima dele. */}
        <span className="route-flyer absolute top-1/2 left-0">
          <Parcel />
        </span>
      </span>

      <Pin className="route-target" />
    </div>
  )
}

function Pin({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`size-[18px] shrink-0 sm:size-5 ${className}`}
      {...stroke}
    >
      <path d="M12 21.5s7-6.1 7-11.1a7 7 0 1 0-14 0c0 5 7 11.1 7 11.1Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  )
}

/**
 * Caixa de encomenda vista de frente — corpo, aba e fita —, e não o cubo
 * isométrico de antes: a esta altura o desenho tinha de ler como "pacote" num
 * relance de 20px.
 *
 * O corpo é preenchido com a cor da página (`fill-surface`), que é o que faz o
 * tracejado desaparecer atrás dele durante o trajeto.
 */
function Parcel() {
  return (
    <svg
      aria-hidden
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="route-parcel size-[22px] shrink-0 sm:size-6"
      {...stroke}
    >
      <rect x="3.4" y="6.8" width="17.2" height="11.4" rx="1.3" className="fill-surface" />
      {/* Vinco da aba atravessando, e a fita só na parte de cima: é o que faz o
          desenho ler como caixa fechada, e não como uma janela de quatro vidros. */}
      <path d="M3.4 11.2h17.2M12 6.8v4.4" />
    </svg>
  )
}
