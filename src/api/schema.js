const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
    type Aluno {
        ra: Int
        cpf: Float
        nome: String
        curso: String
        semestre: Int
        cidade: String
    }

    type Query {
        getAluno(ra: Int!): Aluno
        getAlunos: [Aluno]
    }

    input AlunoInput {
        ra: Int!
        cpf: Float!
        nome: String!
        curso: String!
        semestre: Int!
        cidade: String!
    }

    type Mutation {
        createAluno(input: AlunoInput): Aluno
        updateAluno(input: AlunoInput): Aluno
        deleteAluno(ra: Int): Boolean
    }
`
module.exports = makeExecutableSchema({typeDefs, resolvers})