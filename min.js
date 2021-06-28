 <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous" href="min.js"></script>
function draw() {
    var canvas = $('canvas')[0];
    if(canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);
        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
    }
}

$(document).ready(function() {
    // $(document).draw();
    $('#content').animate({
        opacity:1,
        marginTop:'0',
    }, 800);
    $('h2').click(function() {
        $(this).next('.subtext').slideToggle('fast');
        $(this).children('.hex').toggleClass('moved');
    })
});
