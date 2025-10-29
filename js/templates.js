export const templates = {
  index: `
    <section id="sobre">
      <h2>Sobre o Instituto Kaleo</h2>
      <p>
        O Instituto Kaleo é uma organização sem fins lucrativos dedicada a promover a transformação social
        através da educação, do cuidado e da solidariedade. Atuamos em Guarulhos e em diversas regiões do Brasil,
        oferecendo oportunidades de aprendizado, acolhimento e desenvolvimento humano para crianças, jovens e famílias
        em situação de vulnerabilidade.
      </p>
      <img src="Imagens/logo.png" alt="Logo do Instituto Kaleo">
    </section>

    <section id="missao">
      <h2>🌱 Missão</h2>
      <p>
        Cuidar, educar e inspirar crianças para que descubram seu potencial e construam um futuro melhor.
        O Instituto Kaleo acredita que cada criança merece oportunidades para aprender, brincar e crescer
        em um ambiente de amor, respeito e esperança.
      </p>
    </section>

    <section id="visao">
      <h2>🌟 Visão</h2>
      <p>
        Ser um espaço onde sonhos de crianças se tornam possíveis — um lugar que transforma realidades através
        da educação, do afeto e da solidariedade.
        Queremos um mundo em que toda criança tenha acesso à dignidade, ao conhecimento e à alegria de viver.
      </p>
    </section>

    <section id="valores">
      <h2>💚 Valores</h2>
      <ul>
        <li><strong>Amor:</strong> porque toda transformação começa com o coração.</li>
        <li><strong>Educação:</strong> ensinamos com propósito para formar crianças curiosas, criativas e confiantes.</li>
        <li><strong>Respeito:</strong> valorizamos cada história, cada sorriso e cada diferença.</li>
        <li><strong>Solidariedade:</strong> acreditamos que cuidar do outro é o maior ato de humanidade.</li>
        <li><strong>Esperança:</strong> semeamos fé no futuro e colhemos vidas transformadas.</li>
        <li><strong>Alegria:</strong> porque aprender e crescer deve ser sempre motivo de felicidade!</li>
      </ul>
    </section>

    <section id="contato">
      <h2>Contato</h2>
      <p><strong>Email:</strong> contato@institutokaleo.org</p>
      <p><strong>Telefone:</strong> (11) 99999-9999</p>
      <p><strong>Endereço:</strong> Rua da Esperança, 123 - Guarulhos/SP</p>
    </section>
  `,

  projetos: `
    <section id="introducao">
      <h2>Projetos que Transformam Vidas</h2>
      <p>
        Cada projeto do Instituto Kaleo nasce com o propósito de cuidar, educar e inspirar crianças,
        fortalecendo famílias e comunidades. Acreditamos que pequenas ações podem gerar grandes transformações.
      </p>
    </section>

    <section id="projetos-sociais">
      <h2>🌱 Nossos Projetos</h2>

      <article class="projeto">
        <h3>Educar para o Futuro</h3>
        <img src="Imagens/estudos.png" alt="Aula de reforço escolar com crianças e voluntários">
        <p>
          Oferece reforço escolar gratuito, oficinas de leitura e apoio psicológico para crianças em situação de vulnerabilidade.
          Nosso objetivo é garantir que cada aluno descubra seu potencial e se prepare para um futuro cheio de oportunidades.
        </p>
      </article>

      <article class="projeto">
        <h3>Brincar e Crescer</h3>
        <img src="Imagens/balé.png" alt="Crianças brincando em atividades lúdicas do Instituto Kaleo">
        <p>
          Espaço de convivência e lazer que promove o desenvolvimento por meio de brincadeiras educativas,
          jogos cooperativos e atividades culturais. Aqui, cada risada é uma semente de esperança.
        </p>
      </article>

      <article class="projeto">
        <h3>Esporte em Foco</h3>
        <img src="Imagens/futebol.png" alt="Crianças reunidas jogando futebol.">
        <p>
          Programa de acolhimento e apoio ao esporte, transformando a saúde e vida de nossas crianças.
        </p>
      </article>
    </section>

    <section id="voluntariado">
      <h2>🤝 Seja um Voluntário</h2>
      <p>
        Quer fazer parte dessa transformação?  
        O Instituto Kaleo conta com pessoas dedicadas que doam tempo, talento e amor ao próximo.
      </p>
      <p>
        Inscreva-se na nossa página de <a href="cadastro.html">cadastro</a> e participe dos nossos projetos como voluntário!
      </p>
      <img src="Imagens/voluntários.png" alt="Voluntários sorrindo durante evento social do Instituto Kaleo">
    </section>

    <section id="doacoes">
      <h2>💚 Apoie Nossos Projetos</h2>
      <p>
        Sua contribuição ajuda o Instituto Kaleo a continuar transformando vidas!  
        Com doações, conseguimos oferecer alimentação, materiais escolares, roupas e atividades educativas para centenas de crianças.
      </p>
      <p>
        Clique abaixo e escolha a forma de apoio:
      </p>
      <ul>
        <li><strong>Doação financeira:</strong> contribua via PIX: <code>doacoes@institutokaleo.org</code></li>
        <li><strong>Doação de materiais:</strong> brinquedos, livros, roupas e alimentos não perecíveis.</li>
        <li><strong>Parcerias:</strong> empresas podem adotar projetos ou oferecer serviços solidários.</li>
      </ul>
      <img src="Imagens/doações.png" alt="Crianças recebendo doações com alegria">
    </section>
  `,

  cadastro: `
    <section id="introducao">
      <h2>🌱 Faça Parte do Instituto Kaleo</h2>
      <p>
        Seja um voluntário e ajude a transformar vidas!  
        Preencha o formulário abaixo e venha contribuir com nossos projetos sociais.
      </p>
      <img src="Imagens/voluntariado.jpg" alt="Voluntários do Instituto Kaleo em ação">
    </section>

    <section id="formulario">
      <h2>Formulário de Cadastro</h2>
      <form id="formCadastro">
        <fieldset>
          <legend>Informações Pessoais</legend>
          <label for="nome">Nome Completo:</label><br>
          <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required><br><br>

          <label for="email">E-mail:</label><br>
          <input type="email" id="email" name="email" placeholder="exemplo@email.com" required><br><br>

          <label for="cpf">CPF:</label><br>
          <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required><br><br>
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>
          <label for="endereco">Endereço:</label><br>
          <input type="text" id="endereco" name="endereco" placeholder="Rua, número, complemento" required><br><br>

          <label for="cidade">Cidade:</label><br>
          <input type="text" id="cidade" name="cidade" placeholder="Digite sua cidade" required><br><br>

          <label for="estado">Estado:</label><br>
          <input type="text" id="estado" name="estado" placeholder="Digite seu estado" required><br><br>
        </fieldset>

        <fieldset>
          <legend>Área de Interesse</legend>
          <label><input type="checkbox" name="interesse" value="educacao"> Educação e Reforço Escolar</label><br>
          <label><input type="checkbox" name="interesse" value="eventos"> Organização de Eventos</label><br>
          <label><input type="checkbox" name="interesse" value="recreacao"> Atividades Recreativas</label><br>
          <label><input type="checkbox" name="interesse" value="doacao"> Arrecadação e Doações</label><br>
          <label><input type="checkbox" name="interesse" value="outros"> Outros</label><br><br>
        </fieldset>

        <button type="submit">Enviar Cadastro</button>
      </form>
    </section>
  `
};
