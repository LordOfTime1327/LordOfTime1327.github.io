<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'tuff-leadership' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '4vq}BUUfVAX09P[YPEnD`8-xkj[W]xf;%Be#If2Ae9wz%]OV#wy#Id4 `i1Q2gwg' );
define( 'SECURE_AUTH_KEY',  '-T^_4cM`,|U{tub-=LLwA1H85a,uqE7J,8DZ NU*M?&(q{qBzeq7IX5RRFhy+.tv' );
define( 'LOGGED_IN_KEY',    'g,|lku~o{L]6,V2w]MWB+9UOLd/l}giXV@N^/n(SNL0rI2Q;ubwLaN~(Vq<RBnJ:' );
define( 'NONCE_KEY',        ' #7C-;+CvswPT-h_FfZK`Jp {ORN(|;uWbaz wx<^H^StXfCJ_N 8jmeS B2?-$e' );
define( 'AUTH_SALT',        't>6ESc_KF`MvUV4SM#*`FY9a.3BKJ8U3YfG+{_pnw4{v<Btn^aNY%aJ$P.XU(8!o' );
define( 'SECURE_AUTH_SALT', '&|,5 k`/@:t&iJ(K9H0I&35>ZnaQ%^K%sGJxSN!H?,73e}YzvQ?rlyPzIWz=Is%B' );
define( 'LOGGED_IN_SALT',   ' qoi8`//rcxvKmP[% $Xb>VJxV6c|aRJXAw$[-;+3`=WN+~.G2AQI_s4B/4EpFM7' );
define( 'NONCE_SALT',       '!g3sn>Nk8[r[Y;{oQ$4rePG1re7V%#_yrqpfkLgbpx .D,9~V05hbC1<Ehv706bT' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
