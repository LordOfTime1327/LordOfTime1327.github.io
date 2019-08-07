<?php

/**
 * script-login.php is created for adding JS code in login page footer.
 * @since 1.2.2
 * @version 1.2.3
 */

function loginpress_custom_js( $loginpress_key ) {

  $loginpress_array  = (array) get_option( 'loginpress_customization' );
	if ( array_key_exists( $loginpress_key, $loginpress_array ) ) {

		if ( 'loginpress_custom_js' == $loginpress_key ) {
			return $loginpress_array[ $loginpress_key ];
		}

	}
}

$loginpress_setting   = get_option( 'loginpress_setting' );
$loginpress_autorm    = isset( $loginpress_setting['auto_remember_me'] ) ? $loginpress_setting['auto_remember_me'] : 'off';
$loginpress_capslock  = __( 'Caps Lock is on', 'loginpress' );
$loginpress_custom_js = loginpress_custom_js( 'loginpress_custom_js' );

if ( ! empty( $loginpress_custom_js ) ) : ?>
  <script>
    <?php echo $loginpress_custom_js; ?>
  </script>
<?php endif; ?>

<script>

document.addEventListener('DOMContentLoaded', function(){
    // your code goes here
    var loginpress_user_pass = document.getElementById('user_pass');
    var loginpress_wrapper = document.createElement('div');
    loginpress_wrapper.classList.add('user-pass-fields');
    // insert wrapper before el in the DOM tree
    user_pass.parentNode.insertBefore(loginpress_wrapper, loginpress_user_pass);

    // move el into wrapper
    loginpress_wrapper.appendChild(loginpress_user_pass);
    var loginpress_user_ps = document.getElementsByClassName('user-pass-fields');
    var loginpress_node = document.createElement("div");
    loginpress_node.classList.add('loginpress-caps-lock');
    var loginpress_textnode = document.createTextNode('<?php echo $loginpress_capslock; ?>');
    loginpress_node.appendChild(loginpress_textnode);
    loginpress_user_ps[0].appendChild(loginpress_node);
  }, false);
  window.onload = function(e) {

    var capsLock = 'off';
    var passwordField = document.getElementById("user_pass");

    passwordField.onkeydown = function(e) {
      var el = this;
      var caps = event.getModifierState && event.getModifierState( 'CapsLock' );
      if ( caps ) {

        capsLock = 'on';
        el.nextElementSibling.style.display = "block";
      } else {

        capsLock = 'off';
        el.nextElementSibling.style.display = "none";
      }
    };

    passwordField.onblur = function(e) {

      var el = this;
      el.nextElementSibling.style.display = "none";
    };

    passwordField.onfocus = function(e) {

      var el = this;
      if ( capsLock == 'on' ) {

        el.nextElementSibling.style.display = "block";
      }else{

        el.nextElementSibling.style.display = "none";
      }
    };
  };

  <?php if ( 'off' != $loginpress_autorm ) : ?>
      var _LoginPressRMChecked = document.getElementById("rememberme");
      if ( null != _LoginPressRMChecked ) {
        _LoginPressRMChecked.checked = true;
      }
  <?php endif; ?>
</script>
