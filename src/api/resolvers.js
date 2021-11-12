const db = require('../config/database')

module.exports = {
    Query: {
        async getAluno(_, { ra }) {
            return await db('aluno').where({ra}).first()
        },
        async getAlunos() {
            return await db('aluno')
        }
    },
    Mutation: {
        async createAluno (_, {input})
        {
            const resultado = await db('aluno').insert({
                ra: input.ra,
                cpf: input.cpf,
                nome: input.nome,
                curso: input.curso,
                semestre: input.semestre,
                cidade: input.cidade
            })

            return await db('aluno').where({ra: input.ra}).first()
        },
        async deleteAluno(_, { ra }) {
            const resultado = await db('aluno').del().where({ra})
            return resultado;
        }
    }
}