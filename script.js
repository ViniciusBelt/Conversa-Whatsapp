$('#linkGerado').hide();
$('#gerarLink').click(() => {
    var cel = $('#celular').val();
    var msg = $('#mensagem').val();
    if(!msg || !cel){
        const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
        })

        Toast.fire({
        icon: 'error',
        title: 'Preencha todos os campos'
        })
        return false;
    }else{
        var link = 'https://web.whatsapp.com/send?phone=55' + cel + '&text=' + msg;
        $('#clickLink').attr('href', link);
        $('#clickLink').attr('target', '.blank');
        $('#linkGerado').show();
    }
});