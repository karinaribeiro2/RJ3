class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefones = new Set();
        this.#cpf = cpf;
    }

    getCpf() {
        return this.#cpf;
    }

    getNomeUpperCase() {
        return this.nome.toUpperCase();
    }

    getNomeLowerCase() {
        return this.nome.toLowerCase();
    }

    addTelefone(telefone) {
        this.telefones.add(telefone);
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
    }

    getCnpj() {
        return this.#cnpj;
    }

    getRazaoSocialUpperCase() {
        return this.razaoSocial.toUpperCase();
    }

    getRazaoSocialLowerCase() {
        return this.razaoSocial.toLowerCase();
    }

    getNomeFantasiaUpperCase() {
        return this.nomeFantasia.toUpperCase();
    }

    getNomeFantasiaLowerCase() {
        return this.nomeFantasia.toLowerCase();
    }

    addCliente(cliente) {
        this.clientes.add(cliente);
    }

    addTelefone(telefone) {
        this.telefones.add(telefone);
    }

    gerarDescricao() {
        console.log(`Razão Social: ${this.razaoSocial}`);
        console.log(`Nome fantasia: ${this.nomeFantasia}`);
        console.log('-'.repeat(50));

        this.clientes.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Estado: ${cliente.endereco.estado} cidade: ${cliente.endereco.cidade} rua: ${cliente.endereco.rua} numero: ${cliente.endereco.numero}`);
            cliente.telefones.forEach(telefone => {
                console.log(`ddd: ${telefone.ddd} numero: ${telefone.numero}`);
            });
        });
    }
}

const enderecoEmpresa = new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', 987);
const enderecoCliente1 = new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', 412);
const enderecoCliente2 = new Endereco('SP', 'São José dos Campos', 'Av São João', 789);
const enderecoCliente3 = new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', 452);

const telefone1 = new Telefone(11, 99999999);
const telefone2 = new Telefone(11, 88888888);

const empresa = new Empresa('ABC LTDA', 'Mercado Online', '12.345.678/0001-99', enderecoEmpresa);
empresa.addTelefone(telefone1);
empresa.addTelefone(telefone2);

const cliente1 = new Cliente('João', '123.456.789-00', enderecoCliente1);
cliente1.addTelefone(telefone1);
cliente1.addTelefone(telefone2);

const cliente2 = new Cliente('Gabriel', '987.654.321-00', enderecoCliente2);
cliente2.addTelefone(telefone1);
cliente2.addTelefone(telefone2);

const cliente3 = new Cliente('Barbara', '123.654.987-00', enderecoCliente3);
cliente3.addTelefone(telefone1);
cliente3.addTelefone(telefone2);

const cliente4 = new Cliente('Márcia', '321.987.654-00', enderecoCliente1);
cliente4.addTelefone(telefone1);
cliente4.addTelefone(telefone2);

empresa.addCliente(cliente1);
empresa.addCliente(cliente2);
empresa.addCliente(cliente3);
empresa.addCliente(cliente4);

empresa.gerarDescricao();
