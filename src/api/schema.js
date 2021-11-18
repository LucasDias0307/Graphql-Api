const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
    type Aluno {
        ra: String
        cpf: String
        nome: String
        curso: String
        semestre: String
        cidade: String
    }

    type Query {
        getAluno(ra: String!): Aluno
        getAlunos: [Aluno]
    }

    input AlunoInput {
        ra: String!
        cpf: String!
        nome: String!
        curso: String!
        semestre: String!
        cidade: String!
    }

    type Mutation {
        createAluno(input: AlunoInput): Aluno
        updateAluno(input: AlunoInput): Aluno
        deleteAluno(ra: String): Boolean
    }
`
module.exports = makeExecutableSchema({typeDefs, resolvers})