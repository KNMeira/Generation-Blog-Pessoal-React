import axios from "axios";

const api = axios.create({
  baseURL: 'https://blogpessoal-a0e4.onrender.com'
})

export const cadastrarUsuario = async(url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export const login = async(url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export const buscar = async(url: string, setDados: Function, header: Object) => {
  const resposta = await api.get(url, header)
  setDados(resposta.data)
//   setDados([
//     {
//         "id": 1,
//         "titulo": "primeira postagem",
//         "texto": "teste postagem",
//         "data": "2024-04-18T18:40:57.358442",
//         "tema": null,
//         "usuarioModel": null
//     },
//     {
//         "id": 2,
//         "titulo": "postagem sobre dogs",
//         "texto": "Cachorros são mamíferos pertencentes à família Canidae e ao gênero Canis. Eles são conhecidos por sua proximidade com os seres humanos ao longo da história, desempenhando diversos papéis, desde companhia e guarda até ajuda em atividades como caça e pastoreio.",
//         "data": "2024-04-18T19:15:46.992293",
//         "tema": null,
//         "usuarioModel": null
//     },
//   ]
// )
}

export const cadastrar = async(url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.post(url, dados, header)
  setDados(resposta.data)
}

export const atualizar = async(url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.put(url, dados, header)
  setDados(resposta.data)
}

export const deletar = async(url: string, header: Object) => {
  await api.delete(url, header)
}