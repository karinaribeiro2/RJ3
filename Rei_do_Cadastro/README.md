# 👑 Cadastro Supremo: O Império dos Registros Empresariais 📜

## 📝 Descrição
Este projeto implementa um sistema de cadastro de clientes e empresas utilizando JavaScript. Ele permite a criação de objetos representando empresas, clientes, telefones e endereços, garantindo a privacidade de atributos sensíveis como CPF e CNPJ.

## 🚀 Funcionalidades
- 🏢 Criar objetos dos tipos:
  - **Empresa** (com razão social, nome fantasia, CNPJ, endereço, clientes e telefones)
  - **Cliente** (com nome, CPF, endereço e telefones)
  - **📞 Telefone** (com DDD e número)
  - **🏠 Endereço** (com estado, cidade, rua e número)
- 🤝 Adicionar clientes a uma empresa
- 📲 Associar telefones a clientes e empresas
- 📄 Exibir uma descrição detalhada da empresa e seus clientes

## 🏗️ Estrutura do Código

O projeto contém as seguintes classes:

- **🧑‍💼 Cliente**
  - Possui um atributo privado `#cpf`.
  - Armazena um conjunto de telefones.
  - Possui métodos `getCpf()`, `getNomeUpperCase()`, `getNomeLowerCase()` e `addTelefone()`.

- **📞 Telefone**
  - Possui atributos `ddd` e `numero`.

- **🏠 Endereço**
  - Possui atributos `estado`, `cidade`, `rua` e `numero`.

- **🏢 Empresa**
  - Possui um atributo privado `#cnpj`.
  - Armazena um conjunto de clientes e telefones.
  - Possui métodos `getCnpj()`, `getRazaoSocialUpperCase()`, `getRazaoSocialLowerCase()`, `getNomeFantasiaUpperCase()`, `getNomeFantasiaLowerCase()`, `addCliente()`, `addTelefone()` e `gerarDescricao()`.

## ▶️ Como Executar

1. 📥 Instale o [Node.js](https://nodejs.org/) se ainda não tiver.
2. 💾 Salve o código do projeto em um arquivo `script.js`.
3. 🔍 No terminal, navegue até a pasta onde o arquivo está localizado.
4. ▶️ Execute o seguinte comando:
   ```sh
   node script.js
   ```
5. 📜 O programa imprimirá a descrição da empresa e seus clientes no console.

## 🎭 Exemplo de Saída

```
Razão Social: ABC LTDA
Nome fantasia: Mercado Online
--------------------------------------------------
Nome: João
Estado: SP cidade: São José dos Campos rua: Av Andrêmeda numero: 412
ddd: 11 numero: 99999999
ddd: 11 numero: 88888888
...
```

## 👨‍💻 Autor
Desenvolvido para prática de orientação a objetos em JavaScript.

## 📜 Licença
Este projeto está licenciado sob a MIT License.

