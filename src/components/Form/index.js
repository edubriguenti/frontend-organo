import { useState } from 'react'
import Button from '../Button'
import DropDown from '../DropDown'
import Field from '../Field'
import './Form.css'

const Form = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('#FFFFFF')

    const onSave = (event) => {
        event.preventDefault()
        props.onColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="form">
            <form onSubmit={onSave} >
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Field
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                />
                <Field
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <Field
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <DropDown
                    required={true}
                    label="Time"
                    items={props.times}
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                />
                <Button>
                    Criar card
                </Button>
            </form>
            <form onSubmit={(event) => {
                event.preventDefault()
                props.cadastrarTime({ nome: nomeTime, cor: corTime })
            }} >
                <h2>Preencha os dados para criar um novo time</h2>
                
                <Field
                    required
                    label="Nome"
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterar={valor => setNomeTime(valor)}
                />
                <Field
                    required
                    type='color'
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterar={valor => setCorTime(valor)}
                />
                <Button>
                    Criar um novo time
                </Button>
            </form>
        </section>
    )
}

export default Form