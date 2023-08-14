interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {

    const cor = props.cor ?? 'gray'

    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${cor}-700 to-${cor}-900
            text-gray-100
            px-6 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}