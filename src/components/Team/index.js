import Colaborador from '../Colaborador'
import './Team.css'
import hexToRgba from 'hex-to-rgba'

const Team = ({ time, colaboradores, aoDeletar, aoMudarCor, aoFavoritar }) => {
    const css = { backgroundColor: hexToRgba(time.cor, '0.6') }

    return (
        (colaboradores.length > 0) && <section className='team' style={css}>
            <input value={time.cor} onChange={evento => aoMudarCor(evento.target.value, time.id)} type='color' className='input-cor' />
            <h3 style={{ borderBottom: `4px solid ${time.cor}` }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => {
                    return <Colaborador 
                                key={colaborador.nome} 
                                corDeFundo={time.cor} 
                                colaborador={colaborador}
                                aoDeletar={aoDeletar} 
                                aoFavoritar={aoFavoritar}
                            />
                })}
            </div>
        </section>
    )
}

export default Team