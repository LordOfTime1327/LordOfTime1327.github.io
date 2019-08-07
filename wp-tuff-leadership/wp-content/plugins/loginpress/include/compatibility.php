<?php

/**
 * This is a LoginPress Compatibility to make it compatible for older versions.
 *
 * @since 1.0.22
 * @version 1.2.2
 */


/**
 * Run a compatibility check on 1.0.21 and change the settings.
 *
 */
add_action( 'init', 'loginpress_upgrade_1_0_22', 1 );


/**
 * loginpress_upgrade_1_0_22
 * Remove elemant 'login_with_email' from loginpress_setting array that was defined in 1.0.21
 * and update 'login_order' in loginpress_setting for compatiblity.
 *
 * @since   1.0.22
 * @return  array update loginpress_setting
 */
function loginpress_upgrade_1_0_22() {

  $loginpress_setting = get_option( 'loginpress_setting' );
  $login_with_email = isset( $loginpress_setting['login_with_email'] ) ? $loginpress_setting['login_with_email'] : '';

  if ( isset( $loginpress_setting['login_with_email'] ) ) {

    if( 'on' == $login_with_email ) {

      $loginpress_setting['login_order'] = 'email';
      unset( $loginpress_setting['login_with_email'] );
      update_option( 'loginpress_setting', $loginpress_setting );
    } else if ( 'off' == $login_with_email ) {

      $loginpress_setting['login_order'] = 'default';
      unset( $loginpress_setting['login_with_email'] );
      update_option( 'loginpress_setting', $loginpress_setting );
    }
  }
}

if ( ! class_exists( 'LoginPress_Compatibility' ) ) :

  /**
   * LoginPress compatibility Class is used to make LoginPress compatibile with other plugins.
   * Remove conflictions.
   * Add CSS Support.
   * @since 1.0.3
   * @version 1.2.3
   */
  class LoginPress_Compatibility {

    public function __construct() {
      $this->dependencies();
    }

    public function dependencies() {

      add_action( 'wp_print_scripts', array( $this, 'dequeue_conflicted_script' ), 100 );
      add_action( 'login_headerurl',  array( $this, 'remove_conflicted_action' ) );
      add_action( 'init',             array( $this, 'enqueue_loginpress_compatibility_script') );

      /*************************************
        WebArx Compatibility Fix // v1.2.3
      *************************************/

      // add_filter( 'wp_redirect',      array( $this, 'wp_redirect_remove_filter' ), 9 );
      // add_filter( 'site_url',         array( $this, 'site_url_remove_filter' ) , 9 );
      // add_filter( 'network_site_url', array( $this, 'network_site_url_remove_filter' ), 9 );
      // add_action( 'plugins_loaded',   array( $this, 'plugins_loaded_remove_action' ), 10 );
      // add_action( 'wp_loaded',        array( $this, 'wp_loaded_remove_action' ), 9 );
      // add_action( 'init',             array( $this, 'init_remove_action' ), 9 );
    }

    public function wp_redirect_remove_filter( $location ) {
      if ( class_exists( 'Webarx' ) ) {
        $webarx_login  = get_option( 'webarx_mv_wp_login' );
        $user_loged_in = is_user_logged_in();

        if ( ( isset( $user_loged_in ) && true === $user_loged_in ) && ( isset( $webarx_login ) && '1' === $webarx_login ) && $_GET['action'] != 'logout' ) {
          remove_filter( 'wp_redirect', array(  webarx()->hide_login, 'wp_redirect' ) );
        }

        return $location;
      }
    }

    public function site_url_remove_filter( $url ) {
      if ( class_exists( 'Webarx' ) ) {
        $webarx_login = get_option( 'webarx_mv_wp_login' );
        $user_loged_in = is_user_logged_in();

        if ( ( isset( $user_loged_in ) && true === $user_loged_in ) && ( isset( $webarx_login ) && '1' === $webarx_login ) ) {
          remove_filter('site_url',  array(  webarx()->hide_login, 'site_url' )  ) ;
        }

        return $url;
      }
    }

    public function network_site_url_remove_filter( $url ) {
      if ( class_exists( 'Webarx' ) ) {
        $webarx_login = get_option( 'webarx_mv_wp_login' );
        $user_loged_in = is_user_logged_in();

        if ( ( isset( $user_loged_in ) && true === $user_loged_in ) && ( isset( $webarx_login ) && '1' === $webarx_login ) ) {
          remove_filter('network_site_url',  array(  webarx()->hide_login, 'network_site_url' )  ) ;
        }

        return $url;
      }
    }

    public function plugins_loaded_remove_action() {
      if ( class_exists( 'Webarx' ) ) {
        $webarx_login = get_option( 'webarx_mv_wp_login' );
        $user_loged_in = is_user_logged_in();

        if ( ( isset( $user_loged_in ) && true === $user_loged_in ) && ( isset( $webarx_login ) && '1' === $webarx_login ) ) {
          remove_action( 'plugins_loaded', array(  webarx()->hide_login, 'plugins_loaded' ), 9999 ) ;
        }
      }
    }

    public function wp_loaded_remove_action() {
      if ( class_exists( 'Webarx' ) ) {
        $webarx_login = get_option( 'webarx_mv_wp_login' );
        $user_loged_in = is_user_logged_in();

        if ( ( isset( $user_loged_in ) && true === $user_loged_in ) && ( isset( $webarx_login ) && '1' === $webarx_login ) ) {
          remove_action( 'wp_loaded', array(  webarx()->hide_login, 'wp_loaded' ) );
        }
      }
    }

    public function init_remove_action() {
      if ( class_exists( 'Webarx' ) ) {
        $webarx_login = get_option( 'webarx_mv_wp_login' );
        $user_loged_in = is_user_logged_in();

        if ( ( isset( $user_loged_in ) && true === $user_loged_in ) && ( isset( $webarx_login ) && '1' === $webarx_login ) ) {
          remove_action( 'init', array(  webarx()->hide_login, 'denyRequestsToWpLogin' ) ) ;
        }
      }
    }

    public function enqueue_loginpress_compatibility_script() {

      /**
       * Enqueue LoginPress CSS on Password_Protected plugin.
       *
       * Hooked to the password_protected_login_head action,
       * so that it is after the script was enqueued.
       * @since 1.0.3
       */
      if ( class_exists( 'Password_Protected' ) ) {
        add_action( 'password_protected_login_head', array( $this, 'enqueue_loginpress_script' ) );
      }
    }

    /**
     * dequeue_conflicted_script
     * @since 1.0.3
     */
    public function dequeue_conflicted_script() {

      /**
       * Dequeue the Divi Login script.
       *
       * Hooked to the wp_print_scripts action, with a late priority (100),
       * so that it is after the script was enqueued.
       * @since 1.0.3
       */
      if ( class_exists( 'ET_Divi_100_Custom_Login_Page_Config' ) ) {
         wp_dequeue_style( 'custom-login-pages' );
         wp_dequeue_script( 'custom-login-pages-icon-font' );
         wp_dequeue_script( 'custom-login-pages-scripts' );
       }
    }

    /**
     * remove_conflicted_action
     * @since 1.0.3
     */
    public function remove_conflicted_action() {

      /**
       * Remove the Divi login_footer hook 'print_styles'
       *So that confliction is removed.
       *
       * @since 1.0.3
       */
      if ( class_exists( 'ET_Divi_100_Custom_Login_Page_Config' ) ) {

        remove_action( 'login_footer', array( ET_Divi_100_Custom_Login_Page::instance(), 'print_styles' ) );
      }
    }

    /**
     * Include LoginPress CSS for Support with other plugins.
     * @since 1.0.3
     */
    public function enqueue_loginpress_script() {
      include( LOGINPRESS_DIR_PATH . 'css/style-presets.php' );
    	include( LOGINPRESS_DIR_PATH . 'css/style-login.php' );
    }

}

endif;

new LoginPress_Compatibility;
