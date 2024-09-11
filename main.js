$(document).ready(()=>{
    
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#btn-cancelar').click(()=>{
        $('form').slideUp();
    })

    $('form').on('submit', (e)=>{
        e.preventDefault();
    })
    let count = 0;
    $(".add").click(()=>{
        let inputval = $(".form-control").val();
        if(inputval != ''){
            count ++;
            $(".todo-list").append(
                '<li><div class="left-cont"><input type="checkbox" id="check-'+count+'"name=""><label for="check-'+count+'"></label><span>'+inputval+'</span></div><span class="remove"><i class="material-icons">delete</i></span></li>');
        }
        $('.form-control').val('');
    })

    $(document).on('change', 'input[type="checkbox"]', function(){
        if ($(this).is(':checked')) {
            $(this).closest("li").children(".remove").addClass("active");
        }else{
            $(this).closest("li").children(".remove").removeClass("active");
        }
    })

    $(document).on("click", ".remove", function(){
        $(this).parent().remove();
    })
})