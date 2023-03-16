import Colaborador from '../Colaborador'
import './Team.css'

const Team = (props) => {
const css = { backgroundColor: props.corSecundaria }

    return (
        (props.colaboradores.length > 0) && <section className='team' style={css}>
            <h3 style={{ borderBottom: `4px solid ${props.corPrimaria}` }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador key={colaborador.nome} corDeFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
    )
}

export default Team