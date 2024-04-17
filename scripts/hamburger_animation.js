<body>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script>
        $('.hamburger').click( function(){
            $('.hamburger').toggleClass('active');
            $('.hamburger-menu').toggleClass('active');
    });

        $(window).load(function() {
        $('body').addClass('loaded');
    });
    </script>
</body>
