document.addEventListener("DOMContentLoaded", () => {
    // Efeito de fade-in ao rolar
    const produtos = document.querySelectorAll(".produto");

    const fadeInOnScroll = () => {
        produtos.forEach((produto) => {
            const produtoTop = produto.getBoundingClientRect().top;
            if (produtoTop < window.innerHeight - 100) {
                produto.style.opacity = "1";
                produto.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();

    // Efeito no botão ao clicar
    const buttons = document.querySelectorAll("button");

    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.target.classList.add("clicked");
            setTimeout(() => {
                e.target.classList.remove("clicked");
            }, 300);
        });
    });

    // Transição suave no header ao rolar
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "#151515";
            header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.4)";
        } else {
            header.style.background = "#1f1f1f";
            header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
        }
    });

    // Efeito de parallax no fundo
    document.addEventListener("scroll", () => {
        document.body.style.backgroundPositionY = `${window.scrollY * 0.3}px`;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const produtosContainer = document.querySelector(".produtos-container");
    const produtos = document.querySelectorAll(".produto");
    const buttons = document.querySelectorAll("button");

    // Efeito de fade-in ao rolar a página
    function revelarProdutos() {
        if (produtosContainer.getBoundingClientRect().top < window.innerHeight - 100) {
            produtosContainer.classList.add("aparecer");
            produtos.forEach((produto, index) => {
                setTimeout(() => {
                    produto.classList.add("aparecer");
                }, index * 200);
            });
        }
    }
    
    window.addEventListener("scroll", revelarProdutos);
    revelarProdutos();
    
    // Efeito de clique nos botões
    buttons.forEach(button => {
        button.addEventListener("mousedown", () => {
            button.classList.add("clicked");
        });
        button.addEventListener("mouseup", () => {
            button.classList.remove("clicked");
        });
    });

    // Animação no scroll suave ao clicar nos links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Efeito hover dinâmico no header ao rolar a página
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.background = "#1a1a1a";
        } else {
            header.style.background = "#1f1f1f";
        }
    });
});
