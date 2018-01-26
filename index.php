<?php 

    session_start();
    // Generate random token
    $crypto_strong = true;
    $_SESSION['token'] = openssl_random_pseudo_bytes(18, $crypto_strong);
    // Encode token that is being sent
    $tokenToSend =  urlencode($_SESSION['token']);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <link rel="dns-prefetch" href="//fonts.googleapis.com" />
    <link rel="dns-prefetch" href="//google-analytics.com" />
    <link rel="dns-prefetch" href="//www.google-analytics.com" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="description" content="Hi, my Name is Aaron Welsh. I am a Freelance Web Developer from Glasgow, Scotland." />
    <meta name="keywords" content="Web Developer, Web Developer Glasgow, Web Developer Scotland, Web Design, Web Design Glasgow, Aaron Welsh, aarogrammer" />
    <meta name="author" content="Aaron Welsh" />
    <meta name="theme-color" content="#3CB860" />

    <meta property="og:title" content="Aaron Welsh - Portfolio" />
    <meta property="og:site_name" content="aaron-welsh" />
    <meta property="og:url" content="https://aaron-welsh.co.uk" />
    <meta property="og:description" content="Hi, my Name is Aaron Welsh. I am a Freelance Web Developer from Glasgow, Scotland." />
    <meta property="og:image" content="https://static.aaron-welsh.co.uk/assets/img/favicon.ico" />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:url" content="https://aaron-welsh.co.uk" />
    <meta name="twitter:title" content="Aaron Welsh - Portfolio" />
    <meta name="twitter:description" content="Hi, my Name is Aaron Welsh. I am a Freelance Web Developer from Glasgow, Scotland." />
    <meta name="twitter:image" content="https://static.aaron-welsh.co.uk/assets/img/favicon.ico" />
    <meta name="twitter:site" content="_aaronwelsh" />

    <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <![endif]-->
    <title>Aaron Welsh - Portfolio</title>

    <link rel="icon" href="https://static.aaron-welsh.co.uk/assets/img/favicon.ico" type="image/ico" sizes="32x32" />

    <link rel="stylesheet" href="./src/css/pure-min.css" />
    <link rel="stylesheet" href="./src/css/base-min.css" />
    <link rel="stylesheet" href="./src/css/grids-responsive-min.css" />
    <link rel="stylesheet" href="./src/css/font-awesome.min.css" />
    <link rel="stylesheet" href="./src/css/style.css" />
    <meta name="google-site-verification" content="5aenbty-INL73VaXROgbffu6GX1CDdaZXH-Y-IliC84" />

    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
    <noscript>
        <div class="ns">
            <div class="ns-content">
                <h1>You need JavaScript enabled or a modern browser to view my website</h1>
                <p>Hey! I like to use fancy new technologies to showcase my skills and improve the experience of you, the user of my site. </p>
                <p>As much as I do support cross-platform, I am a strong believer in new technology and want to build better web applications.</p>
                <p>This doesn't mean that if you hire me your website will not be available to outdated browsers! This is just an extra fancy modern website.</p>

                <h2>I would love for you to view my site...</h2>

                <a class="btn btn-goback" href="http://www.enable-javascript.com/" target="_blank" rel="noopener">Find out how to enable JavaScript</a>
                <a class="btn btn-goback" href="https://browsehappy.com/" target="_blank" rel="noopener">Learn about modern browsers</a>        
            </div>
        </div>
    </noscript>
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-51925779-1', 'auto');
        ga('send', 'pageview');

    </script>
    <input type="hidden" value="<?php echo $tokenToSend; ?>" id="token" />
    <section id="app"></section>
    <script src="./dist/js/bundle.js"></script>
</body>
</html>
