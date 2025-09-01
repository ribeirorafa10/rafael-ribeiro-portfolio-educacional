    // --- LÓGICA DA NAVEGAÇÃO PRINCIPAL (MENU LATERAL) ---

    // 1. Encontra todos os links <a> dentro do menu de navegação '.sidebar-nav' e os armazena na constante 'navLinks'.
    const navLinks = document.querySelectorAll('.sidebar-nav a');

    // Função reutilizável para mudar de seção.
    // Recebe o ID da seção que deve ser mostrada (ex: "inicio", "sobre").
    function changeSection(sectionId) {
        // Esconde todas as seções: encontra todos os elementos com a classe '.section' e remove a classe 'active' de cada um.
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // Mostra a seção correta: encontra a seção pelo seu 'id' e adiciona a classe 'active' a ela.
        // O CSS se encarrega de torná-la visível com 'display: block;'.
        const sectionToShow = document.getElementById(sectionId);
        if (sectionToShow) {
            sectionToShow.classList.add('active');
        }

        // Atualiza o indicador visual na navegação:
        // Primeiro, remove a classe 'active' de todos os itens da lista <li>.
        navLinks.forEach(link => {
            link.parentElement.classList.remove('active');
        });

        // Depois, encontra o link no menu que corresponde à seção ativada e adiciona a classe 'active' ao seu <li> pai.
        const activeNavLink = document.querySelector(`.sidebar-nav a[data-section="${sectionId}"]`);
        if (activeNavLink) {
            activeNavLink.parentElement.classList.add('active');
        }
    }

    // 2. Para cada link encontrado no menu, adiciona um evento de clique.
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // 3. Previne o comportamento padrão do clique no link (que seria tentar navegar para uma nova URL).
            e.preventDefault();

            // 4. Obtém o valor do atributo 'data-section' do link que foi clicado.
            const sectionId = this.getAttribute('data-section');

            // 5. Chama a função principal para fazer a troca de seção.
            changeSection(sectionId);
        });
    });


    // --- LÓGICA PARA OUTROS LINKS INTERNOS (EX: BOTÕES "PORTFÓLIO" E "CONTATE-ME") ---

    // 1. Encontra todos os links <a> dentro da área de conteúdo principal.
    const internalLinks = document.querySelectorAll('.conteudo-principal a');

    // 2. Para cada link interno encontrado...
    internalLinks.forEach(link => {
        // Verifica se o 'href' do link corresponde ao 'id' de alguma das nossas seções.
        const targetId = link.getAttribute('href');
        const targetSection = document.getElementById(targetId);

        // 3. Se ele de fato aponta para uma seção válida...
        if (targetSection) {
            // Adiciona o evento de clique.
            link.addEventListener('click', function(e) {
                // Previne o comportamento padrão.
                e.preventDefault();
                // Chama a função principal para trocar para a seção correspondente.
                changeSection(targetId);
            });
        }
    });