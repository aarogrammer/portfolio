<?php 

    /**
    *   Description: This file is used on my LAMP server as the index file. index.html is used for development on Nodejs.
    */

    session_start();
    // Generate random token
    $true = true;
    $_SESSION['token'] = openssl_random_pseudo_bytes(18, $true);
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
    <meta property="og:url" content="http://aaron-welsh.co.uk" />
    <meta property="og:description" content="Hi, my Name is Aaron Welsh. I am a Freelance Web Developer from Glasgow, Scotland." />
    <meta property="og:image" content="http://aaron-welsh.co.uk/assets/img/favicon.ico" />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:url" content="http://aaron-welsh.co.uk" />
    <meta name="twitter:title" content="Aaron Welsh - Portfolio" />
    <meta name="twitter:description" content="Hi, my Name is Aaron Welsh. I am a Freelance Web Developer from Glasgow, Scotland." />
    <meta name="twitter:image" content="http://aaron-welsh.co.uk/assets/img/favicon.ico" />
    <meta name="twitter:site" content="_aaronwelsh" />

    <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <![endif]-->
    <title>Aaron Welsh - Portfolio</title>
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400" rel="stylesheet" />
    
    <link rel="icon" href="./assets/img/favicon.ico" type="image/ico" sizes="32x32" />
    <!-- Sticking with Bootstrap 3.x for x-platform support -->
    <link href="./public/assets/css/bootstrap.min.css" rel="stylesheet" />
    <link href="./public/assets/css/ionicons.css" rel="stylesheet" />
    <link href="./public/assets/css/style.css" rel="stylesheet" />
    <meta name="google-site-verification" content="5aenbty-INL73VaXROgbffu6GX1CDdaZXH-Y-IliC84" />
    <!-- HTML5 Shiv and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-51925779-1', 'auto');
        ga('send', 'pageview');

    </script>
    <input type="hidden" value="<?php echo $tokenToSend; ?>" id="token" />
    <section id="app">
        
        
    </section>
    
    
    <script src="./public/assets/js/bundle.js"></script>
</body>
</html>
