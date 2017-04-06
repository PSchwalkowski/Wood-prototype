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
define('DB_NAME', 'wood');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '}(kOWV?k6ashS9[TB)h2&HmdWv kjY+qeA5p6i%<d~/ZgE%j&:$OA2+n&8kM7~Wl');
define('SECURE_AUTH_KEY',  'sampvm/B1WFtV}Gtu4 6f,wq1XoTLVk_J%?Z*I`lAq$X]j(>[2i i_U t=4t%H/O');
define('LOGGED_IN_KEY',    'Lb=i=+O/ar)A*_l`kB&K,5GHBn8>#8B!,6=CV:5kxN-MvI|mj1[ysjTjD8Py9=b:');
define('NONCE_KEY',        'r.o%w/:%pu1~U3V0jYV@q,p$q?cvaiz|>h&.z~CCM[B4|yBAe@Hg CK=T{$W3Z7e');
define('AUTH_SALT',        's -H!27~MlO}Bh#7JUV}%c(b}g~l),|HFelh&R;PtFJ}< [Vm0+3Dw>)uhT40np-');
define('SECURE_AUTH_SALT', '6E|tZ$e}3-YNrI@,Y)Bh2~s=:irv2k3/E>*n=*C3+)LV|SLbmO&e|uH#`6*-fgRS');
define('LOGGED_IN_SALT',   'x>>#yud+H*Y+mN={u6%ZB<%ss><uCG}d]9=_sG^3oE75Df{[huWo/&]tL+/obE0X');
define('NONCE_SALT',       'khNa<Uc{6yu/S^.#XL]#^7J>3,M|3=~f@uLfA7Xv>a8zLBmFOX/45u^d*Jm-%+0i');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

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
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
