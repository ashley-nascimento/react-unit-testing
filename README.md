# react-unit-testing

Projeto criado para estudar os fundamentos dos testes unitários utilizando Jest e React Testing Library.

Nesse código temos uma simples listagem de nomes, onde é possível adicionar e remover itens da lista. Nesta lista foi criado um teste com 3 etapas:

- Verificar itens rederizados na lista;
- Adicionar novo item na lista;
- Remover o primeiro item da lista.

Foi possível ter o entendimento sobre as diferenças entre os tipos de testes:

- Testes unitários: testa partes isoladas (unidades) da aplicação, por exemplo os componentes do React;
- Teste de integração: testa a comunicação entre duas ou mais unidades;
- Teste e2e (End to end): simular como um usuário interagindo com a aplicação, geralmente usado para testar os fluxos mais importantes do sistema;

E por fim entender sobre os diferentes tipos de consultas. As consultas são os métodos que a biblioteca de testes fornece para localizar elementos na página:

- Get: Retorna o nó correspondente para uma consulta e lança um erro descritivo se nenhum elemento corresponder ou se mais de uma correspondência for encontrada;
- Query: Retorna o nó correspondente para uma consulta e retorna nullse nenhum elemento corresponder. Isso é útil para afirmar um elemento que não está presente. Lança um erro se mais de uma correspondência for encontrada 
- Find: Retorna um Promise que resolve quando um elemento é encontrado e corresponde à consulta fornecida. A promessa é rejeitada se nenhum elemento for encontrado ou se mais de um elemento for encontrado após um tempo limite padrão de 1000ms.
