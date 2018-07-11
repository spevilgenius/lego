<?php
/*define theme global constants*/
define("THEME_TITLE", "Lego");
define("THEME_SLUG", "lego");
define("THEME_VAR", "lego");
define("THEME_META", "_" . THEME_SLUG . "_meta");
define("THEME_OPT", THEME_VAR . "_options");
define("THEME_VERSION", wp_get_theme(THEME_SLUG)->get( 'Version' ) );
define("THEME_LOGO_SHOW", true);
define("THEME_HOMEPAGE", "https://legodan.com");
define("THEME_DIR", get_template_directory());
define("THEME_URL", get_template_directory_uri());

function lego_theme_scripts()
{
    if ($GLOBALS['pagenow'] != 'wp-login.php' && !is_admin()) {
    	  wp_register_script('legoapp', get_template_directory_uri() . '/dist/static/js/app.js', array(), '1.0.0', true);
        wp_enqueue_script('legoapp'); // Enqueue it!
    }
}

function lego_theme_styles()
{
    wp_register_style('iconstyle', get_template_directory_uri() . '/dist/static/css/nucleo_icons.css', array(), '1.0.0', 'all');
    wp_enqueue_style('iconstyle'); // Enqueue it!
    wp_register_style('legostyle', get_template_directory_uri() . '/dist/static/css/app.css', array(), '1.0.0', 'all');
    wp_enqueue_style('legostyle'); // Enqueue it!
}

add_action('wp_enqueue_scripts', 'lego_theme_scripts'); // Add lego scripts to wp_head
add_action('wp_enqueue_scripts', 'lego_theme_styles'); // Add lego theme Stylesheet

?>
