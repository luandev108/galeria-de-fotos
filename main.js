$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault(e);

        const enderecoDaImagem = $('#endereço-imagem').val();
        const novoItem = $('<li></li>');
        $(`<img src="${enderecoDaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="imagem-link">
                <a href="${enderecoDaImagem}" target="_blank" title="Ver a imagem em tamanho real">
                Ver a imagem em tamanho real
                </a>
            </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $('#endereço-imagem').val('')
    })
})
