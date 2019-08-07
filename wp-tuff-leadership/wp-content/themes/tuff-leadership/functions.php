<?php

add_action( 'wp_enqueue_scripts', 'theme_name_scripts' );

function theme_name_scripts() {
	wp_enqueue_style( 'style-name', get_template_directory_uri() . '/dist/style.css' );
	// wp_enqueue_script( 'script-name', get_template_directory_uri() . '/dist/jquery-3.3.1.min.js', array('jquery'), '', true );
	wp_enqueue_script( 'slick', get_template_directory_uri() . '/dist/slick.min.js', array('jquery'), '', true );
	wp_enqueue_script( 'script-name', get_template_directory_uri() . '/dist/script.js', array('jquery'), '', true );
}

?>