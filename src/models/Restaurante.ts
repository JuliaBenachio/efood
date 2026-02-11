class Restaurante {
  imagem: string
  nome: string
  descricao: string
  info: string[]
  id: number

  constructor(
    imagem: string,
    nome: string,
    descricao: string,
    info: string[],
    id: number
  ) {
    this.imagem = imagem
    this.nome = nome
    this.descricao = descricao
    this.info = info
    this.id = id
  }
}

export default Restaurante
