import Image from 'next/image'

type LogoProps = {
  /** Larguras CSS por breakpoint, para o browser escolher a densidade certa. */
  sizes: string
  /** Vazio = decorativo. Preencha só quando o logo for o único portador do nome. */
  alt?: string
  /** Pré-carrega o logo do hero no <head>: é o elemento de LCP da página. */
  preload?: boolean
  className?: string
}

/**
 * Logo da marca nas duas versões oficiais.
 *
 * Como o tema é escolhido por botão (e não por `prefers-color-scheme`), a troca
 * não pode sair de um `<picture media>`: as duas artes ficam no HTML e o CSS
 * mostra a do tema em uso. Só a versão clara é pré-carregada — a escura fica no
 * `loading="lazy"` padrão e, escondida por `display:none`, nem chega a ser
 * baixada: quem nunca alterna o tema não paga por ela. É o que a doc do
 * `next/image` recomenda para este padrão, já que `preload` nas duas baixaria as
 * duas; o `fetchPriority` alto é o que acelera a escura quando ela é a visível.
 */
export function Logo({ sizes, alt = '', preload = false, className = '' }: LogoProps) {
  return (
    <>
      <Image
        src="/logo/light.png"
        alt={alt}
        width={384}
        height={384}
        sizes={sizes}
        preload={preload}
        className={`dark:hidden ${className}`}
      />
      {/* Mesmo `alt`: a imagem escondida sai da árvore de acessibilidade, então
          o leitor de tela anuncia apenas a do tema em uso. */}
      <Image
        src="/logo/dark.png"
        alt={alt}
        width={384}
        height={384}
        sizes={sizes}
        fetchPriority={preload ? 'high' : undefined}
        className={`hidden dark:block ${className}`}
      />
    </>
  )
}
